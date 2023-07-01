import { FC } from 'react';

// Components
import { SkillCard, ContainerEffect } from './index';

// Data
import { skills } from '../data/skills';

export const Skills: FC = () => {
  return (
    <section id='skills' className='bg-white text-black py-[2rem]'>
      <ContainerEffect>
        <div className='w-[80%] my-0 mx-auto flex flex-col gap-[1rem]'>
          <h2 className='text-center text-[2.25rem] leading-none font-semibold'>Habilidades</h2>
          <p className='text-center font-semibold'>
            Estas son las tecnologías con las cuales me manejo:
          </p>
          <div className='flex flex-wrap justify-center gap-[1rem]'>
            {skills.map(skill => {
              return <SkillCard key={skill.text} skill={skill} />;
            })}
          </div>
        </div>
      </ContainerEffect>
    </section>
  );
};
