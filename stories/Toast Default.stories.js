import React from "react";

import { Toast, ToastProvider, useToast } from "../src";
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
  const [toast] = useToast();
  return <Button onClick={() => toast(body)}>Show Toast</Button>;
}

export function NoIcon({ bodyText }) {
  return (
    <ToastProvider
      clientKey="client-key"
      config={{
        icon: false,
      }}
    >
      <DefaultComponent body={bodyText} />
    </ToastProvider>
  );
}

export function NoTimer({ bodyText }) {
  return (
    <ToastProvider
      clientKey="client-key"
      config={{
        autoClose: false,
      }}
    >
      <DefaultComponent body={bodyText} />
    </ToastProvider>
  );
}
