import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { useLocation } from 'react-router';

const BREADCRUMBS_ROUTES = {
  products: 'Продукты',
  milk: 'Молоко',
  vegetables: 'Овощи',
  bread: 'Хлеб',
  meat: 'Мясо',
  fruits: 'Фрукты',
  cereals: 'Крупы',
  fish: 'Рыба',
};

export const Breadcrumbs = React.memo(() => {
  const location = useLocation();
  const routes = location.pathname.split('/').filter(route => Boolean(route)) as Array<keyof typeof BREADCRUMBS_ROUTES>;

  return (
      <MuiBreadcrumbs aria-label="breadcrumb" separator="•">
          {routes.map(route => <Typography key={route}>{BREADCRUMBS_ROUTES[route]}</Typography>)}
      </MuiBreadcrumbs>);
});
