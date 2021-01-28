import { ICourierEvent } from './types';
export declare class Transport {
    protected listener: any;
    protected emit: (courierEvent: ICourierEvent) => void;
    listen: (listener: (courierEvent: ICourierEvent) => void) => void;
}
