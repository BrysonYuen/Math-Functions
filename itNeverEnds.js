var stem2 = {
  classroom: "F103",
  students: 12,
}

var x = prompt("Classroom or Students");
var lowerCase = x.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")) {
  window.alert(stem2[lowerCase]);
}
else {
  tryAgain();
}

function tryAgain() {
  var x = prompt("Classroom or Students");
  var lowerCase = x.toLowerCase();
  if ((lowerCase === "classroom") || (lowerCase === "students")) {
    window.alert(stem2[lowerCase]);
  }
  else {
    tryAgain();
  }
}
// Made to keep replaying the window prompt, hence it never ends.