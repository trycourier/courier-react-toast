import React from "react";
import {
  AnchorContainer,
  Container,
  Title,
  Icon,
  ContentContainer,
  BodyText,
} from "./styled";
import { BodyWrapperProps, BodyProps } from "./types";
//@ts-ignore
import CourierIcon from "./courier.svg";

const Body: React.FunctionComponent<BodyProps> = ({
  title, body, icon = CourierIcon, theme,
}) => (
  <>
    {icon && <Icon theme={theme} style={{ marginRight: 10 }} src={icon} />}
    <ContentContainer>
      <Title theme={theme}>{title}</Title>
      <BodyText theme={theme} style={{ marginTop: 5 }}>{body}</BodyText>
    </ContentContainer>
  </>
);

const BodyWrapper: React.FunctionComponent<BodyWrapperProps> = ({
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
