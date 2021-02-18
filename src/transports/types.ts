export interface IMessage {
  body: string;
  icon: string;
  title: string;
  data: {
    clickAction?: string;
    clickedUrl?: string;
    deliveredUrl?: string;
  };
  primaryAction?: IAction;
  secondaryAction?: IAction;
}
export interface ICourierEvent {
  type?: "message";
  data: IMessage;
}

export interface IAction {
  text: string;
  onClick(): void;
}

// eslint-disable-next-line no-unused-vars
export type Intercept = (message: IMessage) => IMessage | undefined;
