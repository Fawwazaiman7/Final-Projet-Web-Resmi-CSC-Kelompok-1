import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import styles from '../../styles/Footer/Footer.module.css';
import Link from "next/link";
const Footer: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}></div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerDesigned}>
            {t("footerCopyright")} &copy; {new Date().getFullYear()} CSC
          </p>
          <p className={styles.footerCopyright}>{t("footerDesigned")}</p>
          <nav>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinksItem}>
                <a href="/about">{t("about_us")}</a>
              </li>
              <li className={styles.footerLinksItem}>
                <a href="/contact">{t("contact_us")}</a>
              </li>
            </ul>
          </nav>
          <div className={styles.footerSocial}>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
            >
              <FaInstagram />
            </ Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
