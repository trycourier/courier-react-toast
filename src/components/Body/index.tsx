import React, { useContext } from "react";
import { ToastContext } from "../../providers";
import { IToastMessage } from "../Toast/types";
import { AnchorContainer, Container, ContentContainer } from "./styled";
import CourierIcon from "./courier-icon";

const Body: React.FunctionComponent<Partial<IToastMessage>> = ({
  title,
  body,
  icon,
}) => (
  <>
    <div className="courier__icon">
      {icon ? <img src={icon} /> : <CourierIcon />}
    </div>
    <ContentContainer>
      <div className="courier__title">{title}</div>
      <div className="courier__body">{body}</div>
    </ContentContainer>
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

      if (courierData?.messageId) {
        fetch(`https://api.courier.com/m/${courierData?.messageId}/clicked`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-courier-client-key": clientKey,
          },
          body: JSON.stringify({
            clickAction: courierData?.clickAction,
          }),
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
