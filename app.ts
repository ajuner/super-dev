const { build } = require("esbuild");
const chokidar = require("chokidar");
const liveServer = require("live-server");
const vuePlugin = require('./plugins/vue-plugin.js');

(async () => {
  const builder = await build({
    bundle: true,
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    },
    entryPoints: ["src/index.ts"],
    incremental: true,
    minify: process.env.NODE_ENV === "production",
    outfile: "./public/script.js",
    plugins: [vuePlugin()],
  });
  chokidar
    .watch("src/**/*.{ts,vue}", {
      interval: 0,
    })
    .on("all", () => {
      builder.rebuild();
    });
  liveServer.start({
    open: true,
    port: process.env.PORT || 8080,
    root: "public",
  });
})();
