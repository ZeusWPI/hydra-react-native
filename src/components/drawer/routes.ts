import HomeScreen from "../../routes/overview";
import RestoMenu from "../../routes/resto";
import EventView from "../../routes/events";
import { DrawerEntry } from "../../types/drawer";

export const routes: DrawerEntry[] = [
  {
    name: "Overview",
    element: HomeScreen,
    icon: "house",
  },
  {
    name: "Resto",
    element: RestoMenu,
    icon: "utensils",
  },
  {
    name: "Events",
    element: EventView,
    icon: "calendar-day",
  },
];
