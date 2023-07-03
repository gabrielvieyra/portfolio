import { FC } from 'react';

// Components
import { DarkMode } from '../components';

// Data
import { links } from '../data/links';

export const Header: FC = () => {
  return (
    <header className='w-full fixed top-0 z-10 bg-white dark:bg-black'>
      <div className='w-[80%] my-0 mx-auto flex items-center justify-between py-[1rem] px-0'>
        <a href='/' className='font-bold text-xl dark:text-white'>
          <span>Gabriel Vieyra</span>
        </a>
        <nav>
          <ul className='list-none flex gap-[0.75rem]'>
            {links.map(({ id, title }) => {
              return (
                <li
                  key={id}
                  className='cursor-pointer font-semibold dark:text-white hover:underline'
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <DarkMode />
      </div>
    </header>
  );
};
