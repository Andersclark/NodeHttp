import notFoundHandler from "../handlers/notFound.js";
import indexHtmlHandler from "../handlers/indexHtmlHandler.js";
import searchHandlers from "../handlers/search.js";

const routeMap = {
  "/": indexHtmlHandler,
  "/search": searchHandlers,
  "/404": notFoundHandler,
}


export default routeMap;
