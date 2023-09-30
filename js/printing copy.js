let slides = document.querySelectorAll(".products-panel");
let leftKey = document.querySelectorAll(".left");
let rightKey = document.querySelectorAll(".right");

//sublimation images
const images = [
    ["printing/HD1.jpg", "printing/HD2.jpg", "printing/HD3.jpg", "printing/HD4.jpg"],
    ["printing/SU1.jpg", "printing/SU1B.jpg", "printing/SU2.jpg", "printing/SU2B.jpg", "printing/SU3.jpg", "printing/SU3B.jpg", "printing/SU4.jpg", "printing/SU4B.jpg"],
    ["printing/JS1.jpg", "printing/JS2.jpg", "printing/JS3.jpg", "printing/JS4.jpg"],
    ["Branding/mugs/M1.jpg", "Branding/mugs/M2.jpg", "Branding/mugs/M3.jpg", "Branding/mugs/M4.jpg", "Branding/mugs/M5.jpg", "Branding/mugs/M6.jpg"],
    ["Branding/phones/p1.webp", "Branding/phones/p2.webp", "Branding/phones/p3.webp", "Branding/phones/p4.jpg"],
    ["Branding/bottles/b1.jpg", "Branding/bottles/b2.jpg", "Branding/bottles/b3.jpg", "Branding/bottles/b4.webp", "Branding/bottles/b5.webp", "Branding/bottles/b6.jpg", "Branding/bottles/b7.jpg", "Branding/bottles/b8.webp"]
]

slides[0].style.backgroundImage = "url(printing/HD1.jpg)";
slides[0].style.backgroundSize = "70%";
slides[0].style.backgroundRepeat = "no-repeat";
slides[0].style.backgroundPosition = "center";
slides[0].style.transition = `0.5s`;

slides[1].style.backgroundImage = "url(printing/SU1.jpg)";
slides[1].style.backgroundSize = "70%";
slides[1].style.backgroundRepeat = "no-repeat";
slides[1].style.backgroundPosition = "center";
slides[1].style.transition = `0.5s`;

slides[2].style.backgroundImage = "url(printing/JS1.jpg)";
slides[2].style.backgroundSize = "70%";
slides[2].style.backgroundRepeat = "no-repeat";
slides[2].style.backgroundPosition = "center";
slides[2].style.transition = `0.5s`;

slides[3].style.backgroundImage = "url(Branding/mugs/M1.jpg)";
slides[3].style.backgroundSize = "70%";
slides[3].style.backgroundRepeat = "no-repeat";
slides[3].style.backgroundPosition = "center";
slides[3].style.transition = `0.5s`;

slides[4].style.backgroundImage = "url(Branding/phones/p1.webp)";
slides[4].style.backgroundSize = "90%";
slides[4].style.backgroundRepeat = "no-repeat";
slides[4].style.backgroundPosition = "center";
slides[4].style.transition = `0.5s`;

slides[5].style.backgroundImage = "url(Branding/bottles/b1.jpg)";
slides[5].style.backgroundSize = "80%";
slides[5].style.backgroundRepeat = "no-repeat";
slides[5].style.backgroundPosition = "center";
slides[5].style.transition = `0.5s`;


countOne = 0;
leftKey[0].addEventListener('click', () => {
    countOne--;
    slides[0].style.backgroundImage = `url(${images[0][countOne]})`;
    slides[0].style.transition = `0.5s`;
    if (countOne < 0) {
        countOne = images[0].length - 1;
        slides[0].style.backgroundImage = `url(${images[0][countOne]})`;
        slides[0].style.transition = `0.5s`;
    }
});
rightKey[0].addEventListener('click', () => {
    countOne++;
    slides[0].style.backgroundImage = `url(${images[0][countOne]})`;
    slides[0].style.transition = `0.5s`;
    if (countOne > images[0].length - 1) {
        countOne = 0;
        slides[0].style.backgroundImage = `url(${images[0][countOne]})`;
        slides[0].style.transition = `0.5s`;
    }
})

countTwo = 0;
leftKey[1].addEventListener('click', () => {
    countTwo--;
    slides[1].style.backgroundImage = `url(${images[1][countTwo]})`;
    slides[1].style.transition = `0.5s`;
    if (countTwo < 0) {
        countTwo = images[1].length - 1;
        slides[1].style.backgroundImage = `url(${images[1][countTwo]})`;
        slides[1].style.transition = `0.5s`;
    }
});
rightKey[1].addEventListener('click', () => {
    countTwo++;
    slides[1].style.backgroundImage = `url(${images[1][countTwo]})`;
    slides[1].style.transition = `0.5s`;
    if (countTwo > images[1].length - 1) {
        countTwo = 0;
        slides[1].style.backgroundImage = `url(${images[1][countTwo]})`;
        slides[1].style.transition = `0.5s`;
    }
})

countThree = 0;
leftKey[2].addEventListener('click', () => {
    countThree--;
    slides[2].style.backgroundImage = `url(${images[2][countThree]})`;
    slides[2].style.transition = `0.5s`;
    if (countThree < 0) {
        countThree = images[2].length - 1;
        slides[2].style.backgroundImage = `url(${images[2][countThree]})`;
        slides[2].style.transition = `0.5s`;
    }
});
rightKey[2].addEventListener('click', () => {
    countThree++;
    slides[2].style.backgroundImage = `url(${images[2][countThree]})`;
    slides[2].style.transition = `0.5s`;
    if (countThree > images[2].length - 1) {
        countThree = 0;
        slides[2].style.backgroundImage = `url(${images[2][countThree]})`;
        slides[2].style.transition = `0.5s`;
    }
})


countFour = 0;
leftKey[3].addEventListener('click', () => {
    countFour--;
    slides[3].style.backgroundImage = `url(${images[3][countFour]})`;
    slides[3].style.transition = `0.5s`;
    if (countFour < 0) {
        countFour = images[3].length - 1;
        slides[3].style.backgroundImage = `url(${images[3][countFour]})`;
        slides[3].style.transition = `0.5s`;
    }
});
rightKey[3].addEventListener('click', () => {
    countFour++;
    slides[3].style.backgroundImage = `url(${images[3][countFour]})`;
    slides[3].style.transition = `0.5s`;
    if (countFour > images[3].length - 1) {
        countFour = 0;
        slides[3].style.backgroundImage = `url(${images[3][countFour]})`;
        slides[3].style.transition = `0.5s`;
    }
})


countFive = 0;
leftKey[4].addEventListener('click', () => {
    countFive--;
    slides[4].style.backgroundImage = `url(${images[4][countFive]})`;
    slides[4].style.transition = `0.5s`;
    if (countFive < 0) {
        countFive = images[4].length - 1;
        slides[4].style.backgroundImage = `url(${images[4][countFive]})`;
        slides[4].style.transition = `0.5s`;
    }
});
rightKey[4].addEventListener('click', () => {
    countFive++;
    slides[4].style.backgroundImage = `url(${images[4][countFive]})`;
    slides[4].style.transition = `0.5s`;
    if (countFive > images[4].length - 1) {
        countFive = 0;
        slides[4].style.backgroundImage = `url(${images[4][countFive]})`;
        slides[4].style.transition = `0.5s`;
    }
})


countSix = 0;
leftKey[5].addEventListener('click', () => {
    countSix--;
    slides[5].style.backgroundImage = `url(${images[5][countSix]})`;
    slides[5].style.transition = `0.5s`;
    if (countSix < 0) {
        countSix = images[5].length - 1;
        slides[5].style.backgroundImage = `url(${images[5][countSix]})`;
        slides[5].style.transition = `0.5s`;
    }
});
rightKey[5].addEventListener('click', () => {
    countSix++;
    slides[5].style.backgroundImage = `url(${images[5][countSix]})`;
    slides[5].style.transition = `0.5s`;
    if (countSix > images[5].length - 1) {
        countSix = 0;
        slides[5].style.backgroundImage = `url(${images[5][countSix]})`;
        slides[5].style.transition = `0.5s`;
    }
})


// Home

let pictures = ["printing/HD1.jpg", "printing/HD2.jpg", "printing/HD3.jpg", "printing/HD4.jpg", "printing/SU1.jpg", "printing/SU1B.jpg", "printing/SU2.jpg", "printing/SU2B.jpg", "printing/SU3.jpg", "printing/SU3B.jpg", "printing/SU4.jpg", "printing/SU4B.jpg", "printing/JS1.jpg", "printing/JS2.jpg", "printing/JS3.jpg", "printing/JS4.jpg"];

let horizontal_items = document.querySelector("#horizontal-scroll");

horizontal_items.style.background = "white";
horizontal_items.style.zIndex = "180";



for (let i = 0; i < pictures.length; i++) {
    let homeItems = document.createElement("div");
    homeItems.style.width = "600px";
    homeItems.style.height = "500px";
    // homeItems.style.float = "left";
    homeItems.style.backgroundImage = `url(${pictures[i]})`;
    homeItems.style.backgroundPosition = "center";
    homeItems.style.backgroundRepeat = "no-repeat";
    homeItems.style.margin = "-150px";
    homeItems.style.backgroundSize = "40%";

    horizontal_items.appendChild(homeItems);
}
// script.js