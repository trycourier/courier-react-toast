import {
  CSSProperties, MouseEventHandler, ReactChildren,
} from 'react';
import { ClassesObject } from '../types';

export interface ToastProviderProps {
  children: ReactChildren;
  theme: {[key:string]: CSSProperties};
  classes: ClassesObject;
  config: ProviderConfig;
}

export interface ProviderConfig {
  onClick: MouseEventHandler<Element>;
  transition: string;
}