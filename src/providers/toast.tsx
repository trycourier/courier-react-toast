import React from 'react';
import { toast } from 'react-toastify';
import Body from '../components/Body';
import { Toast } from '../components';
import { BodyWrapperProps } from '../components/Body/types';
import { ClassesObject } from '../types';
import { ToastProviderProps, ProviderConfig } from './types';
interface IToastContext {
  toast?: Function;
  classes?: ClassesObject;
  config?: ProviderConfig;
}
export const ToastContext = React.createContext<IToastContext>({});

export function ToastProvider({
  children, theme, classes, config,
}: ToastProviderProps) {
  const handleToast = (props: BodyWrapperProps) => toast(<Body {...props} />);
  const state = {
    toast: handleToast, classes, config, theme,
  };

  return (
    <ToastContext.Provider value={state}>
      <Toast />
      {children}
    </ToastContext.Provider>
  );
}