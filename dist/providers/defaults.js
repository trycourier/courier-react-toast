"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = void 0;
var defaultConfig = {
  hideProgressBar: true,
  position: "top-right",
  theme: {
    container: {
      a: {
        textDecoration: "none"
      },
      fontFamily: "\"Nunito Sans\", sans-serif"
    },
    toast: {
      height: 50,
      backgroundColor: "white",
      boxShadow: "rgba(157, 55, 137, 0.2) 0px 4px 12px",
      borderRadius: 5,
      color: "black",
      margin: 10
    },
    title: {
      fontWeight: "bold",
      color: "rgb(36, 50, 75)"
    },
    body: {
      fontSize: 14,
      color: "rgb(115, 129, 155)",
      margin: 0
    },
    icon: {
      height: 30,
      width: 30
    }
  },
  transition: "slide"
};
exports.defaultConfig = defaultConfig;