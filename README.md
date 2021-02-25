[![Tests](https://github.com/trycourier/courier-react-toast/actions/workflows/test.yml/badge.svg)](https://github.com/trycourier/courier-react-toast/actions/workflows/test.yml)

# Courier React Toast

## Install

```js
yarn add courier-react-toast
```

## Usage

`courier-react-toast` uses a context provider in order to inject the `Toast` component in the dom and to expose a function to show this component. `ToastProvider` relies on the context feature of React to pass things down to the components, so you need to make sure that `ToastProvider` is a parent of the components you are trying to show the toast in. You can learn more about this [here](https://reactjs.org/docs/context.html#contextprovider)
### Demo
https://codesandbox.io/s/crt-vty71

### Basic Example

```js
//App.js
import { ToastProvider } from "react-courier-toast";

function App() {
  const config = {
    //...your config here
    //See below for custom config options
  };

  return (
    <ToastProvider config={config}>
      <App />
    </ToastProvider>
  );
}
```

```js
// Child component of App.js
import { useToast } from "react-courier-toast";

function MyComponent() {
  const [show] = useToast();

  return <button onClick={() => show("You just made 🍞")}></button>;
}
```

Once the application is wrapped using the Provider, the Toast component is injected into the dom. But it will not be show unless invoked from the `show()` function.

A configuration object is passed to the `ToastProvider` to set options such as styles, positioning, and transitions for the `Toast` component. See below for a list of available configurations.

<hr>

## Provider Config Options

All `ToastProvider` configurations are optional.

**position**:
The location of where the toast component will show
`top-right`(default) | `top-center` | `top-left` | `bottom-right` | `bottom-center` | `bottom-left`

**hideProgressBar**:
Optionally show or hide the progress bar
`true` | `false`(default)

**transition**:
Set the transition effect for the toast coming into the window and going out.
`slide`(default) | `zoom` | `bounce`

**theme**:
Set the styling of the toast by using one of the provided themes or use your own.
`dark` | `light`(default) | `StyleObject`

### Custom Styling

You can optionally provide custom styling to each component of the `Toast` when it is shown. Pass a `theme` object to the `ToastProvider` to use your own custom styling. The components available for styling are: `root`, `toast`, `body`, `title`, `content`, `icon`, `progressBar`, `dismiss`, `dismissButton`. The style configuration objects should be defined with JSS Objects. Keep in mind JSS Objects can accept CSS Pseudo selectors for more advanced styling. See [here](https://cssinjs.org/jss-syntax?v=v10.5.1) for more info.

An example usage of custom styling is shown below:

```js
//App.js
const theme = {
  toast: {
    backgroundColor: "black",

    borderRadius: 5,

    height: 40,

    width: 200,

    boxShadow: "0px 5px 20px 2px rgba(0,0,0,0.60)",
  },
  title: {
    color: "white",
  },
  body: {
    color: "white",
  },
  dismissButton: {
    color: "black",
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

## useToast
