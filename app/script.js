`use strict`;

const inpRange = document.querySelector(`#inp-range`);

const spanCharacterLength = document.querySelector(`.span--character-length`);

const updateSlider = function () {
    const value = (inpRange.value - inpRange.min) / (inpRange.max - inpRange.min) * 100;
    inpRange.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${value}%, #18171F ${value}%, #18171F 100%)`;

    spanCharacterLength.textContent = `${inpRange.value}`
}

inpRange.addEventListener(`input`, updateSlider);

updateSlider();