import { useFocusEffect } from "@react-navigation/native";
import { NotifyOnChangeProps } from "@tanstack/query-core";
import { useCallback, useRef } from "react";

export function useFocusNotifyOnChangeProps(notifyOnChangeProps?: NotifyOnChangeProps) {
  const focusedRef = useRef(true);

  useFocusEffect(
    useCallback(() => {
      focusedRef.current = true;

      return () => {
        focusedRef.current = false;
      };
    }, [])
  );

  return () => {
    if (!focusedRef.current) {
      return [];
    }

    if (typeof notifyOnChangeProps === "function") {
      return notifyOnChangeProps();
    }

    // @ts-expect-error this is a copy of the docs, It works so I can't be bothered to find the right types for it
    return notifyOnChangeProps?.current;
  };
}
