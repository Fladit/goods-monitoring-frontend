import { MAIN_ROUTES } from './main';
import { PRODUCTS_CHAIN } from '../product/routes';

export const ROUTE_CHAIN = {
  [MAIN_ROUTES.INDEX]: [],
  [MAIN_ROUTES.PRODUCTS]: PRODUCTS_CHAIN,
} as const;
