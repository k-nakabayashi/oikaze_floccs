module.exports = {
  mode: "development",
  devServer: {
    contentBase: "dist",
    open: true
  },
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/ts/index.ts`,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist/js`,
    // 出力ファイル名
    filename: "main.js"
  },

  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".js", ".ts"],
    // Webpackで利用するときの設定
    alias: {
      vue: "vue/dist/vue.esm.js"
    }
  }  
};
