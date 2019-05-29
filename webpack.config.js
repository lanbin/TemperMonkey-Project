const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const PORT = 9981;
const DEVELOPMENT = 'development';
const IS_DEV = process.env.NODE_ENV === DEVELOPMENT;

const mode = IS_DEV ? 'development' : 'production';

module.exports = {
  mode,

  watchOptions: {
    ignored: [/node_modules/, /dist/],
  },

  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.less'],
  },

  devServer: {
    port: PORT,
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /\/node_modules/,
        terserOptions: {
          extractComments: 'all',
        },
      }),
    ],
  },

  devtool: false,

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: [/node_modules/, /assets/],
        use: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
    ],
  },
};
