import * as fs from "fs";
import { Router } from "express";

export const readFile = (filePath: fs.PathLike) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export class RouteGenerator {
  router = Router();
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.router;
  }

  get params(): [string, Router] {
    return [this.baseUrl, this.router];
  }
}
