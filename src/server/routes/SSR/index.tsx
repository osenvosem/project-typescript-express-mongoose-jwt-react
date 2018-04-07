import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Application, Handler } from "express";
import config from "config";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";

import Root from "../../../common/Root";
import configureStore from "../../../common/configureStore";
import "../../../common/globalStyles";

import { TStaticContext } from "./types";

const assets: string[] = JSON.parse(CLIENT_ASSETS).filter((asset: string) =>
  /.js$/.test(asset)
);

const SSRHandler: Handler = (req, res, next) => {
  const context: TStaticContext = {};
  const modules: string[] = [];
  const store = configureStore();
  const sheet = new ServerStyleSheet();

  const rootComp = (
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={context}>
        <Root />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(context.status || 301, context.url);
  } else {
    const html = `
      <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Typescript boilerplate</title>
        ${sheet.getStyleTags()}
        </head>
        
        <body>
          <div id="root">${renderToString(rootComp)}</div>

          ${assets
            .slice()
            .reverse()
            .map(assetPath => {
              return `<script src="${assetPath}"></script>`;
            })
            .join("\n")}
        </body>
      </html>
    `;
    res.send(html);
  }
};

export default SSRHandler;
