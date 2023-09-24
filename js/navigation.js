const nav = document.querySelector("#mySidenav")
nav.style.transition = "1s";
nav.style.left = "-100%";
nav.style.display = "flex";
document.querySelector(".fa-bars").addEventListener('click', () => {
    nav.style.width = "100%";
    nav.style.height = "100%";
    nav.style.margin = "0px";
    nav.style.zIndex = "150";
    nav.style.top = "0";
    nav.style.left = "0%";
    nav.style.transition = "1s";
    setTimeout(() => {
        nav.style.backgroundSize = "1000%";
        nav.style.transition = "5s";
    }, 2000);
});