import React, {
  useCallback, useEffect, useState,
} from "react";

import {
  Toast, ToastProvider, CourierTransport,
} from "../src";
import { Button } from "./styled";

export default {
  title: "Example/Toast",
  component: Toast,
  argTypes:{
    channel: {
      control: {
        type:"select",
        options:["template", "notification"],
      },
    },
    event: {
      control: {
        type:"select",
        options: ["published", "sent"],
      },
    },
  },
  args: {
    channel: "template",
    event: "published",
  },
};

export function WithCourierTransport({ event, channel }) {
  const [transport, setTransport] = useState(null);

  useEffect(() => {
    const courierTransport = new CourierTransport({
      apiKey: "test-api-key",
      clientKey: "test-client-key",
    });
    courierTransport.subscribe(channel, event, "test-client-key");
    setTransport(courierTransport);
  }, [channel, event]);

  const createTestEvent = useCallback(() => {
    transport.send({
      action: "notify",
      data: {
        channel,
        event,
        message: {
          title: "Success!",
          body: "We sent a toast with a websocket",
        },
      },
    });
  }, [channel, event, transport]);
  return (
    <ToastProvider transport={transport}>
      <CourierTransportExample createTestEvent={createTestEvent} />
    </ToastProvider>
  );
}

function CourierTransportExample({ createTestEvent }) {
  return <Button onClick={createTestEvent}>Send Event</Button>;
}