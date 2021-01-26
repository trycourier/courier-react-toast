import { render } from "@testing-library/react";
import React from "react";
import { Toast } from "..";


describe("<ToastProvider />", () => {
  it("should show inbox component", () => {
    const { container } = renderToastComponent();
    const toastComponent = container.querySelector("[data-test-id=crt-toast-container]");
    expect(toastComponent).toBeFalsy();
  });
});

function renderToastComponent(){
  return render(<Toast />);
}