import React, {
  useCallback, useEffect, useState,
} from "react";

import {
  Toast, ToastProvider, CourierTransport,
} from "../src";
import {
  Button, Input, Label,
} from "./styled";

export default {
  title: "Example/Toast",
  component: Toast,
};

export function WithCourierTransport({ event, channel }) {
  const [transport, setTransport] = useState(null);

  useEffect(() => {
    const courierTransport = new CourierTransport({
      apiKey: "test-api-key",
      clientKey: "test-client-key",
    });
    setTransport(courierTransport);
  }, []);

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
  const unsubscribe = useCallback((channel, event) => {
    transport.unsubscribe(channel, event);
  }, [transport]);
  const subscribe = useCallback((channel, event) => {
    transport.subscribe(channel, event);
  }, [transport]);
  return (
    <ToastProvider transport={transport}>
      <CourierTransportExample
        subscribe={subscribe}
        unsubscribe={unsubscribe}
        channel={channel}
        event={event}
        createTestEvent={createTestEvent} />
    </ToastProvider>
  );
}

function CourierTransportExample({
  createTestEvent, subscribe, unsubscribe,
  channel:_channel, event: _event,
}) {
  const [subScribeChannel, setSubscribeChannel] = useState(_channel);
  const [subscribeEvent, setSubscribeEvent] = useState(_event);
  const [unsubscribeChannel, setUnsubscribeChannel] = useState(_channel);
  const [unsubscribeEvent, setUnsubscribeEvent] = useState(_event);
  return (<div>
    <Button onClick={createTestEvent}>Send Event</Button>
    <div style={{ display:"flex" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
        maxWidth: 200,
        marginRight: 20,
      }}>
        <Label>Channel</Label>
        <Input placeholder="Channel" value={subScribeChannel} onChange={(e) => setSubscribeChannel(e.target.value)}/>
        <Label>Event</Label>
        <Input placeholder="Event" value={subscribeEvent} onChange={(e) => setSubscribeEvent(e.target.value)}/>
        <Button onClick={() => subscribe(subScribeChannel, subscribeEvent)}>Subscribe</Button>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
        maxWidth: 200,
      }}>
        <Label>Channel</Label>
        <Input placeholder="Channel" value={unsubscribeChannel} onChange={(e) => setUnsubscribeChannel(e.target.value)}/>
        <Label>Event</Label>
        <Input placeholder="Event" value={unsubscribeEvent} onChange={(e) => setUnsubscribeEvent(e.target.value)}/>
        <Button onClick={() => unsubscribe(unsubscribeChannel, unsubscribeEvent)}>Unsubscribe</Button>
      </div>
    </div>
  </div>);
}