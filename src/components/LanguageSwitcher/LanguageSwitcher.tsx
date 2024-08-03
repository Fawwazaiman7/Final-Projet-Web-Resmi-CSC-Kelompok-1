import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/LanguageSwitcher/LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const clearLanguagePreference = useCallback(() => {
    localStorage.removeItem("preferredLanguage");
  }, []);

  const changeLanguage = useCallback((lng: string, initialLoad: boolean = false) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("preferredLanguage", lng);

    if (!initialLoad) {
      router.push(router.pathname, router.asPath, { locale: lng });
    }
  }, [i18n, router]);

  useEffect(() => {
    setMounted(true);

    const browserLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ["en", "id"];
    const preferredLanguage = localStorage.getItem("preferredLanguage");

    if (preferredLanguage && supportedLanguages.includes(preferredLanguage)) {
      changeLanguage(preferredLanguage, true);
    } else if (supportedLanguages.includes(browserLanguage)) {
      changeLanguage(browserLanguage, true);
    } else {
      changeLanguage("en", true);
    }

    window.addEventListener("beforeunload", clearLanguagePreference);

    return () => {
      window.removeEventListener("beforeunload", clearLanguagePreference);
    };
  }, [changeLanguage, clearLanguagePreference]);

  if (!mounted) return null;

  return (
    <div className={styles.languageSwitcher}>
      <button className={styles.dropbtn}>
        {i18n.language === "en" ? "EN-UK" : "ID-ID"} <span className={styles.downArrow}>&#9660;</span>
      </button>
      <div className={styles.dropdownContent}>
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
