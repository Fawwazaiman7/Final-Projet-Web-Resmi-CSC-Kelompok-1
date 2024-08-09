import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import SearchBar from '../SearchBar/SearchBar';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/NavigationBar/NavBar.module.css';

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: { name: string, path: string }[];
}

function NavBar({ brandName, imageSrcPath, navItems }: NavBarProps) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const currentPath = router.pathname;
    const currentIndex = navItems.findIndex(item => item.path === currentPath);
    setActiveIndex(currentIndex);
  }, [router.pathname, navItems]);

  const handleClick = (index: number, path: string) => {
    setActiveIndex(index);
    router.push(path);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/css/bootstrap.min.css');
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false); // Sembunyikan navbar saat scroll ke bawah
        } else {
          setIsVisible(true); // Tampilkan navbar saat scroll ke atas
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  if (!isMounted) return null;

  return (
    <nav className={`navbar navbar-expand-md navbar-light bg-light shadow ${isVisible ? styles.navbarVisible : styles.navbarHidden}`}>
      <div className={`${styles.containerFluid} container-fluid`}>
        <div className={styles.navbarLeft}>
          <Link href="/" legacyBehavior>
            <a className={styles.navbarBrand}>
              <Image
                src={imageSrcPath}
                width="60"
                height="60"
                className="d-inline-block align-center"
                alt="Logo"
              />
              <span className={styles.navbarBrandSpan}>{brandName}</span>
            </a>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navbarCenter}`} id="navbarSupportedContent">
          <ul className={`${styles.navbarNav} navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100`}>
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`${styles.navLink} ${activeIndex === index ? styles.navLinkActive : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(index, item.path);
                  }}
                >
                  {t(item.name.toLowerCase().replace(/ /g, "_"))}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.navbarRight}>
            <div className={styles.navbarControls}>
              <SearchBar />
              <LanguageSwitcher />
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
