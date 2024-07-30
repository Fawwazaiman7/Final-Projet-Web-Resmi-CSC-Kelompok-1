import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: { name: string, path: string }[];
}

function NavBar({ brandName, imageSrcPath, navItems }: NavBarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/css/bootstrap.min.css');
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
      <div className="container-fluid d-flex align-items-center">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <Image
              src={imageSrcPath}
              width="60"
              height="60"
              className="d-inline-block align-center"
              alt="Logo"
            />
            <span className="fw-bolder fs-4">{brandName}</span>
          </a>
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link href={item.path} legacyBehavior>
                  <a
                    className={`nav-link ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                aria-expanded="false"
              >
                Divisi
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Softdev
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Explore
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cyber Security
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="navbar-controls ms-auto d-flex align-items-center">
            <div
              className="search-container d-flex align-items-center"
              onMouseEnter={showSearch}
              onMouseLeave={hideSearch}
              onClick={handleSearchClick}
            >
              <Image
                src="/icons8-search-30.png"
                width={20}
                height={20}
                className="search-icon cursor-pointer"
                alt="Search"
              />
              <form className={`search-form d-flex ${searchVisible ? 'visible' : ''}`} role="search">
                <input
                  ref={searchInputRef}
                  className="search-input form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  autoFocus={searchVisible}
                />
              </form>
            </div>
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
