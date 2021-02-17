import { WS } from "../ws";
import { Transport } from "./base";
import { Intercept } from "./types";
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
  protected interceptor;
  constructor(options: ITransportOptions) {
    super();

    if (!options.clientKey) {
      throw new Error("Missing Client Key");
    }
    this.clientKey = options.clientKey;
    this.secretKey = options.secretKey;
    this.ws = new WS({ url: LAMBDA_WS_URL });
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

  intercept(cb: Intercept){
    this.interceptor = cb;
  }
}