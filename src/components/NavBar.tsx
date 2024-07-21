import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import  { useState } from 'react';

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({ brandName, imageSrcPath }: NavBarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </a>
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
          className="collapse 
          navbar-collapse 
          align-items-center 
          flex-column 
          flex-md-row"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['Home', 'Join US', 'About Us', 'Contact Us', 'FAQ', 'Activities'].map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${activeIndex === index ? 'fw-bold' : ''}`}
                  href="#"
                  onClick={() => handleClick(index)}
                >
                  {item}
                </a>
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
