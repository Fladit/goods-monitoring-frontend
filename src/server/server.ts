import express from 'express';
import { urlencoded, json } from 'body-parser';
import { renderHTML } from './renderHTML';

const PORT = process.env.PORT || 8080;
const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());

app.get('*', renderHTML);

app.listen(PORT, () => {
  console.log('App listening on PORT: ', PORT);
});

export default app;
