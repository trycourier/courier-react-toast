import { useEffect } from "react";
import { COURIER_CLIENT_HEADER } from "../constants";

export function useListenForTransportEvent(transport, clientKey, handleToast) {
  useEffect(() => {
    if (!transport) {
      return;
    }

    transport.listen(async (courierEvent) => {
      const courierData = courierEvent?.data?.data;

      if (clientKey && courierData?.deliveredUrl) {
        fetch(`${courierData?.deliveredUrl}`, {
          method: "POST",
          headers: {
            [COURIER_CLIENT_HEADER]: clientKey,
          },
        });
      }

      handleToast(courierEvent?.data);
    });
  }, [transport]);
}