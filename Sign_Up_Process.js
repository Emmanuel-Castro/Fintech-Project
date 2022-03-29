
let getFirstName = document.getElementById('firstName');
let getLastName = document.getElementById('lastName');
let getPhoneCode = document.getElementById('phoneCode');
let getCurrencyAccount = document.getElementById('currencyAccount');


document.getElementById('btn').addEventListener("click", function() {

  let dataResult = `
  First Name: ${getFirstName.value.toUpperCase()}
  Last Name: ${getLastName.value.toUpperCase()}
  Phone Code: ${getPhoneCode.value}
  Account: ${getCurrencyAccount.value}`;

  window.alert('Data Completed');
  console.log(dataResult);

});
