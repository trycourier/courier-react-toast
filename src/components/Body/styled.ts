import styled from "styled-components";

export const Container = styled.div(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  outline: "none",
  border: "none",
  color: "inherit",
  backgroundColor: "inherit",
}));

export const AnchorContainer = styled.a(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  outline: "none",
  border: "none",
  color: "inherit",
  backgroundColor: "inherit",
}));

export const Icon = styled.img(({ theme }) => ({
  marginRight: 10,
  width: 32,
  height: 32,
  ...theme.icon
}));

export const BodyText = styled.div(({ theme }) => ({
  marginTop: 6,
  ...theme.body
}));

export const Title = styled.div(({ theme }) => ({
  fontWeight: "bold",
  ...theme.title
}));

//@ts-ignore
export const ContentContainer = styled.div(() => ({
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  flexDirection: "column",
}));
