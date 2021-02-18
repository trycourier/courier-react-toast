import React from "react";

import {
  Toast, ToastProvider, useToast,
} from "../src";
import { Button } from "./styled";

export default {
  title: "Example/Toast",
  component: Toast,
  args: {
    bodyText: "Click here to view more details",
  },
};
export function Default({ bodyText }) {
  return (
    <ToastProvider>
      <DefaultComponent body={bodyText} />
    </ToastProvider>
  );
}

function DefaultComponent({ body }) {
  const [ toast ] = useToast();
  const notification = {
    title: "Your notification has been sent!",
    body,
    clickAction: "https://app.courier.com",
    options:{
      hideProgressBar: false,
    },
  };
  return <Button onClick={() => toast(notification)}>Show Toast</Button>;
}