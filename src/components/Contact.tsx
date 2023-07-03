import { FC } from 'react';

// Components
import { ContainerEffect } from './index';

// Data
import { contactlinks } from '../data/contact';

export const Contact: FC = () => {
  return (
    <section id='contact' className='text-black py-[4.5rem]'>
      <ContainerEffect>
        <div className='w-[80%] my-0 mx-auto flex flex-col gap-[1rem] dark:text-white'>
          <h2 className='text-center text-[2.25rem] leading-none font-semibold'>
            Pongámonos en contacto
          </h2>
          <p className='text-center text-[1.25rem]'>
            Quiero seguir aprendiendo y creciendo profesionalmente. Si estás interesado/a en un
            perfil de desarrollador Front-End creativo y con muchas ganas de seguir aprendiendo,
            contacta conmigo.
          </p>
          <ul className='w-full flex flex-wrap justify-center gap-[1rem]'>
            {contactlinks.map(({ link, label, icon }) => {
              return (
                <li
                  key={label}
                  className='font-normal cursor-pointer text-[1rem] flex gap-[0.25rem] hover:underline'
                >
                  {icon}
                  <a href={link} target='_blank' rel='noreferrer'>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </ContainerEffect>
    </section>
  );
};
