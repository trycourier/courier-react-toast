import React from "react";
import { IToastMessage } from "../components/toast/types";
import { ToastProviderProps, IProviderConfig } from "./types";
interface IToastContext {
    toast?: (message: IToastMessage) => void;
    config?: IProviderConfig;
}
export declare const ToastContext: React.Context<IToastContext>;
export declare const ToastProvider: React.FunctionComponent<ToastProviderProps>;
export {};
