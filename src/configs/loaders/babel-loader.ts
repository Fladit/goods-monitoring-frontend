export default {
  test: /\.(([jt])sx?)$/i,
  exclude: ['/node_modules/', '/dist/'],
  use: {
    loader: 'babel-loader',
  },
};
