import {
  CSSProperties, MouseEventHandler,
} from 'react';
import { ToastPosition } from 'react-toastify';
import { Transport } from "../transports"

export interface ToastProviderProps {
  config?: ProviderConfig;
  transport?: Transport
}

export interface Theme {
  [key:string]: CSSProperties | {[key:string]: CSSProperties}
}

export interface ProviderConfig {
  hideProgressBar?: boolean;
  onClick?: MouseEventHandler<Element>;
  transition?: string;
  position?: ToastPosition;
  theme?: Theme;
}
