import { useEffect, useRef } from "react";

export default function useKey(key, callback, keyEventType = "keypress") {
  const callBackRef = useRef(callback);

  useEffect(() => {
    callBackRef.current = callback;
  });

  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callBackRef.current(event);
      }
    }

    document.addEventListener(keyEventType, handle);
    return () => document.removeEventListener(keyEventType, handle);
  }, [key, keyEventType]);
}
