const path = require('path')

module.exports = ({ config }) => {
  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules']
  config.resolve.alias = {
    '@components': path.resolve(__dirname, '..', 'src', 'components'),
    '@email': path.resolve(__dirname, '..', 'src', 'components', 'Email', 'Components' ),
    '@pages': path.resolve(__dirname, '..', 'src', 'pages', '*'),
    '@public': path.resolve(__dirname, '..', 'public', '*'),
    '@theme': path.resolve(__dirname, '..', 'src', 'theme', 'stitches.config.ts'),
    '@lib': path.resolve(__dirname, '..', 'src', 'lib'),
  }

  return config
}