import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/SearchBar/SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const showSearch = () => {
    setSearchVisible(true);
  };

  const hideSearch = () => {
    if (!isSearchClicked) {
      setSearchVisible(false);
    }
  };

  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
      setIsSearchClicked(false);
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles.searchContainer}
      onMouseEnter={showSearch}
      onMouseLeave={hideSearch}
      onClick={handleSearchClick}
    >
      <Image
        src="/icons8-search-30.png"
        width={20}
        height={20}
        className={styles.searchIcon}
        alt="Search"
      />
      <form className={`${styles.searchForm} ${searchVisible ? styles.searchFormVisible : ''}`} role="search">
        <input
          ref={searchInputRef}
          className={`${styles.searchInput} form-control me-2`}
          type="search"
          placeholder="Search"
          aria-label="Search"
          autoFocus={searchVisible}
        />
      </form>
    </div>
  );
};

export default SearchBar;
