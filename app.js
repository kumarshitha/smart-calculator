
document.addEventListener("DOMContentLoaded", function () {

    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultElement = document.getElementById("result");
    const messageElement = document.getElementById("message");
    const operationButtons = document.querySelectorAll("[data-operation]");
    const clearButton = document.getElementById("clearBtn");

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    function calculate(operation) {

        const first = num1Input.value.trim();
        const second = num2Input.value.trim();

        if (first === "" || second === "") {
            resultElement.textContent = "--";
            messageElement.textContent = "Please enter both numbers.";
            return;
        }

        const a = Number(first);
        const b = Number(second);

        if (!Number.isFinite(a) || !Number.isFinite(b)) {
            resultElement.textContent = "--";
            messageElement.textContent = "Please enter valid numbers.";
            return;
        }

        if (operation === "divide" && b === 0) {
            resultElement.textContent = "--";
            messageElement.textContent = "Cannot divide by zero.";
            return;
        }

        let answer;

        switch (operation) {
            case "add":
                answer = add(a, b);
                break;

            case "subtract":
                answer = subtract(a, b);
                break;

            case "multiply":
                answer = multiply(a, b);
                break;

            case "divide":
                answer = divide(a, b);
                break;

            default:
                return;
        }

        resultElement.textContent = Number(answer.toPrecision(12));
        messageElement.textContent = "Calculation completed successfully!";
    }

    operationButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            calculate(button.dataset.operation);
        });
    });

    clearButton.addEventListener("click", function () {
        num1Input.value = "";
        num2Input.value = "";
        resultElement.textContent = "0";
        messageElement.textContent = "Enter numbers and select an operation.";
    });

});
