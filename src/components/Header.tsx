import { FC, useState } from 'react';

// Components
import { DarkMode, MenuMobile } from '../components';

// Data
import { links } from '../data/links';

// FeatherIcons
import { Menu, X } from 'react-feather';

export const Header: FC = () => {
  const [menuMobileShow, setMenuMobileShow] = useState<boolean>(false);

  function onToggleNav(): void {
    setMenuMobileShow(!menuMobileShow);
  }

  return (
    <>
      <header className='w-full fixed top-0 z-10 bg-white dark:bg-black'>
        <div className='w-[80%] my-0 mx-auto flex items-center justify-between py-[1rem] px-0'>
          {menuMobileShow ? (
            <X className='hidden dark:text-white tablet:block' onClick={onToggleNav} />
          ) : (
            <Menu className='hidden dark:text-white tablet:block' onClick={onToggleNav} />
          )}
          <a href='/' className='font-bold text-xl dark:text-white tablet:hidden'>
            <span>Gabriel Vieyra</span>
          </a>
          <nav className='tablet:hidden'>
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
      {menuMobileShow && <MenuMobile onToggleNav={onToggleNav} />}
    </>
  );
};
