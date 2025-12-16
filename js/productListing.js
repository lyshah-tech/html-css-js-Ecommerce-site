// Product Listing Module

class ProductListing {
    constructor() {
        this.currentCategory = 'all';
        this.currentMaxPrice = 150000;
        this.currentSort = 'default';
        this.searchQuery = '';
    }

    // Filter and sort products
    getFilteredProducts() {
        let filtered = products.filter(p => 
            (this.currentCategory === 'all' || p.category === this.currentCategory) &&
            p.price <= this.currentMaxPrice &&
            (this.searchQuery === '' || 
             p.name.toLowerCase().includes(this.searchQuery) || 
             p.description.toLowerCase().includes(this.searchQuery))
        );

        if (this.currentSort === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (this.currentSort === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (this.currentSort === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        return filtered;
    }

    // Render product card HTML
    renderProductCard(product) {
        return `
            <div class="col-md-6 col-lg-4">
                <div class="card product-card shadow-sm">
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
        `;
    }

    // Render all products
    renderProducts() {
        const filtered = this.getFilteredProducts();
        const grid = document.getElementById('productsGrid');
        
        if (filtered.length === 0) {
            grid.innerHTML = '<div class="col-12 text-center py-5"><p class="text-muted">No products found</p></div>';
            return;
        }

        grid.innerHTML = filtered.map(product => this.renderProductCard(product)).join('');
    }

    // Render trending products
    renderTrending() {
        const trending = products.slice(0, 4);
        const container = document.getElementById('trendingProducts');
        
        container.innerHTML = trending.map(product => `
            <div class="col-md-6 col-lg-3">
                <div class="card product-card shadow-sm h-100">
                    <div class="position-relative">
                        <img src="${product.image}" alt="${product.name}" class="product-image" 
                             onclick="productDetailManager.show(${product.id})" style="cursor: pointer;">
                        <span class="badge bg-danger position-absolute top-0 end-0 m-2">HOT</span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title" onclick="productDetailManager.show(${product.id})" 
                            style="cursor: pointer;">${product.name}</h5>
                        <p class="card-text text-muted small flex-grow-1">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
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

    // Render categories
    renderCategories() {
        const categories = ['all', ...new Set(products.map(p => p.category))];
        const container = document.getElementById('categoryFilters');
        
        container.innerHTML = categories.map(cat => `
            <div class="category-filter p-2 rounded mb-2 ${cat === 'all' ? 'active' : ''}" 
                 onclick="productListing.filterByCategory('${cat}')">
                <i class="bi bi-${UIUtils.getCategoryIcon(cat)} me-2"></i>
                ${cat.charAt(0).toUpperCase() + cat.slice(1)}
            </div>
        `).join('');
    }

    // Render categories grid
    renderCategoriesGrid() {
        const categories = [...new Set(products.map(p => p.category))];
        const container = document.getElementById('categoriesGrid');
        
        const categoryColors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
        ];
        
        container.innerHTML = categories.map((cat, index) => {
            const count = products.filter(p => p.category === cat).length;
            return `
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="category-card" style="background: ${categoryColors[index % categoryColors.length]}" 
                         onclick="UIUtils.scrollToElement('#productsGrid'); productListing.filterByCategory('${cat}')">
                        <i class="bi bi-${UIUtils.getCategoryIcon(cat)}"></i>
                        <h5>${cat}</h5>
                        <p>${count} Products</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Filter by category
    filterByCategory(category) {
        this.currentCategory = category;
        document.querySelectorAll('.category-filter').forEach(el => {
            el.classList.remove('active');
            if (el.textContent.toLowerCase().includes(category.toLowerCase())) {
                el.classList.add('active');
            }
        });
        this.renderProducts();
    }

    // Update search query
    updateSearch(query) {
        this.searchQuery = query.toLowerCase();
        this.renderProducts();
    }

    // Update price filter
    updatePrice(maxPrice) {
        this.currentMaxPrice = maxPrice;
        this.renderProducts();
    }

    // Update sort
    updateSort(sortType) {
        this.currentSort = sortType;
        this.renderProducts();
    }
}

// Create global product listing instance
const productListing = new ProductListing();
