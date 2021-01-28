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

//@ts-ignore
export const ContentContainer = styled.pre(() => ({
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  flexDirection: "column",
  whiteSpace: "break-spaces",
  margin: "10px 0",
}));
