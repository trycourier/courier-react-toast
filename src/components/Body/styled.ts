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

//@ts-ignore
export const ContentContainer = styled.pre(() => ({
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  flexDirection: "column",
  whiteSpace: "break-spaces",
  margin: 10,
}));

export const SideBarContainer = styled.div(() => ({
  alignSelf: "center",
  display: "flex",
  flexDirection: "column",
  marginLeft: 5,
  paddingLeft: 5,
  borderLeft: "1px solid #CBD5E0",
}));

export const Details = styled.a(() => ({
  backgroundColor: "white",
  border: "none",
  borderBottom: "1px solid #CBD5E0",
  color: "#9D3789",
  fontFamily: `"Nunito Sans", sans-serif`,
  fontSize: 12,
  textAlign: "center",
  margin: 5,
  paddingBottom: 10,
}));

export const Dismiss = styled.a(() => ({
  backgroundColor: "white",
  border: "none",
  color: "#73819B",
  fontFamily: `"Nunito Sans", sans-serif`,
  fontSize: 12,
  textAlign: "center",
  margin: 5,
}));
