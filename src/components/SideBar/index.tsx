import React, { useContext } from "react";
import { ToastContext } from "../../providers";
import {
  Container, Button,
} from "./styled";

function SideBar({
  open, dismiss, href,
}) {
  const { config: { theme } } = useContext(ToastContext);
  return (
    <Container theme={theme.sidebar} data-test-id="toast-sidebar">
      {open && (
        <Button theme={theme.sidebar?.details} href={href} color="#9D3789"
          onClick={open} data-test-id="toast-sidebar-button-details">Details</Button>
      )}
      <Button theme={theme.sidebar?.dismiss} onClick={dismiss} data-test-id="toast-sidebar-button-dismiss">Dismiss</Button>
    </Container>
  );
}

export default SideBar;