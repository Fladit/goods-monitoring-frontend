import { Route, Routes } from 'react-router';
import { PRODUCTS_ROUTER } from './routes';
import NotFound from '../../../pages/NotFound';

export const ProductsRouter = () => {
  return <Routes>
    {PRODUCTS_ROUTER.map(({ path, element: Component }) => <Route key={path} path={path} element={<Component/>} />)}
    <Route path='*' element={<NotFound/>}/>
  </Routes>;
};
