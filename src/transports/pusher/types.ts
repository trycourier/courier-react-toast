import Pusher, { Options } from "pusher-js";

export interface ITransportOptions {
  appKey?: string;
  channel?: string;
  event?: string;
  instance?: Pusher;
  options?: Options;
}