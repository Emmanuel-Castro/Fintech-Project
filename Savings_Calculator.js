
let getAmount, getTime;

getAmount = document.getElementById('amount');
getTime = document.getElementById('time');

function calculateSavings(amount, time) {

  let months = (parseInt(time) * 12);

  let calresult = amount/months;

  let message = `Estimated Amount: $${amount} <br> Estimated Time: ${months}
  months <br> Monthly Quote: $${calresult}`;

  document.getElementById('cont').innerHTML = message;
}


document.getElementById('btn').addEventListener("click", function() {

  document.getElementById('cont').innerHTML = calculateSavings(getAmount.value, getTime.value).toFixed(2);

});
