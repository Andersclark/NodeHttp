import routeMap from "./routeMap";
import notFoundHandler from "../handlers/notFound.js";

export function route(req) {
  // let url = req.url.endsWith("/") ? req.url : req.url.concat("/")
  const handler = getHandler(req, routeMap)
  if (handler) {
    return handler;
  }
  return notFoundHandler;
}

function getHandler(req, routeMap){
  const methodHandlers = getRouteHandlers(req.url.pathname, routeMap)
  if(methodHandlers) {
    return getHandlerMethod(req.method, methodHandlers)
  }
  return null;
}

function getRouteHandlers(route, handlers) {
  console.log("Finding route-handlers for: ", route)
  return handlers[route]
}

function getHandlerMethod(method, handlers){
  console.log("Finding method-handler for: ", method)
  return handlers[method]
}
