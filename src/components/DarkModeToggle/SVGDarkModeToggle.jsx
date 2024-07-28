import { useEffect, useState } from 'react';

const SVGDarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    localStorage.setItem('darkMode', newMode ? 'true' : 'false');
  };

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    const isDark = storedMode === 'true' || (!storedMode && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(isDark);
    document.body.classList.toggle('dark-mode', isDark);
  }, []);

  return (
    <label className="switch">
      <input
        className="switch__input"
        type="checkbox"
        role="switch"
        name="dark"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
        <use href={isDarkMode ? "/dark.svg" : "/light.svg"} />
      </svg>
      <span className="switch__inner-icons">
        <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
          <use href="/light.svg" />
        </svg>
        <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
          <use href="/dark.svg" />
        </svg>
      </span>
      <span className="switch__sr">Dark Mode</span>
    </label>
  );
};

export default SVGDarkModeToggle;
