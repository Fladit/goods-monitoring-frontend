import { Route, Routes } from 'react-router';
import loadable from '@loadable/component';
import { ProductsRouter } from './app/router/product/router';
import NotFound from './pages/NotFound';
import { Page } from './app/components/Page/Page';
import './app/styles/variables.css';
import './App.css';

const LandingComponent = loadable(async () => await import('./pages/Landing'));
const BanComponent = loadable(async () => await import('./pages/Ban'));

const App = () => {
  return (
        <Page>
            <Routes>
                <Route path={'/'} element={<LandingComponent/>}/>
                <Route path={'/products/*'} element={<ProductsRouter/>}/>
                <Route path={'/ban'} element={<BanComponent/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Page>
  );
};

export default App;
