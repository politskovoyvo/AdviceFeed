module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: 'current',
          node: 'current'
        }
      }
    ],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: ['babel-plugin-transform-import-meta', 'babel-plugin-transform-vite-meta-env', '@babel/plugin-transform-runtime']
};
