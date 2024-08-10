import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/SearchBar/SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false); // State untuk mengontrol visibilitas search bar

  useEffect(() => {
    const script = document.createElement('script'); // Buat elemen script
    script.src = 'https://cse.google.com/cse.js?cx=b2a21e69260e441db'; // Set URL untuk Google Custom Search Engine
    script.async = true; // Set script agar dieksekusi secara asinkron
    document.body.appendChild(script); // Tambahkan script ke body dokumen
  }, []);

  return (
    <div 
      className={`${styles.searchContainer} ${searchVisible ? styles.searchVisible : ''}`} 
      onMouseEnter={() => setSearchVisible(true)} // Tampilkan search bar saat mouse hover
      onMouseLeave={() => setSearchVisible(false)} // Sembunyikan search bar saat mouse keluar
    >
      <Image
        src="/icons8-search-30.png"
        width={20}
        height={20}
        className={styles.searchIcon}
        alt="Search" // Ikon pencarian
      />
      <div className="gcse-searchbox-only"></div> {/* Komponen Google Custom Search */}
    </div>
  );
};

export default SearchBar; // Mengekspor komponen SearchBar sebagai default
