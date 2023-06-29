import * as fs from "fs";
import path from "path";
import WebSocket, { WebSocketServer } from "ws";
import { Buffer } from "node:buffer";

let filepath = "./testFile.txt";
let webSocket: WebSocket | undefined;

const wss = new WebSocket.Server({
  port: 8080,
});

wss.on("open", () => {
  console.error("socket serve run success!");
});

wss.on("connection", (socket, request) => {
  socket.send("connection success !");

  webSocket = socket;

  socket.on("message", (msg) => {
    //checkUpdate

    let test = msg.toString();
    if (msg.toString() === "checkUpdate") {
      socket.send(JSON.stringify({ version: "0.0.1" }), (error) => {
        error && console.error(`[ERROR]:update FAILED, ${error}`);
      });
    }
  });
});
