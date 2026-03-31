`use strict`;

const inputRange = document.getElementById('inp-range');
const charactersNumber = document.querySelector(`.characters-number`);
const inputCheckboxArr = document.querySelectorAll(`.inp-checkbox`);
const submitBtn = document.querySelector(`.btn-submit`);

let passwordLength;

let inputRangeLinear = (inputRange.value / 15) * 100;
updateCharactersNumber();

inputRange.addEventListener('input', () => {
    updateCharactersNumber();
});


function updateCharactersNumber() {
    charactersNumber.textContent = `${inputRange.value}`;
    inputRangeLinear = (inputRange.value / 15) * 100;
    inputRange.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${inputRangeLinear}%, #18171F ${inputRangeLinear}%, #18171F 100%)`;
    passwordLength = inputRange.value;
}


////// generates random symbol;
function randomSpecialSymbol() {
  const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


//// generates random lowercase letter
function randomLowercaseLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
};

//// generates random uppercase letter
function randomUppercaseLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)].toUpperCase();
};


/// generates random number.
function randomNumber(number) {
  return Math.floor(Math.random() * (number + 1));
}



console.log(randomUppercaseLetter());
console.log(randomSpecialSymbol());






submitBtn.addEventListener(`click`, function() {
    inputCheckboxArr.forEach(el => {
        if(el.checked) {
            console.log(el.dataset.characterType)
        }
    }) 
})
