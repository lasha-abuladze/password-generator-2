`use strict`;

const inpRange = document.querySelector(`#inp-range`);

const updateSlider = function () {
    const value = (inpRange.value - inpRange.min) / (inpRange.max - inpRange.min) * 100;
    inpRange.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${value}%, #18171F ${value}%, #18171F 100%)`;
}

inpRange.addEventListener(`input`, updateSlider);

// Important: Run it once so it's correct when the page first loads!
updateSlider();