// Cart Page Module

class CartPage {
    // Render cart items
    render() {
        const container = document.getElementById('cartItems');
        const items = cartManager.getItems();
        
        if (items.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <i class="bi bi-cart-x"></i>
                    <h4 class="mt-3">Your cart is empty</h4>
                    <p class="text-muted">Add some products to get started!</p>
                    <button class="btn btn-primary mt-3" onclick="pageManager.showPage('products')">Shop Now</button>
                </div>
            `;
            document.getElementById('checkoutBtn').disabled = true;
            return;
        }

        document.getElementById('checkoutBtn').disabled = false;
        
        container.innerHTML = items.map(item => `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-md-2 text-center">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image" 
                             onclick="productDetailManager.show(${item.id})" style="cursor: pointer;">
                    </div>
                    <div class="col-md-4">
                        <h6 class="mb-1" onclick="productDetailManager.show(${item.id})" 
                            style="cursor: pointer;">${item.name}</h6>
                        <p class="text-muted small mb-0">${item.description}</p>
                    </div>
                    <div class="col-md-2">
                        <span class="fw-bold">${UIUtils.formatPrice(item.price)}</span>
                    </div>
                    <div class="col-md-2">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="cartPage.updateQuantity(${item.id}, -1)">-</button>
                            <span class="fw-bold">${item.quantity}</span>
                            <button class="quantity-btn" onclick="cartPage.updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <div class="col-md-2 text-end">
                        <div class="fw-bold mb-2">${UIUtils.formatPrice(item.price * item.quantity)}</div>
                        <button class="btn btn-sm btn-outline-danger" onclick="cartPage.removeItem(${item.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        this.updateSummary();
    }

    // Update item quantity
    updateQuantity(productId, change) {
        cartManager.updateQuantity(productId, change);
        this.render();
    }

    // Remove item
    removeItem(productId) {
        cartManager.removeItem(productId);
        this.render();
        UIUtils.showNotification('Item removed from cart', 'warning');
    }

    // Update cart summary
    updateSummary() {
        document.getElementById('subtotal').textContent = UIUtils.formatPrice(cartManager.getSubtotal());
        document.getElementById('tax').textContent = UIUtils.formatPrice(Math.round(cartManager.getTax()));
        document.getElementById('shipping').textContent = UIUtils.formatPrice(cartManager.getShipping());
        document.getElementById('total').textContent = UIUtils.formatPrice(Math.round(cartManager.getTotal()));
    }
}

// Create global cart page instance
const cartPage = new CartPage();
