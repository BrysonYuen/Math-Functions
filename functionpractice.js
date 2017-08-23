function calculateArea(userWidth,userHeight){
  //created a function that takes 2 parameters
	var area = userWidth * userHeight;
	//multiply width and height parameters
  return area;
  //value is returned
}

var userWidth = prompt("What is the width?");
//ask the user for a width value and save as userWidth
var userHeight = prompt("What is the height?");
//ask the user for a height value and sace as userHeight
var wallOne = calculateArea(userWidth,userHeight);
//pass userWidth and userHeight to the calculateArea function
window.alert(wallOne);
//popup area to screen
