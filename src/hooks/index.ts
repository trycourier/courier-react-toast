import { useContext } from 'react';
import { ToastContext } from '../providers';

export function useToast() {
  const { toast, config } = useContext(ToastContext);
  return [toast, { config }];
}
