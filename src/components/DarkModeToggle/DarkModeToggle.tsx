import { useState, useEffect } from 'react';

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

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-moon moon-icon"></i>
        <i className="fas fa-sun sun-icon"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
