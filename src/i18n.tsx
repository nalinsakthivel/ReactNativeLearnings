import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../src/values/en.json';
import ta from '../src/values/ta.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  preload: false,
  defaultNS: 'translation',

  fallbackLng: 'ta',
  resources: {
    en: {
      translation: en,
    },
    ta: {
      translation: ta,
    },
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
