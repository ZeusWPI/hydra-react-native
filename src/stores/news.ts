import { UGentArticle } from "../types/stores";
import { ENDPOINTS } from "../constant";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useFocusNotifyOnChangeProps } from "../lib/hooks/useFocusNotifyOnChangeProps";

export const useUGentQuery = () => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const UGentQuery = useSuspenseQuery<UGentArticle[], Error>({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await fetch(`${ENDPOINTS.HYDRA_V2}/news/nl.json`);
      const json = await res.json()
      return json.entries;
    },
    notifyOnChangeProps,
  });
  return UGentQuery;
};
