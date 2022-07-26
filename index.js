// Input value & converter button selectors
let inputValue;
let inputButton = document.getElementById('input-btn')
// unit button selectors for page title
let title = document.getElementById('title-converter')
let btns = document.querySelectorAll('button[id^=btn]')
let displayValue = document.getElementById('display-value')
let displayName = document.getElementById('display-name')

btns.forEach(btn =>{
    btn.addEventListener('click', event => {
        document.getElementById('title-converter').innerText = btn.textContent + " Converter"
        inputButton.addEventListener('click',
        function (){
            inputValue = document.getElementById('value').value
            console.log(inputValue)
            if(btn.textContent === 'Meters'){
                displayName.innerText = "Meters To Feet"
                displayValue.innerText = (inputValue * 3.28084).toFixed(2);
            }else if(btn.textContent === 'Liters'){
                displayName.innerText = "Liters to Gallons"
                displayValue.innerText = (inputValue * 0.264).toFixed(2);
            }else{
                displayName.innerText = "Kilos To Pounds"
                displayValue.innerText = (inputValue * 2.204).toFixed(2);
                
            }
        })
    
        .
    })
})
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/