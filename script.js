function operate(operation, a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (operation == "add") {
        return a + b;
    } else if (operation == "subtract") {
        return a - b
    } else if (operation == "multiply") {
        return a * b
    } else if (operation == "divide") {
        return a / b
    };
};