import { Route, Routes } from 'react-router';
import loadable from '@loadable/component';
import { ProductsRouter } from './app/router/product/router';
import NotFound from './pages/NotFound';

const LandingComponent = loadable(async () => await import('./pages/Landing'));
const BanComponent = loadable(async () => await import('./pages/Ban'));

const App = () => {
  return (
        <Routes>
            <Route path={'/'} element={<LandingComponent/>}/>
            <Route path={'/products/*'} element={<ProductsRouter/>}/>
            <Route path={'/ban'} element={<BanComponent/>}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
  );
};

export default App;
