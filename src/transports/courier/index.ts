import { WS } from "../../ws";
import { Transport } from "../base";
import { Interceptor } from "../types";
import { LAMBDA_WS_URL } from "./constants";
import { ITransportOptions } from "./types";

export class CourierTransport extends Transport {
  protected channel: any;
  protected ws: WS;
  protected clientKey: string;
  protected secretKey: string;
  protected interceptor: Interceptor;
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

  send(message: any): void {
    this.ws.send({
      ...message,
      data :{
        ...message.data,
        clientKey: this.clientKey,
      },
    });
  }

  subscribe(channel: string, event: string): void {
    this.ws.subscribe(channel, event, this.clientKey, ({ data }) => {
      data = this.getDataFromInterceptor(data);
      this.emit({ data });
    });
  }

  unsubscribe(channel: string, event: string): void {
    this.ws.unsubscribe(channel, event, this.clientKey);
  }

  getDataFromInterceptor = (data) => {
    if (this.interceptor) {
      data = this.interceptor(data);
    }

    if (typeof data !== "undefined" && data !== false) {
      return data;
    }
  };
}