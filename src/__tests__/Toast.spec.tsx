import {
  render, fireEvent, screen, waitFor,
} from "@testing-library/react";
import React from "react";
import {
  Toast, ToastProvider, useToast,
} from "..";

jest.mock("styled-components", () => ({
  __esModule: true,
  ...jest.requireActual("styled-components"),
  createGlobalStyle: () => () => "Global Style",
}));


describe("<Toast />", () => {
  it("should not render toast component", () => {
    const { container } = renderToastComponent();
    const toastComponent = container.querySelector("[data-test-id=crt-toast-container]");
    expect(toastComponent).toBeFalsy();
  });
});

function Component({ onClick }) {
  const [ toast ] = useToast();
  const notification = {
    title: "Your notification has been sent",
    body: "Click here to view more details",
    icon: "https://app.courier.com/static/favicon/favicon-32x32.png",
    onClick,
  };
  return <button onClick={() => toast(notification)}>Show Toast</button>;
}


describe("<ToastProvider />", () => {
  it("should render toast component", async () => {
    const onClick = jest.fn();
    providerRenderer(<Component onClick={onClick} />, {});
    fireEvent.click(screen.getByText("Show Toast"));
    await waitFor(() => {
      expect(screen.getByText("Your notification has been sent")).toBeInTheDocument();
    });
  });
});

function renderToastComponent(){
  return render(<Toast />);
}

function providerRenderer(ui, { providerProps, ...renderOptions }: {providerProps?: object}){
  return render(
    <ToastProvider {...providerProps}>{ui}</ToastProvider>,
    renderOptions,
  );
}