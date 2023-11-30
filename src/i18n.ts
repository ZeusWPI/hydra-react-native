import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import enTranslation from '../translations/en.json'
import nlTranslation from '../translations/nl.json'

// Alleen nodig om de Nederlandse varianten toe te voegen aan de translation file indien ze verschillen van de Engelse.
export const i18n = new I18n({
  en: enTranslation,
  nl: nlTranslation,
});

i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;
