import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from '../../styles/DarkModeToggle/DarkModeToggle.module.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false); // State untuk memantau apakah mode gelap diaktifkan

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true'; // Ambil preferensi mode gelap dari localStorage
    setDarkMode(savedMode);
    const body = document.body;
    if (savedMode) {
      body.classList.add('dark-mode'); // Tambahkan kelas mode gelap pada elemen body jika diaktifkan
    } else {
      body.classList.remove('dark-mode'); // Hapus kelas mode gelap jika dinonaktifkan
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode'); // Tambahkan kelas mode gelap saat darkMode aktif
    } else {
      body.classList.remove('dark-mode'); // Hapus kelas mode gelap saat darkMode tidak aktif
    }
    localStorage.setItem('darkMode', darkMode.toString()); // Simpan preferensi mode gelap ke localStorage
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Ubah state darkMode saat tombol di-klik
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton && !toggleButton.contains(event.target as Node)) {
      toggleButton.blur(); // Hilangkan fokus dari tombol jika klik di luar elemen
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick); // Tambahkan event listener untuk menangani klik di luar
    return () => {
      document.removeEventListener('click', handleOutsideClick); // Bersihkan event listener saat komponen tidak digunakan
    };
  }, []);

  return (
    <div className={styles.toggleContainer}>
      <button
        id="toggleButton"
        onClick={toggleDarkMode}
        className={styles.toggleButton}
      >
        {darkMode ? <FaMoon className={styles.icon} /> : <FaSun className={styles.icon} /> } {/* Tampilkan ikon yang sesuai */}
      </button>
    </div>
  );
};

export default DarkModeToggle; // Mengekspor komponen DarkModeToggle sebagai default
