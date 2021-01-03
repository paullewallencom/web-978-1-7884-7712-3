
module.exports = {
  use: [
    ['neutrino-preset-react', {
      /* preset options */

      // Example: disable Hot Module Replacement
      hot: true,

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
