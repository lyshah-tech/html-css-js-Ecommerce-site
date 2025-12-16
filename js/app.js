// Main App Initialization

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initializeApp();
    
    // Setup event listeners
    setupEventListeners();
});

function initializeApp() {
    // Render initial content
    productListing.renderTrending();
    productListing.renderCategories();
    productListing.renderCategoriesGrid();
    featuredProduct.render();
    productListing.renderProducts();
    cartManager.updateCartCount();
}

function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', (e) => {
        productListing.updateSearch(e.target.value);
    });
    
    document.getElementById('searchInputSidebar').addEventListener('input', (e) => {
        productListing.updateSearch(e.target.value);
        document.getElementById('searchInput').value = e.target.value;
    });
    
    // Price range filter
    document.getElementById('priceRange').addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        document.getElementById('priceValue').textContent = value.toLocaleString();
        productListing.updatePrice(value);
    });
    
    // Sort functionality
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        productListing.updateSort(e.target.value);
    });
}

// Global helper functions for inline onclick handlers
function showPage(page) {
    pageManager.showPage(page);
}

function placeOrder() {
    checkoutPage.placeOrder();
}

function clearCart() {
    cartManager.clear();
}
