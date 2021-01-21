import { useContext } from "react";
import { ToastContext } from "../providers";
import { IProviderConfig } from "../providers/types";
import { IToastMessage } from "../components/Toast/types";

type ToastFn = (message: IToastMessage) => void;
type ToastOptions = { config: IProviderConfig};
type UseToast = () => [ToastFn, ToastOptions];

export const useToast: UseToast = () => {
  const { toast, config } = useContext(ToastContext);
  return [toast, { config }];
}
