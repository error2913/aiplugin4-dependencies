var filename = "tts.js";

module.exports = {
  dev: {
    bundle: true,
    entryPoints: ["src/index.ts"],
    minify: false,
    outfile: "dev/" + filename,
    platform: "browser",
    tsconfig: "./tsconfig.json",
    color: true,
    sourcemap: true,
    external: ["csharp", "puerts"],
    target: "es2020",
    treeShaking: true,
    logLevel: "error",
    supported: {
      "async-await": true
    }
  },
  build: {
    bundle: true,
    entryPoints: ["src/index.ts"],
    minify: false,
    outfile: "dist/" + filename,
    platform: "browser",
    tsconfig: "./tsconfig.json",
    color: true,
    sourcemap: false,
    external: ["csharp", "puerts"],
    target: "es6",
    treeShaking: true,
    logLevel: "error",
    supported: {
      "async-await": true
    },
    charset: "utf8"
  }
};
