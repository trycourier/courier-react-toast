import React, { useContext } from "react";
import { ToastContext } from "../../providers";
import { getTransition } from "./helpers";
import { ToastStyled } from "./styled";

const Toast: React.FunctionComponent = () => {
  const { config } = useContext(ToastContext);

  const Transition = getTransition(config.transition);
  return <ToastStyled {...config} transition={Transition} />;
};

export default Toast;
