import {UGentArticle} from "../types/stores";
import {ENDPOINTS} from "../constant";
import {useSuspenseQuery} from "@tanstack/react-query";
import {useFocusNotifyOnChangeProps} from "../lib/hooks/useFocusNotifyOnChangeProps";
import { i18n } from "../lib/i18n";

export const useUGentQuery = () => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  return useSuspenseQuery<UGentArticle[], Error>({
    queryKey: ["news"],
    queryFn: async () => {
      var language = 'en';
      if(i18n.locale.startsWith("nl")) {
        language = 'nl';
      }

      const res = await fetch(`${ENDPOINTS.HYDRA_V2}/news/` + language + `.json`);
      const json = await res.json()
      return json.entries;
    },
    notifyOnChangeProps,
  });
};
