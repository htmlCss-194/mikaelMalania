function calculator(num1, num2, action) {
    if (action === "+") {
        return num1 + num2;
    } else if (action === "-") 
    {
        return num1 - num2;
    } else if (action === '*') {
        return num1 * num2;
    } else if (action === "/") {
        return num1 / num2;
    } else {
        return "I dont know what u just said";
    };
};

console.log(calculator(1,233,"+"));