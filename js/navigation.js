const nav = document.querySelector("#mySidenav");
const navA = document.querySelectorAll(".sidenav a");
nav.style.transition = "1s";
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
        nav.style.backgroundSize = "350%";
        nav.style.transition = "5s";
        navA.forEach((navA) => {
            navA.style.color = "white";
            navA.style.transition = "2s";
        })

        setTimeout(() => {
            nav.style.top = "200px"
            navA.forEach((navA) => {
                navA.style.color = "black";
                navA.style.transition = "2s";

            })
            nav.style.backgroundSize = "100%";
            nav.style.backgroundPosition = "-500px";
            nav.style.background = "white";
            nav.style.transition = "2s";
        }, 3000);
    }, 1000);
});