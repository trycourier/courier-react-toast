# Courier React Toast

## Install

```js
yarn add courier-react-toast
```

## Components

### ToastProvider

Imports

```js
import { ToastProvider, useToast } from "react-courier-toast";
```

Basic Usage

```js
function Wrapper() {
  const config = {
    //...your config here
  };
  return (
    <ToastProvider config={config}>
      <App />
    </ToastProvider>
  );
}
```

```js
function Component() {
  const [show] = useToast();
  return <button onClick={() => show("You just made 🍞")}></button>;
}
```

Once the application is wrapped using the Provider the Toast component is injected into the dom. But it will not be show unless invoked from the `show` callback.
A configuration object is passed to the ToastProvider to set options such as styles, positioning, and transitions for the Toast component. See below for a list of available configurations.

### Options

**position**:
The location of where the toast component will show
`top-right` |`top-center`|`top-left`|`bottom-right`|`bottom-center`|`bottom-left`

**hideProgressBar**:
Optionally show or hide the progress bar
`true`|`false`

**transition**:
Set the transition effect for the toast coming into the window and going out.
`slide`|`zoom`|`bounce`

**theme**:
Set the styling of the toast by using one of the provided themes or use your own.
`dark`|`light`|`StyleObject`

### Custom Styling

You can provide custom styling to each part of the Toast component. The styles are split up into three main sections. The `container` component, the `toast`, and the `body`. You can provide styles optionally to these 3 classNames. An example usage of custom styling is show below

```js
const theme = {
  container: {
    backgroundColor: "black",
    borderRadius: 5,
    height: "40px",
    width: "200px",
    boxShadow: "0px 5px 20px 2px rgba(0,0,0,0.60)",
  },
};
function Wrapper() {
  const config = { theme };
  return (
    <ToastProvider config={config}>
      <App />
    </ToastProvider>
  );
}
```

## useToast

...coming
