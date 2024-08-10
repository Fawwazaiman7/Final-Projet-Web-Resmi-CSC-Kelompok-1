import i18n from 'i18next'; // Mengimpor i18next untuk inisialisasi i18n
import { initReactI18next } from 'react-i18next'; // Mengimpor initReactI18next untuk integrasi dengan React
import Backend from 'i18next-http-backend'; // Mengimpor Backend untuk memuat file JSON dengan translasi
import LanguageDetector from 'i18next-browser-languagedetector'; // Mengimpor LanguageDetector untuk mendeteksi bahasa pengguna

// Opsi deteksi bahasa untuk LanguageDetector
const languageDetectorOptions = {
  order: ['querystring', 'cookie', 'localStorage', 'navigator'], // Urutan preferensi untuk mendeteksi bahasa pengguna
  lookupQuerystring: 'lng', // Parameter querystring yang akan digunakan untuk mendeteksi bahasa
  lookupCookie: 'i18next', // Nama cookie yang akan digunakan untuk mendeteksi bahasa
  lookupLocalStorage: 'i18nextLng', // Nama kunci localStorage yang akan digunakan untuk mendeteksi bahasa
  caches: ['localStorage', 'cookie'], // Tempat menyimpan preferensi bahasa untuk sesi mendatang
};

i18n
  .use(Backend) // Menggunakan Backend untuk memuat file translasi secara dinamis dari server
  .use(LanguageDetector) // Menggunakan LanguageDetector untuk mendeteksi bahasa pengguna
  .use(initReactI18next) // Integrasi dengan React
  .init({
    fallbackLng: 'en', // Bahasa yang digunakan jika bahasa pengguna tidak terdeteksi atau tidak didukung
    debug: true, // Menampilkan log debug untuk membantu pengembangan
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Lokasi file JSON yang berisi translasi, diatur sesuai dengan bahasa dan namespace
    },
    detection: languageDetectorOptions, // Opsi deteksi bahasa yang telah didefinisikan sebelumnya
    interpolation: {
      escapeValue: false, // Pengaturan ini mencegah escaping pada nilai interpolasi (berguna jika menggunakan React)
    },
  });

export default i18n; // Mengekspor konfigurasi i18n yang telah diinisialisasi untuk digunakan di seluruh aplikasi
