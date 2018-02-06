function balikString(str) {
  var strBaru = "";
  for(var i = str.length-1; i >= 0; i--) {
    strBaru += str[i];
  }

  return strBaru;
}

console.log(balikString("Hello world!"));
