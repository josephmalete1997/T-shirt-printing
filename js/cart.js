import * as productImages from "./content.js";

function addToCart() {
    const products = {
        a1: {
            image: "Uniform/CategoryA/a1.jpg"
        },
        a2: {
            image: "Uniform/CategoryA/a2.jpg"
        },
        a3: {
            image: "Uniform/CategoryA/a3.jpg"
        },
        a4: {
            image: "Uniform/CategoryA/a4.jpg"
        },
        a5: {
            image: "Uniform/CategoryA/a5.jpg"
        },
        a6: {
            image: "Uniform/CategoryA/a6.jpg"
        },
        a7: {
            image: "Uniform/CategoryA/a7.jpg"
        },
        a8: {
            image: "Uniform/CategoryA/a8.jpg"
        },
        b1: {
            image: "Uniform/CategoryB/b1.jpg"
        },
        b2: {
            image: "Uniform/CategoryB/b2.jpg"
        },
        b3: {
            image: "Uniform/CategoryB/b3.jpg"
        },
        b4: {
            image: "Uniform/CategoryB/b4.jpg"
        },
        b5: {
            image: "Uniform/CategoryB/b5.jpg"
        },
        b6: {
            image: "Uniform/CategoryB/b6.webp"
        },
        b7: {
            image: "Uniform/CategoryB/b7.jpg"
        },
        b8: {
            image: "Uniform/CategoryB/b8.jpg"
        }
    };

    // Add click event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click',
            () => {
                alert('yes');
            }
            //  addToCart
        );
    });
    return (
        products
    )

}

export { addToCart };