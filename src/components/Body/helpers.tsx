import React from "react";
import styled from "styled-components";
import { COURIER_CLIENT_HEADER } from "../../constants";
import { Icon } from "./styled";
//@ts-ignore
import courierIcon from "./courier-icon.svg";

export function sendClickedRequest(clientKey, clickedUrl) {
  if (clientKey && clickedUrl) {
    fetch(`${clickedUrl}`, {
      method: "POST",
      headers: {
        [COURIER_CLIENT_HEADER]: clientKey,
      },
    });
  };
}

export function getIcon(icon) {
  if (typeof icon === "string") {
    return <Icon src={icon} />;
  } else {
    return styled(icon || courierIcon)( props => ({
      flexShrink: 0,
      marginRight: "12.17px",
      objectFit: "contain",
      alignSelf: "center",
      padding: "2px",
      maxHeight: "35px !important",
      maxWidth: "35px !important",
      ...props.theme,
    }));
  }
}