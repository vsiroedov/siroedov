async function fetchCurrencyRates() {
    try {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        const data = await response.json();
        displayCurrencyRates(data);
    } catch (error) {
        console.error('Error fetching currency rates:', error);
        document.getElementById('currency-rates').innerHTML = '<p>Error loading data. Please try again later.</p>';
    }
}

function displayCurrencyRates(rates) {
    const currencyRatesDiv = document.getElementById('currency-rates');
    currencyRatesDiv.innerHTML = ''; 

    rates.forEach(rate => {
        const rateElement = document.createElement('p');
        rateElement.textContent = `${rate.txt} (${rate.cc}): ${rate.rate}`;
        currencyRatesDiv.appendChild(rateElement);
    });
}

fetchCurrencyRates();

setInterval(fetchCurrencyRates, 600000); 
