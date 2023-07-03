import { FC, ReactNode } from 'react';

// Components
import { Header, Footer } from '../components';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-screen min-h-screen flex flex-col font-montserrat bg-gradient-to-r from-[#bee3f8] to-[rgba(0,0,0,0.08)] dark:bg-[#1a202c] dark:bg-gradient-to-r dark:from-[rgba(0,0,0,0.80)] dark:to-[rgba(0,0,0,0.08)]'>
      <Header />
      <main className='flex flex-col flex-grow pt-[3.75rem]'>{children}</main>
      <Footer />
    </div>
  );
};
