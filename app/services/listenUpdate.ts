import * as fs from "fs";
import path from "path";
import webSocket from "./webSocket";
import { DefaultConfig } from "../../config";

export const listenPkgUpdate = () => {
  fs.watch(
    DefaultConfig.UPDATE_FILPATH,
    { encoding: "utf-8" },
    (event, filename) => {
      let message = `File [${path.basename(
        DefaultConfig.UPDATE_FILPATH
      )}] ${event}`;

      webSocket && webSocket.send("you need update!");

      fs.appendFile("./write.txt", message, { encoding: "utf-8" }, (err) => {});
    }
  );
};
