import styled from "styled-components";

export const Container = styled.div(() => ({
  height: 50,
  width: "100%",
  display: "flex",
  outline: "none",
  border: "none",
  color: "inherit",
  backgroundColor: "inherit",
}));

export const AnchorContainer = styled.a(() => ({
  height: 50,
  width: "100%",
  display: "flex",
  outline: "none",
  border: "none",
  color: "inherit",
  backgroundColor: "inherit",
}));

export const Icon = styled.img(({ theme }) => ({
  height: 30,
  width: 30,
  ...theme.icon,
}));

export const BodyText = styled.div(({ theme }) => ({
  fontSize: 14,
  ...theme.body,
}));

export const Title = styled.div(({ theme }) => ({
  fontWeight: "bold",
  ...theme.title,
}));

//@ts-ignore
export const ContentContainer = styled.div(() => ({
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  flexDirection: "column",
}));
