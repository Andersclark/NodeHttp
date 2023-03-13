export default function parseRequest(req) {
  const url = new URL("http://localhost:8000" + req.url)
  return {
    raw: req,
    url,
    method: req.method
  }
}
