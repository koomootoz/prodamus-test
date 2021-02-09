declare namespace StylesGlobalScssNamespace {
  export interface IStylesGlobalScss {
    root: string;
  }
}

declare const StylesGlobalScssModule: StylesGlobalScssNamespace.IStylesGlobalScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesGlobalScssNamespace.IStylesGlobalScss;
};

export = StylesGlobalScssModule;
