export function logRequest({method, url, }){
  console.info(`${method}: '${url}'`)
}
export function logError(error){
  console.error(error)
}

export function logSuccess(message){
  console.info(message)
}
