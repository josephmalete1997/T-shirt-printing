let slides = document.querySelectorAll(".products-panel");
let leftKey = document.querySelectorAll(".left");
let rightKey = document.querySelectorAll(".right");

//sublimation images
const images = [
    ["printing/HD1.jpg", "printing/HD2.jpg", "printing/HD3.jpg", "printing/HD4.jpg"],
    ["printing/SU1.jpg", "printing/SU1B.jpg", "printing/SU2.jpg", "printing/SU2B.jpg", "printing/SU3.jpg", "printing/SU3B.jpg", "printing/SU4.jpg", "printing/SU4B.jpg"],
    ["printing/JS1.jpg", "printing/JS2.jpg", "printing/JS3.jpg", "printing/JS4.jpg"],
]


slides[0].style.backgroundImage = "url(printing/HD1.jpg)";
slides[0].style.backgroundSize = "70%";
slides[0].style.backgroundRepeat = "no-repeat";
slides[0].style.backgroundPosition = "center";
slides[0].style.transition = `0.2s`;

slides[1].style.backgroundImage = "url(printing/SU1.jpg)";
slides[1].style.backgroundSize = "70%";
slides[1].style.backgroundRepeat = "no-repeat";
slides[1].style.backgroundPosition = "center";
slides[1].style.transition = `0.2s`;

slides[2].style.backgroundImage = "url(printing/JS1.jpg)";
slides[2].style.backgroundSize = "70%";
slides[2].style.backgroundRepeat = "no-repeat";
slides[2].style.backgroundPosition = "center";
slides[2].style.transition = `0.2s`;

countOne = 0;
leftKey[0].addEventListener('click', () => {
    countOne--;
    slides[0].style.backgroundImage = `url(${images[0][countOne]})`;
    slides[0].style.transition = `0.2s`;
    if (countOne < 0) {
        countOne = images[0].length - 1;
        slides[0].style.backgroundImage = `url(${images[0][countOne]})`;
        slides[0].style.transition = `0.2s`;
    }
});
rightKey[0].addEventListener('click', () => {
    countOne++;
    slides[0].style.backgroundImage = `url(${images[0][countOne]})`;
    slides[0].style.transition = `0.2s`;
    if (countOne > images[0].length - 1) {
        countOne = 0;
        slides[0].style.backgroundImage = `url(${images[0][countOne]})`;
        slides[0].style.transition = `0.2s`;
    }
})

countTwo = 0;
leftKey[1].addEventListener('click', () => {
    countTwo--;
    slides[1].style.backgroundImage = `url(${images[1][countTwo]})`;
    slides[1].style.transition = `0.2s`;
    if (countTwo < 0) {
        countTwo = images[1].length - 1;
        slides[1].style.backgroundImage = `url(${images[1][countTwo]})`;
        slides[1].style.transition = `0.2s`;
    }
});
rightKey[1].addEventListener('click', () => {
    countTwo++;
    slides[1].style.backgroundImage = `url(${images[1][countTwo]})`;
    slides[1].style.transition = `0.2s`;
    if (countTwo > images[1].length - 1) {
        countTwo = 0;
        slides[1].style.backgroundImage = `url(${images[1][countTwo]})`;
        slides[1].style.transition = `0.2s`;
    }
})

countThree = 0;
leftKey[2].addEventListener('click', () => {
    countThree--;
    slides[2].style.backgroundImage = `url(${images[2][countThree]})`;
    slides[2].style.transition = `0.2s`;
    if (countThree < 0) {
        countThree = images[2].length - 1;
        slides[2].style.backgroundImage = `url(${images[2][countThree]})`;
        slides[2].style.transition = `0.2s`;
    }
});
rightKey[2].addEventListener('click', () => {
    countThree++;
    slides[2].style.backgroundImage = `url(${images[2][countThree]})`;
    slides[2].style.transition = `0.2s`;
    if (countThree > images[2].length - 1) {
        countThree = 0;
        slides[2].style.backgroundImage = `url(${images[2][countThree]})`;
        slides[2].style.transition = `0.2s`;
    }
})