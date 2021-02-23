import {
  CSSProperties, MouseEventHandler,
} from "react";
import { ToastPosition } from "react-toastify";
import { ToastCaller } from "../hooks/types";
import { Transport } from "../transports";

export interface ToastProviderProps {
  clientKey?: string;
  config?: IProviderConfig;
  transport?: Transport
}

export interface Theme {
  [key: string]: CSSProperties | {[key: string]: CSSProperties}
}

export interface IProviderConfig {
  hideProgressBar?: boolean;
  onClick?: MouseEventHandler<Element>;
  transition?: string;
  position?: ToastPosition;
  theme?: Theme;
}
export interface IToastContext {
  clientKey?: string;
  config?: IProviderConfig;
  toast?: ToastCaller;
}