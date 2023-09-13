const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

let currencyData = null;

const fetchCurrencies = async () => {
  try {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/e3adbab877e505fb076adbab/latest/USD"
    );
    currencyData = await response.json();
    const currencies = Object.keys(currencyData.conversion_rates);

    currencies.forEach((currency) => {
      const option1 = document.createElement("option");
      option1.value = currency;
      option1.textContent = currency;

      const option2 = document.createElement("option");
      option2.value = currency;
      option2.textContent = currency;

      fromCurrency.appendChild(option1);
      toCurrency.appendChild(option2);
    });
  } catch (error) {
    console.error("Error fetching currencies:", error);
  }
};

fetchCurrencies();

const convertCurrency = () => {
  if (currencyData) {
    const amount = parseFloat(amountInput.value);

    if (amount) {

      const fromRate = currencyData.conversion_rates[fromCurrency.value];
      const toRate = currencyData.conversion_rates[toCurrency.value];

      const convertedAmount = (amount / fromRate) * toRate;
      result.textContent = `${Math.abs(amount)} ${fromCurrency.value} is equals to: ${Math.abs(convertedAmount.toFixed(2))} ${toCurrency.value}`;

    } else {
      result.textContent = "👀 You should enter some amount to convert..";
    }

  } else {
    console.error("Something went wrong :(");
  }
};

convertBtn.addEventListener("click", convertCurrency);

amountInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    convertCurrency();
  }
});
