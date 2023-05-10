import { ROUTE_CHAIN } from './routeChain';

export const findRouteController = (route: string) => {
  if (!route || typeof route !== 'string') {
    return undefined;
  }

  const routeParts = route.split('/').map(route => '/' + route);

  // нужно избавляться от первого элемента (он всгеда пустой) (например: split со строкой '/products' будет возвращать ['', 'products'])
  routeParts.splice(0, 1);

  const routeController = routeParts.reduce<any>((acc, route) => {
    return acc[route];
  }, ROUTE_CHAIN);

  if (Array.isArray(routeController) && routeController.length) {
    return routeController as unknown as Array<() => Promise<any>>;
  }

  return undefined;
};
