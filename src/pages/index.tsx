import { useState, useEffect } from "react"; // Mengimpor hook useState dan useEffect dari React untuk mengelola state dan efek samping
import Image from "next/image"; // Mengimpor komponen Image dari Next.js untuk menangani gambar yang dioptimalkan
import styles from "../styles/Home/Home.module.css"; // Mengimpor modul CSS untuk styling spesifik halaman Home
import Carousel from "../components/Carousel/Carousel"; // Mengimpor komponen Carousel dari folder components
import Link from "next/link"; // Mengimpor komponen Link dari Next.js untuk navigasi antar halaman
import { useTranslation } from 'react-i18next'; // Mengimpor hook useTranslation dari react-i18next untuk menangani terjemahan

const Home = () => {
  const [isMounted, setIsMounted] = useState(false); // State untuk mengecek apakah komponen telah dimuat
  const { t } = useTranslation('common'); // Mengambil fungsi terjemahan dari i18next untuk namespace 'common'

  useEffect(() => {
    setIsMounted(true); // Mengubah state isMounted menjadi true saat komponen telah dimount
  }, []); // Efek samping yang dijalankan sekali setelah komponen di-mount

  if (!isMounted) return null; // Jika komponen belum di-mount, jangan render apapun (menghindari masalah SSR dengan Next.js)

  return (
    <div className={styles.pageContainer}> {/* Kontainer utama halaman */}
      <div className={`${styles.bannerBg} dark-banner`}> {/* Banner latar belakang dengan kelas untuk mode gelap */}
        <div className={styles.container}> {/* Kontainer di dalam banner untuk konten */}
          <h1 className={styles.headingBanner}>
            {t("welcome")} {/* Menampilkan teks "welcome" yang diterjemahkan */}
          </h1>
        </div>
      </div>

      <section className={styles.contentSection}> {/* Seksi untuk konten utama halaman */}
        <div className={styles.contentItem}> {/* Item konten pertama */}
          <div className={styles.imageContainer}> {/* Kontainer gambar */}
            <Image src="/info-logo.png" alt={t("about_csc")} width={330} height={330} /> {/* Gambar dengan alt text yang diterjemahkan */}
          </div>
          <div className={styles.textContainer}> {/* Kontainer teks terkait gambar */}
            <h2>{t("about_csc")}</h2> {/* Judul yang diterjemahkan untuk deskripsi */}
            <p>
              {t("about_csc_description")} {/* Deskripsi yang diterjemahkan */}
            </p>
            <div className={styles.buttonContainer}> {/* Kontainer untuk tombol navigasi */}
              <Link href="/about" className={styles.button}>
                {t("learn_more")} {/* Teks tombol yang diterjemahkan */}
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.spacing}></div> {/* Elemen pemisah/spasi antara item konten */}

        <div className={styles.contentItem}> {/* Item konten kedua dengan struktur serupa */}
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
              <Link href="/FAQ" className={styles.button}>
                {t("faq_page")}
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.spacing}></div> {/* Elemen pemisah/spasi lagi */}

        <div className={styles.contentItem}> {/* Item konten ketiga */}
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
              <Link href="/contact" className={styles.button}>
                {t("contact_us_button")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divisionContainer}> {/* Kontainer untuk bagian divisi */}
        <h1 className={styles.divisionTitle}>{t("csc_divisions")}</h1> {/* Judul untuk seksi divisi */}

        <div className={styles.divisionContentItem}> {/* Item divisi pertama */}
          <div className={styles.divisionImageContainer}> {/* Kontainer gambar divisi */}
            <Image src="/CyberSec.png" alt={t("cyber_security")} width={430} height={330} />
          </div>
          <div className={styles.divisionTextContainer}> {/* Kontainer teks divisi */}
            <h2>{t("cyber_security")}</h2>
            <p>
              {t("cyber_security_description")}
            </p>
            <div className={styles.divisionButtonContainer}> {/* Kontainer tombol divisi */}
              <Link href="/about#cyber-security" className={styles.button}>
                {t("learn_more")}
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.divisionContentItem}> {/* Item divisi kedua */}
          <div className={styles.divisionImageContainer}>
            <Image src="/SoftDev.png" alt={t("software_development")} width={430} height={450} />
          </div>
          <div className={styles.divisionTextContainer}>
            <h2>{t("software_development")}</h2>
            <p>
              {t("software_development_description")}
            </p>
            <div className={styles.divisionButtonContainer}>
              <Link href="/about#software" className={styles.button}>
                {t("learn_more")}
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.divisionContentItem}> {/* Item divisi ketiga */}
          <div className={styles.divisionImageContainer}>
            <Image src="/Explore.png" alt={t("explore")} width={430} height={430} />
          </div>
          <div className={styles.divisionTextContainer}>
            <h2>{t("explore")}</h2>
            <p>
              {t("explore_description")}
            </p>
            <div className={styles.divisionButtonContainer}>
              <Link href="/about#explore" className={styles.button}>
                {t("learn_more")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Carousel /> {/* Komponen Carousel yang menampilkan gambar secara bergulir */}
      </div>
    </div>
  );
};

export default Home; // Mengekspor komponen Home sebagai default
