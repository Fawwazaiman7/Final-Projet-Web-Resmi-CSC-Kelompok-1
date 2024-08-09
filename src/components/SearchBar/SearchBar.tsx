import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/SearchBar/SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=b2a21e69260e441db';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div 
      className={`${styles.searchContainer} ${searchVisible ? styles.searchVisible : ''}`} 
      onMouseEnter={() => setSearchVisible(true)}
      onMouseLeave={() => setSearchVisible(false)}
    >
      <Image
        src="/icons8-search-30.png"
        width={20}
        height={20}
        className={styles.searchIcon}
        alt="Search"
      />
      <div className="gcse-searchbox-only"></div>
    </div>
  );
};

export default SearchBar;
