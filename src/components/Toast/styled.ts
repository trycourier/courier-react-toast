import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ToastStyled = styled(ToastContainer)(({ theme }) => ({
  ["&.Toastify__toast-container"]: theme.container,
  [".Toastify__toast"]: theme.toast,
  [".Toastify__toast-body"]: theme.body,
  [".Toastify__progress-bar"]: theme.progressBar,
}));



//

// [".Toastify__toast"]: theme.toast,
// [".Toastify__toast-body"]: theme.title,
// [".Toastify__toast-body .courier__icon"]: theme.icon,
// [".Toastify__toast-body .courier__sidebar-container"]: theme.sidebarContainer,
// [".Toastify__toast-body .courier__sidebar-details"]: theme.sidebarDetails,
// [".Toastify__toast-body .courier__sidebar-dismiss"]: theme.sidebarDismiss,
// [".Toastify__toast--error"]: theme.error,
// [".Toastify__toast--warning"]: theme.warning,
//