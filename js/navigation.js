const nav = document.querySelector("#mySidenav")
nav.style.transition = "1s";
nav.style.left = "-100%";
nav.style.display = "flex";
document.querySelector(".fa-bars").addEventListener('click', () => {

    nav.style.background = "white";
    nav.style.width = "100%";
    nav.style.height = "100%";
    nav.style.margin = "0px";
    nav.style.zIndex = "150";
    nav.style.top = "0";
    nav.style.position = "absolute";
    nav.style.left = "0%";
    nav.style.transition = "1s";
});