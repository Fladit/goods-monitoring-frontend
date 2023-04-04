import { createRoot } from 'react-dom/client';
import App from '../App';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

const store = createStore();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No root element');
}
const root = createRoot(rootElement);
root.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ReduxProvider>,
);
