import { useContext } from "react";
import { ToastContext } from "../providers";
import { UseToast } from "./types";

export const useToast: UseToast = () => {
  const { toast, config } = useContext(ToastContext);
  return [toast, { config }];
};
