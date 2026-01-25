// ARRAY OF BREWS WITH PRICE
const brews = [
  { name: "Classic Espresso", price: 180 },
  { name: "Caramel Latte", price: 220 },
  { name: "Mocha Bliss", price: 250 },
  { name: "Iced Vanilla Brew", price: 200 },
  { name: "Brew & Bloom Special", price: 300 }
];

// CART VARIABLES
let cart = [];
let total = 0;

// FUNCTION TO ADD BREW TO CART
function addToCart(index) {
    const brew = brews[index];
    cart.push(brew);
    total += brew.price;

    updateCartDisplay();
}

// FUNCTION TO UPDATE CART DISPLAY
function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = ""; // clear previous

    cart.forEach((item, i) => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
    });

    document.getElementById("total-bill").innerText = `Total: ₹${total}`;
}

// FUNCTION TO CHECKOUT
function checkout() {
    if(cart.length === 0){
        alert("Your cart is empty! Please add some brews.");
        return;
    }

    alert(`Order Confirmed!\n\n${cart.map(item => item.name).join(", ")}\nTotal Bill: ₹${total}\n\nThank you for choosing Brew & Bloom ☕`);
    cart = [];
    total = 0;
    updateCartDisplay();
}
