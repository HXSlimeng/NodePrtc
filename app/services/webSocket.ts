import WebSocket from "ws";
// import { socketMessCtr } from "../controllers";
import { DefaultConfig } from "../../config";

let wss: WebSocket.Server = new WebSocket.Server({
  port: DefaultConfig.WS_PORT as number,
});

export const initSocket = async () => {
  wss.addListener("listening", (...args) => {});

  wss.on("connection", (socket, request) => {
    socket.send("connection success !");
    wss.on("message", (msg) => {
      try {
        msg = JSON.parse(msg.toString());
      } catch (error) {
        throw new Error(error as string);
      }
      //TODO
    });
    return socket;
  });

  wss.on("open", (...args) => {});

  wss.on("close", () => {});

  wss.on("error", (error) => {
    throw new Error("socket连接错误");
  });
};

export default wss;
