
    let getCurrencySelect = document.getElementById('currencySelect');
    let getCurrencyConvert = document.getElementById('currencyConvert');
    let getQuantity = document.getElementById('quantity');

    function convertProcess(select, convert, quantity) {
      //Last update, March 31, 2021
      let currencies = {
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

      let result = convertProcess(getCurrencySelect.value, getCurrencyConvert.value, getQuantity.value).toFixed(2);
      let total = `${getQuantity.value} ${getCurrencySelect.value} <br> ${result} ${getCurrencyConvert.value}`;

      document.getElementById('resultCont').innerHTML = total;
    }

    document.getElementById('btn').addEventListener("click", convertResult);
