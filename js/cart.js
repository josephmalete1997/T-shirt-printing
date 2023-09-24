import * as productImages from "./content.js";


function addToCart() {
    const products = {
        a1: {
            name: `Long sleeve<h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryA/a1.jpg"
        },
        a2: {
            name: "",
            image: "Uniform/CategoryA/a2.jpg"
        },
        a3: {
            name: "",
            image: "Uniform/CategoryA/a3.jpg"
        },
        a4: {
            name: "",
            image: "Uniform/CategoryA/a4.jpg"
        },
        a5: {
            name: "",
            image: "Uniform/CategoryA/a5.jpg"
        },
        a6: {
            name: "",
            image: "Uniform/CategoryA/a6.jpg"
        },
        a7: {
            name: "",
            image: "Uniform/CategoryA/a7.jpg"
        },
        a8: {
            name: "",
            image: "Uniform/CategoryA/a8.jpg"
        },
        b1: {
            name: "",
            image: "Uniform/CategoryB/b1.jpg"
        },
        b2: {
            name: "",
            image: "Uniform/CategoryB/b2.jpg"
        },
        b3: {
            name: "",
            image: "Uniform/CategoryB/b3.jpg"
        },
        b4: {
            name: "",
            image: "Uniform/CategoryB/b4.jpg"
        },
        b5: {
            name: "",
            image: "Uniform/CategoryB/b5.jpg"
        },
        b6: {
            name: "",
            image: "Uniform/CategoryB/b6.webp"
        },
        b7: {
            name: "",
            image: "Uniform/CategoryB/b7.jpg"
        },
        b8: {
            name: "",
            image: "Uniform/CategoryB/b8.jpg"
        },
        c1: {
            name: "",
            image: "Uniform/CategoryC/c1.jpg"
        },
        c2: {
            name: "",
            image: "Uniform/CategoryC/c2.jpg"
        },
        c3: {
            name: "",
            image: "Uniform/CategoryC/c3.jpg"
        },
        c4: {
            name: "",
            image: "Uniform/CategoryC/c4.jpg"
        },
        c5: {
            name: "",
            image: "Uniform/CategoryC/c5.jpg"
        },
        c6: {
            name: "",
            image: "Uniform/CategoryC/c6.jpg"
        },
        c7: {
            name: "",
            image: "Uniform/CategoryC/c7.jpg"
        },
        c8: {
            name: "",
            image: "Uniform/CategoryC/c8.jpg"
        },
        c9: {
            name: "",
            image: "Uniform/CategoryC/c9.jpg"
        },
        d1: {
            name: "",
            image: "Uniform/CategoryD/d1.jpg"
        },
        d2: {
            name: "",
            image: "Uniform/CategoryD/d2.jpg"
        },
        d3: {
            name: "",
            image: "Uniform/CategoryD/d3.jpg"
        },
        d4: {
            name: "",
            image: "Uniform/CategoryD/d4.jpg"
        },
        d5: {
            name: "",
            image: "Uniform/CategoryD/d5.jpg"
        },
        d6: {
            name: "",
            image: "Uniform/CategoryD/d6.jpg"
        },
        d7: {
            name: "",
            image: "Uniform/CategoryD/d7.jpg"
        },
        d8: {
            name: "",
            image: "Uniform/CategoryD/d8.jpg"
        }
    };

    // Add click event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addItem)
    });

    document.getElementById("cart-open").addEventListener('click',
        () => {
            document.getElementById("cart-container").style.display = "block"
            document.getElementById("cart-close").style.display = "block"
            document.getElementById("content").style.display = "none"
            displayCart();
        }
    );
    document.getElementById("cart-close").addEventListener('click',
        () => {
            document.getElementById("cart-close").style.display = "none"
            document.getElementById("cart-container").style.display = "none"
            document.getElementById("content").style.display = "block"
            document.querySelector('.count').innerHTML = `<span class="count-up">0</span>%`;
        }
    )
    let count = 0;

    function loading() {
        count++;
        document.querySelector('#loaders').style.display = "flex";
        document.querySelector('.count-up').innerHTML = `${count}`;
    }
    // Function to handle adding items to the cart
    function addItem(event) {
        //Loaders
        let x = setInterval(loading, 10);
        setTimeout(() => {
            setTimeout(() => {
                document.querySelector('.count').innerHTML = `<span class="count-up">0</span>%`
                clearInterval(x);
                count = 0;
                document.querySelector('#loaders').style.display = "none";
            }, 800);

            document.querySelector('.count').innerHTML = `<i class = "fa-solid fa-check"></i>`;

        }, 1000);
        //----------
        const product = event.target.parentElement;
        const productId = product.getAttribute('data-id');
        const productName = products[productId].name;
        const productImage = products[productId].image;
        const cartItem = {
                id: productId,
                name: productName,
                ame: productName,
                image: productImage,
            }
            // Check if cart already exists in localStorage
        let cart = JSON.parse(localStorage.getItem('cart-display')) || [];

        // Check if the item is already in the cart
        const existingCartItemIndex = cart.findIndex(item => item.id === productId);

        if (existingCartItemIndex !== -1) {
            // If the item is already in the cart, update its quantity
            cart[existingCartItemIndex].quantity += 1;
        } else {
            // Otherwise, add it to the cart

            cartItem.quantity = 1;
            cart.push(cartItem);
            document.getElementById("cart-count").innerHTML = cart.length;
        }

        // Update the cart in localStorage
        localStorage.setItem('cart-display', JSON.stringify(cart));
        document.getElementById("cart-count").innerHTML = cart.length;
        // Update the displayed cart
        displayCart();
        // alert(productId)
    }

    // Function to display the cart contents

    //+++++++++
    // loading removing
    function loadingRemove() {
        count++;
        document.querySelector('#loaders').style.display = "flex";
        document.querySelector('.count').innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        return count;
    }
    // Function to handle deleting items from the cart
    function deleteCartItem(productId) {
        let cart = JSON.parse(localStorage.getItem('cart-display')) || [];

        // Find the index of the item with the given ID
        const itemIndex = cart.findIndex(item => item.id === productId);
        let x = setInterval(loadingRemove, 10);
        setTimeout(() => {
            clearInterval(x);
            document.querySelector('.count').innerHTML = `<i class = "fa-solid fa-check"></i>`;
            setTimeout(() => {
                count = 0;
                document.querySelector('.count').innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
                document.querySelector('#loaders').style.display = "none";
            }, 800);
        }, 700);

        setTimeout(() => {
            if (itemIndex !== -1) {
                // Remove the item from the cart array
                cart.splice(itemIndex, 1);
            }
            // Update the cart in localStorage
            localStorage.setItem('cart-display', JSON.stringify(cart));
            document.getElementById("cart-count").innerHTML = cart.length;
            // Update the displayed cart
            displayCart();
        }, 1500);

    }

    // Function to display the cart contents
    function displayCart() {
        const cartContainer = document.getElementById('cart-display');
        cartContainer.innerHTML = '';

        const cart = JSON.parse(localStorage.getItem('cart-display')) || [];
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.style.backgroundImage = `url(${item.image})`;
            const cartInfo = document.createElement('div');
            cartInfo.classList.add('cart-info');
            cartInfo.innerHTML = `${item.name} <br> Quantity: ${item.quantity}`;

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i> Remove';
            deleteButton.addEventListener('click', () => deleteCartItem(item.id));

            cartItem.appendChild(cartInfo);
            cartItem.appendChild(deleteButton);
            cartContainer.appendChild(cartItem);
        });
        return cart.length;
    }

    // Display the initial cart contents when the page loads
    document.getElementById("cart-count").innerHTML = displayCart();

}
// return (
//     products
// )


// 

export { addToCart };