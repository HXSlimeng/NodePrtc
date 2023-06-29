import WebSocket from "ws";
// import { socketMessCtr } from "../controllers";
import { DefaultConfig } from "../../config";

let webSocket: WebSocket | undefined;

export const initSocket = () => {
  const wss = new WebSocket.Server({
    port: DefaultConfig.WS_PORT as number,
  });

  wss.on("open", () => {
    console.error("socket serve run success!");
  });

  wss.on("connection", (socket, request) => {
    webSocket = socket;
    socket.send("connection success !");

    socket.on("message", (msg) => {
      try {
        msg = JSON.parse(msg.toString());
        console.log(msg);
      } catch (error) {
        throw new Error(error as string);
      }
      //TODO
    });
  });

  wss.on("close", () => {});
};

export default webSocket;
