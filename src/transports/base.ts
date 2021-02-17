import { ICourierEvent } from "./types";

export class Transport {
  protected listener;

  protected emit = (courierEvent: ICourierEvent) => {
    if (!this.listener) {
      console.warn("No Listener Registered");
      return;
    }
    this.listener(courierEvent);
  }

  // eslint-disable-next-line no-unused-vars
  listen = (listener: (courierEvent: ICourierEvent) => void) => {
    this.listener = listener;
  }
}
