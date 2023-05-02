import React, { FC } from 'react';

import { IPageContainer } from './PageContainer.interface';
import styles from './PageContainer.module.scss';

const PageContainer: FC<IPageContainer> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PageContainer;
