import { FC } from 'react';

// Custom hooks
import { useTheme } from '../hooks/useTheme';

// FeatherIcons
import { Moon, Sun } from 'react-feather';

export const DarkMode: FC = () => {
  const { theme, handleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button onClick={handleTheme}>
      {isLight ? <Sun size={20} /> : <Moon size={20} className='dark:text-white' />}
    </button>
  );
};
