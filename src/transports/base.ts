import { ICourierEvent } from "./types";

export class Transport {
  // eslint-disable-next-line no-unused-vars
  protected listener: (courierEvent: ICourierEvent) => void;

  protected emit = (courierEvent: ICourierEvent): void => {
    if (!this.listener) {
      console.warn("No Listener Registered");
      return;
    }
    this.listener(courierEvent);
  }

  // eslint-disable-next-line no-unused-vars
  listen = (listener: (courierEvent: ICourierEvent) => void): void => {
    this.listener = listener;
  }
}
