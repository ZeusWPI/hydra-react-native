import { useSuspenseQuery } from "@tanstack/react-query";
import { useFocusNotifyOnChangeProps } from "../lib/hooks/useFocusNotifyOnChangeProps";
import { UrgentStatus } from "../types/stores";
import { ENDPOINTS } from "../constant";

export const useUrgentQuery = () => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const urgentQuery = useSuspenseQuery<UrgentStatus, Error>({
    queryKey: ["urgentStatus"],
    queryFn: async () => {
      const res = await fetch(`${ENDPOINTS.HYDRA_V2}/urgentfm/status.json`);
      return res.json();
    },
    notifyOnChangeProps,
  });

  return urgentQuery;
};
