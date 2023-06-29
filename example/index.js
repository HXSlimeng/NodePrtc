let ws = new WebSocket("ws:localhost:8080");
const addMessage = (message) => {
  let dom = document.getElementById("wssMessage");
  let messDom = document.createElement("p");
  messDom.textContent = message;
  dom.append(messDom);
};

ws.onopen = (...args) => {
  ws.send(JSON.stringify({ code: 200, content: "connected" }));
  ws.send(JSON.stringify("te st!"));
};

ws.onmessage = (msg) => {
  if (Object.prototype.toString.call(msg.data) === "[object Blob]") {
    msg.data.text().then((res) => {
      addMessage(JSON.parse(res).version);
    });
  } else {
    addMessage(msg.data);
  }
};
ws.onclose = () => {
  addMessage("连接关闭");
};

function checkVersion() {
  fetch("http://127.0.0.1:8081/update/checkVersion", {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  })
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
}
