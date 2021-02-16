export interface IMessage {
  body: string;
  icon: string;
  title: string;
  data: {
    clickAction?: string;
    openedUrl?: string;
    messageId?: string;
  }
}

export interface ICourierEvent {
  type: "message",
  data: IMessage,
}
