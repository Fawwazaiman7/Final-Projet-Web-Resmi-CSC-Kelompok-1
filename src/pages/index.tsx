import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home/Home.module.css";
import Carousel from "../components/Carousel/Carousel";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={styles.pageContainer}>
      <div className={`${styles.bannerBg} dark-banner`}>
        <div className={styles.container}>
          <h1 className={styles.headingBanner}>
            {t("welcome")}
          </h1>
        </div>
      </div>

      <section className={styles.contentSection}>
        <div className={styles.contentItem}>
          <div className={styles.imageContainer}>
            <Image src="/info-logo.png" alt={t("about_csc")} width={330} height={330} />
          </div>
          <div className={styles.textContainer}>
            <h2>{t("about_csc")}</h2>
            <p>
              {t("about_csc_description")}
            </p>
            <div className={styles.buttonContainer}>
              <a href="/about" className={styles.button}>
                {t("learn_more")}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.spacing}></div>

        <div className={styles.contentItem}>
          <div className={styles.imageContainer}>
            <Image
              src="/question-sign-logo.png"
              alt={t("what_we_do")}
              width={330}
              height={330}
            />
          </div>
          <div className={styles.textContainer}>
            <h2>{t("what_we_do")}</h2>
            <p>
              {t("what_we_do_description")}
            </p>
            <div className={styles.buttonContainer}>
              <a href="/faq" className={styles.button}>
                {t("faq_page")}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.spacing}></div>
        <div className={styles.contentItem}>
          <div className={styles.imageContainer}>
            <Image
              src="/whatsapp-icon.png"
              alt={t("contact_us_title")}
              width={330}
              height={330}
            />
          </div>
          <div className={styles.textContainer}>
            <h2>{t("contact_us_title")}</h2>
            <p>
              {t("contact_us_description")}
            </p>
            <div className={styles.buttonContainer}>
              <a href="/contact" className={styles.button}>
                {t("contact_us_button")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divisionContainer}>
        <h1 className={styles.divisionTitle}>{t("csc_divisions")}</h1>

        <div className={styles.divisionContentItem}>
          <div className={styles.divisionImageContainer}>
            <Image src="/CyberSec.png" alt={t("cyber_security")} width={430} height={330} />
          </div>
          <div className={styles.divisionTextContainer}>
            <h2>{t("cyber_security")}</h2>
            <p>
              {t("cyber_security_description")}
            </p>
            <div className={styles.divisionButtonContainer}>
              <a href="/CyberSec" className={styles.button}>
                {t("learn_more")}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divisionContentItem}>
          <div className={styles.divisionImageContainer}>
            <Image src="/SoftDev.png" alt={t("software_development")} width={430} height={450} />
          </div>
          <div className={styles.divisionTextContainer}>
            <h2>{t("software_development")}</h2>
            <p>
              {t("software_development_description")}
            </p>
            <div className={styles.divisionButtonContainer}>
              <a href="/Softdev" className={styles.button}>
                {t("learn_more")}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divisionContentItem}>
          <div className={styles.divisionImageContainer}>
            <Image src="/Explore.png" alt={t("explore")} width={430} height={430} />
          </div>
          <div className={styles.divisionTextContainer}>
            <h2>{t("explore")}</h2>
            <p>
              {t("explore_description")}
            </p>
            <div className={styles.divisionButtonContainer}>
              <a href="/Explore" className={styles.button}>
                {t("learn_more")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
