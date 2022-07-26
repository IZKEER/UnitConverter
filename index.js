// Input value & converter button selectors

const inputValue = document.getElementById('value-input').innerHTML
const inputButton = document.getElementById('input-btn')

// unit button selectors for page title
var foo = 1
let title = document.getElementById('title-converter')

const btns = document.querySelectorAll('button[id^=btn]')

const displayValue = document.getElementById('display-value')
const displayName = document.getElementById('display-name')

btns.forEach(btn =>{
    btn.addEventListener('click', event => {
        document.getElementById('title-converter').innerText = btn.textContent + " Converter"
        inputButton.addEventListener('click',
        function (){
            if(btn.textContent === 'Meters'){
                console.log(inputValue)
                console.log(inputValue.innerText)
                foo = (inputValue * 3.28084).toFixed(2)
                displayValue.innerText = foo
                displayName.innerText = "Meters To Feet"
                console.log(displayValue.innerHTML)
            }else if(btn.textContent === 'Liters'){
                console.log(inputValue)
                console.log(inputValue.innerText)
                displayValue.innerText = (inputValue * 0.264).toFixed(2)
                displayName.innerText = "Liters to Gallons"
                console.log(displayName.innerText)
                console.log(btn.textContent)
                console.log(displayValue.innerText)
            }else{
                console.log(inputValue)
                console.log(inputValue.innerText)
                displayValue.innerText = (inputValue * 2.204).toFixed(2)
                displayName.innerText = "Kilos To Pounds"
                console.log(displayName.innerText)
                console.log(btn.textContent)
                console.log(displayValue.innerText)
            }
        })
    
    })
})
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/