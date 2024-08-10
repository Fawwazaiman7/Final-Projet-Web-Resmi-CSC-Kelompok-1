import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/LanguageSwitcher/LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Hook untuk translasi dan penggantian bahasa
  const router = useRouter();
  const [mounted, setMounted] = useState(false); // State untuk memeriksa apakah komponen telah di-mount

  const clearLanguagePreference = useCallback(() => {
    localStorage.removeItem("preferredLanguage"); // Bersihkan preferensi bahasa saat window akan dimuat ulang
  }, []);

  const changeLanguage = useCallback((lng: string, initialLoad: boolean = false) => {
    i18n.changeLanguage(lng); // Ganti bahasa dengan i18n
    localStorage.setItem("preferredLanguage", lng); // Simpan preferensi bahasa ke localStorage

    if (!initialLoad) {
      router.push(router.pathname, router.asPath, { locale: lng }); // Ganti halaman untuk mengganti locale
    }
  }, [i18n, router]);

  useEffect(() => {
    setMounted(true); // Menandakan bahwa komponen telah di-mount

    const browserLanguage = navigator.language.split('-')[0]; // Ambil bahasa dari browser
    const supportedLanguages = ["en", "id"]; // Bahasa yang didukung
    const preferredLanguage = localStorage.getItem("preferredLanguage");

    if (preferredLanguage && supportedLanguages.includes(preferredLanguage)) {
      changeLanguage(preferredLanguage, true); // Ganti bahasa sesuai preferensi yang disimpan
    } else if (supportedLanguages.includes(browserLanguage)) {
      changeLanguage(browserLanguage, true); // Ganti bahasa sesuai bahasa browser
    } else {
      changeLanguage("en", true); // Set default bahasa ke English
    }

    window.addEventListener("beforeunload", clearLanguagePreference); // Bersihkan preferensi bahasa saat window dimuat ulang

    return () => {
      window.removeEventListener("beforeunload", clearLanguagePreference); // Hapus event listener saat komponen tidak digunakan
    };
  }, [changeLanguage, clearLanguagePreference]);

  if (!mounted) return null; // Mencegah rendering jika komponen belum di-mount

  return (
    <div className={styles.languageSwitcher}>
      <button className={styles.dropbtn}>
        {i18n.language === "en" ? "EN-UK" : "ID-ID"} <span className={styles.downArrow}>&#9660;</span> {/* Tombol dropdown */}
      </button>
      <div className={styles.dropdownContent}>
        <a href="#" onClick={() => changeLanguage("en")}>
          <Image
            src="/icons8-great-britain-48.png"
            alt="English"
            width={20}
            height={12}
          />{" "}
          English {/* Pilihan bahasa English */}
        </a>
        <a href="#" onClick={() => changeLanguage("id")}>
          <Image
            src="/icons8-indonesia-48.png"
            alt="Bahasa Indonesia"
            width={20}
            height={12}
          />{" "}
          Bahasa Indonesia {/* Pilihan bahasa Indonesia */}
        </a>
      </div>
    </div>
  );
};

export default LanguageSwitcher; // Mengekspor komponen LanguageSwitcher sebagai default
