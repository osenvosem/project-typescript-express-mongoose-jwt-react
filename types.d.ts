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
  __CLIENT__: boolean;
  __SERVER__: boolean;
}

declare const CLIENT_ASSETS: any;
declare const __CLIENT__: boolean;
declare const __SERVER__: boolean;

declare module "*.woff";
declare module "*.woff2";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "*.webp";
