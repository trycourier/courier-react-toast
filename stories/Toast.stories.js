import React from "react";

import {
  Toast, ToastProvider, useToast,
} from "../src";
import { Button } from "./styled";

export default {
  title: "Example/Toast",
  component: Toast,
  args: {
    bodyText: "One API for notifications!",
  },
};
export function Default({ bodyText }) {
  return (
    <ToastProvider clientKey="client-key">
      <DefaultComponent body={bodyText} />
    </ToastProvider>
  );
}

function DefaultComponent({ body }) {
  const [ toast ] = useToast();
  const onClick = () => {
    alert("You clicked!");
  };
  const notification = {
    title: "Courier",
    body,
    data: {
      clickAction: "https://app.courier.com",
      clickedUrl: "https://api.courier.com/something/send",
    },
    options:{
      hideProgressBar: false,
    },
    onClick,
  };
  return <Button onClick={() => toast(notification)}>Show Toast</Button>;
}
