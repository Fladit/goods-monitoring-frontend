import React from 'react';
import { Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import styles from './Header.module.css';
import { SearchInput } from '../../SearchInput/SearchInput';

export const Header = React.memo(() => {
  return (
      <div className={styles.root}>
          <div className={styles.left}>
              <div className={styles.logo}>
                  <ShoppingBasketIcon sx={{
                    width: 40,
                    height: 32,
                  }}/>
                  <div className={styles.logoText}>Закупки</div>
              </div>
              <SearchInput className={styles.search}/>
          </div>
          <div className={styles.right}>
              <AccountCircleIcon className={styles.icon} sx={{
                width: 32,
                height: 32,
              }}/>
              <FavoriteIcon className={styles.icon} sx={{
                width: 32,
                height: 32,
                marginLeft: 1,
              }}/>
          </div>
      </div>);
});
