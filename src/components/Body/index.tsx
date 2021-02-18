import React, { useContext } from "react";
import { ToastContext } from "../../providers";
import { IToastMessage } from "../Toast/types";
import {
  AnchorContainer,
  Container,
  ContentContainer,
  ActionsContainer,
} from "./styled";
import CourierIcon from "./courier-icon";

const Body: React.FunctionComponent<Partial<IToastMessage>> = ({
  title,
  body,
  icon,
  primaryAction,
  secondaryAction,
}) => (
  <>
    <div className="courier__icon">
      {icon ? <img src={icon} /> : <CourierIcon />}
    </div>
    <ContentContainer className="courier__container">
      <div className="courier__title">{title}</div>
      <div className="courier__body">{body}</div>
    </ContentContainer>
    {primaryAction || secondaryAction ? (
      <ActionsContainer>
        {primaryAction && (
          <div
            className="courier__primary-action"
            onClick={primaryAction.onClick}
          >
            {primaryAction.text}
          </div>
        )}
        {secondaryAction && (
          <div
            className="courier__secondary-action"
            onClick={secondaryAction.onClick}
          >
            {secondaryAction.text}
          </div>
        )}
      </ActionsContainer>
    ) : null}
  </>
);

const BodyWrapper: React.FunctionComponent<IToastMessage> = ({
  onClick,
  ...props
}) => {
  const { clientKey } = useContext(ToastContext);
  const courierData = props?.data ?? {};

  if (courierData?.clickAction || onClick) {
    const handleOnClick = (event: React.MouseEvent) => {
      if (onClick) {
        onClick(event);
      }

      if (clientKey && courierData.clickedUrl) {
        fetch(`${courierData.clickedUrl}`, {
          method: "POST",
          headers: {
            "x-courier-client-key": clientKey,
          },
        });
      }
    };

    return (
      <AnchorContainer
        target="__blank"
        href={courierData?.clickAction}
        onClick={handleOnClick}
      >
        <Body {...props} />
      </AnchorContainer>
    );
  }

  return (
    <Container>
      <Body {...props} />
    </Container>
  );
};

export default BodyWrapper;
