import { FC } from 'react';

// Data
import { links } from '../data/links';

// FeatherIcons
import { Moon } from 'react-feather';

export const Header: FC = () => {
  return (
    <header className='w-full fixed top-0 z-10 bg-white'>
      <div className='w-[80%] my-0 mx-auto flex items-center justify-between py-[1rem] px-0'>
        <a href='/' className='font-bold text-xl'>
          <span>Gabriel Vieyra</span>
        </a>
        <nav>
          <ul className='list-none flex gap-[0.75rem]'>
            {links.map(({ id, title }) => {
              return (
                <li key={id} className='cursor-pointer font-semibold hover:underline'>
                  <a href={`#${id}`}>{title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <button>
          <Moon onClick={() => console.log('test')} size={20} />
        </button>
      </div>
    </header>
  );
};
