import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';

const LINKS = [
  {
    link: '/products/milk',
    title: 'Молоко',
  },
  {
    link: '/products/vegetables',
    title: 'Овощи',
  },
  {
    link: '/products/bread',
    title: 'Хлеб',
  },
  {
    link: '/products/meat',
    title: 'Мясо',
  },
  {
    link: '/products/fruits',
    title: 'Фрукты',
  },
  {
    link: '/products/cereals',
    title: 'Крупы',
  },
  {
    link: '/products/fish',
    title: 'Рыба',
  },
];

export const Sidebar = React.memo(() => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <div className={styles.root}>
          <List
              className={styles.list}
          >
              <ListItemButton onClick={handleClick}>
                  <ListItemText primary="Продукты" primaryTypographyProps={{ sx: { fontWeight: 600 } }}/>
                  {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                      {LINKS.map(({ link, title }) => {
                        return (
                            <ListItemButton key={title} sx={{ pl: 4 }}>
                                <Link to={link} reloadDocument={true} className={styles.link}>{title}</Link>
                            </ListItemButton>
                        );
                      })}
                  </List>
              </Collapse>
          </List>
      </div>
  );
});
