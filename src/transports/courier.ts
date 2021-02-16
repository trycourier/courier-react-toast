import { Transport } from "./base";
const LAMBDA_WS_URL = "wss://zj8xquqj55.execute-api.us-east-1.amazonaws.com/dev";


interface ITransportOptions {
  apiKey: string;
  clientKey: string;
}

export class CourierTransport extends Transport {
  protected channel: any;
  protected ws: WS;
  protected clientKey;
  protected apiKey;
  protected secretKey;
  protected tenantId;
  constructor(options: ITransportOptions) {
    super();

    if (!options.apiKey) {
      throw new Error("Missing Api Key");
    }

    if (!options.clientKey) {
      throw new Error("Missing Client Key");
    }
    this.clientKey = options.clientKey;
    this.apiKey = options.apiKey;
    this.ws = new WS();
    this.setTenantId(this.clientKey);
    this.ws.connect(options.clientKey);
  }

  send(message: any){
    this.ws.send({
      ...message,
      data :{
        ...message.data,
        tenantId: this.tenantId,
      },
    });
  }

  subscribe(channel: string, event: string){
    this.ws.subscribe(channel, event, this.tenantId, this.emit);
  }

  unsubscribe(channel: string, event: string){
    this.ws.unsubscribe(channel, event, this.tenantId);
  }

  setTenantId(clientKey){
    this.tenantId = clientKey;
  }
}

export class WS {
  connection: WebSocket;
  protected connected;
  protected authorized;
  protected messageCallback;
  protected clientKey;
  constructor() {
    this.messageCallback = null;
    this.connection = null;
    this.connected = false;
    this.authorized = false;
  }
  connect(clientKey){
    this.clientKey = clientKey;
    const url = `${LAMBDA_WS_URL}/?tenantId=${clientKey}`;
    this.connection = new WebSocket(url);
    this.initiateListener();
  }
  onMessage({ data }){
    try {
      data = JSON.parse(data);
    } catch {
      //
    }

    if (data && this.messageCallback) {
      this.messageCallback({ data });
    }
  }
  onConnectionOpen(){
    this.connected = true;
  }
  waitForOpen(): Promise<any> {
    return new Promise(resolve => {
      if (this.connected) {
        resolve(true);
      } else {
        this.connection.addEventListener("open", resolve);
      }
    });
  }
  async subscribe(channel, event, tenantId, callback){
    await this.waitForOpen();
    this.send({
      action: "subscribe",
      data: {
        channel,
        event,
        tenantId,
      },
    });
    this.messageCallback = callback;
  }
  send(message){
    this.connection.send(JSON.stringify(message));
  }
  unsubscribe(channel, event, tenantId){
    this.send({
      action: "unsubscribe",
      data: {
        channel,
        event,
        tenantId,
      },
    });
  }
  close(){
    this.connection.close();
  }
  initiateListener(){
    this.connection.onopen = this.onConnectionOpen.bind(this);
    this.connection.onmessage = this.onMessage.bind(this);
  }
}