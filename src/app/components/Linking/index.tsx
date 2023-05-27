import React from 'react';
import styles from './Linking.module.css';
import classNames from 'classnames';

export const Linking = React.memo(({ links, className }: { links: string[]; className?: string; }) => {
  return <div className={classNames(styles.root, className)}>
      {links.map((link) => {
        return <a key={link} href={`#${link}`} className={styles.link}>{link}</a>;
      })}
    </div>;
});
