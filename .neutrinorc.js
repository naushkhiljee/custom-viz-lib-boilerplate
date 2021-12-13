const airbnb = require('@neutrinojs/airbnb');
const reactComponents = require('@neutrinojs/react-components');
const jest = require('@neutrinojs/jest');
const typescript = require('neutrinojs-typescript');
const typescriptLint = require('neutrinojs-typescript-eslint');

const testExports = {
  options: {
    root: __dirname,
  },
  use: [
    typescript(),
    typescriptLint(),
    airbnb({
      eslint: {
        baseConfig: {
          rules: {
            '@typescript-eslint/no-explicit-any': 'off',
          },
        },
      },
    }),
    reactComponents({
      components: 'visualizations',
      hot: false,
    }),
    jest(),
    neutrino => {
      neutrino.config.externals({
          // To externalize react or other libraries, add to this object
          // and make sure that you add external resources to the custom viz.
          // for example...

          // react: "React",
      });
    }
  ],
};
module.exports = testExports;
