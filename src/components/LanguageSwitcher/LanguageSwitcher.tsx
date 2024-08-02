import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Deteksi bahasa default dari browser pengguna
    const browserLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ["en", "id"]; // Daftar bahasa yang didukung
    const preferredLanguage = localStorage.getItem("preferredLanguage");

    if (preferredLanguage && supportedLanguages.includes(preferredLanguage)) {
      i18n.changeLanguage(preferredLanguage);
    } else {
      if (supportedLanguages.includes(browserLanguage)) {
        i18n.changeLanguage(browserLanguage);
      } else {
        i18n.changeLanguage("en"); // Default ke English jika bahasa tidak didukung
      }
    }

    // Hapus preferensi bahasa dari localStorage saat aplikasi ditutup
    window.addEventListener("beforeunload", clearLanguagePreference);

    return () => {
      window.removeEventListener("beforeunload", clearLanguagePreference);
    };
  }, [i18n]);

  const clearLanguagePreference = () => {
    localStorage.removeItem("preferredLanguage");
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("preferredLanguage", lng);
    router.push(router.pathname, router.pathname, { locale: lng });
  };

  if (!mounted) return null;

  return (
    <div className="language-switcher">
      <button className="dropbtn">
        {i18n.language === "en" ? "EN-UK" : "ID-ID"}
      </button>
      <div className="dropdown-content">
        <a href="#" onClick={() => changeLanguage("en")}>
          <Image
            src="/icons8-great-britain-48.png"
            alt="English"
            width={20}
            height={12}
          />{" "}
          English
        </a>
        <a href="#" onClick={() => changeLanguage("id")}>
          <Image
            src="/icons8-indonesia-48.png"
            alt="Bahasa Indonesia"
            width={20}
            height={12}
          />{" "}
          Bahasa Indonesia
        </a>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
