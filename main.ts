import { initSocket } from "./app/services";
import { listenPkgUpdate } from "./app/services";
import express from "express";
import * as routes from "./app/controllers";
import { RouteGenerator } from "./utils";
import { DefaultConfig } from "./config";

import './app/services/listenOs'

initSocket();
listenPkgUpdate();
initServer();

function initServer() {
  const app = express();
  //set Router
  {
    for (const key in routes) {
      if (Object.prototype.hasOwnProperty.call(routes, key)) {
        //@ts-ignore
        let router: RouteGenerator = routes[key];
        app.use(...router.params);
      }
    }
  }
  app.listen(DefaultConfig.SERVER_PORT);
}
