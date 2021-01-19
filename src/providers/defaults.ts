import { ProviderConfig } from "../providers/types";

export const defaultConfig: ProviderConfig = {
  hideProgressBar: true,
  position: "top-right",
  theme: {
    container: {
      a: { textDecoration: "none" },
      fontFamily: `"Nunito Sans", sans-serif`,
    },
    toast: {
      backgroundColor: "white",
      boxShadow: "rgba(157, 55, 137, 0.2) 0px 4px 12px",
      borderRadius: 5,
      color: "black",
    },
    title:{
      color: "rgb(36, 50, 75)",
    },
    body: {
      color: "rgb(115, 129, 155)",
    },
  },
  transition: "slide",
};