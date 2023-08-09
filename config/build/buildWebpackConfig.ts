import webpack from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[hash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    module: {
      // В поле rules мы прописываем как мы будем обрабатывать файлы
      rules: buildLoaders(options),
    },
    // указываем для каких файлов мы не будем требовать расширения при импорте
    resolve: buildResolvers(),
  };
};
