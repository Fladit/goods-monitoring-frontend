import type { Configuration } from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import babelLoader from './loaders/babel-loader';

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config: Configuration = {
  entry: path.resolve(__dirname, '..', 'server', 'server.ts'),
  target: 'node',
  devtool: isProduction ? 'source-map' : 'eval-cheap-source-map',
  output: {
    path: path.resolve(__dirname, '..', '..', 'dist', 'server'),
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { ...babelLoader },
      {
        exclude: ['/node_modules/'],
        test: /\.css$/i,
        use: [{
          loader: 'css-loader',
          options: {
            modules: {
              exportOnlyLocals: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
};

if (isProduction) {
  config.mode = 'production';
} else {
  config.mode = 'development';
}

export default config;
