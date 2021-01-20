import { ICourierEvent } from './types';

export class Transport {
  protected listener;

  protected emit = (courierEvent: ICourierEvent) => {
    if (!this.listener) {
      console.warn("No Listener Registered");
      return;
    }

    this.listener(courierEvent)
  }  

  listen = (listener: (courierEvent: ICourierEvent) => void) => {
    this.listener = listener;
  }
}
