import { useEffect, useState } from "react";
import styles from "../../styles/About_us/About_us.module.css";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={styles.pageContainer}>
      {/* Profile Section */}
      <div className={styles.profileSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t('profile_csc')}</h1>
          <p className={styles.description}>
            {t('profile_csc_description')}
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className={styles.historySection}>
        <div className={styles.container}>
          <h2 className={styles.historyTitle}>{t('history')}</h2>
          <div className={styles.historyContent}>
            <h3>{t('history_early_days')}</h3>
            <ul>
              <li>{t('history_early_days_point_1')}</li>
              <li>{t('history_early_days_point_2')}</li>
            </ul>

            <h3>{t('history_official')}</h3>
            <ul>
              <li>{t('history_official_point_1')}</li>
              <li>{t('history_official_point_2')}</li>
            </ul>

            <h3>{t('history_division_focus')}</h3>
            <ul>
              <li>{t('history_division_focus_point_1')}</li>
              <li>{t('history_division_focus_point_2')}</li>
            </ul>

            <h3>{t('history_future_hope')}</h3>
            <ul>
              <li>{t('history_future_hope_point_1')}</li>
              <li>{t('history_future_hope_point_2')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divisi Section */}
      <div className={styles.divisionsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t('csc_divisions')}</h2>

          <div className={styles.division}>
            <h3 className={styles.divisionTitle}>{t('software_development')}</h3>
            <p className={styles.divisionDescription}>
              {t('software_development_description')}
            </p>
            <div className={styles.focusArea}>
              <h4 className={styles.focusAreaTitle}>{t('focus_area')}</h4>
              <ul>
                <li>{t('focus_area_oop')}</li>
                <li>{t('focus_area_web_dev')}</li>
                <li>{t('focus_area_mobile_dev')}</li>
                <li>{t('focus_area_api_dev')}</li>
                <li>{t('focus_area_testing_debugging')}</li>
              </ul>
            </div>
          </div>

          <div className={styles.division}>
            <h3 className={styles.divisionTitle}>{t('cyber_security')}</h3>
            <p className={styles.divisionDescription}>
              {t('cyber_security_description')}
            </p>
            <div className={styles.focusArea}>
              <h4 className={styles.focusAreaTitle}>{t('focus_area')}</h4>
              <ul>
                <li>{t('focus_area_pen_testing')}</li>
                <li>{t('focus_area_ethical_hacking')}</li>
                <li>{t('focus_area_digital_forensics')}</li>
                <li>{t('focus_area_network_security')}</li>
                <li>{t('focus_area_web_security')}</li>
              </ul>
            </div>
          </div>

          <div className={styles.division}>
            <h3 className={styles.divisionTitle}>{t('explore')}</h3>
            <p className={styles.divisionDescription}>
              {t('explore_description')}
            </p>
            <div className={styles.focusArea}>
              <h4 className={styles.focusAreaTitle}>{t('focus_area')}</h4>
              <ul>
                <li>{t('focus_area_iot')}</li>
                <li>{t('focus_area_hardware_assembly')}</li>
                <li>{t('focus_area_iot_experiments')}</li>
                <li>{t('focus_area_component_introduction')}</li>
                <li>{t('focus_area_physical_product_innovation')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
