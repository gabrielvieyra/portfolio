import { FC } from 'react';

// Interfaces
import { Project } from '../types/types';

// Assets
import { githubWhite, online } from '../assets';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { name, image, description, stack, url, code } = project;
  return (
    <div className='w-[29.375rem] rounded-2xl overflow-hidden bg-white mobile:w-full'>
      <div className='relative'>
        <div
          className='absolute w-full h-full flex justify-center items-center bg-black opacity-0 bg-opacity-0 transition
          hover:bg-opacity-70 hover:opacity-100
      '
        >
          <div className='flex gap-8'>
            <a href={url} target='_blank' rel='noreferrer'>
              <img src={online} alt='page' className='w-[3rem] h-[3rem]' />
            </a>
            <a href={code} target='_blank' rel='noreferrer'>
              <img src={githubWhite} alt='github' className='w-[3rem] h-[3rem]' />
            </a>
          </div>
        </div>
        <img src={image} alt={name} className='w-full h-[20.625rem] object-cover' />
      </div>
      <div className='p-[1rem]'>
        <h2 className='font-semibold text-[1.5rem]'>{name}</h2>
        <p className=''>{description}</p>
        <div className='flex gap-[0.5rem] items-center mt-[0.5rem] tablet:flex-col tablet:items-start'>
          <span className='font-semibold'>Tecnologías:</span>
          <ul className='flex gap-3 tablet:flex-wrap'>
            {stack.map(technology => {
              return (
                <li
                  key={technology}
                  className='text-[0.75rem] rounded-lg p-[0.25rem] border-2 border-zinc-500/20 font-semibold'
                >
                  {technology}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
