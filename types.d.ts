declare module "json-loader!*";
declare module "*.css";
declare module "*.json";

// shared folders
declare module "components";
declare module "components/*";
declare module "services/*";

interface window {
  __INITIAL_STATE__: any;
}

declare const CLIENT_ASSETS: any;

declare module "*.woff";
declare module "*.woff2";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "*.webp";
