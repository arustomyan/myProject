import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

// использование jsx без ts в md/Jsx без TS.md

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      // Преобразование CSS в формат CommonJS.
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => {
              return Boolean(resPath.includes(".module"));
            },
            localIdentName: isDev ? "[name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      // Компиляция Sass в CSS.
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/, // Проверка на соответствие расширению .ts и .tsx файлов.
    use: "ts-loader", // Используется загрузчик ts-loader для компиляции TypeScript.
    exclude: /node_modules/, // Исключение папки node_modules из обработки этим загрузчиком.
  };
  return [cssLoader, tsLoader];
};
