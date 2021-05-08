let currentA = document.getElementById("a");
let currentOperation = document.getElementById("current-operation");
let currentB = document.getElementById("b");



function operate(operation, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operation == "add") {
        return a + b;
    } else if (operation == "subtract") {
        return a - b
    } else if (operation == "multiply") {
        return a * b
    } else if (operation == "divide") {
        if (b == 0) {
            return 0;
        }
        return a / b
    };
};



let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
    // when a number is clicked
    numbers[i].addEventListener("click", () => {
        if (!currentOperation.value) {
            // if no operation entered, add to value a
            currentA.textContent += numbers[i].id;
        } else {
            // if operation entered, add to value b
            currentB.textContent += numbers[i].id;
        };
    });
};

let operations = document.getElementsByClassName("operation");
for (let i = 0; i < operations.length; i++) {
    // when an operation is clicked
    operations[i].addEventListener("click", () => {
        // if no value a, do not add operation to equation
        // if value b, do not add operation to equation
        // if an operation is already selected, do not add operation to equation
        if (currentA.textContent && !currentB.textContent && !currentOperation.value) {
            currentOperation.textContent = operations[i].textContent;
            currentOperation.value = operations[i].id;
        } else if (document.getElementById("result").textContent) {
            currentA.textContent = document.getElementById("result").textContent;
            currentOperation.textContent = operations[i].textContent;
            currentOperation.value = operations[i].id;
            currentB.textContent = "";
        };
    });
};


// when equals is clicked
document.getElementById("equals").addEventListener("click", () => {
    // run operate() on current values, if they are entered
    if (currentA.textContent && currentOperation.value && currentB.textContent) {
        document.getElementById("result").textContent = operate(currentOperation.value, currentA.textContent, currentB.textContent);
    };
});


// when backspace is clicked
document.getElementById("backspace").addEventListener("click", () => {
    if (currentB.textContent) {
        // if value b, remove from that
        currentB.textContent = currentB.textContent.substring(0, currentB.textContent.length-1);
        // if that was the last digit of b, clear result
        if (!currentB.textContent) {
            document.getElementById("result").textContent = "";
        };
    } else if (currentOperation.value) {
        // else if operation, remove that
        currentOperation.value = "";
        currentOperation.textContent = "";
    } else if (currentA.textContent) {
        // else if value a, remove that
        currentA.textContent = currentA.textContent.substring(0, currentA.textContent.length-1);
    };
});



// when clear is clicked
document.getElementById("clear").addEventListener("click", () => {
    // clear value a
    currentA.textContent = "";
    // clear value b
    currentB.textContent = "";
    // clear operation
    currentOperation.textContent = "";
    currentOperation.value = "";
    // clear result
    document.getElementById("result").textContent = "";
});