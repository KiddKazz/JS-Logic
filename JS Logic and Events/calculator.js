function addNums() {
    var num1 = parseFloat(prompt("Enter first Number: "));
    var num2 = parseFloat(prompt("Enter second Number: "));

    if (isNaN(num1) == true && isNaN(num2) == true) {
        alert("Enter a number!");
    } else {
        let sum = num1 + num2;
        alert(`${num1} + ${num2} =  ${sum}`);
    }




}


function multiplyNumbers() {
    var numberOne = prompt("Enter first number");
    var numberTwo = prompt("Enter second number")

    parseFloat(numberOne, numberTwo)

    if (isNaN(numberOne) == true && isNaN(numberTwo) == true) {
        alert("Enter a number!");

    }
    else {
        product = (numberOne * numberTwo)
        alert(`${numberOne} * ${numberTwo} = ${product}`)
    }


}

function subNums() {
    let attempts = 1;
    num1 = parseFloat(prompt("Enter the first number: "));
    num2 = parseFloat(prompt("Enter the second number: "))

    while (attempts < 3) {
        if (isNaN(num1) == true) {
            alert('The first number is not a numerical value. Please only enter numbers like 1, 25, etc.');
            attempts++;
            num1 = parseFloat(prompt("Enter the first number: "));
            num2 = parseFloat(prompt("Enter the second number: "));
        } else if (isNaN(num2) == true) {
            alert('The second number is not a numerical value. Please only enter numbers like 1, 25, etc.');
            attempts++;
        } else {
            var total = num1 - num2;
            alert(`${num1} - ${num2} = ${total}`);
            break;
        }
    }
}
function divideNums() {
    var numberOne = parseFloat(prompt("Enter first number"));
    var numberTwo = parseFloat(prompt("Enter second number"));

    if (isNaN(numberTwo) == true && isNaN(numberOne) == true) {
        alert("Enter a number!");

    } else {
        var dividend = numberOne / numberTwo;
        alert(`${numberOne} / ${numberTwo} = ${dividend}.`);
    }

}

