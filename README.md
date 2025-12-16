# TechStore - E-commerce Website

A modern, fully-functional e-commerce website for electronics with a modular architecture.

## Project Structure

```
ecommerce-site/
├── index.html                 # Main HTML file
├── data/
│   └── products.js           # Product data and reviews
├── js/
│   ├── app.js                # Main application initialization
│   ├── cart.js               # Cart management (add, remove, update)
│   ├── cartPage.js           # Cart page rendering
│   ├── checkout.js           # Checkout page functionality
│   ├── pageManager.js        # Page navigation and routing
│   ├── productListing.js     # Product listing, filtering, sorting
│   ├── productDetail.js      # Product detail page
│   └── utils.js              # Utility functions (notifications, formatting)
├── components/
│   └── featuredProduct.js    # Featured product component
└── css/
    ├── base.css              # Base styles and CSS variables
    ├── navigation.css        # Navigation and header styles
    ├── products.css          # Product card and listing styles
    ├── productDetail.css     # Product detail page styles
    ├── cart.css              # Cart and checkout styles
    ├── sidebar.css           # Sidebar and filters styles
    ├── buttons.css           # Button styles
    └── responsive.css        # Responsive design styles
```

## Features

### Data Layer
- **products.js**: Contains all product data with categories, prices, features
- **reviews.js**: Customer review data

### JavaScript Modules

#### Core Modules
1. **cart.js** - CartManager class
   - Add/remove items
   - Update quantities
   - Calculate totals (subtotal, tax, shipping)
   - localStorage persistence

2. **pageManager.js** - PageManager class
   - Page navigation
   - URL routing
   - Page-specific initialization

3. **utils.js** - UIUtils object
   - Toast notifications
   - Price formatting
   - Star ratings generation
   - Scroll utilities

#### Page Modules
4. **productListing.js** - ProductListing class
   - Product filtering by category
   - Price range filtering
   - Search functionality
   - Sorting (price, name)
   - Render product cards

5. **productDetail.js** - ProductDetailManager class
   - Product detail page rendering
   - Related products
   - Customer reviews
   - Feature highlights

6. **cartPage.js** - CartPage class
   - Cart item rendering
   - Quantity updates
   - Item removal
   - Summary calculations

7. **checkout.js** - CheckoutPage class
   - Checkout form validation
   - Order summary
   - Order placement

#### Component Modules
8. **featuredProduct.js** - FeaturedProduct class
   - Featured product section
   - Highlight key features

9. **app.js** - Main application
   - Initialization
   - Event listener setup
   - Global function bindings

### CSS Modules

1. **base.css** - Foundation
   - CSS variables
   - Reset styles
   - Animations

2. **navigation.css** - Header
   - Navbar styles
   - Search box
   - Cart badge
   - Hero banner

3. **products.css** - Product Display
   - Product cards
   - Category cards
   - Badges
   - Star ratings

4. **productDetail.css** - Detail Pages
   - Product images
   - Feature lists
   - Info boxes
   - Reviews

5. **cart.css** - Shopping Cart
   - Cart items
   - Quantity controls
   - Checkout summary
   - Empty cart state

6. **sidebar.css** - Filters
   - Category filters
   - Price range slider
   - Search box
   - Form elements

7. **buttons.css** - Buttons
   - Primary buttons
   - Outline variants
   - Hover effects

8. **responsive.css** - Mobile
   - Tablet breakpoints
   - Mobile breakpoints
   - Responsive layout

## Key Features

### Product Management
- 35+ products across 8 categories
- Product filtering and sorting
- Search functionality
- Price range filtering
- Detailed product pages with features and reviews

### Shopping Cart
- Add to cart functionality
- Quantity management
- Cart persistence (localStorage)
- Real-time cart updates
- Cart badge counter

### Checkout
- Form validation
- Order summary
- Tax calculation (18% GST)
- Shipping fees
- Order confirmation

### User Experience
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Toast notifications
- Breadcrumb navigation
- Related products suggestions
- Customer reviews with ratings

## Benefits of Modular Structure

1. **Maintainability**: Each module has a single responsibility
2. **Scalability**: Easy to add new features or modify existing ones
3. **Reusability**: Components can be reused across the application
4. **Testing**: Each module can be tested independently
5. **Collaboration**: Multiple developers can work on different modules
6. **Performance**: Load only what you need
7. **Organization**: Clear file structure and naming conventions

## Getting Started

1. Open `index.html` in a web browser
2. All JavaScript and CSS files are automatically loaded
3. No build process required - runs directly in the browser

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- Bootstrap 5.3
- Bootstrap Icons
- localStorage API

## Future Enhancements

- User authentication
- Backend API integration
- Payment gateway integration
- Order history
- Product wishlist
- Advanced search with filters
- Product comparisons
- User reviews and ratings system
