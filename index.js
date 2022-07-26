let num = 0;

// Input value & converter button selectors
const inputValue = document.getElementById('value-input')
const inputButton = document.getElementById('input-btn')

// unit button selectors for page title

const metricBtn = document.getElementById('metric-btn')
const LitersBtn = document.getElementById('liters-btn')
const kilosBtn = document.getElementById('kilograms-btn')
let title = document.getElementById('title-converter')

metricBtn.addEventListener('click', () => {
    title.textContent = 'METROSCRL'
})

LitersBtn.addEventListener('click', () => {
    title.textContent = 'LITROS'
})

kilosBtn.addEventListener('click', () => {
    title.textContent = 'KILOGRAMS'
})




// paragraph for displaying the value results to strings.

// metricEl.addEventListener('click', function () {
//     const selectBtn = document.getElementById('metric-btn').innerText
//     document.getElementById('title-converter').innerText = selectBtn

// })


// const lengthEl = document.getElementById('length')
// const litersEl = document.getElementById('liters')
// const kilosEl = document.getElementById('kilos')

inputButton.addEventListener('click'),
    function () {
        num = (inputValue * 3.28084).toFixed(2);
        num = (inputValue * 0.3048).toFixed(2);
        console.log(num);
        lengthEl.textContent = `${inputValue} meters =  `
    }


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/