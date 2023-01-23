import { httpServer } from "./src/http_server/index.js";

import { WebSocketServer, createWebSocketStream } from "ws";
import { commands } from "./src/utils/command.js";

import { HTTP_PORT, SOCKET_PORT, domain } from "./src/utils/constants.js";

const wss = new WebSocketServer({ host: domain, port: SOCKET_PORT });
const onError = (err: Error) => console.error(err);

wss.on("connection", (ws) => {
  const webSocketStream = createWebSocketStream(ws);

  const onMessage = async (data: string) => {
    console.log(data.toString());
    const [command, width, height] = String(data).split(" ");

    const _command = commands[command as keyof typeof commands];

    if (_command) {
      const result = await _command(width, height);

      return ws.send(`${command}${result || ""}`);
    }
  };

  ws.on("error", onError);
  ws.on("message", onMessage);
  ws.on("close", () => {
    console.log("Socket is closed");
    ws.close();
    ws.off("message", onMessage);
    ws.off("error", onError);
  });

  process.on("SIGINT", () => {
    ws.close();
    process.exit();
  });
});

console.log(
  "Socket server started on",
  `${wss.options.host}:${wss.options.port}`
);

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
