let homeSlide = document.querySelector(".home_slide_image");
const homeSlideArray = ["css/H1.jpg", "css/H2.jpg", "css/H3.jpg"];

for (let i = 0; i < homeSlideArray.length; i++) {
    const dots = document.createElement('div');
    dots.setAttribute('class', 'dots');
    homeSlide.append(dots);
}

let countNew = 0;
// let countNew = Math.floor(Math.random() * homeSlideArray.length);
homeSlide.style.backgroundImage = `url(${homeSlideArray[countNew]})`;
const dotsItems = document.querySelectorAll('.dots');

function dot() {
    homeSlide.style.backgroundImage = `url(${homeSlideArray[countNew]})`;
    if (countNew > homeSlideArray.length - 1) {
        countNew = 0;
    }
    for (let i = 0; i < dotsItems.length; i++) {
        dotsItems[i].classList.remove('active');
    }
    dotsItems[countNew].classList.add('active');
    homeSlide.style.backgroundImage = `url(${homeSlideArray[countNew]})`;
}

function changeImages() {
    countNew++;

    // countNew = Math.floor(Math.random() * homeSlideArray.length)
    dot();
}
setInterval(changeImages, 2500);