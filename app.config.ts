import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'hydra',
  name: 'Hydra',
  description: "Hydra gives you access to all the UGent info wherever you are"
});

