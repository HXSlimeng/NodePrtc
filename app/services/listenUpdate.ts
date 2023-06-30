import * as fs from "fs";
import path from "path";
import { DefaultConfig } from "../../config";
import WebSocket from "../services/webSocket";

export const listenPkgUpdate = () => {
  fs.watch(
    DefaultConfig.UPDATE_FILPATH,
    { encoding: "utf-8" },
    (event, filename) => {
      let message = `File [${path.basename(
        DefaultConfig.UPDATE_FILPATH
      )}] ${event}`;

      WebSocket.clients.forEach((client) => client.send("have a new update!"));

      fs.appendFile("./write.txt", message, { encoding: "utf-8" }, (err) => {});
    }
  );
};
