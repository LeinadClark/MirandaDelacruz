// Initially hide the navbar when the page loads
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    header.classList.add("hidden");

    // Reset the URL hash to prevent the modal from opening
    if (window.location.hash === "#loginModal") {
        window.location.hash = ''; // Reset the URL hash on page load
    }
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

// Hero Page Slider
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');
    document.querySelector('.slides').style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
}

// Initialize the first slide
changeSlide(0);