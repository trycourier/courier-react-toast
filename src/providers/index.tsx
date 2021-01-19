import React from "react";
import { toast } from "react-toastify";
import { createGlobalStyle } from "styled-components";
//@ts-ignore
import toastCss from "react-toastify/dist/ReactToastify.css";
import merge from "lodash.merge";
import Body from "../components/Body";
import { Toast } from "../components";
import { BodyWrapperProps } from "../components/Body/types";
import { ToastProviderProps, ProviderConfig } from "./types";
import { defaultConfig } from "./defaults";

const GlobalStyle = createGlobalStyle`${toastCss}`;

interface IToastContext {
  toast?: Function;
  config?: ProviderConfig;
}

export const ToastContext = React.createContext<IToastContext>({});
export const ToastProvider: React.FunctionComponent<ToastProviderProps> = ({
  children,
  config: _config,
}) => {
  const config = merge(defaultConfig, _config);
  const handleToast = (props: BodyWrapperProps) => toast(<Body {...config} {...props} />);
  const state = {
    toast: handleToast,
    config,
  };

  return (
    <ToastContext.Provider value={state}>
      <GlobalStyle />
      <Toast />
      {children}
    </ToastContext.Provider>
  );
};
