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
    position: "top-right", hideProgressBar: true, transition: "slide",
  },
};

function WrappedComponent() {
  const [ toast ] = useToast();
  const notification = {
    title: "Your notification has been sent!",
    body: "Click here to view more details",
    icon: "https://app.courier.com/static/favicon/favicon-32x32.png",
    clickAction: "https://app.courier.com",
  };
  return <Button onClick={() => toast(notification)}>Show Toast</Button>;
}

export function Default() {
  return (
    <ToastProvider>
      <WrappedComponent />
    </ToastProvider>
  );
}

export function WithConfiguration({
  position, hideProgressBar, transition,
}) {
  const onClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    alert(e.currentTarget.getAttribute("href"));
  };

  const theme = { toast: { backgroundColor: "red", borderRadius: 5 } };
  const config = {
    position, hideProgressBar,
    transition, theme, onClick,
  };
  return (
    <ToastProvider config={config}>
      <WrappedComponent />
    </ToastProvider>
  );
}