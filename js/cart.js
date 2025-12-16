// Cart Management Module

class CartManager {
    constructor() {
        this.cart = [];
        this.loadFromLocalStorage();
    }

    // Load cart from localStorage
    loadFromLocalStorage() {
        const savedCart = localStorage.getItem('techstore_cart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
        }
    }

    // Save cart to localStorage
    saveToLocalStorage() {
        localStorage.setItem('techstore_cart', JSON.stringify(this.cart));
    }

    // Add item to cart
    addItem(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        
        this.saveToLocalStorage();
        this.updateCartCount();
        return true;
    }

    // Update item quantity
    updateQuantity(productId, change) {
        const item = this.cart.find(i => i.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.saveToLocalStorage();
            }
        }
    }

    // Remove item from cart
    removeItem(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveToLocalStorage();
    }

    // Get cart items
    getItems() {
        return this.cart;
    }

    // Get total count
    getCount() {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    // Calculate subtotal
    getSubtotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    // Calculate tax
    getTax() {
        return this.getSubtotal() * 0.18;
    }

    // Calculate shipping
    getShipping() {
        return this.cart.length > 0 ? 250 : 0;
    }

    // Calculate total
    getTotal() {
        return this.getSubtotal() + this.getTax() + this.getShipping();
    }

    // Clear cart
    clear() {
        this.cart = [];
        this.saveToLocalStorage();
        this.updateCartCount();
    }

    // Update cart count in UI
    updateCartCount() {
        const countElement = document.getElementById('cartCount');
        if (countElement) {
            countElement.textContent = this.getCount();
        }
    }
}

// Create global cart manager instance
const cartManager = new CartManager();
