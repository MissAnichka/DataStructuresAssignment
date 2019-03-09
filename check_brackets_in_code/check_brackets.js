function checkBrackets(str) {
    const openBrackets = "{([";
    const closeBrackets = "})]";
    const bracketMatch = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    // LIFO - use stack
    const stack = []
    for (let i = 0; i < str.length; i++) {

        // if it's a closing bracket
        if (closeBrackets.includes(str[i])) {
            // check if closing bracket matches last open bracket, otherwise outta place
            if (stack.length && str[i] === bracketMatch[stack[stack.length - 1].char]) {
                stack.pop()
            } else {
                return i + 1;
            }
        }

        // if it's an open bracket, add info to stack
        if (openBrackets.includes(str[i])) {
            stack.push({ char: str[i], ind: i });
        }
    }

    // if we finish stack w/o issues but there's an open bracket w/o closing left return it
    if (stack.length) {
        return stack[0].ind + 1;
    }

    // if all open brackets were closed w/ no issues, great success
    return "Success";
}


process.stdin.resume()
process.stdin.setEncoding("utf8")
process.stdin.on("data", function(input){
  var res = checkBrackets(input)
  console.log( res)
  return checkBrackets(res);
})