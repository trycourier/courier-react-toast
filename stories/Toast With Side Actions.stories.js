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

export function WithSideActions({ bodyText }) {
  return (
    <ToastProvider>
      <SideActionsComponent body={bodyText} />
    </ToastProvider>
  );
}

function SideActionsComponent({ body }) {
  const [ toast ] = useToast();
  const notification = {
    title: "Your notification has been sent!",
    body,
    options:{
      hideProgressBar: false,
    },
    data: {
      sideBarPrimaryClickAction: {
        href: "https://docs.courier.com",
        text: "Docs"
      },
      sideBarSecondaryClickAction: {
        href: "https://www.courier.com/blog",
        text: "Blog"
      }
    }
  };
  return <Button onClick={() => toast(notification)}>Show Toast</Button>;
}
