"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = void 0;
var defaultConfig = {
  hideProgressBar: false,
  position: "top-right",
  theme: {
    container: {
      "a": {
        textDecoration: "none",
        backgroundColor: "white"
      },
      "*": {
        fontFamily: "\"Nunito Sans\", sans-serif"
      }
    },
    toast: {
      minHeight: 50,
      backgroundColor: "white",
      boxShadow: "rgba(157, 55, 137, 0.2) 0px 4px 12px",
      borderRadius: 5,
      color: "black",
      margin: 10
    },
    title: {
      color: "#344563",
      fontSize: 14,
      fontWeight: "bold",
      maxHeight: 50,
      maxWidth: 160,
      overflow: "hidden",
      overflowWrap: "break-word"
    },
    body: {
      color: "#8F8F8F",
      fontSize: 12,
      marginTop: 4,
      maxHeight: 40,
      maxWidth: 160,
      overflow: "hidden",
      overflowWrap: "break-word"
    },
    icon: {
      height: 30,
      width: 60,
      alignSelf: "center"
    },
    progressBar: {
      background: "rgb(157, 55, 137)",
      height: 3,
      top: 0
    }
  },
  transition: "slide"
};
exports.defaultConfig = defaultConfig;