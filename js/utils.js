// UI Utilities Module

const UIUtils = {
    // Show notification toast
    showNotification(message, type = 'success') {
        const toast = document.createElement('div');
        const bgColor = type === 'success' ? 'bg-success' : 
                       type === 'error' ? 'bg-danger' : 
                       type === 'warning' ? 'bg-warning' : 'bg-info';
        
        toast.className = `position-fixed bottom-0 end-0 m-3 p-3 ${bgColor} text-white rounded shadow`;
        toast.style.zIndex = '9999';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    },

    // Get category icon
    getCategoryIcon(category) {
        const icons = {
            'all': 'grid',
            'Audio': 'headphones',
            'Wearables': 'smartwatch',
            'Computers': 'laptop',
            'Monitors': 'display',
            'Accessories': 'mouse',
            'Gaming': 'controller',
            'Cameras': 'camera',
            'Storage': 'device-hdd'
        };
        return icons[category] || 'tag';
    },

    // Format price in PKR
    formatPrice(price) {
        return `Rs. ${price.toLocaleString()}`;
    },

    // Generate stars HTML
    generateStars(rating, size = 'normal') {
        const sizeClass = size === 'large' ? 'stars-large' : 
                         size === 'small' ? 'stars-small' : 'stars';
        
        let starsHTML = `<div class="${sizeClass}">`;
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                starsHTML += '<i class="bi bi-star-fill text-warning"></i>';
            } else if (i < rating) {
                starsHTML += '<i class="bi bi-star-half text-warning"></i>';
            } else {
                starsHTML += '<i class="bi bi-star text-warning"></i>';
            }
        }
        starsHTML += '</div>';
        return starsHTML;
    },

    // Scroll to element smoothly
    scrollToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    // Scroll to top
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};
