import Pusher, { Channel, Options } from "pusher-js";
import { IMessage } from "./types";
import { Transport } from "./base";

interface ITransportOptions {
  appKey?: string;
  channel?: string;
  event?: string;
  instance?: Pusher;
  options?: Options;
}

// eslint-disable-next-line no-unused-vars
type Intercept = (message: IMessage) => IMessage | undefined;
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

  intercept = (cb: Intercept) => {
    this.interceptor = cb;
  }

  subscribe = (channel: string, event: string) => {
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

  unsubscribe = (channel: string) => {
    this.pusher.unsubscribe(channel);
  }
}