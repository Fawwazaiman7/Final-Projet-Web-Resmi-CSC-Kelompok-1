import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Join_us/JoinUs.module.css";
import { useTranslation } from "react-i18next";

const JoinUs: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Memeriksa apakah dark mode diaktifkan di level aplikasi
    const darkModeEnabled = document.body.classList.contains("dark-mode");
    setIsDarkMode(darkModeEnabled);
  }, []);

  useEffect(() => {
    const handleDarkModeChange = () => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    };

    // Tambahkan event listener untuk perubahan dark mode
    window.addEventListener("dark-mode-toggle", handleDarkModeChange);

    return () => {
      window.removeEventListener("dark-mode-toggle", handleDarkModeChange);
    };
  }, []);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid rendering until component is mounted

  const handleJoinClick = () => {
    window.open("https://bit.ly/OpenRecruitmentCSC2022-2023", "_blank");
  };

  return (
    <div
      className={`${styles.joinUsContainer} ${isDarkMode ? "dark-mode" : ""}`}
    >
      <div className={styles.leftSection}>
        <h1 className={styles.title}>{t("join_us_title")}</h1>
        <p className={styles.description}>{t("join_us_description")}
        </p>
        <button className={styles.joinButton} onClick={handleJoinClick}>
          {t("join_us_button")}
        </button>
      </div>
      <div className={styles.rightSection}>
        <Image
          src="/Brainstorming-ideas.png"
          alt="Join Us Illustration"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default JoinUs;
