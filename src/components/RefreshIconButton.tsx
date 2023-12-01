import { IconButton } from "react-native-paper";
import { queryClient } from "../lib/queryclient";
import { QueryKey } from "@tanstack/react-query";

export const RefreshIconButton = (props: { queryKey: QueryKey }) => (
  <IconButton
    icon={"refresh"}
    size={24}
    onPress={() => {
      queryClient.invalidateQueries({ queryKey: props.queryKey });
    }}
  />
);
