
function test() {
  
  var number = document.getElementById('numberInput').value;
  var resultNumber = "";
  if (number % 2 === 0) {
    resultNumber ="You have entered Even Number:" + number;

  }
  else {
    resultNumber="You have entered Odd Number:" + number;
  }
  document.getElementById('result').innerHTML = resultNumber;
}

// var a = 4;
//   if (a %2 === 0) {
//     console.log("You have entered Even Number:" + a);
//   }
//   else
//   {
//     console.log("You have entered Odd Number:"+ a);
//   }