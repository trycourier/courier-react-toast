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

const Body: React.FunctionComponent<BodyProps> = ({
  title, body, icon, theme,
}) => (
  <>
    {icon && <Icon style={{ marginRight: 10 }} src={icon} />}
    <ContentContainer>
      <Title theme={theme}>{title}</Title>
      <BodyText theme={theme} style={{ marginTop: 10 }}>{body}</BodyText>
    </ContentContainer>
  </>
);

const BodyWrapper: React.FunctionComponent<BodyWrapperProps> = ({
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
