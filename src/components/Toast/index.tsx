import React, { useContext } from "react";
import { ToastContext } from "../../providers";
import { getTransition } from "./helpers";
import { ToastStyled } from "./styled";

const Toast: React.FunctionComponent = () => {
  const { config } = useContext(ToastContext);

  const Transition = getTransition(config.transition);
  console.log("config", config);
  return (
    <ToastStyled
      data-test-id="crt-toast-container"
      {...config}
      transition={Transition}
      closeButton={false}
      closeOnClick={false}
    />
  );
};

export default Toast;
