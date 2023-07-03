import { ReactNode } from 'react';

export interface Skill {
  text: string;
  icon: string;
}

export interface Project {
  name: string;
  stack: Array<string>;
  description: string;
  image: string;
  url: string;
  code: string;
}

export interface ContactLink {
  label: string;
  link: string;
  icon: ReactNode;
}

export interface NavbarLink {
  id: string;
  title: string;
}
