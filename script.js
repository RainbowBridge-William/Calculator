let firstnumber, secondnumber;

let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let result = document.getElementById("result");

add.addEventListener("click", function () {
  getvalue();
  result.value = firstnumber + secondnumber;
});

subtract.addEventListener("click", function () {
  getvalue();
  result.value = firstnumber - secondnumber;
});

multiply.addEventListener("click", function () {
  getvalue();
  result.value = firstnumber * secondnumber;
});

divide.addEventListener("click", function () {
  getvalue();
  result.value = firstnumber / secondnumber;
});

function getvalue() {
  firstnumber = Number(document.getElementById("first-number").value);
  secondnumber = Number(document.getElementById("second-number").value);
  if (firstnumber == "" || secondnumber == "") {
    alert("Please enter numbers");
  }
}
