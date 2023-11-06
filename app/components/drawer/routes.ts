import { IconProp } from "@fortawesome/fontawesome-svg-core";
import HomeScreen from "../../routes/overview";
import RestoMenu from "../../routes/resto";

declare type DrawerScreen = {
  element: () => React.JSX.Element,
  name: string;
  icon: IconProp // TODO: add ability to pass a jsx element as icon
}

export const routes: DrawerScreen[] = [
  {
    name: "Overview",
    element: HomeScreen,
    icon: "house",
  },
  {
    name: "Resto",
    element: RestoMenu,
    icon: "utensils"
  }
]
