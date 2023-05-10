import { hydrateRoot } from 'react-dom/client';
import App from '../App';
import { Provider as ReduxProvider } from 'react-redux';
import type { AppState } from '../store/store';
import { createStore } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

const store = createStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;

loadableReady(() => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('No root element');
  }

  hydrateRoot(rootElement,
      <ReduxProvider store={store}>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </ReduxProvider>,
  );
});

declare global {
  interface Window {
    __INITIAL_STATE__?: AppState
  }
}
