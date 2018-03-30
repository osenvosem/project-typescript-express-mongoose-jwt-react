import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Application, Handler } from "express";
import config from "config";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";

import Root from "../../../common/Root";
import { TStaticContext } from "./types";
import configureStore from "../../../common/configureStore";

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
      <StaticRouter location={req.url} context={context}>
        <Root />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(context.status || 301, context.url);
  } else {
    store.runSaga(todoAppSaga).done.then(() => {
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
        
          <script>window.__INITIAL_STATE__ = ${JSON.stringify(
            store.getState()
          )}</script>

          ${assets
            .map(assetPath => {
              return `<script src="${assetPath}"></script>\n`;
            })
            .join("\n")}
        </body>
      </html>
    `;
      res.send(html);
    });
    renderToString(sheet.collectStyles(rootComp));
    store.close();
  }
};

export default SSRHandler;
