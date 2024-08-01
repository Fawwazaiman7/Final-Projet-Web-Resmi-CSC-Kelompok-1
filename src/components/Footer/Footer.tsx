import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid rendering until component is mounted

  return (
    <div className="page-container">
      <div className="content-wrap">{/* Konten utama halaman lainnya */}</div>
      <footer className="footer">
        <div className="container">
          <p className="footer-designed">
            {t("footerCopyright")} &copy; {new Date().getFullYear()} CSC
          </p>
          <p className="footer-copyright">{t("footerDesigned")}</p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <nav>
            <ul className="footer-links">
              <li>
                <a href="/about">{t("about_us")}</a>
              </li>
              <li>
                <a href="/contact">{t("contact_us")}</a>
              </li>
              <li>
                <a href="/privacy">{t("privacyPolicy")}</a>
              </li>
              <li>
                <a href="/terms">{t("termsConditions")}</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
