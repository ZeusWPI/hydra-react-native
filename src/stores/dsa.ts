import {DSAEventStore} from "../types/stores";
import {ENDPOINTS} from "../constant";
import {useSuspenseQuery} from "@tanstack/react-query";
import {useFocusNotifyOnChangeProps} from "../lib/hooks/useFocusNotifyOnChangeProps";

export const useDSAQuery = () => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const dsaQuery = useSuspenseQuery<DSAEventStore[], Error>({
    queryKey: ["dsa_acts"],
    queryFn: async () => {
      const res = await fetch(`${ENDPOINTS.DSA_API}/activiteiten`);
      const json = await res.json();
      console.log(json);
      return json.page.entries;
    },
    notifyOnChangeProps,
  });

  return dsaQuery;
};