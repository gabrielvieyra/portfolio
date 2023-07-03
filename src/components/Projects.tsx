import { FC } from 'react';

// Components
import { ContainerEffect, ProjectCard } from './index';

// Data
import { projects } from '../data/projects';

export const Projects: FC = () => {
  return (
    <section id='projects' className='py-[4.5rem]'>
      <ContainerEffect>
        <div className='w-[80%] my-0 mx-auto flex flex-col gap-[1rem]'>
          <h2 className='text-center text-[2.25rem] leading-none font-semibold dark:text-white'>
            Proyectos
          </h2>
          <p className='text-center font-semibold dark:text-white'>
            A continuación te muestro algunos de los proyectos en los cuales trabajé:
          </p>
          <div className='flex flex-wrap justify-center gap-[1rem]'>
            {projects.map(project => {
              return <ProjectCard key={project.name} project={project} />;
            })}
          </div>
        </div>
      </ContainerEffect>
    </section>
  );
};
