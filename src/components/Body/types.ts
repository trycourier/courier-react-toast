import { MouseEvent } from "react";
import { Theme } from "../../providers/types";

export interface BodyWrapperProps {
  clickAction: string;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  title: string;
  body: string;
  icon: string;
  theme?: Theme;
}

export interface BodyProps {
  title: string;
  body: string;
  icon: string;
  theme?: Theme;
}
