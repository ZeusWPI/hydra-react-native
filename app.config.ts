import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'hydra',
  name: 'Hydra',
  version: "1.0.0",
  description: "Hydra gives you access to all the UGent info wherever you are",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: false
  },
  android: {
  package: "be.ugent.zeus.hydra",
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#ffffff"
    }
  },
});

