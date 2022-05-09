function subtract() {

    let firstNum = document.getElementById('firstNumber');
    let firstNumAsNum = Number(firstNum.value);
    let secondNum = document.getElementById('secondNumber');
    let secondNumAsNum = Number(secondNum.value);
    let result = firstNumAsNum - secondNumAsNum;
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}
