const path = require('path'); // Mengimpor modul path dari Node.js untuk menangani dan menyelesaikan jalur file

module.exports = {
  i18n: {
    defaultLocale: 'en', // Bahasa default yang digunakan jika bahasa pengguna tidak terdeteksi
    locales: ['en', 'id'], // Daftar bahasa yang didukung oleh aplikasi
  },
  localePath: path.resolve('./public/locales'), // Lokasi absolut untuk folder yang berisi file translasi JSON
};
