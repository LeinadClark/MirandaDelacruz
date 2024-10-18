// Initially hide the navbar when the page loads
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    header.classList.add("hidden");
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");

    if (window.scrollY === 0) {
        
        header.classList.add("hidden");
    } else if (window.scrollY > lastScrollY) {
    
        header.classList.add("hidden");
    } else {
     
        header.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
});

// Hero Page Controls
const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')

rightArrow.addEventListener('click', function() {
    sectionIndex = sectionIndex + 1
    slider.style.transform = 'translate(-25%)';
});