`use strict`;

const inpRange = document.querySelector(`#inp-range`);

const spanCharacterLength = document.querySelector(`.span--character-length`);

const inpCheckboxArr = Array.from(document.querySelectorAll(`.inp-checkbox`));
const btnSubmit = document.querySelector(`.btn--generate-password`);

const passwordText = document.querySelector(`.password`);

const btnCopy = document.querySelector(`.icon-copy`);
const spanCopied = document.querySelector(`.span--copied`);





class AppPasswordGenerator {

    #characterTypes= [];
    #passwordLength;
    #passwordLetters = [];
    #password; 
    #passwordIsGenerated = false;
    #usedFunctions= [];
    #functions = [];
    

    constructor() {
        this.#submitForm();
        this.#updateSlider();
        this.#attachCopyListener();
        this.#functions = [this.#getRandomUppercaseLetter, this.#getRandomLowercaseLetter, this.#getRandomNumber, this.#getRandomSymbol]
    };


    #updateSlider() {
        this.#updateSliderBackground();
        this.#updateRangeInput();
    }

    #updateRangeInput() {
        inpRange.addEventListener(`input`, ()=> {
            this.#updateSliderBackground();
            this.#qwe();
        })
    }

    #qwe() {
        this.#passwordLength = inpRange.value;
        spanCharacterLength.textContent = `${this.#passwordLength}`;
    }

    #updateSliderBackground() {
        this.#passwordLength = inpRange.value;
        let value = (this.#passwordLength - inpRange.min) / (inpRange.max - inpRange.min) * 100;
        inpRange.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${value}%, #18171F ${value}%, #18171F 100%)`;
    }


    #submitForm() {
        btnSubmit.addEventListener(`click`, (e) => {
            e.preventDefault();

            if(!spanCopied.classList.contains(`.display-none`)) {
                spanCopied.classList.add(`display-none`);
            }

            if(this.#passwordLength < 8) {
                alert(`Password must be at least 8 characters.`)
            } else {  
                const inpIsChecked = inpCheckboxArr.some(el => el.checked);
                
                if(!inpIsChecked) {
                    alert(`Please select at least one character type.`)
                } else {
                    this.#generatePassword();
                    while(!this.#passwordIsGenerated) {
                        this.#generatePassword();
                    }
                }
            }

            inpRange.value = 10;
            this.#updateSliderBackground();
            this.#qwe();
            inpCheckboxArr.forEach(el => el.checked = false)

        })
    }

    #resetFields() {
        this.#characterTypes = [];
        this.#passwordLetters = [];
        this.#password = ``;
        this.#passwordIsGenerated = false;
        this.#usedFunctions = [];
    }

    #getCharacterTypes() {
        inpCheckboxArr.forEach(el => {
            if(el.checked) {
                this.#characterTypes.push(el.dataset.characterType);
            }
        })
    }

    #generatePaaswordCharacters() {
        for(let l = 0; l < this.#passwordLength; l++) {
            let randomFunction = Math.floor(Math.random() * this.#characterTypes.length);

            this.#functions.forEach(el => {
                if(el.name.includes(this.#characterTypes[randomFunction])) {
                    this.#passwordLetters.push(el())
                }
            })
        }
    }

    #displayPassword() {
        this.#password = this.#passwordLetters.join(``);
        passwordText.textContent = this.#password;
    }

    #generatePassword() {
        this.#resetFields();
        this.#getCharacterTypes();
        this.#generatePaaswordCharacters();

        if(this.#characterTypes.length === new Set(this.#usedFunctions).size) {
            this.#passwordIsGenerated = true;
            this.#displayPassword();
            inpCheckboxArr.forEach(el => el.checked = false)

        } else {
            this.#passwordIsGenerated = false;
        }
    }

    #attachCopyListener() {
        btnCopy.addEventListener('click', () => {
            this.#copyToClipboard();
            spanCopied.classList.remove(`display-none`);
        });
    }

    async #copyToClipboard() {
        try {
            await navigator.clipboard.writeText(this.#password);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    }


    /////////////////////////

    #getRandomSymbol = () => {

        let s = `s`;
        this.#usedFunctions.push(s)
        const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        const randomIndex = Math.floor(Math.random() * symbols.length);
        
        return symbols[randomIndex];
    };

    /// generates random number
    #getRandomNumber = () => {
        let n = `n`;
        this.#usedFunctions.push(n)
        return Math.floor(Math.random() * 10)
    };

    //  generates random letter
    #getRandomLowercaseLetter = () => {
        let l = `l`;
        this.#usedFunctions.push(l)
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    };

    ///generate random uppercase letter 
    #getRandomUppercaseLetter = () => {
        let u = `u`;
        this.#usedFunctions.push(u)
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
    };




}

const PasswordGenerator = new AppPasswordGenerator();

// PasswordGenerator();