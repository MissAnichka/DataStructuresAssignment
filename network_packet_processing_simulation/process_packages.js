


process.stdin.resume()
process.stdin.setEncoding("utf8")
process.stdin.on("data", function(input){
  var res = checkBrackets(input)
  console.log( res)
  return checkBrackets(res);
})

