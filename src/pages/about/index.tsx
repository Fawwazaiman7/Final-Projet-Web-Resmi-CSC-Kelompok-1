import { useEffect, useState } from "react";
import styles from "../../styles/About_us/About_us.module.css";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const [isMounted, setIsMounted] = useState(false); // State untuk memeriksa apakah komponen telah di-mount
  const { t } = useTranslation('common'); // Hook untuk melakukan translasi teks

  useEffect(() => {
    setIsMounted(true); // Menandakan bahwa komponen telah di-mount
  }, []);

  if (!isMounted) return null; // Mencegah rendering jika komponen belum di-mount

  return (
    <div className={styles.pageContainer}>
      {/* Section Profil */}
      <div className={styles.profileSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t('profile_csc')}</h1> {/* Menampilkan judul profil CSC */}
          <p className={styles.description}>
            {t('profile_csc_description')} {/* Menampilkan deskripsi profil CSC */}
          </p>
        </div>
      </div>

      {/* Section Sejarah */}
      <div className={styles.historySection}>
        <div className={styles.container}>
          <h2 className={styles.historyTitle}>{t('history')}</h2> {/* Menampilkan judul sejarah */}
          <div className={styles.historyContent}>
            <h3>{t('history_early_days')}</h3> {/* Menampilkan subjudul masa awal */}
            <ul>
              <li>{t('history_early_days_point_1')}</li> {/* Poin pertama dari sejarah masa awal */}
              <li>{t('history_early_days_point_2')}</li> {/* Poin kedua dari sejarah masa awal */}
            </ul>

            <h3>{t('history_official')}</h3> {/* Menampilkan subjudul pengesahan resmi */}
            <ul>
              <li>{t('history_official_point_1')}</li> {/* Poin pertama dari sejarah pengesahan */}
              <li>{t('history_official_point_2')}</li> {/* Poin kedua dari sejarah pengesahan */}
            </ul>

            <h3>{t('history_division_focus')}</h3> {/* Menampilkan subjudul fokus divisi */}
            <ul>
              <li>{t('history_division_focus_point_1')}</li> {/* Poin pertama dari fokus divisi */}
              <li>{t('history_division_focus_point_2')}</li> {/* Poin kedua dari fokus divisi */}
            </ul>

            <h3>{t('history_future_hope')}</h3> {/* Menampilkan subjudul harapan masa depan */}
            <ul>
              <li>{t('history_future_hope_point_1')}</li> {/* Poin pertama dari harapan masa depan */}
              <li>{t('history_future_hope_point_2')}</li> {/* Poin kedua dari harapan masa depan */}
            </ul>
          </div>
        </div>
      </div>

      {/* Section Divisi */}
      <div className={styles.divisionsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t('csc_divisions')}</h2> {/* Menampilkan judul divisi */}

          <div className={styles.division} id="software-development">
            <h3 className={styles.divisionTitle}>{t('software_development')}</h3> {/* Menampilkan judul divisi Software Development */}
            <p className={styles.divisionDescription}>
              {t('software_development_description')} {/* Menampilkan deskripsi divisi Software Development */}
            </p>
            <div className={styles.focusArea}>
              <h4 className={styles.focusAreaTitle}>{t('focus_area')}</h4> {/* Menampilkan judul area fokus */}
              <ul>
                <li>{t('focus_area_oop')}</li> {/* Area fokus OOP */}
                <li>{t('focus_area_web_dev')}</li> {/* Area fokus Web Development */}
                <li>{t('focus_area_mobile_dev')}</li> {/* Area fokus Mobile Development */}
                <li>{t('focus_area_api_dev')}</li> {/* Area fokus API Development */}
                <li>{t('focus_area_testing_debugging')}</li> {/* Area fokus Testing & Debugging */}
              </ul>
            </div>
          </div>

          <div className={styles.division} id="cyber-security">
            <h3 className={styles.divisionTitle}>{t('cyber_security')}</h3> {/* Menampilkan judul divisi Cyber Security */}
            <p className={styles.divisionDescription}>
              {t('cyber_security_description')} {/* Menampilkan deskripsi divisi Cyber Security */}
            </p>
            <div className={styles.focusArea}>
              <h4 className={styles.focusAreaTitle}>{t('focus_area')}</h4> {/* Menampilkan judul area fokus */}
              <ul>
                <li>{t('focus_area_pen_testing')}</li> {/* Area fokus Penetration Testing */}
                <li>{t('focus_area_ethical_hacking')}</li> {/* Area fokus Ethical Hacking */}
                <li>{t('focus_area_digital_forensics')}</li> {/* Area fokus Digital Forensics */}
                <li>{t('focus_area_network_security')}</li> {/* Area fokus Network Security */}
                <li>{t('focus_area_web_security')}</li> {/* Area fokus Web Security */}
              </ul>
            </div>
          </div>

          <div className={styles.division} id="explore">
            <h3 className={styles.divisionTitle}>{t('explore')}</h3> {/* Menampilkan judul divisi Explore */}
            <p className={styles.divisionDescription}>
              {t('explore_description')} {/* Menampilkan deskripsi divisi Explore */}
            </p>
            <div className={styles.focusArea}>
              <h4 className={styles.focusAreaTitle}>{t('focus_area')}</h4> {/* Menampilkan judul area fokus */}
              <ul>
                <li>{t('focus_area_iot')}</li> {/* Area fokus IoT */}
                <li>{t('focus_area_hardware_assembly')}</li> {/* Area fokus Hardware Assembly */}
                <li>{t('focus_area_iot_experiments')}</li> {/* Area fokus IoT Experiments */}
                <li>{t('focus_area_component_introduction')}</li> {/* Area fokus Component Introduction */}
                <li>{t('focus_area_physical_product_innovation')}</li> {/* Area fokus Physical Product Innovation */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; // Mengekspor komponen AboutUs sebagai default
