import { IProviderConfig } from "../providers/types";

export const defaultConfig: IProviderConfig = {
  hideProgressBar: false,
  position: "top-right",
  theme: {
    "container": {
      a: { textDecoration: "none" },
      fontFamily: `"Nunito Sans", sans-serif`,
    },
    "toast": {
      height: 50,
      backgroundColor: "white",
      boxShadow: "rgba(157, 55, 137, 0.2) 0px 4px 12px",
      borderRadius: 5,
      color: "black",
      margin: 10,
    },
    "title":{
      fontSize: 14,
      fontWeight: "bold",
      color: "#344563",
    },
    "body": {
      fontSize: 12,
      color: "#8F8F8F",
      marginTop: 4,
    },
    "icon": {
      height: 30,
      width: 30,
      marginRight: 12,
    },
    "progressBar": {
      background: "rgb(157, 55, 137)",
      height: 3,
    },
  },
  transition: "slide",
};
