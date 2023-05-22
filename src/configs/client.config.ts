import type { Configuration } from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import babelLoader from './loaders/babel-loader';

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = MiniCssExtractPlugin.loader;
const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[name]__[local]--[hash:base64:5]',
    },
  },
};

const config: Configuration = {
  entry: path.resolve(__dirname, '..', 'client', 'client.tsx'),
  devtool: isProduction ? 'source-map' : 'eval-cheap-source-map',
  output: {
    path: path.resolve(__dirname, '..', '..', 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new LoadablePlugin() as typeof MiniCssExtractPlugin,
  ],
  module: {
    rules: [
      { ...babelLoader },
      {
        exclude: ['/node_modules/'],
        test: /\.css$/i,
        use: [stylesHandler, cssLoader],
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
