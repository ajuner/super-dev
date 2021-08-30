const { resolve, relative } = require("path");
const fs = require("fs");
const componentCompiler = require("@vue/compiler-sfc");

module.exports = function () {
  return {
    name: "vue",
    setup(build) {
      build.onLoad({ filter: /[^/]\.vue$/ }, async ({ path }) => {
        const filename = relative(process.cwd(), path);
        const source = await fs.promises.readFile(path, "utf8");
        const result = componentCompiler.parse(source, { filename });
        console.log(result.descriptor.template);
        return {
          contents: `123`,
        };
      });
    },
  };
};
