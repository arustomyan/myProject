import { Configuration } from "webpack";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: Configuration["mode"];
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildEnv {
  mode: Configuration["mode"];
  port: number;
}
