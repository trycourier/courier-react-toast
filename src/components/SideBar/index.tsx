import React from "react";
import {
  Container, Button,
} from "./styled";

function SideBar({
  open, dismiss, href,
}) {
  return (
    <Container>
      {open && (
        <>
          <Button href={href} color="#9D3789" onClick={open}>Details</Button>
        </>
      )}
      <Button onClick={dismiss}>Dismiss</Button>
    </Container>
  );
}

export default SideBar;