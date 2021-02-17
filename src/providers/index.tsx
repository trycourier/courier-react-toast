import React, { useEffect } from "react";
import { toast } from "react-toastify";
//@ts-ignore
import toastCss from "react-toastify/dist/ReactToastify.css";
import merge from "lodash.merge";
import { createGlobalStyle } from "styled-components";

import Body from "../components/Body";
import { Toast } from "../components";
import { IToastMessage } from "../components/Toast/types";
import { Transport } from "../";
import { defaultConfig } from "./defaults";

import { ToastProviderProps, IProviderConfig } from "./types";

const GlobalStyle = createGlobalStyle`${toastCss}`;

interface IToastContext {
  // eslint-disable-next-line no-unused-vars
  toast?: (message: IToastMessage) => void;
  config?: IProviderConfig;
}

export const ToastContext = React.createContext<IToastContext>({ config:{} });

export const ToastProvider: React.FunctionComponent<ToastProviderProps> = ({
  children,
  config: _config,
  transport,
}) => {
  console.log("_config", _config);

  if (transport && !(transport instanceof Transport)) {
    throw new Error("Invalid Transport");
  }

  const config = merge(defaultConfig, _config);
  const handleToast = (message: IToastMessage) => toast(<Body {...message} />);

  useEffect(() => {
    if (transport) {
      transport.listen((courierEvent) => {
        const clickAction = courierEvent?.data?.clickAction;

        if (clickAction && window.location.pathname.includes(clickAction)) {
          return;
        }

        handleToast(courierEvent?.data);
      });
    }
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
