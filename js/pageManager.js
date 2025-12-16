// Page Manager Module

class PageManager {
    constructor() {
        this.currentPage = 'products';
    }

    // Show specific page
    showPage(page) {
        // Hide all pages
        document.getElementById('page-products').style.display = 'none';
        document.getElementById('page-product-detail').style.display = 'none';
        document.getElementById('page-cart').style.display = 'none';
        document.getElementById('page-checkout').style.display = 'none';
        document.getElementById('page-success').style.display = 'none';
        
        // Show requested page
        document.getElementById('page-' + page).style.display = 'block';
        this.currentPage = page;
        
        // Render page-specific content
        if (page === 'cart') {
            cartPage.render();
        } else if (page === 'checkout') {
            checkoutPage.renderSummary();
        }
        
        // Scroll to top
        UIUtils.scrollToTop();
    }

    // Get current page
    getCurrentPage() {
        return this.currentPage;
    }
}

// Create global page manager instance
const pageManager = new PageManager();
