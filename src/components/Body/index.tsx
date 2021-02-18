import React from "react";
import { IToastMessage } from "../Toast/types";
import {
  AnchorContainer, Container, ContentContainer,
} from "./styled";
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
    <ContentContainer className="courier__container">
      <div className="courier__title">{title}</div>
      <div className="courier__body">{body}</div>
    </ContentContainer>
  </>
);

const BodyWrapper: React.FunctionComponent<IToastMessage> = ({
  clickAction,
  onClick,
  ...props
}) => {
  if (clickAction || onClick) {
    return (
      <AnchorContainer target="__blank" href={clickAction} onClick={onClick}>
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
