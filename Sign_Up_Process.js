
let getFirstName = document.getElementById('firstName');
let getLastName = document.getElementById('lastName');
let getCardID = document.getElementById('card');
let getBankCode = document.getElementById('code');


function getFormData() {

  let dataResult = `First Name: ${getFirstName.value.toUpperCase()} <br> Last Name: ${getLastName.value.toUpperCase()}
  <br> Card Number: ${getCardID.value} <br> Bank Code: ${getBankCode.value} <br>`;

  document.getElementById('resultCont').innerHTML = dataResult;

}

document.getElementById('btn').addEventListener("click", getFormData);
