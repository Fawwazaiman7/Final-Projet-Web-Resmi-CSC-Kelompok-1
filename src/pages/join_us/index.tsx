import React, { useEffect, useState } from "react"; // Mengimpor React dan hook useEffect, useState dari React untuk mengelola efek samping dan state
import Image from "next/image"; // Mengimpor komponen Image dari Next.js untuk gambar yang dioptimalkan
import styles from "../../styles/Join_us/JoinUs.module.css"; // Mengimpor modul CSS untuk styling spesifik halaman JoinUs
import { useTranslation } from "react-i18next"; // Mengimpor hook useTranslation dari react-i18next untuk menangani terjemahan

const JoinUs: React.FC = () => {
  const { t } = useTranslation("common"); // Mengambil fungsi terjemahan dari i18next untuk namespace 'common'
  const [isDarkMode, setIsDarkMode] = useState(false); // State untuk mengecek apakah dark mode aktif
  const [isMounted, setIsMounted] = useState(false); // State untuk mengecek apakah komponen telah dimuat

  useEffect(() => {
    // Memeriksa apakah dark mode diaktifkan di level aplikasi
    const darkModeEnabled = document.body.classList.contains("dark-mode");
    setIsDarkMode(darkModeEnabled); // Set state isDarkMode sesuai dengan kondisi body
  }, []); // Efek samping yang dijalankan sekali setelah komponen di-mount

  useEffect(() => {
    const handleDarkModeChange = () => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    };

    // Tambahkan event listener untuk perubahan dark mode
    window.addEventListener("dark-mode-toggle", handleDarkModeChange);

    return () => {
      window.removeEventListener("dark-mode-toggle", handleDarkModeChange); // Membersihkan event listener saat komponen di-unmount
    };
  }, []); // Efek samping untuk mendeteksi perubahan mode gelap

  useEffect(() => {
    setIsMounted(true); // Mengubah state isMounted menjadi true saat komponen telah dimount
  }, []); // Efek samping yang dijalankan sekali setelah komponen di-mount

  if (!isMounted) return null; // Jika komponen belum di-mount, jangan render apapun

  const handleJoinClick = () => {
    window.open("https://bit.ly/OpenRecruitmentCSC2022-2023", "_blank"); // Fungsi untuk membuka link pendaftaran di tab baru saat tombol diklik
  };

  return (
    <div
      className={`${styles.joinUsContainer} ${isDarkMode ? "dark-mode" : ""}`} // Menggabungkan kelas CSS dengan kondisi dark mode
    >
      <div className={styles.leftSection}> {/* Bagian kiri dari halaman JoinUs */}
        <h1 className={styles.title}>{t("join_us_title")}</h1> {/* Menampilkan judul yang diterjemahkan */}
        <p className={styles.description}>{t("join_us_description")}</p> {/* Menampilkan deskripsi yang diterjemahkan */}
        <button className={styles.joinButton} onClick={handleJoinClick}> {/* Tombol untuk mendaftar */}
          {t("join_us_button")} {/* Teks tombol yang diterjemahkan */}
        </button>
      </div>
      <div className={styles.rightSection}> {/* Bagian kanan dari halaman JoinUs */}
        <Image
          src="/Brainstorming-ideas.png"
          alt="Join Us Illustration" // Teks alternatif untuk gambar
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default JoinUs; // Mengekspor komponen JoinUs sebagai default
