const nav = document.querySelector("#mySidenav");
const navA = document.querySelectorAll(".sidenav a");
nav.style.transition = "1s";
document.querySelector(".fa-bars").addEventListener('click', () => {
    nav.style.width = "100%";
    nav.style.height = "100%";
    nav.style.margin = "0px";
    nav.style.zIndex = "150";
    nav.style.top = "0";
    nav.style.left = "0%";
    nav.style.display = "flex";
    nav.style.transition = "1s";

    setTimeout(() => {
        // nav.style.top = "200px"
        navA.forEach((navA) => {
            navA.style.color = "black";
            navA.style.transition = "2s";
        })
    }, 3000);
}, 1000);


//Scroll
// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the header
let header = document.getElementById("nav");
let logo = document.querySelector('.logo');
let icons = document.querySelector('.icons');
let cartCounter = document.querySelector('.fa #cart-count');

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        logo.classList.add("makeWhite");
        icons.classList.add("newIcons");
        cartCounter.classList.add("cartNumber");
    } else {
        header.classList.remove("sticky");
        logo.classList.remove("makeWhite");
        icons.classList.remove("newIcons");
        cartCounter.classList.remove("cartNumber");
    }
}