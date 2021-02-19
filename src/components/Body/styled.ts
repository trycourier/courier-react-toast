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
}));

export const Details = styled.a(() => ({
  backgroundColor: "white",
  border: "none",
  color: "#9D3789",
  fontFamily: `"Nunito Sans", sans-serif`,
  fontSize: 12,
  textAlign: "center",
  margin: 5,
  paddingBottom: 5,
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
