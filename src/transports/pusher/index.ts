import Pusher, { Channel } from "pusher-js";
import { IMessage } from "../types";
import { Transport } from "../base";
import { ITransportOptions } from "./types";

export class PusherTransport extends Transport {
  protected pusher: Pusher;
  protected channel: Channel;
  constructor(options: ITransportOptions) {
    super();
    if (!options.appKey) {
      throw new Error("Missing App Key");
    }

    this.pusher = new Pusher(options.appKey, options.options);
  }

  subscribe = (channel: string, event: string): void => {
    this.channel = this.pusher.subscribe(channel);
    this.channel.bind(event, (data: IMessage) => {
      data = this.getDataFromInterceptor(data);
      this.emit({ data });
    });
  }

  unsubscribe = (channel: string): void => {
    this.pusher.unsubscribe(channel);
  }

  getDataFromInterceptor = (data) => {
    if (this.interceptor) {
      data = this.interceptor(data);
    }

    if (typeof data !== 'undefined' && data !== false) {
      return data;
    }
  }
}