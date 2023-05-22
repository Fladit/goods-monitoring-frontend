import { CATEGORY_FOR_REQUEST, getProductByCategory } from '../../../resources/requests/server/landing';
import ProductsPage from '../../../pages/Products';

export const PRODUCTS_ROUTE = {
  MILK: '/milk',
  BREAD: '/bread',
  VEGETABLES: '/vegetables',
} as const;

export const PRODUCTS_CHAIN = {
  [PRODUCTS_ROUTE.MILK]: [() => getProductByCategory(CATEGORY_FOR_REQUEST.MILK)],
  [PRODUCTS_ROUTE.BREAD]: [() => getProductByCategory(CATEGORY_FOR_REQUEST.BREAD)],
  [PRODUCTS_ROUTE.VEGETABLES]: [() => getProductByCategory(CATEGORY_FOR_REQUEST.VEGETABLES)],
} as const;

export const PRODUCTS_ROUTER = Object.values(PRODUCTS_ROUTE).map((path) => ({ path, element: ProductsPage }));
