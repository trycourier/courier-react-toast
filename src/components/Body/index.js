import React from 'react';
import {
  ButtonContainer, DefaultContainer, Title, Icon, ContentContainer, BodyText,
} from './styled';

function Body({
  title, body, icon, clickAction,
}) {
  const Container = clickAction ? ButtonContainer : DefaultContainer;
  return (
    <Container>
      <Icon style={{ marginRight: 10 }} src={icon} />
      <ContentContainer>
        <Title>{title}</Title>
        <BodyText style={{ marginTop: 10 }}>{body}</BodyText>
      </ContentContainer>
    </Container>
  );
}

export default Body;
