export interface IMessage {
  body: string;
  icon: string;
  title: string;
  data: {
    clickAction?: string;
    clickedUrl?: string;
    deliveredUrl?: string;
    sideBarPrimaryClickAction?: IAction;
    sideBarSecondaryClickAction?: IAction;
  };
}

export interface IAction {
  href: string;
  text: string;
}
export interface ICourierEvent {
  type?: "message";
  data: IMessage;
}

// eslint-disable-next-line no-unused-vars
export type Intercept = (message: IMessage) => IMessage | undefined;
