import type { Request, Response } from 'express';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';
import App from '../App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import gullImage from './Gull_portrait_ca_usa.jpg';

const statsFile = path.resolve(__dirname, '..', '..', 'dist', 'loadable-stats.json');

export const renderHTML = (req: Request, res: Response) => {
  const location = req.url;
  const extractor = new ChunkExtractor({ statsFile });
  const jsx = extractor.collectChunks(
      <StaticRouter location={location}>
          <App/>
      </StaticRouter>,
  );
  const html = renderToString(jsx);
  const scriptTags = extractor.getScriptTags();
  const styleTags = extractor.getStyleTags();
  const linkTags = extractor.getLinkTags();

  const renderedHTML = collectHTML(html, scriptTags, styleTags, linkTags);
  res.send(renderedHTML);
};

function collectHTML (html: string, scriptTags: string, styleTags: string, linkTags: string) {
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
  </body>
  </html>`);
}
