```
npm install --save-dev neutrino neutrino-preset-react
npm install --save react react-dom lodash
mkdir src && touch src/index.js

# in src/index.js

import React from 'react';
import { render } from 'react-dom';

render(<h1>Hello world!</h1>, document.getElementById('root'));

# in package.json

  "scripts": {
    "start": "neutrino start --use neutrino-preset-react",
    "build": "neutrino build --use neutrino-preset-react"
  }

# create .neutrinorc.js.

module.exports = {
  use: [
    ['neutrino-preset-react', {
      /* preset options */

      // Example: disable Hot Module Replacement
      hot: false,

      // Example: change the page title
      html: {
        title: 'Epic React App'
      },

      // Add additional Babel plugins, presets, or env options
      babel: {
        // Override options for babel-preset-env
        presets: [
          ['babel-preset-env', {
            // Passing in targets to babel-preset-env will replace them
            // instead of merging them
            targets: {
              browsers: [
                'last 1 Chrome versions',
                'last 1 Firefox versions'
              ]
            }
          }]
        ]
      }
    }]
  ]
};

```
