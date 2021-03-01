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
    <Container theme={theme.dismiss}>
      {open && (
        <>
          <Button theme={theme.dismissButton} href={href} color="#9D3789"
            onClick={open}>Details</Button>
        </>
      )}
      <Button theme={theme.dismissButton} onClick={dismiss}>Dismiss</Button>
    </Container>
  );
}

export default SideBar;