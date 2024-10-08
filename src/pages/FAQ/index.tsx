import { useState, useEffect } from "react"; // Mengimpor hook useState dan useEffect dari React untuk mengelola state dan efek samping
import styles from "../../styles/FAQ/Faq.module.css"; // Mengimpor modul CSS untuk styling spesifik halaman FAQ
import { useTranslation } from "react-i18next"; // Mengimpor hook useTranslation dari react-i18next untuk menangani terjemahan

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // State untuk melacak indeks accordion yang sedang aktif
  const { t } = useTranslation('common'); // Mengambil fungsi terjemahan dari i18next untuk namespace 'common'
  const [faqData, setFaqData] = useState<{ header: string | JSX.Element; text: string | JSX.Element; }[]>([]); // State untuk menyimpan data FAQ
  const [isMounted, setIsMounted] = useState(false); // State untuk mengecek apakah komponen telah dimuat

  useEffect(() => {
    setIsMounted(true); // Mengubah state isMounted menjadi true saat komponen telah dimount
    setFaqData([ // Mengisi data FAQ setelah komponen di-mount
      {
        header: t("faq_0_header"),
        text: t("faq_0_text"),
      },
      {
        header: t("faq_1_header"),
        text: t("faq_1_text"),
      },
      {
        header: t("faq_2_header"),
        text: t("faq_2_text"),
      },
      {
        header: t("faq_3_header"),
        text: (
          <div>
            <ul>
              <li>{t("faq_3_text_1")}</li>
              <li>
                {t("faq_3_text_2")}
                <ul>
                  <li className={styles.noBullet}>
                    <strong>Cyber Security</strong>
                    <ul>
                      <li>{t("faq_3_cyber_1")}</li>
                      <li>{t("faq_3_cyber_2")}</li>
                      <li>{t("faq_3_cyber_3")}</li>
                    </ul>
                  </li>
                  <li className={styles.noBullet}>
                    <strong>SoftDev</strong>
                    <ul>
                      <li>{t("faq_3_softdev_1")}</li>
                      <li>{t("faq_3_softdev_2")}</li>
                      <li>{t("faq_3_softdev_3")}</li>
                    </ul>
                  </li>
                  <li className={styles.noBullet}>
                    <strong>Explore</strong>
                    <ul>
                      <li>{t("faq_3_explore_1")}</li>
                      <li>{t("faq_3_explore_2")}</li>
                      <li>{t("faq_3_explore_3")}</li>
                      <li>{t("faq_3_explore_4")}</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>{t("faq_3_text_3")}</li>
            </ul>
          </div>
        ),
      },
      {
        header: t("faq_4_header"),
        text: t("faq_4_text"),
      },
      {
        header: t("faq_5_header"),
        text: (
          <div>
            <p>{t("faq_5_text")}</p>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Web Design</li>
              <li>Motion Graphic</li>
              <li>Android Developer</li>
            </ul>
            <p>
              {t("faq_5_text_2")}{" "}
              <a href="https://example.com" style={{ color: "#0000ee", textDecoration: "underline" }}>
                {t("faq_5_website")}
              </a>
            </p>
          </div>
        ),
      },
      {
        header: t("faq_6_header"),
        text: t("faq_6_text"),
      },
      {
        header: t("faq_7_header"),
        text: (
          <div>
            <p>{t("faq_7_text")}</p>
          </div>
        ),
      },
    ]);
  }, [t]); // Efek samping yang dijalankan setelah komponen di-mount dan tergantung pada terjemahan

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Mengubah indeks aktif saat item FAQ diklik
  };

  return (
    <section className={styles.section}> {/* Seksi utama halaman FAQ */}
      <div className={styles.container}> {/* Kontainer utama untuk FAQ */}
        <div className={styles.header}> {/* Header FAQ */}
          {isMounted && (
            <>
              <span className={styles.title}>{t('faq_title')}</span> {/* Menampilkan judul FAQ */}
              <h2 className={styles.subtitle}>{t('faq_subtitle')}</h2> {/* Menampilkan subjudul FAQ */}
            </>
          )}
        </div>

        <div className={styles.accordionGrid}> {/* Grid untuk item-item FAQ */}
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ""}`} /* Mengatur kelas aktif pada item yang sedang dibuka */
            >
              <button className={styles.accordionButton} onClick={() => handleToggle(index)}> {/* Tombol untuk membuka atau menutup FAQ */}
                <div className={styles.iconContainer}> {/* Kontainer ikon accordion */}
                  <svg
                    className={`${styles.icon} ${activeIndex === index ? styles.iconActive : ""}`} /* Mengatur ikon untuk animasi buka/tutup */
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill=""
                      stroke=""
                    />
                  </svg>
                </div>
                <h4 className={styles.accordionHeader}>{faq.header}</h4> {/* Menampilkan header FAQ */}
              </button>
              {activeIndex === index && (
                <div className={styles.accordionContent}>
                  <p>{faq.text}</p> {/* Menampilkan konten FAQ jika item aktif */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; // Mengekspor komponen Faq sebagai default
