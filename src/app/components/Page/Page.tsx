import type { ReactNode } from 'react';
import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { MainContent } from './MainContent/MainContent';
import styles from './Page.module.css';

export const Page = React.memo(({ children }: { children: ReactNode }) => {
  return (
        <div>
            <Header/>
            <Sidebar/>
            <MainContent className={styles.mainContent}>
                {children}
            </MainContent>
            <Footer/>
        </div>
  );
});
