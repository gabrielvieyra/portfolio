// Interfaces
import { ContactLink } from '../types/types';

// Assets
import { linkedin, email, github, behance } from '../assets';

export const contactlinks: Array<ContactLink> = [
  {
    label: 'vieyra.gabriel08@gmail.com',
    link: 'mailto:vieyra.gabriel08@gmail.com',
    icon: email,
  },
  {
    label: 'github.com/gabrielvieyra',
    link: 'https://github.com/gabrielvieyra',
    icon: github,
  },
  {
    label: 'linkedin.com/in/gabrielvieyra',
    link: 'https://www.linkedin.com/in/gabrielvieyra/',
    icon: linkedin,
  },
  {
    label: 'behance.net/gabrielvieyra',
    link: 'https://www.behance.net/gabrielvieyra',
    icon: behance,
  },
];
