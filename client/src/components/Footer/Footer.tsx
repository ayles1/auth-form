import React, { FC } from 'react';
import { AiOutlineGithub } from 'react-icons/all';

import Button from '@/components/ui/Button/Button';

import { IFooter } from './Footer.interface';
import styles from './Footer.module.scss';

const Footer: FC<IFooter> = () => {
  return (
    <footer data-testid='footer' className={styles.footer}>
      <Button target='_blank' link='https://github.com/ayles1' className={styles.contacts}>
        <AiOutlineGithub size={30} />
        <div>My github</div>
      </Button>
    </footer>
  );
};

export default Footer;
