var bankAccount1 = {};
bankAccount1["name"] = "Bryson";
bankAccount1["balance"] = 1000;

var withdraw = prompt("Please write how much money you wish to take out. Current Balance = $1000");
bankAccount1["balance"] -= withdraw;
window.alert(bankAccount1.balance);