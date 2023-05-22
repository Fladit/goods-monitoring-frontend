import type { ReactNode } from 'react';
import styles from './MainContent.module.css';
import classNames from 'classnames';
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs';

export const MainContent = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
        <div className={classNames(styles.content, className)}>
            <Breadcrumbs/>
            {children}
        </div>
  );
};
