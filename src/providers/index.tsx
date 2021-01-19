import React from "react";
import { toast } from "react-toastify";
import { createGlobalStyle } from "styled-components";
import toastCss from "react-toastify/dist/ReactToastify.css";
import Body from "../components/Body";
import { Toast } from "../components";
import { BodyWrapperProps } from "../components/Body/types";
import { ClassesObject } from "../types";

import { ToastProviderProps, ProviderConfig } from "./types";

const GlobalStyle = createGlobalStyle`${toastCss}`;

interface IToastContext {
  toast?: Function;
  classes?: ClassesObject;
  config?: ProviderConfig;
}

export const ToastContext = React.createContext<IToastContext>({});
export const ToastProvider: React.FunctionComponent<ToastProviderProps> = ({
  children,
  theme,
  config,
}) => {
  const handleToast = (props: BodyWrapperProps) => toast(<Body {...props} />);
  const state = {
    toast: handleToast,
    config,
    theme,
  };

  return (
    <ToastContext.Provider value={state}>
      <GlobalStyle />
      <Toast />
      {children}
    </ToastContext.Provider>
  );
};
