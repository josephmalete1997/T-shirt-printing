import * as itemLIst from "./content.js";

function getItems(UniformItems, TextItem) {
    let productID;
    if (UniformItems === itemLIst.uniform_A) {
        productID = "a";
    }
    if (UniformItems === itemLIst.uniform_B) {
        productID = "b";
    }

    if (UniformItems === itemLIst.uniform_C) {
        productID = "c";
    }
    if (UniformItems === itemLIst.uniform_D) {
        productID = "d";
    }
    if (UniformItems === itemLIst.uniform_E) {
        productID = "e";
    }
    if (UniformItems === itemLIst.uniform_F) {
        productID = "f";
    }
    if (UniformItems === itemLIst.uniform_G) {
        productID = "g";
    }
    if (UniformItems === itemLIst.uniform_H) {
        productID = "h";
    }
    if (UniformItems === itemLIst.uniform_I) {
        productID = "i";
    }
    return (
        UniformItems.forEach((UniformItems, index) => {
            const borderHolder = document.createElement('div');
            borderHolder.setAttribute("class", "borderHolder")
            borderHolder.setAttribute("data-id", `${productID}${index+1}`);
            const container = document.getElementById("category");
            borderHolder.innerHTML = `<i class='fa-regular fa-heart'></i>
            <div class="item-description">${TextItem[index]}</div>
            <button class="add-to-cart add"><i class="fa-solid fa-cart-plus"></i> Add item
            <div class="loadersAdd">
                <div class="loader"></div>
                <h1 class="count">
                     <span class="count-up"></span>
                 </h1>
            </div>
            </button>
            `;
            borderHolder.style.backgroundImage = `url(${UniformItems})`;
            borderHolder.style.backgroundPositionY = `10px`;
            // text
            container.appendChild(borderHolder);
        })
    )

}

export { getItems };