import { FC } from 'react';

// Data
import { links } from '../data/links';

interface MenuMobileProps {
  onToggleNav: () => void;
}

export const MenuMobile: FC<MenuMobileProps> = ({ onToggleNav }) => {
  return (
    <div className='fixed top-[3.5rem] left-0 bottom-0 w-3/5 bg-white py-0 hidden z-10 dark:bg-black mobile:px-8 tablet:block tablet:px-16'>
      <ul className='flex flex-col gap-3'>
        {links.map(({ id, title }) => {
          return (
            <li key={id} className='dark:text-white' onClick={onToggleNav}>
              <a href={`#${id}`}>{title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
