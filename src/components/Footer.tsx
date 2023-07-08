import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className='w-full bg-white dark:bg-black dark:text-white' aria-label='footer'>
      <div className='w-[80%] my-0 mx-auto py-[1.5rem] px-0 flex justify-center'>
        <span className='mobile:text-center'>
          Gabriel Vieyra © Todos los derechos reservados. 2023
        </span>
      </div>
    </footer>
  );
};
