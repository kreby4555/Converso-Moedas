const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const input = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueToConvertD = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 5.2 
    const euroToday = 6.2
    const libraToday = 6.08
    const ieneToday = 0.034
    const bitToday = 138622.92

  if(currencySelect.value == 'dolar') {
    // Se o select estiver selecionado dólar, entre aqui
    currencyValueToConvertD.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(input / dolarToday)
  } if(currencySelect.value == 'euro') {
    // Se o select estiver selecionado euro, entre aqui
    currencyValueToConvertD.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(input / euroToday)
  } if(currencySelect.value =='bitcoin') {
    currencyValueToConvertD.innerHTML = new Intl.NumberFormat("es-US", {
        style: "currency",
        currency: "BTC"
    }).format(input / bitToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(input)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = "./Assest/dolar.png"
    } if(currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = 'Assest/euro.png'
    }  if(currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "Assest/bitcoin.png"
    } 
    
    convertValues()

}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)