import * as items from "./items.js";
import * as cartItems from "./cart.js";

const uniform_A = ["Uniform/CategoryA/a1.jpg", "Uniform/CategoryA/a2.jpg", "Uniform/CategoryA/a3.jpg", "Uniform/CategoryA/a4.jpg", "Uniform/CategoryA/a5.jpg", "Uniform/CategoryA/a6.jpg", "Uniform/CategoryA/a7.jpg", "Uniform/CategoryA/a8.jpg"];
const uniform_B = ["Uniform/CategoryB/b1.jpg", "Uniform/CategoryB/b2.jpg", "Uniform/CategoryB/b3.jpg", "Uniform/CategoryB/b4.jpg", "Uniform/CategoryB/b5.jpg", "Uniform/CategoryB/b6.webp", "Uniform/CategoryB/b7.jpg", "Uniform/CategoryB/b8.jpg"];
const uniform_C = ["Uniform/CategoryB/b1.jpg"];
export { uniform_A, uniform_B }
items.getItems(uniform_A);
items.getItems(uniform_B);

console.log(cartItems.addToCart(uniform_A, uniform_B));