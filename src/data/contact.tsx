// Interfaces
import { ContactLink } from '../types/types';

// FeatherIcons
import { GitHub, Mail, Linkedin, Folder } from 'react-feather';

export const contactlinks: Array<ContactLink> = [
  {
    label: 'vieyra.gabriel08@gmail.com',
    link: 'mailto:vieyra.gabriel08@gmail.com',
    icon: <Mail />,
  },
  {
    label: 'github.com/gabrielvieyra',
    link: 'https://github.com/gabrielvieyra',
    icon: <GitHub />,
  },
  {
    label: 'linkedin.com/in/gabrielvieyra',
    link: 'https://www.linkedin.com/in/gabrielvieyra/',
    icon: <Linkedin />,
  },
  {
    label: 'behance.net/gabrielvieyra',
    link: 'https://www.behance.net/gabrielvieyra',
    icon: <Folder />,
  },
];
