import React from 'react';
import {
  AnchorContainer, Container, Title, Icon, ContentContainer, BodyText,
} from './styled';

function Body({
  title, body, icon,
}) {
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
}) {
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
