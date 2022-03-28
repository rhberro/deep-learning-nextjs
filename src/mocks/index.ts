import { setupWorker, rest } from "msw";
import { setupServer } from "msw/node";

import player from "./data/player";
import players from "./data/players";

function createJSONResponse(data: any) {
  return function createJSONResponseWrapper(
    _: unknown,
    response: any,
    context: any
  ) {
    return response(context.json(data));
  };
}

const handlers = [
  rest.get("http://localhost:3001/player", createJSONResponse(player)),
  rest.get("http://localhost:3001/players", createJSONResponse(players)),
];

if (typeof window === "undefined") {
  setupServer(...handlers).listen();
} else {
  setupWorker(...handlers).start();
}
