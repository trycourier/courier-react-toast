import styled from "styled-components";
import { ToastContainer } from "react-toastify";
export const ToastStyled = styled(ToastContainer)(({ theme })=> ({
  ["&.Toastify__toast-container"]: { ...theme.container },
  [".Toastify__toast"]: { ...theme.toast },
  [".Toastify__toast-body"]: { ...theme.body },
  [".Toastify__toast--error"]: { ...theme.error },
  [".Toastify__toast--warning"]: { ...theme.warning },
  [".Toastify__progress-bar"]: { ...theme["progress-bar"] },
}));