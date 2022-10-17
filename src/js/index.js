
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

//Text animation
document.addEventListener("DOMContentLoaded", function(){
    var replacers = document.querySelectorAll('[data-replace]');
    for(var i=0; i<replacers.length; i++){
        let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(function(key) {
            replacers[i].classList.remove(key);
            replacers[i].classList.add(replaceClasses[key]);
        });
    }
});

