// Header Sticky Animation
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");



    if (window.scrollY === 0) {
        // When at the top, hide the header
        header.classList.add("hidden");
    } else if (window.scrollY > lastScrollY) {
        // Scrolling down, hide the header
        header.classList.add("hidden");
    } else {
        // Scrolling up, show the header
        header.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
});


//End