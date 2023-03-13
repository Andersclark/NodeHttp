
const data = [
  {
    name: "Anders Clark",
    age: 35,
    gender: "male",
    height: 174,
  },
  {
    name: "Elias Land",
    age: 36,
    gender: "unknown",
    height: null,
  },
  {
    name: "Indy Clark",
    age: 5,
    gender: "male",
    height: null,
    wight: 19.5,
  },

]

const searchHandlers = {
  "GET": (req, res) => {
    let searchResult = [];
    debugger;
    const searchTerm = req.url.searchParams.get("q")
    console.log("Searching data for ", searchTerm)

    if (searchTerm) {
      searchResult = data.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))
      console.log("Returning result: ", searchResult)

      res.writeHead(200, { 'Content-Type': 'application/json' });
    } else {
      res.writeHead(404)
    }
    res.write(JSON.stringify(searchResult));
    res.end();
  }
}
export default searchHandlers
