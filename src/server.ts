import * as http from 'http'
import {route} from "./routes/router"
import {logError, logRequest, logSuccess} from "./logger";
import parseRequest from "./utilities/parseRequest"
const port = process.argv[2] || 8080;

const server = http.createServer(handleRequest)
server.listen(port, () => console.log(`Listening on port ${port}`));

function handleRequest(req, res) {
  logRequest(req)
  const parsedRequest = parseRequest(req)
  try {
    const handler = route(parsedRequest)
    handler(parsedRequest, res);
  } catch (e) {
    logError(e)
  }
}

