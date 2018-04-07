declare module "json-loader!*";
declare module "*.css";
declare module "*.json";

// shared folders
declare module "components";
declare module "components/*";
declare module "services/*";

interface Window {
  __INITIAL_STATE__: any;
  __REDUX_DEVTOOLS_EXTENSION__: any;
}

declare const CLIENT_ASSETS: any;

declare module "*.woff";
declare module "*.woff2";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "*.webp";
