import { RawData } from "ws";

export const socketMessCtr = (message: RawData) => {
  message = JSON.parse(message.toString());
  return message;
};
