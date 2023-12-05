import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ViewStyle } from "react-native";

export declare type DrawerEntry = {
  element: () => React.JSX.Element;
  headerElements?: React.ReactNode[];
  name: string;
  icon: IconProp | ((props: { color: string; style: ViewStyle }) => React.JSX.Element);
};
