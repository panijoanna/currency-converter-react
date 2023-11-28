declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
}
declare module "*.png" {
  import * as React from "react";

  const value: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  export default value;
}
