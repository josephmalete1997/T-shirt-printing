let slides = document.querySelectorAll(".products-panel");
let leftKey = document.querySelectorAll(".left");
let rightKey = document.querySelectorAll(".right");


//sublimation images
const images = [
    ["printing/GZ1.jpg", "printing/GZ1.png", "printing/GZ2.jpg", "printing/GZ4.png", "printing/GZ5.jpg", "printing/GZ7.jpg", "printing/GZ8.jpg"],
    ["printing/SP1.jpg", "printing/SP2.jpg", "printing/SP3.jpg", "printing/SP4.jpg", "printing/SP5.jpg", "printing/SP6.jpg", "printing/SP7.jpg"],
    ["printing/HD1.jpg", "printing/HD2.jpg", "printing/HD3.jpg", "printing/HD4.jpg"],
    ["printing/SU1.jpg", "printing/SU1B.jpg", "printing/SU2.jpg", "printing/SU2B.jpg", "printing/SU3.jpg", "printing/SU3B.jpg", "printing/SU4.jpg", "printing/SU4B.jpg"],
    ["printing/JS1.jpg", "printing/JS2.jpg", "printing/JS3.jpg", "printing/JS4.jpg"],
    ["Branding/mugs/M1.jpg", "Branding/mugs/M2.jpg", "Branding/mugs/M3.jpg", "Branding/mugs/M4.jpg", "Branding/mugs/M5.jpg", "Branding/mugs/M6.jpg"],
    ["Branding/phones/p1.webp", "Branding/phones/p2.webp", "Branding/phones/p3.webp", "Branding/phones/p4.jpg"],
    ["Branding/bottles/b1.jpg", "Branding/bottles/b2.jpg", "Branding/bottles/b3.jpg", "Branding/bottles/b4.webp", "Branding/bottles/b5.webp", "Branding/bottles/b6.jpg", "Branding/bottles/b7.jpg", "Branding/bottles/b8.webp"]
]


slides.forEach((slides, index) => {
    slides.style.backgroundImage = `url(${images[index][0]})`
    slides.style.backgroundSize = "70%";
    slides.style.backgroundRepeat = "no-repeat";
    slides.style.backgroundPosition = "center";
    slides.style.transition = `0.5s`;
    slides.setAttribute("data-id", `brand${index+1}`);
});
const description = ["Gazebos and banners", "Sports jerseys", "Custom hoodies", "Matric and Grade 7's t-shirst", "Matric Jackets", "Coffee mugs", "cellphone pouches", "Bottles"];
const caption = document.querySelectorAll(".slide");

slides.forEach((slides, index) => {
    let captionText = document.createElement("p");
    let addItemToCart = document.createElement("button");
    addItemToCart.style.width = "200px";
    addItemToCart.style.height = "50px";
    addItemToCart.style.display = "flex";
    addItemToCart.style.justifyContent = "center";
    addItemToCart.style.alignItems = "center";
    addItemToCart.setAttribute("class", "add-to-cart");
    addItemToCart.classList.add("add_item");
    captionText.setAttribute("class", "description_items");
    captionText.innerHTML = description[index];
    addItemToCart.innerHTML = `<i class="fa-solid fa-cart-plus"></i>  Add item
    <div class="loadersAdd">
                <div class="loader"></div>
                <h1 class="count">
                     <span class="count-up"></span>
                 </h1>
            </div>
    `

    caption[index].append(captionText, addItemToCart);
});
// images.forEach((images, indexImages) => {


leftKey.forEach((leftKey, index) => {
    let countOne = 0;
    leftKey.addEventListener('click',
        left = () => {
            countOne--;
            slides[index].style.backgroundImage = `url(${images[index][countOne]})`;
            slides[index].style.transition = `0.5s`;
            if (countOne < 0) {
                countOne = images[index].length - 1;
                slides[index].style.backgroundImage = `url(${images[index][countOne]})`;
                slides[index].style.transition = `0.5s`;
            }
            return countOne;
        });
})

rightKey.forEach((rightKey, index) => {
    let countOne = 0;
    rightKey.addEventListener('click',
        right = () => {
            countOne++;
            slides[index].style.backgroundImage = `url(${images[index][countOne]})`;
            slides[index].style.transition = `0.5s`;
            if (countOne > images[index].length - 1) {
                countOne = 0;
                slides[index].style.backgroundImage = `url(${images[index][countOne]})`;
                slides[index].style.transition = `0.5s`;
            }
            return countOne;
        })
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