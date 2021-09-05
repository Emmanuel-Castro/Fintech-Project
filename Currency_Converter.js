
    var getCurrencySelect = document.getElementById('currencySelect');
    var getCurrencyConvert = document.getElementById('currencyConvert');
    var getQuantity = document.getElementById('quantity');

    function convertProcess(select, convert, quantity) {
      //Last update, March 31, 2021
      var currencies = {
        USD: 1.00,
        EUR: 0.85,
        GBP: 0.72,
        CHF: 0.94,
        ILS: 3.34,
        MXN: 20.43,
        BRL: 5.63,
        HKD: 7.77,
        JPY: 110.72
      };

      return (quantity/currencies[select]) * currencies[convert];
    }

    function convertResult() {

      var result = convertProcess(getCurrencySelect.value, getCurrencyConvert.value, getQuantity.value).toFixed(2);
      var total = `${getQuantity.value} ${getCurrencySelect.value} = ${result} ${getCurrencyConvert.value}`;

      document.getElementById('resultCont').innerHTML = total;
    }

    document.getElementById('btn').addEventListener("click", convertResult);

/*
    var separator = document.getElementById('quantity');

    separator.addEventListener('keyup', (evnt) => {

        var inputData = evnt.target.value.split(',').join('');
        inputData = inputData.split('').reverse();

        var outputData = [];
        var aux = '';

        var divide = Math.ceil(inputData.length / 3);

        for (let x = 0; x < divide; x++) {
          for (let i = 0; i < 3; i++) {
            if (inputData[i + (x*3)] != undefined) {
              aux += inputData[i + (x*3)];
            }
          }
          outputData.push(aux);
          aux = '';
          evnt.target.value = outputData.join(',').split('').reverse().join('');
        }

    }, false)
*/
