// Checkout Page Module

class CheckoutPage {
    // Render checkout summary
    renderSummary() {
        const container = document.getElementById('checkoutSummary');
        const items = cartManager.getItems();
        
        container.innerHTML = items.map(item => `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
                    <span class="small">${item.name} x ${item.quantity}</span>
                </div>
                <span class="small fw-bold">${UIUtils.formatPrice(item.price * item.quantity)}</span>
            </div>
        `).join('') + `
            <hr>
            <div class="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${UIUtils.formatPrice(cartManager.getSubtotal())}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <span>Tax (18% GST):</span>
                <span>${UIUtils.formatPrice(Math.round(cartManager.getTax()))}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>${UIUtils.formatPrice(cartManager.getShipping())}</span>
            </div>
        `;
        
        document.getElementById('checkoutTotal').textContent = UIUtils.formatPrice(Math.round(cartManager.getTotal()));
    }

    // Place order
    placeOrder() {
        const form = document.getElementById('checkoutForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        
        const orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        const total = UIUtils.formatPrice(Math.round(cartManager.getTotal()));
        
        document.getElementById('orderNumber').textContent = orderNumber;
        document.getElementById('orderTotal').textContent = total;
        
        pageManager.showPage('success');
    }
}

// Create global checkout page instance
const checkoutPage = new CheckoutPage();
