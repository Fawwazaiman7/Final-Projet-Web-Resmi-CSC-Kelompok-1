import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from '../../styles/DarkModeToggle/DarkModeToggle.module.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    const body = document.body;
    if (savedMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton && !toggleButton.contains(event.target as Node)) {
      toggleButton.blur();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.toggleContainer}>
      <button
        id="toggleButton"
        onClick={toggleDarkMode}
        className={styles.toggleButton}
      >
        {darkMode ? <FaMoon className={styles.icon} /> : <FaSun className={styles.icon} /> }
      </button>
    </div>
  );
};

export default DarkModeToggle;
