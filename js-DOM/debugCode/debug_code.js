function performOperation() {

    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // check if inputs are valid numbers
    if (!isNaN(num1) && (!isNaN(num2))) {
        
        let operationResult = multiply(num1, num2);

        displayResult(operationResult);

    } else {
        displayResult('Please enter valid numbers.');
    }

    function multiply(a,b) {
        debugger; // to pause execution
        return a * b; 
    }
    
    function displayResult(operationResult) {

        // displays the result in paragraph element
        const resultElement = document.getElementById('operationResult');
        resultElement.textContent = `The result is: ${operationResult}`;
    }
}