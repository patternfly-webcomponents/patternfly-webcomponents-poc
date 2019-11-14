const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const deduper = require('postcss-discard-duplicates');

const useExperimentalFeatures = process.env.CARBON_USE_EXPERIMENTAL_FEATURES !== 'false';
const useCustomProperties = process.env.CARBON_CUSTOM_ELEMENTS_STORYBOOK_USE_CUSTOM_PROPERTIES === 'true';
const useStyleSourceMap = process.env.CARBON_CUSTOM_ELEMENTS_STORYBOOK_USE_STYLE_SOURCEMAP === 'true';

module.exports = ({ config, mode }) => {
  const sassOptions = {
    includePaths: [path.resolve(__dirname, '..', 'node_modules')],
    data: `
      $feature-flags: (
        grid: ${useExperimentalFeatures},
      );
    `,
    sourceMap: useStyleSourceMap,
  };

  config.devtool = useStyleSourceMap ? 'source-map' : '';

  if (mode === 'PRODUCTION') {
    config.optimization = {
      ...config.optimization,
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          terserOptions: {
            mangle: false,
          },
        }),
      ],
    };
  }

  // `carbon-custom-elements` does not use `polymer-webpack-loader` as it does not use full-blown Polymer
  const htmlRuleIndex = config.module.rules.findIndex(
    item => item.use && item.use.some && item.use.some(use => /polymer-webpack-loader/i.test(use.loader))
  );
  if (htmlRuleIndex >= 0) {
    config.module.rules.splice(htmlRuleIndex, 1);
  }

  const babelLoaderRule = config.module.rules.find(
    item => item.use && item.use.some && item.use.some(use => /babel-loader/i.test(use.loader))
  );
  if (babelLoaderRule) {
    config.module.rules.unshift({
      use: babelLoaderRule.use,
      include: [
        path.dirname(require.resolve('lit-html')),
        path.dirname(require.resolve('lit-element')),
        path.dirname(require.resolve('@webcomponents/custom-elements')),
        // `ShadyCSS` NPM package is missing its entry point file
        path.dirname(require.resolve('@webcomponents/shadycss/scoping-shim.min.js')),
        path.dirname(require.resolve('@webcomponents/shadydom')),
      ],
    });
  }

  config.module.rules.push(
    {
      // We load Web Components polyfills by our own (See `src/polyfills/index.js`)
      test: /@webcomponents[\\/]webcomponentsjs[\\/]webcomponents-lite/i,
      use: 'null-loader',
    },
    {
      test: /@carbon[\\/]icons[\\/]/i,
      use: [...babelLoaderRule.use, require.resolve('../svg-result-carbon-icon-loader')],
    },
    {
      test: /-story(-(angular|react))?\.[jt]sx?$/,
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            parser: 'typescript',
            prettierConfig: {
              printWidth: 80,
              tabWidth: 2,
              bracketSpacing: true,
              trailingComma: 'es5',
              singleQuote: true,
            },
          },
        },
      ],
      enforce: 'pre',
    },
    {
      test: /\.ts$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            // `version: '7.3.0'` ensures `@babel/plugin-transform-runtime` is applied to decorator helper
            plugins: [['@babel/plugin-transform-runtime', { version: '7.3.0' }]],
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      sideEffects: true,
      use: [
        require.resolve('../css-result-loader'),
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              ...(!useCustomProperties ? [] : [deduper()]),
              require('../postcss-fix-host-pseudo')(),
              require('autoprefixer')(),
            ],
            sourceMap: useStyleSourceMap,
          },
        },
        !useCustomProperties
          ? {
              loader: 'sass-loader',
              options: sassOptions,
            }
          : {
              loader: require.resolve('../multiple-instances-loader'),
              options: {
                instances: [
                  {
                    loader: 'sass-loader',
                    options: {
                      ...sassOptions,
                      data: `
                        @import '${path.resolve(__dirname, 'theme-chooser')}';
                        ${sassOptions.data}
                      `,
                    },
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      ...sassOptions,
                      data: `
                        $storybook--carbon--theme-name: 'custom-properties';
                        @import '${path.resolve(__dirname, 'theme-chooser')}';
                        ${sassOptions.data}
                      `,
                    },
                  },
                ],
              },
            },
      ],
    },
    {
      test: /\.(woff(2)?|ttf|jpg|png|eot|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    }
  );

  config.resolve.extensions.push('.ts');

  return config;
};
