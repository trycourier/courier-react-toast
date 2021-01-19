import {
  CSSProperties, MouseEventHandler,
} from "react";
import { ToastPosition } from "react-toastify";

export interface ToastProviderProps {
  theme?: {[key:string]: CSSProperties};
  config?: ProviderConfig;
}

export interface ProviderConfig {
  onClick: MouseEventHandler<Element>;
  transition: string;
  position: ToastPosition;
}
