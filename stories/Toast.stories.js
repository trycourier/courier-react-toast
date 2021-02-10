import React, {
  useCallback, useEffect, useState,
} from "react";

import {
  Toast, ToastProvider, useToast, CourierTransport,
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


export function WithConfiguration({
  position, hideProgressBar, transition, bodyText,
}) {
  const theme = {
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

export function WithCourierTransport() {
  const [transport, setTransport] = useState(null);

  useEffect(() => {
    const courierTransport = new CourierTransport({
      apiKey: "test-api-key",
      //TenantId
      clientKey: "test-client-key",
    });

    courierTransport.subscribe("my-channel");
    setTransport(courierTransport);
  }, []);

  const createTestEvent = useCallback(() => {
    transport.send({
      channel: "my-channel",
      data: {
        title: "Success!",
        body: "We sent a toast with a websocket",
      },
    });
  }, [transport]);
  return (
    <ToastProvider transport={transport}>
      <CourierTransportExample createTestEvent={createTestEvent} />
    </ToastProvider>
  );
}

function CourierTransportExample({ createTestEvent }) {
  return <Button onClick={createTestEvent}>Send Event</Button>;
}