import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
export const ToastStyled = styled(ToastContainer)(({ theme })=> ({
  ['&.Toastify__toast-container']: {
    a: { textDecoration: 'none' },
    fontFamily: `"Nunito Sans", sans-serif`,
    borderRadius: 5,
    ...theme.container,
  },

  ['.Toastify__toast']: {
    backgroundColor: 'black', borderRadius: 5,
    ...theme.toast,
  },
  ['.Toastify__toast--error']: { ...theme.error },
  ['.Toastify__toast--warning']: { ...theme.warning },
  ['.Toastify__toast-body']: { ...theme.success },
  ['.Toastify__progress-bar']: { ...theme.progress },
}));