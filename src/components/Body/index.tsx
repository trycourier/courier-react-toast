import React from 'react';
import {
  AnchorContainer, Container, Title, Icon, ContentContainer, BodyText,
} from './styled';
import { WrapperProps, BodyProps } from './types';

function Body({
  title, body, icon,
}: BodyProps) {
  return (
    <>
      <Icon style={{ marginRight: 10 }} src={icon} />
      <ContentContainer>
        <Title>{title}</Title>
        <BodyText style={{ marginTop: 10 }}>{body}</BodyText>
      </ContentContainer>
    </>
  );
}

function Wrapper({
  clickAction, onClick, ...props
}: WrapperProps) {
  if (clickAction) {
    return (
      <AnchorContainer target="__blank" href={clickAction} onClick={onClick} >
        <Body {...props} />
      </AnchorContainer>
    );
  }

  return (
    <Container>
      <Body {...props} />
    </Container>
  );
}

export default Wrapper;
