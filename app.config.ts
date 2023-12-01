import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: "hydra",
  name: "Hydra",
  version: "1.0.0",
  description: "Hydra gives you access to all the UGent info wherever you are",
  orientation: "portrait",
  icon: "./assets/logo/ugent.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    backgroundColor: "#1e64c8",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
    bundleIdentifier: "be.ugent.zeus.hydra",
  },
  android: {
    package: "be.ugent.zeus.hydra",
    adaptiveIcon: {
      foregroundImage: "./assets/logo/ugent.png",
      backgroundColor: "#ffffff",
    },
  },
});
