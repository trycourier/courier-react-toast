import { COURIER_CLIENT_HEADER } from "../../constants";

export function sendClickedRequest(clientKey, clickedUrl) {
  if (clientKey && clickedUrl) {
    fetch(`${clickedUrl}`, {
      method: "POST",
      headers: {
        [COURIER_CLIENT_HEADER]: clientKey,
      },
    });
  };
}