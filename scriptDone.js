// Image path helper - now supports custom extensions
const IMG = (name, ext = 'jpeg') => {
    // If name already includes extension (has a dot), use it as-is
    if (name.includes('.')) {
        return `products/${name}`;
    }
    // Otherwise add the default/specified extension
    return `products/${name}.${ext}`;
};

// Product Database
const PRODUCTS_DATA = {
    mensTshirts: [
        {
            id: 1,
            name: 'Classic Black Tee',
            price: 299,
            originalPrice: null,
            image: IMG('T-Shirt 1'),
            hoverImage: IMG('T-Shirt 1 Hover'),
            category: 'mensTshirts'
        },
        {
            id: 2,
            name: 'Navy Performance Tee',
            price: 329,
            originalPrice: null,
            image: IMG('T-Shirt 2'),
            hoverImage: IMG('T-Shirt 2 Hover'),
            category: 'mensTshirts'
        },
        {
            id: 3,
            name: 'White Essential Tee',
            price: 269,
            originalPrice: null,
            image: IMG('T-Shirt 3'),
            hoverImage: IMG('T-Shirt 3 Hover'),
            category: 'mensTshirts'
        },
        {
            id: 4,
            name: 'Grey Melange Tee',
            price: 289,
            originalPrice: null,
            image: IMG('T-Shirt 4'),
            hoverImage: IMG('T-Shirt 4 Hover'),
            category: 'mensTshirts'
        }
    ],
    mensShorts: [
        {
            id: 5,
            name: 'Black Gym Shorts',
            price: 399,
            originalPrice: null,
            image: IMG('Shorts 1'),
            hoverImage: IMG('Shorts 1 Hover'),
            category: 'mensShorts'
        },
        {
            id: 6,
            name: 'Navy Training Shorts',
            price: 429,
            originalPrice: null,
            image: IMG('Shorts 2'),
            hoverImage: IMG('Shorts 2 Hover'),
            category: 'mensShorts'
        },
        {
            id: 7,
            name: 'Grey Athletic Shorts',
            price: 389,
            originalPrice: null,
            image: IMG('Shorts 3'),
            hoverImage: IMG('Shorts 3 Hover'),
            category: 'mensShorts'
        },
        {
            id: 8,
            name: 'Charcoal Performance Shorts',
            price: 419,
            originalPrice: null,
            image: IMG('Shorts 4'),
            hoverImage: IMG('Shorts 4 Hover'),
            category: 'mensShorts'
        }
    ],
    womensClothing: [
        {
            id: 9,
            name: 'Women\'s Black Tank Top',
            price: 269,
            originalPrice: null,
            image: IMG('Tank 1'),
            hoverImage: IMG('Tank 1 Hover'),
            category: 'womensClothing'
        },
        {
            id: 10,
            name: 'Women\'s Sports Leggings',
            price: 449,
            originalPrice: null,
            image: IMG('Leggings 1'),
            hoverImage: IMG('Leggings 1 Hover'),
            category: 'womensClothing'
        },
        {
            id: 11,
            name: 'Women\'s Performance Crop',
            price: 319,
            originalPrice: null,
            image: IMG('Crop 1'),
            hoverImage: IMG('Crop 1 Hover'),
            category: 'womensClothing'
        },
        {
            id: 12,
            name: 'Women\'s Workout Jacket',
            price: 549,
            originalPrice: null,
            image: IMG('Jacket 1'),
            hoverImage: IMG('Jacket 1 Hover'),
            category: 'womensClothing'
        }
    ],
    accessories: [
        {
            id: 13,
            name: 'Gym Gloves',
            price: 179,
            originalPrice: null,
            image: IMG('Gloves 1'),
            hoverImage: IMG('Gloves 1 Hover'),
            category: 'accessories'
        },
        {
            id: 14,
            name: 'Water Bottle',
            price: 199,
            originalPrice: null,
            image: IMG('Bottle 1'),
            hoverImage: IMG('Bottle 1 Hover'),
            category: 'accessories'
        },
        {
            id: 15,
            name: 'Lifting Belt',
            price: 349,
            originalPrice: null,
            image: IMG('Belt 1'),
            hoverImage: IMG('Belt 1 Hover'),
            category: 'accessories'
        },
        {
            id: 16,
            name: 'Gym Towel',
            price: 149,
            originalPrice: null,
            image: IMG('Towel 1'),
            hoverImage: IMG('Towel 1 Hover'),
            category: 'accessories'
        }
    ],
    newArrivals: [
        {
            id: 17,
            name: 'New Release Tee',
            price: 349,
            originalPrice: null,
            image: IMG('New 1'),
            hoverImage: IMG('New 1 Hover'),
            category: 'newArrivals'
        },
        {
            id: 18,
            name: 'Premium Leggings',
            price: 499,
            originalPrice: null,
            image: IMG('New 2'),
            hoverImage: IMG('New 2 Hover'),
            category: 'newArrivals'
        },
        {
            id: 19,
            name: 'Elite Running Shorts',
            price: 399,
            originalPrice: null,
            image: IMG('New 3'),
            hoverImage: IMG('New 3 Hover'),
            category: 'newArrivals'
        },
        {
            id: 20,
            name: 'Pro Sports Cap',
            price: 249,
            originalPrice: null,
            image: IMG('New 4'),
            hoverImage: IMG('New 4 Hover'),
            category: 'newArrivals'
        }
    ],
    saleItems: [
        {
            id: 21,
            name: 'Sale Black Tee',
            price: 199,
            originalPrice: 329,
            image: IMG('Sale 1'),
            hoverImage: IMG('Sale 1 Hover'),
            category: 'saleItems'
        },
        {
            id: 22,
            name: 'Discounted Shorts',
            price: 249,
            originalPrice: 399,
            image: IMG('Sale 2'),
            hoverImage: IMG('Sale 2 Hover'),
            category: 'saleItems'
        },
        {
            id: 23,
            name: 'Sale Leggings',
            price: 299,
            originalPrice: 449,
            image: IMG('Sale 3'),
            hoverImage: IMG('Sale 3 Hover'),
            category: 'saleItems'
        },
        {
            id: 24,
            name: 'Clearance Tank',
            price: 149,
            originalPrice: 269,
            image: IMG('Sale 4'),
            hoverImage: IMG('Sale 4 Hover'),
            category: 'saleItems'
        }
    ]
};

// Shopping Cart Management
class ShoppingCart {
    constructor() {
        this.cart = this.loadCart();
        this.favorites = this.loadFavorites();
        this.initializeEventListeners();
    }

    loadCart() {
        try {
            const saved = localStorage.getItem('shoppingCart');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error loading cart:', error);
            return [];
        }
    }

    loadFavorites() {
        try {
            const saved = localStorage.getItem('favorites');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error loading favorites:', error);
            return [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }

    saveFavorites() {
        try {
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        } catch (error) {
            console.error('Error saving favorites:', error);
        }
    }

    addProduct(productId, productName, productPrice, size) {
        const key = `${productId}-${size}`;
        const existingProduct = this.cart.find(item => item.key === key);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            this.cart.push({
                id: productId,
                key: key,
                name: productName,
                price: parseFloat(productPrice),
                size: size,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showNotification(`${productName} (${size}) added to cart!`);
    }

    removeProduct(key) {
        this.cart = this.cart.filter(item => item.key !== key);
        this.saveCart();
        this.updateCartDisplay();
    }

    updateQuantity(key, quantity) {
        const product = this.cart.find(item => item.key === key);
        if (product) {
            if (quantity <= 0) {
                this.removeProduct(key);
            } else {
                product.quantity = quantity;
                this.saveCart();
                this.updateCartDisplay();
            }
        }
    }

    getTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    toggleFavorite(productId) {
        const index = this.favorites.indexOf(productId);
        if (index > -1) {
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push(productId);
        }
        this.saveFavorites();
        // Update button immediately for visual feedback
        const btn = document.querySelector(`[data-product-id="${productId}"].favorite-button`);
        if (btn) {
            if (this.isFavorite(productId)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }
        this.updateFavoriteButtons();
    }

    isFavorite(productId) {
        return this.favorites.includes(productId);
    }

    updateFavoriteButtons() {
        document.querySelectorAll('.favorite-button').forEach(btn => {
            const productId = parseInt(btn.dataset.productId);
            if (this.isFavorite(productId)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cartItems');
        const totalPriceElement = document.getElementById('totalPrice');

        if (this.cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            totalPriceElement.textContent = '0.00 kr';
            return;
        }

        cartItemsContainer.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">Size: ${item.size} | ${item.price} kr</p>
                </div>
                <div class="cart-item-controls">
                    <button type="button" class="quantity-button" data-action="decrease" data-item-key="${item.key}">−</button>
                    <span class="quantity">${item.quantity}</span>
                    <button type="button" class="quantity-button" data-action="increase" data-item-key="${item.key}">+</button>
                    <button type="button" class="remove-button" data-item-key="${item.key}">Remove</button>
                </div>
            </div>
        `).join('');

        totalPriceElement.textContent = this.getTotal() + ' kr';

        document.querySelectorAll('.quantity-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                const itemKey = e.target.dataset.itemKey;
                const item = this.cart.find(i => i.key === itemKey);

                if (action === 'increase') {
                    this.updateQuantity(itemKey, item.quantity + 1);
                } else if (action === 'decrease') {
                    this.updateQuantity(itemKey, item.quantity - 1);
                }
            });
        });

        document.querySelectorAll('.remove-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemKey = e.target.dataset.itemKey;
                this.removeProduct(itemKey);
            });
        });
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #000;
            color: #fff;
            padding: 16px 20px;
            border-radius: 10px;
            font-size: 14px;
            z-index: 3000;
            animation: slideInUp 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutDown 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    initializeEventListeners() {
        const cartModal = document.getElementById('cartModal');
        const cartButton = document.querySelector('[alt="cart"]');
        const closeCartButton = document.getElementById('closeCart');

        if (cartButton) {
            cartButton.addEventListener('click', () => {
                cartModal.classList.add('active');
            });
        }

        if (closeCartButton) {
            closeCartButton.addEventListener('click', () => {
                cartModal.classList.remove('active');
            });
        }

        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });

        const checkoutButton = document.querySelector('.checkout-button');
        if (checkoutButton) {
            checkoutButton.addEventListener('click', () => {
                if (this.cart.length > 0) {
                    this.showNotification(`Proceeding to checkout with ${this.getTotalItems()} items!`);
                    setTimeout(() => {
                        alert(`Checkout: Total Amount: ${this.getTotal()} kr`);
                    }, 1000);
                } else {
                    this.showNotification('Your cart is empty!');
                }
            });
        }

        this.updateCartDisplay();
        this.updateFavoriteButtons();
    }
}

// Menu Manager
class MenuManager {
    constructor() {
        this.dropdownMenu = document.getElementById('dropdownMenu');
        this.menuButton = document.querySelector('[alt="menu"]');
        this.isDesktop = window.innerWidth >= 1025;
        this.initializeEventListeners();
        this.handleWindowResize();
    }

    initializeEventListeners() {
        if (this.menuButton) {
            this.menuButton.addEventListener('click', () => {
                if (window.innerWidth < 1025) {
                    this.toggleMenu();
                }
            });

            if (this.isDesktop) {
                const header = document.querySelector('header');
                
                header.addEventListener('mouseenter', () => {
                    this.showMenu();
                });

                header.addEventListener('mouseleave', () => {
                    this.hideMenu();
                });

                this.dropdownMenu.addEventListener('mouseenter', () => {
                    this.showMenu();
                });

                this.dropdownMenu.addEventListener('mouseleave', () => {
                    this.hideMenu();
                });
            }
        }

        const menuLinks = this.dropdownMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hideMenu();
            });
        });

        window.addEventListener('resize', () => this.handleWindowResize());
    }

    toggleMenu() {
        this.dropdownMenu.classList.toggle('active');
    }

    showMenu() {
        this.dropdownMenu.classList.add('active');
    }

    hideMenu() {
        this.dropdownMenu.classList.remove('active');
    }

    handleWindowResize() {
        const wasDesktop = this.isDesktop;
        this.isDesktop = window.innerWidth >= 1025;

        if (wasDesktop !== this.isDesktop) {
            this.dropdownMenu.classList.remove('active');
        }
    }
}

// Login Manager
class LoginManager {
    constructor() {
        this.loginModal = document.getElementById('loginModal');
        this.accountButton = document.querySelector('.account-button');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        if (this.accountButton) {
            this.accountButton.addEventListener('click', () => {
                this.loginModal.classList.add('active');
            });
        }

        const closeLoginButton = document.getElementById('closeLogin');
        if (closeLoginButton) {
            closeLoginButton.addEventListener('click', () => {
                this.loginModal.classList.remove('active');
            });
        }

        this.loginModal.addEventListener('click', (e) => {
            if (e.target === this.loginModal) {
                this.loginModal.classList.remove('active');
            }
        });

        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const toggleSignupLink = document.getElementById('toggleSignup');
        const toggleLoginLink = document.getElementById('toggleLogin');

        if (loginForm && toggleSignupLink) {
            toggleSignupLink.addEventListener('click', (e) => {
                e.preventDefault();
                loginForm.style.display = 'none';
                signupForm.style.display = 'flex';
            });
        }

        if (signupForm && toggleLoginLink) {
            toggleLoginLink.addEventListener('click', (e) => {
                e.preventDefault();
                signupForm.style.display = 'none';
                loginForm.style.display = 'flex';
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Login functionality would be implemented here');
                this.loginModal.classList.remove('active');
            });
        }

        if (signupForm) {
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Signup functionality would be implemented here');
                this.loginModal.classList.remove('active');
            });
        }
    }
}

// Product Renderer
class ProductRenderer {
    constructor(cart) {
        this.cart = cart;
        // Store bound handlers so they can be removed later
        this.buyButtonHandler = this.handleBuyButton.bind(this);
        this.sizeButtonHandler = this.handleSizeButton.bind(this);
        this.favoriteBtnHandler = this.handleFavoriteButton.bind(this);
        this.handlersAttached = false;
    }

    handleBuyButton(e) {
        if (e.target.classList.contains('buy-button')) {
            e.preventDefault();
            const btn = e.target;
            const sizeSelector = btn.parentElement.querySelector('.size-selector');
            btn.style.display = 'none';
            sizeSelector.style.display = 'flex';
        }
    }

    handleSizeButton(e) {
        if (e.target.classList.contains('size-button')) {
            const size = e.target.dataset.size;
            const sizeSelector = e.target.closest('.size-selector');
            const productId = parseInt(sizeSelector.dataset.productId);
            const buyBtn = sizeSelector.closest('.product-box').querySelector('.buy-button');
            this.cart.addProduct(productId, buyBtn.dataset.productName, buyBtn.dataset.productPrice, size);
            sizeSelector.style.display = 'none';
            buyBtn.style.display = 'block';
        }
    }

    handleFavoriteButton(e) {
        if (e.target.closest('.favorite-button')) {
            const btn = e.target.closest('.favorite-button');
            this.cart.toggleFavorite(parseInt(btn.dataset.productId));
        }
    }

    renderProduct(product) {
        return `
            <div class="product-box">
                <button type="button" class="favorite-button" data-product-id="${product.id}">
                    <svg viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
                <div class="product-image ${product.image ? 'has-image' : ''}">
                    ${product.image ? `<img data-src="${IMG(product.image)}" alt="${product.name}" class="product-main-image lazy-image"><img data-src="${IMG(product.hoverImage)}" alt="${product.name}" class="product-hover-image lazy-image">` : product.image}
                </div>
                <div class="product-info">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price ${product.originalPrice ? 'sale' : ''}">
                        ${product.originalPrice ? `<span class="original-price">${product.originalPrice} kr</span>` : ''}
                        ${product.price} kr
                    </p>
                    <div class="size-selector" data-product-id="${product.id}" style="display: none;">
                        ${['XS', 'S', 'M', 'L', 'XL'].map(size => `
                            <button type="button" class="size-button" data-size="${size}">${size}</button>
                        `).join('')}
                    </div>
                    <button type="button" class="buy-button" data-product-id="${product.id}" data-product-name="${product.name}" data-product-price="${product.price}">ADD TO CART</button>
                </div>
            </div>
        `;
    }

    renderProducts(products, containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = products.map(p => this.renderProduct(p)).join('');
            this.attachProductEventListeners();
            this.initializeLazyLoading();
        }
    }

    initializeLazyLoading() {
        const lazyImages = document.querySelectorAll('.lazy-image');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            img.classList.remove('lazy-image');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers without IntersectionObserver
            lazyImages.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
            });
        }
    }

    attachProductEventListeners() {
        // Only attach handlers once per ProductRenderer instance
        if (this.handlersAttached) {
            // Remove old handlers first
            document.removeEventListener('click', this.buyButtonHandler);
            document.removeEventListener('click', this.sizeButtonHandler);
            document.removeEventListener('click', this.favoriteBtnHandler);
        }

        // Add handlers
        document.addEventListener('click', this.buyButtonHandler);
        document.addEventListener('click', this.sizeButtonHandler);
        document.addEventListener('click', this.favoriteBtnHandler);
        
        this.handlersAttached = true;
    }

    refreshProductsFromStorage() {
        const stored = localStorage.getItem('productsData');
        if (stored) {
            try {
                const data = JSON.parse(stored);
                // Update global PRODUCTS_DATA
                Object.assign(PRODUCTS_DATA, data);
                // Re-render all sections
                this.renderProducts(PRODUCTS_DATA.mensTshirts, 'mensTshirts');
                this.renderProducts(PRODUCTS_DATA.mensShorts, 'mensShorts');
                this.renderProducts(PRODUCTS_DATA.womensClothing, 'womensClothing');
                this.renderProducts(PRODUCTS_DATA.accessories, 'accessoriesSection');
                this.renderProducts(PRODUCTS_DATA.newArrivals, 'newArrivals');
                this.renderProducts(PRODUCTS_DATA.saleItems, 'saleItems');
                this.cart.updateFavoriteButtons();
            } catch (error) {
                console.error('Error refreshing products:', error);
            }
        }
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes slideOutDown {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize managers and renderer
    const cart = new ShoppingCart();
    const menu = new MenuManager();
    const login = new LoginManager();
    const renderer = new ProductRenderer(cart);

    // Load products from storage if available
    const stored = localStorage.getItem('productsData');
    if (stored) {
        try {
            const data = JSON.parse(stored);
            Object.assign(PRODUCTS_DATA, data);
        } catch (error) {
            console.error('Error loading products from storage:', error);
        }
    }

    // Render all products
    renderer.renderProducts(PRODUCTS_DATA.mensTshirts, 'mensTshirts');
    renderer.renderProducts(PRODUCTS_DATA.mensShorts, 'mensShorts');
    renderer.renderProducts(PRODUCTS_DATA.womensClothing, 'womensClothing');
    renderer.renderProducts(PRODUCTS_DATA.accessories, 'accessoriesSection');
    renderer.renderProducts(PRODUCTS_DATA.newArrivals, 'newArrivals');
    renderer.renderProducts(PRODUCTS_DATA.saleItems, 'saleItems');

    // Load favorites and update buttons
    cart.loadFavorites();
    cart.updateFavoriteButtons();  // ← Add this to show favorite status immediately

    // Initialize search functionality
    const searchField = document.getElementById('searchField');
    const searchContainer = document.querySelector('.search-container');
    
    if (searchField) {
        searchField.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const allProducts = document.querySelectorAll('.product-box');
            
            if (searchTerm === '') {
                // Show all products
                allProducts.forEach(box => {
                    box.style.display = 'block';
                });
                document.querySelectorAll('.section').forEach(section => {
                    section.style.display = 'block';
                });
            } else {
                // Search through products
                let hasVisibleSections = new Set();
                
                allProducts.forEach(box => {
                    const productName = box.querySelector('.product-name')?.textContent.toLowerCase() || '';
                    const productPrice = box.querySelector('.product-price')?.textContent.toLowerCase() || '';
                    const isMatch = productName.includes(searchTerm) || productPrice.includes(searchTerm);
                    
                    if (isMatch) {
                        box.style.display = 'block';
                        const section = box.closest('.section');
                        if (section) {
                            hasVisibleSections.add(section);
                            section.style.display = 'block';
                        }
                    } else {
                        box.style.display = 'none';
                    }
                });
                
                // Hide sections with no visible products
                document.querySelectorAll('.section').forEach(section => {
                    if (!hasVisibleSections.has(section)) {
                        section.style.display = 'none';
                    }
                });
            }
        });
    }

    // Handle search button click on mobile/tablet
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchContainer = document.querySelector('.search-container');
            if (searchContainer) {
                searchContainer.classList.toggle('active');
                // Focus on search field if activated
                if (searchContainer.classList.contains('active')) {
                    setTimeout(() => {
                        const input = searchContainer.querySelector('.search-field');
                        if (input) input.focus();
                    }, 100);
                }
            }
        });
    }

    // Close mobile search when clicking outside
    document.addEventListener('click', (e) => {
        const searchContainer = document.querySelector('.search-container');
        const searchButton = document.querySelector('.search-button');
        const isClickInsideSearch = searchContainer && searchContainer.contains(e.target);
        const isSearchButton = searchButton && searchButton.contains(e.target);

        if (!isClickInsideSearch && !isSearchButton && searchContainer && window.innerWidth <= 1024) {
            searchContainer.classList.remove('active');
        }
    });

    // Make cart and renderer available globally
    window.shoppingCart = cart;
    window.productRenderer = renderer;

    // Listen for storage changes from other tabs/windows
    window.addEventListener('storage', (e) => {
        if (e.key === 'productsData') {
            renderer.refreshProductsFromStorage();
        }
        if (e.key === 'mainPageSettings') {
            applyMainPageCustomization();
        }
    });

    // Load and apply main page customization
    function applyMainPageCustomization() {
        try {
            const settings = localStorage.getItem('mainPageSettings');
            if (!settings) return;
            
            const mp = JSON.parse(settings);
            
            // Apply header styles
            const header = document.querySelector('header');
            if (header) {
                header.style.backgroundColor = mp.headerBgColor || '#000000';
                header.style.color = mp.headerTextColor || '#ffffff';
                header.style.height = (mp.headerHeight || 80) + 'px';
            }

            // Apply body background
            document.body.style.backgroundColor = mp.bodyBgColor || '#f5f5f5';

            // Apply main content padding based on header height
            const main = document.querySelector('main');
            if (main) {
                const headerHeight = parseInt(mp.headerHeight) || 80;
                main.style.paddingTop = (headerHeight + 20) + 'px';
            }

            // Apply search field styles
            const searchField = document.querySelector('.search-field');
            if (searchField) {
                searchField.style.borderColor = mp.searchBorderColor || '#ddd';
                searchField.style.backgroundColor = mp.searchBgColor || '#ffffff';
            }

            // Apply logo scale
            const logo = document.querySelector('.logo');
            if (logo) {
                const scale = parseInt(mp.logoScale) || 100;
                logo.style.transform = `scale(${scale / 100})`;
            }

            // Apply product box background
            const productBoxes = document.querySelectorAll('.product-box');
            productBoxes.forEach(box => {
                box.style.backgroundColor = mp.productBoxBgColor || '#ffffff';
            });

        } catch (error) {
            console.error('Error applying main page customization:', error);
        }
    }

    // Apply customization on load
    applyMainPageCustomization();

    // Listen for customization updates from admin
    window.addEventListener('mainPageSettingsUpdated', (e) => {
        if (e.detail) {
            localStorage.setItem('mainPageSettings', JSON.stringify(e.detail));
            applyMainPageCustomization();
        }
    });

    // Cookie Consent Manager
    class CookieManager {
        constructor() {
            this.cookiePopup = document.getElementById('cookiePopup');
            this.acceptAllBtn = document.getElementById('acceptAllCookies');
            this.rejectBtn = document.getElementById('rejectCookies');
            this.overlay = null;
            this.init();
        }

        init() {
            const cookieConsent = localStorage.getItem('cookieConsent');
            if (!cookieConsent) {
                this.createOverlay();
                this.show();
            }

            if (this.acceptAllBtn) {
                this.acceptAllBtn.addEventListener('click', () => this.accept());
            }
            if (this.rejectBtn) {
                this.rejectBtn.addEventListener('click', () => this.reject());
            }
        }

        createOverlay() {
            if (!this.overlay) {
                this.overlay = document.createElement('div');
                this.overlay.className = 'cookie-overlay';
                document.body.appendChild(this.overlay);
            }
        }

        show() {
            if (this.cookiePopup) {
                this.cookiePopup.classList.remove('hidden');
                if (this.overlay) {
                    this.overlay.classList.add('active');
                }
            }
        }

        hide() {
            if (this.cookiePopup) {
                this.cookiePopup.classList.add('hidden');
            }
            if (this.overlay) {
                this.overlay.classList.remove('active');
            }
        }

        accept() {
            localStorage.setItem('cookieConsent', 'accepted');
            localStorage.setItem('cookies_analytics', 'true');
            localStorage.setItem('cookies_marketing', 'true');
            localStorage.setItem('cookies_timestamp', new Date().toISOString());
            this.hide();
        }

        reject() {
            localStorage.setItem('cookieConsent', 'rejected');
            localStorage.setItem('cookies_timestamp', new Date().toISOString());
            this.hide();
        }

        reset() {
            localStorage.removeItem('cookieConsent');
            localStorage.removeItem('cookies_analytics');
            localStorage.removeItem('cookies_marketing');
            localStorage.removeItem('cookies_timestamp');
            this.createOverlay();
            this.show();
        }
    }

    const cookieManager = new CookieManager();
    
    // Expose reset function globally for testing
    window.resetCookies = () => cookieManager.reset();
});
