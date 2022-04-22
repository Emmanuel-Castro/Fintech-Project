let getBnkInput = document.getElementById('bnkInput');
let getSecInput = document.getElementById('secInput');

document.getElementById('fmBtn').addEventListener("click", function() {

  let navOutput = `
  Bank ID: ${getBnkInput.value.toUpperCase()}
  Security Code: ${getSecInput.value.toUpperCase()}`;

  console.log(navOutput);
});
