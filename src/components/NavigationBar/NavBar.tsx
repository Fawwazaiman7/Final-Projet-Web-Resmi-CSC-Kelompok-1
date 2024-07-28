import { useEffect, useState } from 'react';
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

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/css/bootstrap.min.css');
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
      <div className="container-fluid">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <Image
              src={imageSrcPath}
              width="60"
              height="60"
              className="d-inline-block align-center"
              alt=""
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
        <div
          className="collapse navbar-collapse align-items-center flex-column flex-md-row"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link href={item.path} legacyBehavior>
                  <a
                    className={`nav-link ${activeIndex === index ? 'fw-bold' : ''}`}
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
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Divisi
              </a>
              <ul className="dropdown-menu">
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
          <div className="navbar-controls">
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
