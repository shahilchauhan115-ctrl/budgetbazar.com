// eCommerce Functionality Script.js

// Initialize Cart
let cart = [];

// Add to Cart Function
function addToCart(product) {
    cart.push(product);
    console.log(`${product.name} has been added to the cart.`);
}

// Remove from Cart Function
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    console.log(`Product with ID: ${productId} has been removed from the cart.`);
}

// View Cart Function
function viewCart() {
    console.log("Current Cart: ", cart);
}

// Product Filtering Function
function filterProducts(products, criteria) {
    return products.filter(product => {
        let matches = true;
        for (let key in criteria) {
            if (criteria[key] && product[key] !== criteria[key]) {
                matches = false;
                break;
            }
        }
        return matches;
    });
}

// Search Products Function
function searchProducts(products, searchString) {
    return products.filter(product => product.name.toLowerCase().includes(searchString.toLowerCase()));
}

// Checkout Function
function checkout(cart) {
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }
    console.log(`Proceeding to checkout with ${cart.length} item(s).`);
    // Implement payment processing here...
}

// Wishlist Management
let wishlist = [];
function addToWishlist(product) {
    wishlist.push(product);
    console.log(`${product.name} has been added to your wishlist.`);
}

function viewWishlist() {
    console.log("Your Wishlist: ", wishlist);
}

// Performance Optimizations (Debouncing function for search input)
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
}

// Example usage
// let products = [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }];
// addToCart(products[0]);
// viewCart();
// checkout(cart);