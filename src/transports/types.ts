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
