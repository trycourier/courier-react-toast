import React, { useEffect } from "react";
import { toast } from "react-toastify";
//@ts-ignore
import toastCss from "react-toastify/dist/ReactToastify.css";
import merge from "lodash.merge";
import Body from "../components/Body";
import { Toast } from "../components";
import { createGlobalStyle } from "styled-components";

import { ToastProviderProps, ProviderConfig } from "./types";
import { defaultConfig } from "./defaults";

import { IMessage } from "../transports/types";

const GlobalStyle = createGlobalStyle`${toastCss}`;

interface IToastContext {
  toast?: (message: IMessage) => void;
  config?: ProviderConfig;
}

export const ToastContext = React.createContext<IToastContext>({});

export const ToastProvider: React.FunctionComponent<ToastProviderProps> = ({
  children,
  config: _config,
  transport,
}) => {
  const config = merge(defaultConfig, _config);
  
  const handleToast = (
    message: IMessage & {
      onClick?: (event: React.MouseEvent) => void;
    }
  ) => toast(<Body {...message} />);

  const state = {
    toast: handleToast,
    config,
  };

  useEffect(() => {
    transport.listen((courierEvent) => {
      handleToast(courierEvent.data);
    });
  }, [transport]);

  return (
    <ToastContext.Provider value={state}>
      <GlobalStyle />
      <Toast />
      {children}
    </ToastContext.Provider>
  );
};
