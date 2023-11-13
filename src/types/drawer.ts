import { IconProp } from "@fortawesome/fontawesome-svg-core";

export declare type DrawerEntry = {
  element: () => React.JSX.Element;
  name: string;
  icon: IconProp;
};
