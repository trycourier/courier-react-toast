import { WS } from "../ws";
import { Transport } from "./base";
import { Intercept } from "./types";
const LAMBDA_WS_URL = "wss://1x60p1o3h8.execute-api.us-east-1.amazonaws.com/production";
interface ITransportOptions {
  clientKey: string;
  secretKey?: string;
  wsUrl?: string;
}

export class CourierTransport extends Transport {
  protected channel: any;
  protected ws: WS;
  protected clientKey: string;
  protected secretKey: string;
  // eslint-disable-next-line no-unused-vars
  protected interceptor: Intercept;
  constructor(options: ITransportOptions) {
    super();

    if (!options.clientKey) {
      throw new Error("Missing Client Key");
    }
    this.clientKey = options.clientKey;
    this.secretKey = options.secretKey;
    this.ws = new WS({ url: options.wsUrl ?? LAMBDA_WS_URL });
    this.authenticate();
    this.ws.connect(options.clientKey);
  }

  authenticate(): void {
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

  send(message: any): void{
    this.ws.send({
      ...message,
      data :{
        ...message.data,
        clientKey: this.clientKey,
      },
    });
  }

  subscribe(channel: string, event: string): void{
    this.ws.subscribe(channel, event, this.clientKey, ({ data }) => {
      if (this.interceptor) {
        data = this.interceptor(data);
      }

      if (!data) {
        return;
      }

      this.emit({
        type: "message",
        data,
      });
    });
  }

  unsubscribe(channel: string, event: string): void{
    this.ws.unsubscribe(channel, event, this.clientKey);
  }

  intercept(cb: Intercept): void{
    this.interceptor = cb;
  }
}