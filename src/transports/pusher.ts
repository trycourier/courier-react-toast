import Pusher, { Channel, Options } from "pusher-js";
import { IMessage, Intercept } from "./types";
import { Transport } from "./base";

interface ITransportOptions {
  appKey?: string;
  channel?: string;
  event?: string;
  instance?: Pusher;
  options?: Options;
}
export class PusherTransport extends Transport {
  protected pusher: Pusher;
  protected channel: Channel;
  private interceptor: Intercept;

  constructor(options: ITransportOptions) {
    super();

    if (!options.appKey) {
      throw new Error("Missing App Key");
    }

    this.pusher = new Pusher(options.appKey, options.options);
  }

  intercept = (cb: Intercept): void => {
    this.interceptor = cb;
  }

  subscribe = (channel: string, event: string): void => {
    this.channel = this.pusher.subscribe(channel);
    this.channel.bind(event, (data: IMessage) => {
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

  unsubscribe = (channel: string): void => {
    this.pusher.unsubscribe(channel);
  }
}