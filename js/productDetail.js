// Product Detail Module

class ProductDetailManager {
    constructor() {
        this.currentProduct = null;
    }

    // Show product detail page
    show(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        this.currentProduct = product;
        this.updateBreadcrumb(product);
        this.renderProductDetail(product);
        this.renderReviews();
        this.renderRelatedProducts(product.category, product.id);
        pageManager.showPage('product-detail');
    }

    // Update breadcrumb
    updateBreadcrumb(product) {
        document.getElementById('breadcrumbCategory').textContent = product.category;
        document.getElementById('breadcrumbProduct').textContent = product.name;
    }

    // Render product detail
    renderProductDetail(product) {
        const container = document.getElementById('productDetailContent');
        container.innerHTML = `
            <div class="col-lg-6 mb-4">
                <div class="product-detail-image-container">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid rounded shadow-lg product-detail-image">
                    ${product.inStock ? '<span class="badge bg-success position-absolute top-0 start-0 m-3">In Stock</span>' : '<span class="badge bg-danger position-absolute top-0 start-0 m-3">Out of Stock</span>'}
                </div>
            </div>
            <div class="col-lg-6">
                <div class="product-detail-info">
                    <span class="badge bg-primary mb-2">${product.category}</span>
                    <h1 class="display-5 fw-bold mb-3">${product.name}</h1>
                    
                    <div class="mb-3">
                        <div class="d-flex align-items-center">
                            ${UIUtils.generateStars(4.5)}
                            <span class="text-muted ms-2">(4.5/5 - 128 reviews)</span>
                        </div>
                    </div>
                    
                    <div class="price-section mb-4">
                        <h2 class="display-4 price mb-0">${UIUtils.formatPrice(product.price)}</h2>
                        <p class="text-muted">Inclusive of all taxes</p>
                    </div>
                    
                    <p class="lead mb-4">${product.description}</p>
                    
                    <div class="mb-4">
                        <h5 class="fw-bold mb-3">Key Features:</h5>
                        <ul class="list-unstyled feature-list">
                            ${product.features.map(f => `<li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> ${f}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="mb-4">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="info-box">
                                    <i class="bi bi-truck text-primary"></i>
                                    <div>
                                        <strong>Free Shipping</strong>
                                        <p class="text-muted small mb-0">On orders over Rs. 5,000</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-box">
                                    <i class="bi bi-arrow-repeat text-primary"></i>
                                    <div>
                                        <strong>Easy Returns</strong>
                                        <p class="text-muted small mb-0">30-day return policy</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-box">
                                    <i class="bi bi-shield-check text-primary"></i>
                                    <div>
                                        <strong>Warranty</strong>
                                        <p class="text-muted small mb-0">1 year manufacturer warranty</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-box">
                                    <i class="bi bi-credit-card text-primary"></i>
                                    <div>
                                        <strong>Secure Payment</strong>
                                        <p class="text-muted small mb-0">100% secure transactions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary btn-lg py-3" onclick="cartManager.addItem(products.find(p => p.id === ${product.id})); UIUtils.showNotification('Added to cart!')">
                            <i class="bi bi-cart-plus me-2"></i> Add to Cart
                        </button>
                        <button class="btn btn-outline-primary btn-lg py-3" onclick="cartManager.addItem(products.find(p => p.id === ${product.id})); pageManager.showPage('checkout')">
                            <i class="bi bi-lightning-fill me-2"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Render reviews
    renderReviews() {
        const container = document.getElementById('reviewsList');
        container.innerHTML = reviews.map(review => `
            <div class="review-item">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <div>
                        <h6 class="mb-1 fw-bold">${review.name} ${review.verified ? '<span class="badge bg-success badge-sm">Verified Purchase</span>' : ''}</h6>
                        ${UIUtils.generateStars(review.rating, 'small')}
                    </div>
                    <span class="text-muted small">${review.date}</span>
                </div>
                <p class="text-muted mb-0">${review.comment}</p>
            </div>
        `).join('');
    }

    // Render related products
    renderRelatedProducts(category, excludeId) {
        const related = products
            .filter(p => p.category === category && p.id !== excludeId)
            .slice(0, 4);
        
        const container = document.getElementById('relatedProducts');
        container.innerHTML = related.map(product => `
            <div class="col-md-6 col-lg-3">
                <div class="card product-card shadow-sm h-100">
                    <img src="${product.image}" alt="${product.name}" class="product-image" 
                         onclick="productDetailManager.show(${product.id})" style="cursor: pointer;">
                    <div class="card-body">
                        <h5 class="card-title" onclick="productDetailManager.show(${product.id})" 
                            style="cursor: pointer;">${product.name}</h5>
                        <p class="card-text text-muted small">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price">${UIUtils.formatPrice(product.price)}</span>
                            <button class="btn btn-primary btn-sm" onclick="cartManager.addItem(products.find(p => p.id === ${product.id})); UIUtils.showNotification('Added to cart!')">
                                <i class="bi bi-cart-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Create global product detail manager instance
const productDetailManager = new ProductDetailManager();
