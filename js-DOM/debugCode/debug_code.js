function performOperation() {

    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    let operation = document.getElementById('operationSelect').value;

    // check if inputs are valid numbers
    if (!isNaN(num1) && (!isNaN(num2))) {
        
        let operationResult;
        
        switch (operation) {
            case "add":
                operationResult = add(num1, num2);
                break;
            case "subtract":
                operationResult = subtract(num1, num2);
                break;
            case "multiply":
                operationResult = multiply(num1, num2);
                break;
            case "divide":
                operationResult = divide(num1, num2);
                break;
            default:
                operationResult = "Unknown operation."
        }

        displayResult(operationResult);

    } else {
        displayResult('Please enter valid numbers.');
    }

    // Operations List
    // inserted 'debugger' statement to pause execution
    // which can be seen in the browser devTools - Sources

    function add(a,b) {
        debugger;
        return a + b;
    }

    function subtract(a,b) {
        debugger;
        return a - b;
    }

    function multiply(a,b) {
        debugger;
        return a * b; 
    }

    function divide(a,b) {
        debugger;
        return a / b;
    }
    
    function displayResult(operationResult) {

        // displays the result in paragraph element
        const resultElement = document.getElementById('operationResult');
        resultElement.textContent = `The result is: ${operationResult}`;
    }
}