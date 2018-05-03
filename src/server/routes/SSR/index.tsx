import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Application, Handler, RequestHandler } from "express";
import config from "config";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";
import passport from "passport";

import Root from "../../../common/Root";
import configureStore, { defaultState } from "../../../common/configureStore";
import "../../../common/globalStyles";
import rootSaga from "../../../common/rootSaga";

import { TStaticContext } from "./types";
import { TUser } from "../../../common/types";

const assets: string[] = JSON.parse(CLIENT_ASSETS).filter((asset: string) =>
  /.js$/.test(asset)
);

const authHandler: Handler = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
};

const SSRHandler: Handler = (req, res, next) => {
  const context: TStaticContext = {};
  const modules: string[] = [];
  const sheet = new ServerStyleSheet();
  const localDefaultState = { ...defaultState };

  if (req.user) {
    const { user } = req;
    user._id = user._id.toString();
    localDefaultState.loggedInUser = user as TUser;
  }

  const store = configureStore(localDefaultState);

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
    store.runSaga(rootSaga).done.then(() => {
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Typescript boilerplate</title>
          ${sheet.getStyleTags()}
          <script>window.__INITIAL_STATE__ = ${JSON.stringify(
            store.getState()
          )}</script>
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
    });
    renderToString(rootComp);
    store.close();
  }
};

export default [authHandler, SSRHandler];
