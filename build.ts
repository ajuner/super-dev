const { build } = require('esbuild');
const vue = require('esbuild-plugin-vue').default;
const { lessLoader } = require('esbuild-plugin-less');
const vueJsxPlugin = require('./plugins/vue-jsx-plugin.js');
const importPlugin = require('./plugins/import-plugin.js');

(async function () {
  await build({
    bundle: true,
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    entryPoints: ['src/index.ts'],
    incremental: true,
    minify: true,
    outfile: './public/script.js',
    plugins: [
      importPlugin({
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: true,
      }),
      vue(),
      vueJsxPlugin(),
      lessLoader({
        javascriptEnabled: true,
      }),
    ],
  });
  process.exit();
})();
