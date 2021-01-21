import {Transport } from './';
import Pusher, {Channel, Options} from "pusher-js";
import { IMessage } from './types';

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

  constructor (options: ITransportOptions) {
    super();

    if (!options.appKey) {
      throw new Error("Missing App Key");
    }

    this.pusher = new Pusher(options.appKey, options.options);
  }

  subscribe = (channel: string, event: string) => {
    this.channel = this.pusher.subscribe(channel);
    this.channel.bind(event, (data: IMessage) => {
      this.emit({
        type: "message",
        data,
      })
    });
  }

  unsubscribe = (channel: string) => {
    this.pusher.unsubscribe(channel);
  }
}
