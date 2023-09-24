import * as itemLIst from "./content.js";

function getItems(UniformItems) {
    let productID;
    if (UniformItems === itemLIst.uniform_A) {
        productID = "a";
    }
    if (UniformItems === itemLIst.uniform_B) {
        productID = "b";
    }
    return (
        UniformItems.forEach((UniformItems, index) => {
            const borderHolder = document.createElement('div');
            borderHolder.setAttribute("class", "borderHolder")
            borderHolder.setAttribute("data-id", `${productID}${index+1}`);
            const container = document.getElementById("category");
            borderHolder.innerHTML = `<i class='fa-regular fa-heart'></i> 
            <center><div class="loader"></div></center>
            <button class="add-to-cart add"><i class="fa-solid fa-cart-plus"></i>  to Basket</button>
            `;
            borderHolder.style.backgroundImage = `url(${UniformItems})`;
            // text
            container.appendChild(borderHolder);
        })
    )

}

export { getItems };