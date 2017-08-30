var bankAccount1 = {};
bankAccount1["name"] = "Bryson";
bankAccount1["balance"] = 1000;
//above is object and keys.
var deposit = prompt("Please write how much money you wish to add. Current Balance = $1000");
//prompt is to ask how much money user wishes to add
var y = parseInt(deposit);
//forces it to be an integer so it will add properly
window.alert(bankAccount1.balance + y);
//shows how much money was added