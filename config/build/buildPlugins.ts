import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export const buildPlugins = ({
  paths,
}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),
  ];
};
