import React from "react";

import {
  Toast, ToastProvider, useToast,
} from "../src";
import { Button } from "./styled";

export default {
  title: "Example/Toast",
  component: Toast,
  argTypes:{
    position: {
      control: {
        type:"select",
        options:["top-right", "top-left", "bottom-right", "bottom-left"],
      },
    },
    hideProgressBar: {
      control: {
        type:"radio",
        options:[true, false],
      },
    },
    transition: {
      control: {
        type: "select",
        options: ["slide", "zoom", "bounce"],
      },
    },
  },
  args: {
    position: "top-right",
    hideProgressBar: true,
    transition: "slide",
    bodyText: "Click here to view more details",
  },
};


export function WithConfiguration({
  position, hideProgressBar, transition, bodyText,
}) {
  const theme = {
    container: {
      backgroundColor: "black",
    },
    toast: {
      backgroundColor: "black",
    },
    title: {
      color: "white",
    },
    body: {
      color: "white",
    },
  };
  const config = {
    position,
    hideProgressBar,
    transition,
    theme,
  };
  return (
    <ToastProvider config={config}>
      <WithConfigurationComponent body={bodyText} />
    </ToastProvider>
  );
}

function WithConfigurationComponent({ body }) {
  const [ toast ] = useToast();

  const onClick = () => {
    alert("You clicked!");
  };

  const notification = {
    title: "Your notification has been sent",
    body,
    icon: "https://app.courier.com/static/favicon/favicon-32x32.png",
    onClick,
  };

  return <Button onClick={() => toast(notification)}>Show Toast</Button>;
}