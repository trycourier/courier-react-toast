export interface IMessage {
  body: string;
  icon: string;
  title: string;
  data: {
    clickAction?: string;
    clickedUrl?: string;
    deliveredUrl?: string;
  }
}

export interface ICourierEvent {
  type: "message",
  data: IMessage,
}
