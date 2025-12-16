// Featured Product Component

class FeaturedProduct {
    render() {
        const featured = products[10]; // MacBook Pro
        const container = document.getElementById('featuredProduct');
        
        container.innerHTML = `
            <div class="col-lg-6 mb-4 mb-lg-0">
                <img src="${featured.image}" alt="${featured.name}" class="img-fluid rounded shadow-lg" 
                     onclick="productDetailManager.show(${featured.id})" style="cursor: pointer;">
            </div>
            <div class="col-lg-6">
                <span class="badge bg-warning text-dark mb-3">⭐ MOST POPULAR</span>
                <h2 class="display-4 fw-bold mb-3">${featured.name}</h2>
                <p class="lead mb-4">${featured.description}</p>
                <div class="mb-4">
                    <h3 class="display-5 text-warning">${UIUtils.formatPrice(featured.price)}</h3>
                </div>
                <div class="mb-4">
                    <h6 class="mb-3">Key Features:</h6>
                    <ul class="list-unstyled">
                        ${featured.features.map(f => `<li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> ${f}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-warning btn-lg px-5 me-2" onclick="cartManager.addItem(products.find(p => p.id === ${featured.id})); UIUtils.showNotification('Added to cart!')">
                    <i class="bi bi-cart-plus"></i> Add to Cart
                </button>
                <button class="btn btn-outline-light btn-lg px-5" onclick="productDetailManager.show(${featured.id})">
                    View Details
                </button>
            </div>
        `;
    }
}

// Create global featured product instance
const featuredProduct = new FeaturedProduct();
