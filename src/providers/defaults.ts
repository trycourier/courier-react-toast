import { IProviderConfig } from "../providers/types";

export const defaultConfig: IProviderConfig = {
  hideProgressBar: false,
  position: "top-right",
  theme: {
    container: {
    },
    toast: {
      "*": {
        fontFamily: `"Nunito Sans", sans-serif`,
      },
      "width": 320,
      "minHeight": 65,
      "padding": 0,
      "borderRadius": 6,
    },
    body: {
      "margin": 0,
      "display": "flex",
      "> :nth-child(1)": {
        "paddingLeft": 13.3,
      },
      "> *" : {
        "padding": "13.3px 0",
      },
    },
    title: {
    },
    icon: {
    },
    content: {
    },
    progressBar: {
      background: "rgb(157, 55, 137)",
      height: 3,
      top: 0,
    },
  },
  transition: "slide",
};
