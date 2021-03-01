import React, { useCallback, useContext } from "react";
import { toast } from "react-toastify";
import { IToastMessage } from "../Toast/types";
import SideBar from "../SideBar";
import { ToastContext } from "../../providers";
import {
  Icon, Body, Title, Content,
} from "./styled";
import { sendClickedRequest } from "./helpers";
//@ts-ignore
import CourierIcon from "./courier-icon.svg";

const ToastBody: React.FunctionComponent<Partial<IToastMessage>> = ({
  title,
  body: content,
  icon,
  data,
  onClick,
  ...props
}) => {
  const { toastProps } = props as { toastProps: any };
  const dismiss = useCallback(() => toast.dismiss(toastProps.toastId), [toastProps.toastId]);
  const { clientKey, config:{ theme } } = useContext(ToastContext);
  const hasAction = data?.clickAction || onClick;
  const open = useCallback((event) => {
    if (onClick) {
      onClick(event);
    }
    sendClickedRequest(clientKey, data?.clickedUrl);
  }, [clientKey, data?.clickedUrl, onClick]);

  return (
    <>
      <Icon theme={theme.icon} src={icon || CourierIcon} />
      <Body theme={theme.body}>
        <Title theme={theme.title}>{title}</Title>
        <Content theme={theme.content}>{content}</Content>
      </Body>
      <SideBar href={data?.clickAction} open={hasAction ? open : null} dismiss={dismiss} />
    </>
  );
};

export default ToastBody;
