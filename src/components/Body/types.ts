import { MouseEvent } from "react";
import { ToastOptions } from "react-toastify";
import { Theme } from "../../providers/types";

export interface BodyWrapperProps {
  clickAction: string;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  title: string;
  body: string;
  icon: string;
  options: ToastOptions;
}

export interface BodyProps {
  title: string;
  body: string;
  icon: string;
  theme?: Theme;
}
