
let getAmount = document.getElementById('amount');
let getTime = document.getElementById('time');

function calculateSavings(amount, time) {

  let parseAmount = parseInt(amount);
  let parseTime = parseInt(time);

  let months = (parseTime * 12);
  let calresult = parseAmount/months;

  let message = `Estimated Amount: $${parseAmount} <br> Estimated Time: ${months}
  months <br> Monthly Quote: $${calresult}`;

  document.getElementById('cont').innerHTML = message;
}


document.getElementById('btn').addEventListener("click", function() {

  document.getElementById('cont').innerHTML = calculateSavings(getAmount.value, getTime.value).toFixed(2);

});
