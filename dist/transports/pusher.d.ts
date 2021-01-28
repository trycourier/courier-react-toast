import { Transport } from './';
import Pusher, { Channel, Options } from "pusher-js";
interface ITransportOptions {
    appKey?: string;
    channel?: string;
    event?: string;
    instance?: Pusher;
    options?: Options;
}
export declare class PusherTransport extends Transport {
    protected pusher: Pusher;
    protected channel: Channel;
    constructor(options: ITransportOptions);
    subscribe: (channel: string, event: string) => void;
    unsubscribe: (channel: string) => void;
}
export {};
