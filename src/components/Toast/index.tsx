import React, { useContext } from "react";
import { ToastContext } from "../../providers";
import { getTransition } from "./helpers";
import { ToastStyled } from "./styled";

const Toast: React.FunctionComponent = () => {
  const {
    config = {
      position: "top-right",
      theme: {},
      transition: "slide",
    },
  } = useContext(ToastContext);

  const transition = getTransition(config.transition);
  return <ToastStyled {...config} transition={transition} />;
};

export default Toast;
