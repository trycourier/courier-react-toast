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
      a: {
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
      fontSize: 14,
      fontWeight: "bold",
      color: "#344563"
    },
    body: {
      fontSize: 12,
      color: "#8F8F8F",
      marginTop: 4
    },
    icon: {
      height: 30,
      width: 30,
      marginRight: 12
    },
    progressBar: {
      background: "rgb(157, 55, 137)",
      height: 3,
      top: 0
    },
    primaryAction: {
      backgroundColor: "white",
      color: "#9D3789",
      fontFamily: "\"Nunito Sans\", sans-serif",
      fontSize: 12,
      margin: 10
    },
    secondaryAction: {
      backgroundColor: "white",
      borderTop: "1px solid #CBD5E0",
      color: "#73819B",
      fontFamily: "\"Nunito Sans\", sans-serif",
      fontSize: 12,
      paddingTop: 10,
      textAlign: "center"
    }
  },
  transition: "slide"
};
exports.defaultConfig = defaultConfig;