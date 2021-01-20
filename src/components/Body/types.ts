export interface BodyWrapperProps {
  clickAction?: string;
  onClick?: (event: React.MouseEvent) => void;
  title: string;
  body?: string;
  icon?: string;
}

export interface BodyProps {
  title: string;
  body?: string;
  icon?: string;
}
