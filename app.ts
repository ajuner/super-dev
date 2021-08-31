const { build } = require("esbuild");
const chokidar = require("chokidar");
const liveServer = require("live-server");
const vue = require("esbuild-plugin-vue").default;
const { lessLoader } = require("esbuild-plugin-less")
const vueJsxPlugin = require("./plugins/vue-jsx-plugin.js");

(async () => {
  const builder = await build({
    bundle: true,
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "devlopment"
      ),
    },
    entryPoints: ["src/index.ts"],
    incremental: true,
    minify: process.env.NODE_ENV === "production",
    outfile: "./public/script.js",
    plugins: [vue(), vueJsxPlugin(), lessLoader()],
  });
  chokidar
    .watch("src/**/*.{ts,tsx,vue}", {
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
