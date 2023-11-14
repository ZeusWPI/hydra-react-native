import { Article } from "../types/stores";
import { ENDPOINTS } from "../constant";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useFocusNotifyOnChangeProps } from "../lib/hooks/useFocusNotifyOnChangeProps";

export const useSchamperQuery = () => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const schamperQuery = useSuspenseQuery<Article[], Error>({
    queryKey: ["schamper"],
    queryFn: async () => {
      const res = await fetch(`${ENDPOINTS.HYDRA_V1}/schamper/daily_android.json`);
      return res.json();
    },
    notifyOnChangeProps,
  });
  return schamperQuery;
};
