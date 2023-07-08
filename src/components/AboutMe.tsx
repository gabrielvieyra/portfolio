import { FC } from 'react';

// Components
import { ContainerEffect } from './index';

// Assets
import { myPhoto } from '../assets';

export const AboutMe: FC = () => {
  return (
    <section id='about-me' className='py-[4.5rem]'>
      <ContainerEffect>
        <div className='w-[80%] my-0 mx-auto flex justify-center'>
          <div className='flex gap-[2rem] items-center mobile:flex-col'>
            <img src={myPhoto} alt='Gabriel Vieyra' className='h-[12.5rem] rounded-lg' />
            <div className='flex flex-col justify-center gap-[0.5rem] w-[25rem] dark:text-white mobile:w-full mobile:items-center'>
              <h2 className='text-[1.5rem] leading-none font-semibold'>!Hola a Todos!</h2>
              <h2 className='text-[3rem] leading-none font-semibold mobile:text-4xl'>
                Soy Gabriel
              </h2>
              <div>
                <p className='mobile:text-center'>
                  Curioso, pragmático, detallista y siempre estoy buscando algo nuevo para aprender
                  e incorporar.
                </p>
                <p className='mobile:text-center'>
                  Me formé como Diseñador Gráfico en la UBA y luego migré hacia el desarrollo,
                  enfocándome en el Desarrollo Web Front-End. Actualmente trabajo como desarrollador
                  Front-End React y estoy buscando el próximo paso en mi crecimiento profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerEffect>
    </section>
  );
};
