import express from 'express';
import { urlencoded, json } from 'body-parser';
import { renderHTML } from './renderHTML';
import path from 'path';

const PORT = process.env.PORT || 8080;
const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());

if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.resolve(__dirname, '..', '..', 'dist')));
}

app.get('*', (req, res) => {
  const location = req.url;
  renderHTML(location).then((html) => {
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log('App listening on PORT: ', PORT);
});

export default app;
