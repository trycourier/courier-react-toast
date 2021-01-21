import React from "react";
import {
  AnchorContainer,
  Container,
  Title,
  Icon,
  ContentContainer,
  BodyText,
} from "./styled";
import { IToastMessage } from "../Toast/types";

const Body: React.FunctionComponent<Partial<IToastMessage>> = ({
  title,
  body,
  icon = "https://app.courier.com/static/favicon/favicon-32x32.png",
}) => {
  return (
    <>
      <Icon src={icon} />
      <ContentContainer>
        <Title>{title}</Title>
        <BodyText style={{ marginTop: 10 }}>{body}</BodyText>
      </ContentContainer>
    </>
  );
};

const BodyWrapper: React.FunctionComponent<IToastMessage> = ({
  clickAction,
  onClick,
  ...props
}) => {
  if (clickAction) {
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
