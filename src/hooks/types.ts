import { IToastMessage } from "../components/Toast/types";
import { IProviderConfig } from "../providers/types";

export type ToastCaller = (message: IToastMessage) => void;
export type ToastOptions = { config: IProviderConfig};
export type UseToast = () => [ToastCaller, ToastOptions];