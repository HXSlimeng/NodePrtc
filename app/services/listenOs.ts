import os from "os";
import osUtils from "os-utils";
import webSocket from "./webSocket";

// const cups = os.cpus()

const freeMem = os.freemem();

const totalMem = os.totalmem();

// const homeDir = os.homedir()

// const machine = os.machine

// const netWrk = os.networkInterfaces()

const platform = os.platform();

// const tempdir = os.tmpdir()

// const uptime = os.uptime()

const version = os.version();

export function cpuUsagePercent() {
  setTimeout(() => {
    osUtils.cpuUsage((percent) => {
      webSocket.clients.forEach((client) => client.send(percent));
      cpuUsagePercent();
    });
  }, 3000);
}
