import * as productImages from "./content.js";

function addToCart() {
    const products = {
        a1: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryA/a1.jpg"
        },
        a2: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryA/a2.jpg"
        },
        a3: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryA/a3.jpg"
        },
        a4: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryA/a4.jpg"
        },
        a5: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryA/a5.jpg"
        },
        a6: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryA/a6.jpg"
        },
        a7: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryA/a7.jpg"
        },
        a8: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryA/a8.jpg"
        },
        b1: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryB/b1.jpg"
        },
        b2: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryB/b2.jpg"
        },
        b3: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryB/b3.jpg"
        },
        b4: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryB/b4.jpg"
        },
        b5: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryB/b5.jpg"
        },
        b6: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryB/b6.webp"
        },
        b7: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryB/b7.jpg"
        },
        b8: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryB/b8.jpg"
        },
        c1: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryC/c1.jpg"
        },
        c2: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryC/c2.jpg"
        },
        c3: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryC/c3.jpg"
        },
        c4: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryC/c4.jpg"
        },
        c5: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryC/c5.jpg"
        },
        c6: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryC/c6.jpg"
        },
        c7: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryC/c7.jpg"
        },
        c8: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryC/c8.jpg"
        },
        c9: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryC/c9.jpg"
        },
        d1: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryD/d1.jpg"
        },
        d2: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryD/d2.jpg"
        },
        d3: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryD/d3.jpg"
        },
        d4: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryD/d4.jpg"
        },
        d5: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryD/d5.jpg"
        },
        d6: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryD/d6.jpg"
        },
        d7: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryD/d7.jpg"
        },
        d8: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryD/d8.jpg"
        },
        e1: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryE/e1.jpg"
        },
        e2: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryE/e2.jpg"
        },
        e3: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryE/e3.jpg"
        },
        e4: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryE/e4.jpg"
        },
        e5: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryE/e5.jpg"
        },
        e6: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryE/e6.webp"
        },
        e7: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryE/e7.jpg"
        },
        e8: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryE/e8.jpg"
        },
        f1: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryF/f1.jpg"
        },
        f2: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryF/f2.jpg"
        },
        f3: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryF/f3.jpg"
        },
        f4: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryF/f4.jpg"
        },
        f5: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryF/f5.jpg"
        },
        f6: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryF/f6.webp"
        },
        f7: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryF/f7.jpg"
        },
        f8: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryF/f8.jpg"
        },
        g1: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryG/g1.jpg"
        },
        g2: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryG/g2.jpg"
        },
        g3: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryG/g3.jpg"
        },
        g4: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryG/g4.jpg"
        },
        g5: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryG/g5.jpg"
        },
        g6: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryG/g6.jpg"
        },
        g7: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryG/g7.jpg"
        },
        g8: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryG/g8.jpg"
        },
        g9: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryG/g9.jpg"
        },
        h1: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryH/h1.jpg"
        },
        h2: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryH/h2.jpg"
        },
        h3: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryH/h3.jpg"
        },
        h4: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryH/h4.jpg"
        },
        h5: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryH/h5.jpg"
        },
        h6: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryH/h6.jpg"
        },
        h7: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryH/h7.jpg"
        },
        h8: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryH/h8.jpg"
        },
        h9: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryH/h9.jpg"
        },
        h10: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryH/h10.jpg"
        },
        i1: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryI/i1.jpg"
        },
        i2: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryI/i2.jpg"
        },
        i3: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryI/i3.jpg"
        },
        i4: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryI/i4.jpg"
        },
        i5: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryI/i5.jpg"
        },
        i6: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryI/i6.jpg"
        },
        i7: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryI/i7.jpg"
        },
        i8: {
            name: `<h3>Long sleeve</h3><h4>Gold Shirt</h4>`,
            image: "Uniform/CategoryI/i8.jpg"
        },
        //Branding
        brand1: {
            name: `<h3>Gazebos and banners</h4>`,
            image: "printing/GZ1.jpg"
        },
    };

    // Add click event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', addItem)
    });

    const load = document.querySelectorAll('.loadersAdd');
    const loadCircles = document.querySelectorAll('.loadersAdd .loader');
    const addCount = document.querySelectorAll('.count');

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            load[index].style.display = "flex";
            loadCircles[index].style.display = "block";
            button.innerHTML = load[index].outerHTML;
            setTimeout(() => {
                setTimeout(() => {
                    addCount[index].innerHTML = `<span class="count-up"></span>`
                    button.innerHTML = `
                    <i class="fa-solid fa-cart-plus"></i> Add item
            <div class="loadersAdd">
                <div class="loader"></div>
                <h1 class="count">
                     <span class="count-up"></span>
                 </h1>
            </div>
                    `;
                }, 800);
                loadCircles[index].style.display = "none";
                addCount[index].innerHTML = `<i class = "fa-solid fa-check"></i>`;
                button.innerHTML = addCount[index].innerHTML;
            }, 1000);
        })
    });

    document.getElementById("cart-open").addEventListener('click',
        () => {
            document.getElementById("cart-container").style.left = "0%";
            document.getElementById("cart-close").style.display = "block";
            // document.getElementById("content").style.display = "none";
            displayCart();
        }
    );
    document.getElementById("cart-close").addEventListener('click',
        () => {
            document.getElementById("cart-close").style.display = "none";
            document.getElementById("cart-container").style.left = "100%";
            // document.getElementById("content").style.display = "block";
            document.querySelector('.count').innerHTML = `<span class="count-up"></span>`;
        }
    )

    // Function to handle adding items to the cart
    function addItem(event, load) {
        const product = event.target.parentElement;
        const productId = product.getAttribute('data-id');
        const productName = products[productId].name;
        const productImage = products[productId].image;
        const cartItem = {
            id: productId,
            name: productName,
            image: productImage
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
    count = 0;

    function loadingRemove() {
        document.querySelector('#loaders').style.display = "flex";
        document.querySelector('.count-up').innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    }
    // Function to handle deleting items from the cart
    function deleteCartItem(productId) {
        let cart = JSON.parse(localStorage.getItem('cart-display')) || [];

        // Find the index of the item with the given ID
        const itemIndex = cart.findIndex(item => item.id === productId);

        let x = setInterval(loadingRemove, 10);
        setTimeout(() => {
            clearInterval(x);
            document.querySelector('#loaders').style.display = "none";
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
            cartInfo.innerHTML = `<div class="item-name">${item.name}</div> <br> Quantity: ${item.quantity}
            <div class="sizes">
            <i class="fa-solid fa-tags"></i>
            <table>
            <th class="size-title">Size</th>
            <tr>
            <td>5-6</td>
            <td>7-8</td>
            <td>9-10</td>
            <td>11-12</td>
            <td>13-14</td>
            <td>XS</td>
            <td>M</td>
            <td>L</td>
            <td>XL</td>
            <td>XXL</td>
            </tr>
            </table>
            </div>
            `;

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i> Remove';
            deleteButton.addEventListener('click', () => deleteCartItem(item.id));

            cartItem.appendChild(deleteButton);
            cartItem.appendChild(cartInfo);
            cartContainer.appendChild(cartItem);
        });

        if (cart.length === 0) {
            document.querySelector(".display-user").style.display = "none";
            document.querySelector(".no-item ").style.display = "flex";
        } else {
            document.querySelector(".display-user").style.display = "flex";
            document.querySelector(".no-item ").style.display = "none";
        }
        return cart.length;
    }

    // Display the initial cart contents when the page loads
    document.getElementById("cart-count").innerHTML = displayCart();
}

export { addToCart };