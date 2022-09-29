const BLACK = "#"
const WHITE = "_"

var n = 8
var res = ""

for (var q=0; q<n; ++q) {
  var line = ""
  
  for (var w=0; w<n; ++w) {
    line += q+w & 1 ? BLACK : WHITE
  }
  
  res += line + "\n"
}
console.log(res)