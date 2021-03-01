import React, { useCallback, useContext } from "react";
import { toast } from "react-toastify";
import { IToastMessage } from "../Toast/types";
import SideBar from "../SideBar";
import { ToastContext } from "../../providers";
import {
  Icon, ContentContainer, Title, Body,
} from "./styled";
import { sendClickedRequest } from "./helpers";
//@ts-ignore
import CourierIcon from "./courier-icon.svg";

const ToastBody: React.FunctionComponent<Partial<IToastMessage>> = ({
  title,
  body,
  icon,
  data,
  onClick,
  ...props
}) => {
  const { toastProps } = props as { toastProps: any };
  const dismiss = useCallback(() => toast.dismiss(toastProps.toastId), [toastProps.toastId]);
  const { clientKey } = useContext(ToastContext);
  const hasAction = data?.clickAction || onClick;
  const open = useCallback((event) => {
    if (onClick) {
      onClick(event);
    }
    sendClickedRequest(clientKey, data?.clickedUrl);
  }, [clientKey, data?.clickedUrl, onClick]);

  return (
    <>
      <Icon src={icon || CourierIcon} />
      <ContentContainer>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </ContentContainer>
      <SideBar href={data?.clickAction} open={hasAction ? open : null} dismiss={dismiss} />
    </>
  );
};

export default ToastBody;
