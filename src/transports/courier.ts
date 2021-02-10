import { Transport } from "./base";
const LAMBDA_WS_URL = "wss://f0zryx1s90.execute-api.us-east-1.amazonaws.com/dev";


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
    this.setSecretKey();
    this.ws.connect(options.clientKey, this.secretKey);
  }

  setSecretKey = () => {
    this.secretKey = "hello";
  }

  send = (data: any) => {
    this.ws.send(data);
  };

  subscribe = (channel: string) => {
    this.ws.subscribe(channel, (dataString) => {
      const data = JSON.parse(dataString);

      this.emit({
        type: "message",
        data,
      });
    });
  }

  unsubscribe = (channel: string) => {
    this.ws.unsubscribe(channel);
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
  connect = (clientKey, secretKey) => {
    this.connection = new WebSocket(LAMBDA_WS_URL);
    this.initiateListeners();
    this.authorizeClient(clientKey, secretKey);
  }
  onMessage = ({ data }: { data: any }) => {
    console.log("message received", data);

    if (data && this.messageCallback) {
      this.messageCallback(data);
    }
  }
  authorizeClient = (clientKey, secretKey) => {
    console.log(clientKey, secretKey);
    this.authorized = true;
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
  subscribe = async (channel, callback) => {
    await this.waitForOpen();
    this.send({
      action: "subscribe",
      data: {
        channel,
      },
    });
    this.messageCallback = callback;
  }
  send = (data) => {
    this.connection.send(JSON.stringify(data));
  }
  unsubscribe = (channel) => {
    this.send({
      action: "unsubscribe",
      data: {
        channel,
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