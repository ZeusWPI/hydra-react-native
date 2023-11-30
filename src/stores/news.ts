import {UGentArticle} from "../types/stores";
import {ENDPOINTS} from "../constant";
import {useSuspenseQuery} from "@tanstack/react-query";
import {useFocusNotifyOnChangeProps} from "../lib/hooks/useFocusNotifyOnChangeProps";
import {NativeModules, Platform} from "react-native";

export const useUGentQuery = () => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  return useSuspenseQuery<UGentArticle[], Error>({
    queryKey: ["news"],
    queryFn: async () => {

      // This will later be managed by the settings in the app
      var language = 'en';
      if((Platform.OS == "android" && NativeModules.I18nManager.localeIdentifier.startsWith("nl")) 
      || (Platform.OS == "ios" && NativeModules.SettingsManager.settings.AppleLocale.startsWith("nl"))) {
        language = 'nl';
      }
      const res = await fetch(`${ENDPOINTS.HYDRA_V2}/news/` + language + `.json`);
      const json = await res.json()
      return json.entries;
    },
    notifyOnChangeProps,
  });
};
