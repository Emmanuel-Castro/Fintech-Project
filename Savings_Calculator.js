
let getAmount = document.getElementById('amount');
let getTime = document.getElementById('time');

document.getElementById('btn').addEventListener("click", function() {

  let parseAmount = parseInt(getAmount.value);
  let parseTime = parseInt(getTime.value);

  let months = (parseTime * 12);
  let calresult = parseAmount/months;

  let message = `
  Estimated Amount: ${parseAmount}
  Estimated Time: ${months} months
  Monthly Quote: ${calresult.toFixed(2)}`;

  console.log(message);
});
