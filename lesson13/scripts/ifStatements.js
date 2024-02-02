let num1 = prompt("Enter num 1");
num1 = Number(num1);

let action = prompt("+ - * /");

let num2 = prompt("Enter num 2");
num2 = Number(num2);

if (action === "+") {
    alert(num1 + num2);
} else if (action === "-") {
    alert(num1 - num2);
} else if (action === "*") {
    alert(num1 * num2);
} else if (action === "/") {
    alert(num1 / num2);
} else {
    alert("Invaild charapter provided, please use either: + - * /");
}