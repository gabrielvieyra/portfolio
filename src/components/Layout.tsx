import { FC, ReactNode } from 'react';

// Components
import { Header, Footer } from '../components';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-screen min-h-screen flex flex-col font-montserrat bg-slate-200'>
      <Header />
      <main className='flex flex-col flex-grow pt-[3.75rem]'>{children}</main>
      <Footer />
    </div>
  );
};
