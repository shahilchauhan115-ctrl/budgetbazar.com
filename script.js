// script.js

// eCommerce functionality for BudgetBazar

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    clearCart() {
        this.items = [];
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class ProductFilter {
    static filterByCategory(products, category) {
        return products.filter(product => product.category === category);
    }

    static searchByName(products, searchTerm) {
        return products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
}

class Wishlist {
    constructor() {
        this.items = [];
    }

    addToWishlist(product) {
        this.items.push(product);
    }

    removeFromWishlist(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }
}

class Checkout {
    static processPayment(cart) {
        const total = cart.getTotal();
        console.log(`Processing payment of $${total.toFixed(2)}`);
        // Implement payment gateway integration here
    }
}

// Example Usage
const cart = new ShoppingCart();
const wishlist = new Wishlist();

const products = [
    new Product(1, 'Product A', 29.99, 'Category 1'),
    new Product(2, 'Product B', 49.99, 'Category 2'),
    new Product(3, 'Product C', 19.99, 'Category 1'),
];

const filteredProducts = ProductFilter.filterByCategory(products, 'Category 1');
const searchedProducts = ProductFilter.searchByName(products, 'Product A');

cart.addItem(products[0]);
wishlist.addToWishlist(products[1]);
Checkout.processPayment(cart);