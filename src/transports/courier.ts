import { Transport } from "./base";
const LAMBDA_WS_URL = "wss://zj8xquqj55.execute-api.us-east-1.amazonaws.com/dev";
interface ITransportOptions {
  clientKey: string;
  secretKey: string;
}

export class CourierTransport extends Transport {
  protected channel: any;
  protected ws: WS;
  protected clientKey;
  protected secretKey;
  constructor(options: ITransportOptions) {
    super();

    if (!options.clientKey) {
      throw new Error("Missing Client Key");
    }
    this.clientKey = options.clientKey;
    this.secretKey = options.secretKey;
    this.ws = new WS();
    this.authenticate();
    this.ws.connect(options.clientKey);
  }

  authenticate() {
    /* const options = {
      headers: {
        "X-Courier-Key": this.clientKey,
        "X-Courier-Secret-Key": this.secretKey,
      },
    };
    // throwing on error, no need to verify auth result
    await fetch("https://api.notifications.dev/auth", options);
    */
  }

  send(message: any){
    this.ws.send({
      ...message,
      data :{
        ...message.data,
        clientKey: this.clientKey,
      },
    });
  }

  subscribe(channel: string, event: string){
    this.ws.subscribe(channel, event, this.clientKey, this.emit);
  }

  unsubscribe(channel: string, event: string){
    this.ws.unsubscribe(channel, event, this.clientKey);
  }
}

export class WS {
  connection: WebSocket;
  protected connected;
  protected messageCallback;
  protected clientKey;
  constructor() {
    this.messageCallback = null;
    this.connection = null;
    this.connected = false;
  }
  connect(clientKey){
    this.clientKey = clientKey;
    const url = `${LAMBDA_WS_URL}/?clientKey=${clientKey}`;
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
  async subscribe(channel, event, clientKey, callback){
    await this.waitForOpen();
    this.send({
      action: "subscribe",
      data: {
        channel,
        event,
        clientKey,
      },
    });
    this.messageCallback = callback;
  }
  send(message){
    this.connection.send(JSON.stringify(message));
  }
  unsubscribe(channel, event, clientKey){
    this.send({
      action: "unsubscribe",
      data: {
        channel,
        event,
        clientKey,
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