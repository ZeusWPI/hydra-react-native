import HomeScreen from "../../routes/overview";
import RestoMenu from "../../routes/resto";
import EventView from "../../routes/events";
import { DrawerEntry } from "../../types/drawer";
import SchamperView from "../../routes/schamper";
import LibrariesView from "../../routes/libraries";
import { SchamperIcon } from "../icons/SchamperIcon";
import { i18n } from "../../lib/i18n";

export const routes: DrawerEntry[] = [
  {
    name: i18n.t("overview"),
    element: HomeScreen,
    icon: "house",
  },
  {
    name: i18n.t("resto"),
    element: RestoMenu,
    icon: "utensils",
  },
  {
    name: i18n.t("events"),
    element: EventView,
    icon: "calendar-day",
  },
  {
    name: i18n.t("schamper"),
    element: SchamperView,
    icon: SchamperIcon,
  },
  {
    name: "Libraries",
    element: LibrariesView,
    icon: "book",
  }
];
