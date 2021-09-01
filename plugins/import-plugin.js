const { relative } = require("path");
const fs = require("fs");
const babel = require("@babel/core");
const babelImport = require("babel-plugin-import");
const importMeta = require("@babel/plugin-syntax-import-meta");

module.exports = function (options) {
  return {
    name: "import",
    setup(build) {
      build.onLoad({ filter: /component.ts/ }, async (opts) => {
        const { path } = opts;

        const filename = relative(process.cwd(), path);
        const source = await fs.promises.readFile(path, "utf8");

        const plugins = [importMeta, [babelImport, options]];

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
