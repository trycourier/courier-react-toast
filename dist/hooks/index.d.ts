import { IProviderConfig } from "../providers/types";
import { IToastMessage } from "../components/Toast/types";
declare type ToastFn = (message: IToastMessage) => void;
declare type ToastOptions = {
    config: IProviderConfig;
};
declare type UseToast = () => [ToastFn, ToastOptions];
export declare const useToast: UseToast;
export {};
