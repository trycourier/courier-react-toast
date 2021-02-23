export type IMessage = {
  body: string;
  icon: string;
  title: string;
  data: {
    clickAction?: string;
    clickedUrl?: string;
    deliveredUrl?: string;
  }
} | boolean | undefined;
export interface ICourierEvent {
  type?: "message",
  data: IMessage,
}

export type ICourierEventCallback = (params: ICourierEvent) => void

export type Interceptor = (message: IMessage) => IMessage | undefined;