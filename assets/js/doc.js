// header
// navbar2

// towel arrow
let dropdown = document.querySelector(".towel");
let arrow = document.querySelector(".nav2hover-arrow");
dropdown.addEventListener("click", function () {
    arrow.classList.toggle("rotate");
});

// navbar

let icon = document.querySelector(".icon");
icon.addEventListener("click", function () {
    document.querySelector(".view").classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".overlay").style.display = "block";

});

let close_navbar = document.querySelector(".close-navbar");
close_navbar.addEventListener("click", function () {
    document.querySelector(".view").classList.remove("show");
    document.querySelector("body").style.overflow = "unset";
    document.querySelector(".overlay").style.display = "none";
})

let home = document.querySelector(".home");
home.addEventListener("click", function () {
    document.querySelector(".view").classList.remove("show");
    document.querySelector("body").style.overflow = "unset";
    document.querySelector(".overlay").style.display = "none";
})

let robes = document.querySelector(".robes");
robes.addEventListener("click", function () {
    document.querySelector(".view").classList.remove("show");
    document.querySelector("body").style.overflow = "unset";
    document.querySelector(".overlay").style.display = "none";
})

let bathroom_sets = document.querySelector(".bathroom-sets");
bathroom_sets.addEventListener("click", function () {
    document.querySelector(".view").classList.remove("show");
    document.querySelector("body").style.overflow = "unset";
    document.querySelector(".overlay").style.display = "none";
})

let navbar_button = document.querySelector(".navbar2-button1");
navbar_button.addEventListener("click", function () {
    document.querySelector(".view").classList.remove("show");
    document.querySelector("body").style.overflow = "unset";
    document.querySelector(".overlay").style.display = "none";
})
