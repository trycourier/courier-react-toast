import {
  CSSProperties, MouseEventHandler,
} from 'react';
import { ToastPosition } from 'react-toastify';
import { Transport } from "../transports"

export interface ToastProviderProps {
  apiUrl?: string;
  clientKey?: string;
  config?: IProviderConfig;
  transport?: Transport
}

export interface Theme {
  [key:string]: CSSProperties | {[key:string]: CSSProperties}
}

export interface IProviderConfig {
  hideProgressBar?: boolean;
  onClick?: MouseEventHandler<Element>;
  transition?: string;
  position?: ToastPosition;
  theme?: Theme;
}
