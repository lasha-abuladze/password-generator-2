`use strict`;

const inpRange = document.querySelector(`#inp-range`);

const spanCharacterLength = document.querySelector(`.span--character-length`);

const inpCheckboxArr = Array.from(document.querySelectorAll(`.inp-checkbox`));
const btnSubmit = document.querySelector(`.btn--generate-password`);




let characterTypes = [];
let passwordLength;

let passwordLetters = [];





const updateSlider = function () {
    const value = (inpRange.value - inpRange.min) / (inpRange.max - inpRange.min) * 100;
    inpRange.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${value}%, #18171F ${value}%, #18171F 100%)`;
    passwordLength = inpRange.value;

    spanCharacterLength.textContent = `${passwordLength}`
}

inpRange.addEventListener(`input`, updateSlider);

updateSlider();


//// generates random symbol
const getRandomSymbol = () => {
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const randomIndex = Math.floor(Math.random() * symbols.length);
  
  return symbols[randomIndex];
};

///// generates random number
const getRandomNumber = () => Math.floor(Math.random() * 10);


/// generates random letter
const getRandomLowercaseLetter = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};


///generate random uppercase letter 
const getRandomUppercaseLetter = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
};



const  functions = [getRandomUppercaseLetter, getRandomLowercaseLetter, getRandomNumber, getRandomSymbol]




btnSubmit.addEventListener(`click`, function(e) {
    e.preventDefault();

    characterTypes = [];
    passwordLetters = [];

    inpCheckboxArr.forEach(el => {
        if(el.checked) {
            characterTypes.push(el.dataset.characterType);
        }
    })


    for(let l = 0; l < passwordLength; l++) {
        let randomFunction = Math.floor(Math.random() * characterTypes.length);

        functions.forEach(el => {
            if(el.name.includes(characterTypes[randomFunction])) {
                passwordLetters.push(el())
            }
        })
    }



    console.log(passwordLetters);
    console.log(passwordLength);
    console.log(characterTypes);
})

