const { relative } = require("path");
const fs = require("fs");
const babel = require("@babel/core");
const jsx = require("@vue/babel-plugin-jsx");
const importMeta = require("@babel/plugin-syntax-import-meta");

module.exports = function (options) {
  return {
    name: "vue-jsx",
    setup(build) {
      build.onLoad({ filter: /\.[jt]sx$/ }, async (opts) => {
        const { path } = opts;

        const filename = relative(process.cwd(), path);
        const source = await fs.promises.readFile(path, "utf8");

        const plugins = [importMeta, [jsx, options]];

        const result = babel.transformSync(source, {
          babelrc: false,
          ast: true,
          plugins,
          sourceFileName: filename,
          configFile: false,
        });

        return {
          contents: result.code,
        };
      });
    },
  };
};
