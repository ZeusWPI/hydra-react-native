import HomeScreen from "../../routes/overview";
import RestoMenu from "../../routes/resto";
import EventView from "../../routes/events";
import { DrawerEntry } from "../../types/drawer";
import SchamperView from "../../routes/schamper";
import { SchamperIcon } from "../icons/SchamperIcon";
import { i18n } from "../../lib/i18n";
import { UrgentFMView } from "../../routes/urgentfm";
import { UrgentFMIcon } from "../icons/UrgentFMIcon";
import { RefreshIconButton } from "../RefreshIconButton";
import NewsView from "../../routes/news";

export const routes: DrawerEntry[] = [
  {
    name: i18n.t("overview"),
    element: HomeScreen,
    headerElements: [],
    icon: "house",
  },
  {
    name: i18n.t("resto"),
    element: RestoMenu,
    headerElements: [],
    icon: "utensils",
  },
  {
    name: i18n.t("events"),
    element: EventView,
    headerElements: [],
    icon: "calendar-day",
  },
  {
    name: i18n.t("schamper"),
    element: SchamperView,
    headerElements: [<RefreshIconButton key="refresh" queryKey={["schamper"]} />],
    icon: SchamperIcon,
  },
  {
    name: "Urgent.fm",
    element: UrgentFMView,
    icon: UrgentFMIcon
  },
  {
    name: i18n.t("ugent_news"),
    element: NewsView,
    icon: "newspaper"
  }
];
