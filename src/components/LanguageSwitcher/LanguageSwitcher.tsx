import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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
