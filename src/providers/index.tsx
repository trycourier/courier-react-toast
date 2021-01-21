import React, { useEffect } from "react";
import { toast } from "react-toastify";
//@ts-ignore
import toastCss from "react-toastify/dist/ReactToastify.css";
import merge from "lodash.merge";
import { createGlobalStyle } from "styled-components";

import Body from "../components/Body";
import { Toast } from "../components";
import { defaultConfig } from "./defaults";

import { IToastMessage } from "../components/toast/types";
import { ToastProviderProps, IProviderConfig } from "./types";
import { Transport } from "../transports";

const GlobalStyle = createGlobalStyle`${toastCss}`;

interface IToastContext {
  toast?: (message: IToastMessage) => void;
  config?: IProviderConfig;
}

export const ToastContext = React.createContext<IToastContext>({});

export const ToastProvider: React.FunctionComponent<ToastProviderProps> = ({
  children,
  config: _config,
  transport,
}) => {
  if (transport && !(transport instanceof Transport)) {
    throw new Error("Invalid Transport");
  }

  const config = merge(defaultConfig, _config);
  const handleToast = (message: IToastMessage) => toast(<Body {...message} />);

  useEffect(() => {
    if (!transport) {
      return;
    }

    transport.listen((courierEvent) => {
      const clickAction = courierEvent?.data?.clickAction;
      if (clickAction && window.location.pathname.includes(clickAction)) {
        return;
      }

      handleToast(courierEvent?.data);
    });
  }, [transport]);

  return (
    <ToastContext.Provider
      value={{
        toast: handleToast,
        config,
      }}
    >
      <GlobalStyle />
      <Toast />
      {children}
    </ToastContext.Provider>
  );
};
