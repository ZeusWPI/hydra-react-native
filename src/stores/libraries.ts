import { LibraryRequest } from "../types/stores";
import { ENDPOINTS } from "../constant";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useFocusNotifyOnChangeProps } from "../lib/hooks/useFocusNotifyOnChangeProps";

export const useLibrariesQuery = () => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const schamperQuery = useSuspenseQuery<LibraryRequest, Error>({
    queryKey: ["libraries"],
    queryFn: async () => {
      const res = await fetch(`${ENDPOINTS.LIBRARIES}/library_groups/main.json`);
      return res.json();
    },
    notifyOnChangeProps,
  });
  return schamperQuery;
};
