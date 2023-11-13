import { IconProp } from "@fortawesome/fontawesome-svg-core";
import HomeScreen from "../../routes/overview";
import RestoMenu from "../../routes/resto";
import EventView from "../../routes/events";

declare type DrawerScreen = {
  element: () => React.JSX.Element,
  name: string;
  icon: IconProp
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
  },
  {
    name: "Events",
    element: EventView,
    icon: "calendar-day"
  }
]
