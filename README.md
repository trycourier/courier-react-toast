[![Tests](https://github.com/trycourier/courier-react-toast/actions/workflows/test.yml/badge.svg)](https://github.com/trycourier/courier-react-toast/actions/workflows/test.yml)

# Courier React Toast

<img src="https://user-images.githubusercontent.com/16184018/109372638-6ebc6a00-785f-11eb-876a-e33260566c80.gif" width=300>

# Table of Contents

1. [Overview](#overview)
2. [Courier Integration](#courier-integration)
3. [Client Install](#client-install)
4. [Usage](#usage)
5. [Toast Provider](#toast-provider)
6. [Transport](#transport)
7. [Options](#options)
8. [Themeing](#themeing)

## [Overview](#overview)

## What is Courier React Toast?

Courier React Toast aims to be the easiest way to create in-app notifications. With a simple integration and straight forward API we make it easy for anyone to integrate fast.

### What is a `toast`?

A toast is just a buzz word for a notification that happens in app. The appearance is usually that of a small rectangle which is where the toast name comes from.

### How does courier-react-toast work?

There are two ways to use this library:

1. With Courier as a transport provider
2. A standalone toast interface

You can use the [Courier Push integration](https://app.courier.com/integrations/courier) to create a notification through the designer and send a notification to a specific channel/event from an API request which will then trigger the toast to show wherever the client is running and listening for that same channel/event.

A channel/event combination is simply a stream on which a particular client is listening for toast notifications. A client must be [subscribed](#subscriptions) to a channel and event in order to receive a notification.

If you do not need a push provider such as Courier you can skip ahead to instructions on how to use the standalone toast [interface](#standalone).

Go through the guide below to get started with `courier-react-toast` using Courier as Push Provider

<hr>

## [Courier Integration](#courier-integration)

We will need to install the [Courier Push Provider](https://app.courier.com/integrations/courier) to trigger `courier-react-toast` from an API request.
Make sure to copy the Client Key from the integration page

<img src="https://user-images.githubusercontent.com/16184018/109491559-8f8ee600-7a3e-11eb-9aa4-742639274fde.png" width="400">

Create your notification on the Courier Push Designer

<img src="https://user-images.githubusercontent.com/16184018/109492317-a41fae00-7a3f-11eb-9368-fd424699d640.png" width="400">

Once your notification is created, create an event to send the notification on. You can access the settings pane near the top left corner next to the "Notifications" label. Navigate to "Events" and select an event or create a new one to send the toast on.

<img src="https://user-images.githubusercontent.com/16184018/109494158-5d7f8300-7a42-11eb-96e8-078023daa14d.png" width="400">

## Client Setup

Now that you have a notification ready to be sent lets setup the client to listen for the notification.

## [Client Install](#client-install)

```js
yarn add courier-react-toast
```

<hr>

## [Toast Provider](#toast-provider)

In order for the `courier-react-toast` component to be placed in the dom you will need to use the `ToastProvider`. This will handle context and give use access to helper functions.
Note: The component you want to listen to toasts from must be a child of the `ToastProvider`. Check [here](https://reactjs.org/docs/context.html#contextprovider) for more information on this concept.

```js
//App.js
import { ToastProvider } from "react-courier-toast";

function App() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}
```

## [Transport](#transport)

Now the toast component is in the dom, but we have to make it listen for something

```js
import { Toast, ToastProvider, CourierTransport } from "../src";
const courierTransport = new CourierTransport({
  clientKey: "{{CLIENT_KEY}}",
});
useEffect(() => {
  courierTransport.subscribe("YOUR_CHANNEL", "YOUR_EVENT");
  // It is good practice to unsubscribe on component unmount
  return () => courierTransport.unsubscribe("YOUR_CHANNEL", "YOUR_EVENT");
}, []);
return (
  <ToastProvider transport={transport}>
    <MyApp />
  </ToastProvider>
);
```

That is it! Now are ready to send your notification and see the result on the client
You can use the library of your choice, but for simplicity sake we will use CURL.

```bash
curl --request POST \
--url https://api.courier.com/send \
--header 'Authorization: Bearer ******************' \
--data-urlencode event=NEW_SUBSCRIBER \
--data-urlencode recipient=bc9a6447-2b17-4905-bae8-84823d637358 \
--data-urlencode 'data={}' \
--data-urlencode 'profile={"courier":{"channel":"YOUR_CHANNEL"}}'
```

## [useToast](#standalone)

If you do not want to use Courier Push to trigger a toast notification remotely then you can always invoke the toast locally with the `useToast` hook. Here is an example creating a notification from the same environment. Do not forget to wrap this component with a `ToastProvider` somewhere up the component hierarchy chain.

```js
import { useToast } from "react-courier-toast";

function MyComponent() {
  //We can access this because the parent is a `ToastProvider`
  const [show] = useToast();

  return (
    <button onClick={() => show("You just made a notification 🎉")}></button>
  );
}
```

<hr>

## [Provider Config Options](#options)

A configuration object is passed to the `ToastProvider` to set options such as styles, positioning, and transitions for the `Toast` component. See below for a list of available configurations.

All `ToastProvider` configurations are optional.
| Name | Type | Description |
|-----------------|-------------|----------------------------------------------------------------------------------------|
| position | string | The location of where the toast component will show |
| hideProgressBar | boolean | Optionally show or hide the progress bar |
| transition | boolean | Set the transition effect for the toast coming into the window and going out |
| theme | StyleObject | Customize the styles of the toast component with a StyleObject. See below for details. |

### [Custom Styling](#themeing)

You can optionally provide custom styling to each component of the `Toast` when it is shown. Pass a `theme` object to the `ToastProvider` to use your own custom styling. The components available for styling are: `root`, `toast(green)`, `body(blue)`, `title(yellow)`, `content(orange)`, `icon(red)`, `progressBar(bottom of toast)`, `sidebar(brown)`.
You can use this chart to match the style key to the placement on the component

<img src="https://user-images.githubusercontent.com/16184018/109500964-cae3e180-7a4b-11eb-80ad-1fc18324938b.png" width=300>

The style configuration objects should be defined with Style Objects. Style Objectscan accept CSS Pseudo selectors for more advanced styling. See [here](https://styled-components.com/docs/advanced#style-objects) for more info.
Note: Styles will be merged with defaults so if you do not explicitly override a style it will not be changed.

An example usage of custom styling is shown below:

```js
//App.js
const theme = {
  toast: {
    backgroundColor: "black",
    borderRadius: 5,
    height: 40,
    boxShadow: "0px 5px 20px 2px rgba(0,0,0,0.60)",
  },
  title: {
    color: "white",
  },
  body: {
    color: "white",
  },
  sidebar: {
    background: "black",
  },
};

function App() {
  const config = { theme };
  return (
    <ToastProvider config={config}>
      <App />
    </ToastProvider>
  );
}
```

Custom progress bar, with an on hover:

```js
//App.js
const theme = {
  progressBar: {
    background: "rgb(157, 55, 137)",
    height: 3,
    bottom: 0,
  },
  sidebar: {
    details: {
      ":hover": {
        opacity: 0.5,
      },
    },
    dismiss: {
      //All normal css pseudo selectors will work here
      ":hover": {
        opacity: 0.5,
      },
    },
  },
};

function App() {
  const config = { theme };
  return (
    <ToastProvider config={config}>
      <App />
    </ToastProvider>
  );
}
```

Applying styles to the root component (All toasts)

```js
//App.js
const theme = {
  root: {
    fontFamily: "Arial",
  },
};

function App() {
  const config = { theme };
  return (
    <ToastProvider config={config}>
      <App />
    </ToastProvider>
  );
}
```
