module.exports = function(obj) {
  let str = ""
  for (let elm in obj) {
    str += `${elm}=${obj[elm]}&`
  }
  return str.slice(0, -1);
}
