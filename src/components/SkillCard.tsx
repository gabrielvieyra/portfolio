import { FC } from 'react';

// Interfaces
import { Skill } from '../types/types';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: FC<SkillCardProps> = ({ skill }) => {
  const { text, icon } = skill;
  return (
    <div
      className='w-[10.938rem] h-auto py-[2rem] px-[1rem] rounded-2xl flex flex-col gap-[0.5rem] bg-grey 
    transition-all hover:shadow-lg hover:scale-105'
    >
      <img src={icon} alt={text} className='w-full h-[4.375rem]' />
      <span className='font-semibold leading-6 text-center'>{text}</span>
    </div>
  );
};
