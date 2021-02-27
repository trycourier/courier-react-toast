import React, { useContext } from "react";
import { ToastContext } from "../../providers";
import { IToastMessage } from "../Toast/types";
import { toast } from "react-toastify";
import {
  Container,
  ContentContainer,
  SideBarContainer,
  Details,
  Dismiss,
} from "./styled";
import CourierIcon from "./courier-icon";

const Body: React.FunctionComponent<Partial<IToastMessage>> = ({
  title,
  body,
  icon,
  data,
  onClick,
  ...props
}) => {
  let sideBar;
  const { clientKey } = useContext(ToastContext);

  if (data?.clickAction || onClick) {
    const handleClickAction = (event: React.MouseEvent) => {
      if (onClick) {
        onClick(event);
      }

      if (clientKey && data?.clickedUrl) {
        fetch(`${data.clickedUrl}`, {
          method: "POST",
          headers: {
            "x-courier-client-key": clientKey,
          },
        });
      }
    };

    sideBar = (
      <SideBarContainer className="courier__sidebar-container">
        <Details
          className="courier__sidebar-details"
          onClick={handleClickAction}
        >
          Details
        </Details>
        <Dismiss
          className="courier__sidebar-dismiss"
          onClick={() => {
            toast.dismiss(props.toastProps.toastId);
          }}
        >
          Dismiss
        </Dismiss>
      </SideBarContainer>
    );
  } else {
    sideBar = (
      <SideBarContainer className="courier__sidebar-container">
        <Dismiss
          className="courier__sidebar-dismiss"
          onClick={() => {
            toast.dismiss(props.toastProps.toastId);
          }}
        >
          Dismiss
        </Dismiss>
      </SideBarContainer>
    );
  }

  return (
    <>
      <div className="courier__icon">
        {icon ? <img src={icon} /> : <CourierIcon />}
      </div>
      <ContentContainer className="courier__container">
        <div className="courier__title">{title}</div>
        <div className="courier__body">{body}</div>
      </ContentContainer>
      {sideBar}
    </>
  );
};

const BodyWrapper: React.FunctionComponent<IToastMessage> = ({
  onClick,
  ...props
}) => {
  return (
    <Container>
      <Body {...props} onClick={onClick} />
    </Container>
  );
};

export default BodyWrapper;
