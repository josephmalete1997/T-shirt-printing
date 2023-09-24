import * as items from "./items.js";
import * as cartItems from "./cart.js";

const uniform_A = ["Uniform/CategoryA/a1.jpg", "Uniform/CategoryA/a2.jpg", "Uniform/CategoryA/a3.jpg", "Uniform/CategoryA/a4.jpg", "Uniform/CategoryA/a5.jpg", "Uniform/CategoryA/a6.jpg", "Uniform/CategoryA/a7.jpg", "Uniform/CategoryA/a8.jpg"];
const uniform_B = ["Uniform/CategoryB/b1.jpg", "Uniform/CategoryB/b2.jpg", "Uniform/CategoryB/b3.jpg", "Uniform/CategoryB/b4.jpg", "Uniform/CategoryB/b5.jpg", "Uniform/CategoryB/b6.webp", "Uniform/CategoryB/b7.jpg", "Uniform/CategoryB/b8.jpg"];
const uniform_C = ["Uniform/CategoryC/c1.jpg", "Uniform/CategoryC/c2.jpg", "Uniform/CategoryC/c3.jpg", "Uniform/CategoryC/c4.jpg", "Uniform/CategoryC/c5.jpg", "Uniform/CategoryC/c6.jpg", "Uniform/CategoryC/c7.jpg", "Uniform/CategoryC/c8.jpg", "Uniform/CategoryC/c9.jpg"];
const uniform_D = ["Uniform/CategoryD/d1.jpg", "Uniform/CategoryD/d2.jpg", "Uniform/CategoryD/d3.jpg", "Uniform/CategoryD/d4.jpg", "Uniform/CategoryD/d5.jpg", "Uniform/CategoryD/d6.jpg", "Uniform/CategoryD/d7.jpg", "Uniform/CategoryD/d8.jpg"];
export { uniform_A, uniform_B, uniform_C, uniform_D }
items.getItems(uniform_A);
items.getItems(uniform_B);
items.getItems(uniform_C);
items.getItems(uniform_D);

console.log(cartItems.addToCart(uniform_A, uniform_B));