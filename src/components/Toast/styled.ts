import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ToastStyled = styled(ToastContainer)(({ theme })=> ({
  ["&.Toastify__toast-container .courier__container"]: theme.container,
  [".Toastify__toast"]: theme.toast,
  [".Toastify__toast-body .courier__body"]: theme.body,
  [".Toastify__toast-body .courier__title"]: theme.title,
  [".Toastify__toast-body .courier__icon"]: theme.icon,
  [".Toastify__toast--error"]: theme.error,
  [".Toastify__toast--warning"]: theme.warning,
  [".Toastify__progress-bar"]: theme.progressBar,
}));
