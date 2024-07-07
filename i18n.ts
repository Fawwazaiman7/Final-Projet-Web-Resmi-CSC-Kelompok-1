// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const languageDetectorOptions = {
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
};

i18n
  .use(Backend)
  .use(new LanguageDetector(null, languageDetectorOptions))
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: true,
    },
  })
  .then(() => {
    console.log("i18next initialized successfully");
  })
  .catch(err => console.error("i18next initialization failed:", err));

i18n.on('languageChanged', lng => {
  console.log('Language changed to', lng);
});

i18n.on('loaded', loaded => {
  console.log('Resources loaded:', loaded);
});

i18n.on('failedLoading', (lng, ns, msg) => {
  console.log('Failed loading:', lng, ns, msg);
});

export default i18n;
