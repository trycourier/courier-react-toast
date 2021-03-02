[![Tests](https://github.com/trycourier/courier-react-toast/actions/workflows/test.yml/badge.svg)](https://github.com/trycourier/courier-react-toast/actions/workflows/test.yml)

# Courier React Toast

<img src="https://user-images.githubusercontent.com/16184018/109372638-6ebc6a00-785f-11eb-876a-e33260566c80.gif" width=300>

# Table of Contents

1. [Overview](#overview)
2. [Courier Integration](#courier-integration)
3. [Client Install](#client-install)
4. [Toast Provider](#toast-provider)
5. [Using Transport](#using-transport)
6. [Using Hook](#using-hook)
7. [Options](#options)
8. [Themeing](#themeing)

## [Overview](#overview)

## What is Courier React Toast?

Courier React Toast aims to be the easiest way to create in-app notifications. With a simple integration and straight forward API we make it easy for anyone to integrate fast.

### What is a `toast`?

A toast is just a buzz word for a notification that happens in-app. The appearance is usually that of a rectangle (which is where the toast name comes from).

### How does @trycourier/react-toast work?

There are two ways to use this library:

1. With Courier as a transport provider
2. A standalone toast interface

You can use the [Courier Push integration](https://app.courier.com/integrations/courier) to create a notification through the designer and send a notification to a specific channel/event from an API request. This will trigger the toast to show wherever the client is running and listening for that same channel/event.

A channel/event combination is simply a stream on which a particular client is listening for toast notifications. A client must be subscribed to a channel and event in order to receive a notification.

If you do not need a push provider such as Courier you can skip ahead to instructions on how to use the standalone toast <a href="#using-hook">interface<a>

Below is a step by step setup to use `@trycourier/react-toast` using Courier as a Push Provider.

<hr>

## [Courier Integration](#courier-integration)

We will need to install the [Courier Push Provider](https://app.courier.com/integrations/courier) to trigger a toast from an API request.
Make sure to copy the Client Key from the integration page after installing.

<img src="https://user-images.githubusercontent.com/16184018/109491559-8f8ee600-7a3e-11eb-9aa4-742639274fde.png" width="400">

Next, create your notification on the Courier Push Designer

<img src="https://user-images.githubusercontent.com/16184018/109492317-a41fae00-7a3f-11eb-9368-fd424699d640.png" width="400">

Once your notification is created, you also have the option to map an EVENT_ID to a specific notification. This will allow you to use the Courier Designer for test sending.
To do this access the settings pane near the top left corner next to the "Notifications" label. Navigate to "Events" and select an event or create a new one to send the toast on.

<img src="https://user-images.githubusercontent.com/16184018/109494158-5d7f8300-7a42-11eb-96e8-078023daa14d.png" width="400">

## Client Setup

Now that you have a notification ready to be sent lets setup the client to listen for the notification and invoke it when triggered.

## [Client Install](#client-install)

```js
yarn add @trycourier/react-toast
```

<hr>

## [Toast Provider](#toast-provider)

In order for the `Toast` component to be placed in the dom you will need to use the `ToastProvider`. This will handle context and give us access to the `show` function.

> The component you want to listen to toasts from must be a child of the `ToastProvider`.
> Check [here](https://reactjs.org/docs/context.html#contextprovider) for more information on this concept.

```js
//App.js
import { ToastProvider } from "@trycourier/react-toast";

function App() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}
```

## [Using Transport](#using-transport)

Now the toast component is in the dom but it will stay hidden until invoked by something. There are two ways to show the component.

1. Using the courier `transport` which automatically handles the listening, and invocation through web sockets
2. Using the <a href="#using-toast">`useToast` hook</a>

### Using the Courier Transport

```js
import { ToastProvider, CourierTransport } from "@trycourier/react-toast";
const courierTransport = new CourierTransport({
  //You got this from the Courier Integrations page
  clientKey: "CLIENT_KEY",
});
function MyComponent() {
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
}
```

That is it! Now are ready to send your notification and see the result on the client
You can use the Send tab for a quick test or a library of your choice, for simplicity sake we will use the cURL command provided for us from Courier.

```bash
curl --request POST \
--url https://api.courier.com/send \
--header 'Authorization: Bearer ******************' \
--data-urlencode event=NEW_SUBSCRIBER \
--data-urlencode recipient=MY_RECIPIENT \
--data-urlencode 'data={}' \
--data-urlencode 'profile={"courier":{"channel":"YOUR_CHANNEL"'
```

<hr>

## [Using Hook](#using-hook)

If you do not want to use Courier Push to trigger a toast notification then you can always invoke the toast locally with the `useToast` hook. Below is an example creating a notification from the client rather than creating it from a transport. Do not forget to wrap this component with a `ToastProvider` somewhere up the component hierarchy chain.

```js
import { useToast } from "@trycourier/react-toast";

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

A configuration object is passed to the `ToastProvider` as the `config` prop to set options such as styles, positioning, and transitions for the `Toast` component. See below for a list of available options.

All `ToastProvider` configurations are optional.
| Name | Type | Description |
|-----------------|-------------|----------------------------------------------------------------------------------------|
| position | string | The location of where the toast component will show |
| hideProgressBar | boolean | Optionally show or hide the progress bar |
| transition | boolean | Set the transition effect for the toast coming into the window and going out |
| theme | [StyleObject](https://github.com/trycourier/courier-react-toast/blob/main/src/providers/types.ts#L16) | Customize the styles of the toast component with a StyleObject. See below for details. |

### [Custom Styling](#themeing)

You can optionally provide custom styling to each component of the `Toast` when it is shown. Pass a `theme` object to the `ToastProvider` to use your own custom styling. The components available for styling are: `root`, `toast`, `body`, `title`, `content`, `icon`, `progressBar`, and `sidebar`.

You can use this table and chart to match the style key to the placement on the component
| Key | Color Code | Description |
|-------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| root | N/A | The entire exported component which includes multiple toasts. Use this key for things like global fonts, or controlling the position of multiple toasts at a time |
| toast | green | The toast component which will be rendered in front of other Dom elements |
| body | blue | The container for the main area of the toast including the title and message text(content) |
| title | yellow | The text inside the body element above the message content |
| content | orange | The text inside the body element which will be pertaining to the details of the message |
| icon | red | The image pertaining to the toast |
| progressBar | N/A | The bar that moves across the toast to indicate when it will go away unless interacted by with the user. |
| sidebar | brown | The side of the toast which will contain the actions for the user |

<img src="https://user-images.githubusercontent.com/16184018/109500964-cae3e180-7a4b-11eb-80ad-1fc18324938b.png" width=300>

The style configuration objects should be defined with Style Objects. Style Objects can accept CSS Pseudo selectors for more advanced styling. See [here](https://styled-components.com/docs/advanced#style-objects) for more info or check below for advanced usage examples.

> Styles will be merged with defaults so if you do not explicitly override a style it will not be changed.

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
