import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("mousedown", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("mousedown", handleClick, listenCapturing);
    },
    [handler, listenCapturing],
  );

  return ref;
}
