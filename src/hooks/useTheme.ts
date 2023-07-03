import { useState, useEffect } from 'react';

// Helpers
import { getInitialTheme } from '../helpers/getInitialTheme';

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(() => getInitialTheme());

  function handleTheme(): void {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return {
    theme,
    handleTheme,
  };
};
