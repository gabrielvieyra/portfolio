import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContainerEffectProps {
  children: ReactNode;
}

export const ContainerEffect: FC<ContainerEffectProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeIn', duration: 0.4, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
