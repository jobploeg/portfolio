// If screen == lg, toggle the class "hidden" on the nav
window.addEventListener('resize', function(event) {
    if (window.innerWidth >= 1024 &&  document.querySelector(".header").classList.contains("hidden")) {
        document.querySelector(".header").classList.toggle("hidden");
    }
}, true);

// Toggle the "hidden" class on the Header
function openHeader() {
    document.querySelector(".header").classList.toggle("hidden");
}

