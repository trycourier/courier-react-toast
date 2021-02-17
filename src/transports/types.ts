export interface IMessage {
  body: string;
  clickAction?: string;
  icon: string;
  title: string;
}

export interface ICourierEvent {
  type: "message",
  data: IMessage,
}

// eslint-disable-next-line no-unused-vars
export type Intercept = (message: IMessage) => IMessage | undefined;