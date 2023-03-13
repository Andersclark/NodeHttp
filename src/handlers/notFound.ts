
export default function notFoundHandler(req, res) {
  res.writeHead(404);
  res.end(`No handler found for '${req.url}'`);
}
