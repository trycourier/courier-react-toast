[![Test](https://github.com/trycourier/courier-react-toast/actions/workflows/test.yml/badge.svg)](https://github.com/trycourier/courier-react-toast/actions/workflows/test.yml)

# Courier React Toast

## Install

```js
yarn  add  courier-react-toast
```

## Usage

`courier-react-toast` uses a context provider in order to inject the `Toast` component in the dom and to expose a function to show it. `ToastProvider` relies on the context feature of React to pass things down to the components, so you need to make sure that `ToastProvider` is a parent of the components you are trying to show the toast in. You can learn more about this [here](https://reactjs.org/docs/context.html#contextprovider)

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
function MyComponent() {
  const [show] = useToast();

  return <button onClick={() => show("You just made 🍞")}></button>;
}
```

Once the application is wrapped using the Provider the Toast component is injected into the dom. But it will not be show unless invoked from the `show()` function.

A configuration object is passed to the `ToastProvider` to set options such as styles, positioning, and transitions for the `Toast` component. See below for a list of available configurations.

<hr>

## Provider Config Options

**position**:
The location of where the toast component will show
`top-right` | `top-center` | `top-left` | `bottom-right` | `bottom-center` | `bottom-left`

**hideProgressBar**:
Optionally show or hide the progress bar
`true` | `false`

**transition**:
Set the transition effect for the toast coming into the window and going out.
`slide` | `zoom` | `bounce`

**theme**:
Set the styling of the toast by using one of the provided themes or use your own.
`dark` | `light` | `StyleObject`

### Custom Styling

You can optionally provide custom styling to each component of the `Toast`. The available components for styling are: `root`, `toast`, `body`, `title`, `content`, `icon`, `progressBar`, `dismiss`, `dismissButton`. The style configuration objects should be definied with JSS Objects. This is the same pattern as popular libraries such as `material-ui`, and `styled-components`.
An example usage of custom styling is show below. Because there are no high level components exposed there is no need for interpolation with props, just a simple object. Keep in mind JSS Objects can accept CSS Pseudo selectors for more advanced styling. See [here](https://cssinjs.org/jss-syntax?v=v10.5.1) for more info.

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
