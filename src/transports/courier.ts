import { Transport } from "./base";
const LAMBDA_WS_URL = "wss://bi6uavwq12.execute-api.us-east-1.amazonaws.com/dev";


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
    this.ws.connect(options.clientKey);
  }

  send = (data: any) => {
    this.ws.send(data);
  };

  subscribe = (channel: string, event: string, tenantId: string) => {
    this.ws.subscribe(channel, event, tenantId, (data) => {
      try {
        data = JSON.parse(data);
      } catch {
        //
      }

      this.emit({
        type: "message",
        data,
      });
    });
  }

  unsubscribe = (channel: string, event: string) => {
    this.ws.unsubscribe(channel, event);
  }
}

export class WS {
  connection: WebSocket;
  protected connected;
  protected authorized;
  protected messageCallback;
  constructor() {
    this.messageCallback = null;
    this.connection = null;
    this.connected = false;
    this.authorized = false;
  }
  connect = (clientKey) => {
    const url = `${LAMBDA_WS_URL}/?tenantId=${clientKey}`;
    this.connection = new WebSocket(url);
    this.initiateListeners();
  }
  onMessage = ({ data }: { data: any }) => {
    console.log("message received", data);

    if (data && this.messageCallback) {
      this.messageCallback(data);
    }
  }
  onConnectionOpen = () => {
    this.connected = true;
  }
  waitForOpen = (): Promise<any> => new Promise(resolve => {
    if (this.connected) {
      resolve(true);
    } else {
      this.connection.addEventListener("open", resolve);
    }
  })
  subscribe = async (channel, event, tenantId, callback) => {
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
  send = (data) => {
    this.connection.send(JSON.stringify(data));
  }
  unsubscribe = (channel, event) => {
    this.send({
      action: "unsubscribe",
      data: {
        channel,
        event,
      },
    });
    this.connection.onmessage = null;
  }
  close = () => {
    this.connection.close();
  }
  initiateListeners = () => {
    this.connection.onopen = this.onConnectionOpen;
    this.connection.onmessage = this.onMessage;
  }
}