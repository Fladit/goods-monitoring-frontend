import { ChunkExtractor } from '@loadable/server';
import path from 'path';
import App from '../App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import type { AppState } from '../store/store';
import { createStore } from '../store/store';
import { Provider } from 'react-redux';
import { findRouteController } from '../app/router/routes/findRoute';
import { PageInitSuccess } from '../store/actions/PageInitSuccess';

const statsFile = path.resolve(__dirname, '..', '..', 'dist', 'loadable-stats.json');

export const renderHTML = async (location: string) => {
  const store = createStore();

  const initialRequests = findRouteController(location);
  const initialStore = initialRequests && await Promise.all(initialRequests.filter(request => Boolean(request)).map(request => request()));
  console.log('initalStore', location, initialStore, initialRequests);
  if (initialStore) {
    store.dispatch(PageInitSuccess(Object.assign({}, ...initialStore)));
  }

  const extractor = new ChunkExtractor({ statsFile, publicPath: '/' });
  const jsx = extractor.collectChunks(
      <Provider store={store}>
        <StaticRouter location={location}>
          <App/>
        </StaticRouter>
      </Provider>,
  );
  const html = renderToString(jsx);
  const scriptTags = extractor.getScriptTags();
  const styleTags = extractor.getStyleTags();
  const linkTags = extractor.getLinkTags();

  const preloadedReduxState = store.getState();

  return collectHTML(html, scriptTags, styleTags, linkTags, preloadedReduxState);
};

function collectHTML (html: string, scriptTags: string, styleTags: string, linkTags: string, reduxState: AppState) {
  return (
    `
  <html lang="ru">
  <head>
    ${linkTags}
    ${styleTags}
    <title>Collect HTML</title>
    </head>
  <body>
    <div id="root">${html}</div>
    ${scriptTags}
    <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(reduxState).replace(
        /</g,
        '\\u003c')}
    </script>
  </body>
  </html>`);
}
