function cong() {
    let num1 = +document.getElementById("number1").value;
    let num2 = +document.getElementById("number2").value;
    let result = num1 + num2;
    document.getElementById("Result").innerHTML = result;
  }   
  function tru() {
    let num1 = +document.getElementById("number1").value;
    let num2 = +document.getElementById("number2").value;
    let result = num1 - num2;
    document.getElementById("Result").innerHTML = result;
  }   
  function nhan() {
    let num1 = +document.getElementById("number1").value;
    let num2 = +document.getElementById("number2").value;
    let result = num1 * num2;
    document.getElementById("Result").innerHTML = result;
  }   
  function chia() {
    let num1 = +document.getElementById("number1").value;
    let num2 = +document.getElementById("number2").value;
    let result = num1 / num2;
    document.getElementById("Result").innerHTML = result;
  }   