
const indexHtmlHandler = {
  "GET": (req, res) => {
    const html = "<h1>Hello world!</h1>"
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
  }
}

export default indexHtmlHandler

