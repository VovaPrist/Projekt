// Admin Credentials (should be hashed in production!)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

class AdminPanel {
    constructor() {
        this.isLoggedIn = this.checkSession();
        this.currentEditingId = null;
        this.productsData = this.loadProductsData();
        this.settings = this.loadSettings();
        this.init();
    }

    init() {
        if (this.isLoggedIn) {
            this.applyTheme();
            this.applyMainPageSettings();
            this.showDashboard();
            this.initializeEventListeners();
            this.initializeAdvancedTools();
            this.renderProductsTable();
            this.renderTrashcan();
        } else {
            this.showLoginScreen();
            this.initializeLoginForm();
        }
    }

    checkSession() {
        try {
            const session = sessionStorage.getItem('adminSession');
            return session === 'true';
        } catch (error) {
            return false;
        }
    }

    loadProductsData() {
        try {
            const saved = localStorage.getItem('productsData');
            if (saved) {
                return JSON.parse(saved);
            }
            // Load from the main script's PRODUCTS_DATA if available
            return this.getInitialProducts();
        } catch (error) {
            console.error('Error loading products:', error);
            return this.getInitialProducts();
        }
    }

    getInitialProducts() {
        // Load from index.html's script.js PRODUCTS_DATA structure
        return {
            mensTshirts: [
                {
                    id: 1,
                    name: 'Classic Black Tee',
                    price: 299,
                    originalPrice: null,
                    image: 'T-Shirt 1',
                    hoverImage: 'T-Shirt 1 Hover',
                    category: 'mensTshirts'
                },
                {
                    id: 2,
                    name: 'Navy Performance Tee',
                    price: 329,
                    originalPrice: null,
                    image: 'T-Shirt 2',
                    hoverImage: 'T-Shirt 2 Hover',
                    category: 'mensTshirts'
                },
                {
                    id: 3,
                    name: 'White Essential Tee',
                    price: 269,
                    originalPrice: null,
                    image: 'T-Shirt 3',
                    hoverImage: 'T-Shirt 3 Hover',
                    category: 'mensTshirts'
                },
                {
                    id: 4,
                    name: 'Grey Melange Tee',
                    price: 289,
                    originalPrice: null,
                    image: 'T-Shirt 4',
                    hoverImage: 'T-Shirt 4 Hover',
                    category: 'mensTshirts'
                }
            ],
            mensShorts: [
                {
                    id: 5,
                    name: 'Black Gym Shorts',
                    price: 399,
                    originalPrice: null,
                    image: 'Shorts 1',
                    hoverImage: 'Shorts 1 Hover',
                    category: 'mensShorts'
                },
                {
                    id: 6,
                    name: 'Navy Training Shorts',
                    price: 429,
                    originalPrice: null,
                    image: 'Shorts 2',
                    hoverImage: 'Shorts 2 Hover',
                    category: 'mensShorts'
                },
                {
                    id: 7,
                    name: 'Grey Athletic Shorts',
                    price: 389,
                    originalPrice: null,
                    image: 'Shorts 3',
                    hoverImage: 'Shorts 3 Hover',
                    category: 'mensShorts'
                },
                {
                    id: 8,
                    name: 'Charcoal Performance Shorts',
                    price: 419,
                    originalPrice: null,
                    image: 'Shorts 4',
                    hoverImage: 'Shorts 4 Hover',
                    category: 'mensShorts'
                }
            ],
            womensClothing: [
                {
                    id: 9,
                    name: 'Women\'s Black Tank Top',
                    price: 269,
                    originalPrice: null,
                    image: 'Tank 1',
                    hoverImage: 'Tank 1 Hover',
                    category: 'womensClothing'
                },
                {
                    id: 10,
                    name: 'Women\'s Sports Leggings',
                    price: 449,
                    originalPrice: null,
                    image: 'Leggings 1',
                    hoverImage: 'Leggings 1 Hover',
                    category: 'womensClothing'
                },
                {
                    id: 11,
                    name: 'Women\'s Performance Crop',
                    price: 319,
                    originalPrice: null,
                    image: 'Crop 1',
                    hoverImage: 'Crop 1 Hover',
                    category: 'womensClothing'
                },
                {
                    id: 12,
                    name: 'Women\'s Workout Jacket',
                    price: 549,
                    originalPrice: null,
                    image: 'Jacket 1',
                    hoverImage: 'Jacket 1 Hover',
                    category: 'womensClothing'
                }
            ],
            accessories: [
                {
                    id: 13,
                    name: 'Gym Gloves',
                    price: 179,
                    originalPrice: null,
                    image: 'Gloves 1',
                    hoverImage: 'Gloves 1 Hover',
                    category: 'accessories'
                },
                {
                    id: 14,
                    name: 'Water Bottle',
                    price: 199,
                    originalPrice: null,
                    image: 'Bottle 1',
                    hoverImage: 'Bottle 1 Hover',
                    category: 'accessories'
                },
                {
                    id: 15,
                    name: 'Lifting Belt',
                    price: 349,
                    originalPrice: null,
                    image: 'Belt 1',
                    hoverImage: 'Belt 1 Hover',
                    category: 'accessories'
                },
                {
                    id: 16,
                    name: 'Gym Towel',
                    price: 149,
                    originalPrice: null,
                    image: 'Towel 1',
                    hoverImage: 'Towel 1 Hover',
                    category: 'accessories'
                }
            ],
            newArrivals: [
                {
                    id: 17,
                    name: 'New Release Tee',
                    price: 349,
                    originalPrice: null,
                    image: 'New 1',
                    hoverImage: 'New 1 Hover',
                    category: 'newArrivals'
                },
                {
                    id: 18,
                    name: 'Premium Leggings',
                    price: 499,
                    originalPrice: null,
                    image: 'New 2',
                    hoverImage: 'New 2 Hover',
                    category: 'newArrivals'
                },
                {
                    id: 19,
                    name: 'Elite Running Shorts',
                    price: 399,
                    originalPrice: null,
                    image: 'New 3',
                    hoverImage: 'New 3 Hover',
                    category: 'newArrivals'
                },
                {
                    id: 20,
                    name: 'Pro Sports Cap',
                    price: 249,
                    originalPrice: null,
                    image: 'New 4',
                    hoverImage: 'New 4 Hover',
                    category: 'newArrivals'
                }
            ],
            saleItems: [
                {
                    id: 21,
                    name: 'Sale Black Tee',
                    price: 199,
                    originalPrice: 329,
                    image: 'Sale 1',
                    hoverImage: 'Sale 1 Hover',
                    category: 'saleItems'
                },
                {
                    id: 22,
                    name: 'Discounted Shorts',
                    price: 249,
                    originalPrice: 399,
                    image: 'Sale 2',
                    hoverImage: 'Sale 2 Hover',
                    category: 'saleItems'
                },
                {
                    id: 23,
                    name: 'Sale Leggings',
                    price: 299,
                    originalPrice: 449,
                    image: 'Sale 3',
                    hoverImage: 'Sale 3 Hover',
                    category: 'saleItems'
                },
                {
                    id: 24,
                    name: 'Clearance Tank',
                    price: 149,
                    originalPrice: 269,
                    image: 'Sale 4',
                    hoverImage: 'Sale 4 Hover',
                    category: 'saleItems'
                }
            ]
        };
    }

    saveProductsData() {
        try {
            localStorage.setItem('productsData', JSON.stringify(this.productsData));
            return true;
        } catch (error) {
            console.error('Error saving products:', error);
            alert('Error saving products. Please try again.');
            return false;
        }
    }

    // ===== CUSTOMIZATION SYSTEM =====
    loadSettings() {
        try {
            const saved = localStorage.getItem('adminSettings');
            return saved ? JSON.parse(saved) : this.getDefaultSettings();
        } catch {
            return this.getDefaultSettings();
        }
    }

    getDefaultSettings() {
        return {
            theme: {
                primaryColor: '#667eea',
                secondaryColor: '#ff4444',
                backgroundColor: '#1a1a1a',
                textColor: '#ffffff',
                buttonRadius: '10'
            },
            mainPage: {
                headerBgColor: '#000000',
                headerTextColor: '#ffffff',
                bodyBgColor: '#f5f5f5',
                searchBorderColor: '#ddd',
                searchBgColor: '#ffffff',
                productBoxBgColor: '#ffffff',
                productBoxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                logoScale: '100',
                headerHeight: '80'
            },
            categoryOrder: ['mensTshirts', 'mensShorts', 'womensClothing', 'accessories', 'newArrivals', 'saleItems'],
            visibleCategories: ['mensTshirts', 'mensShorts', 'womensClothing', 'accessories', 'newArrivals', 'saleItems']
        };
    }

    saveSettings(settings) {
        try {
            this.settings = settings;
            localStorage.setItem('adminSettings', JSON.stringify(settings));
            this.applyTheme();
            this.applyMainPageSettings();
            return true;
        } catch (error) {
            console.error('Error saving settings:', error);
            return false;
        }
    }

    applyTheme() {
        if (!this.settings) return;
        const t = this.settings.theme;
        const root = document.documentElement;
        root.style.setProperty('--primary-color', t.primaryColor);
        root.style.setProperty('--secondary-color', t.secondaryColor);
        root.style.setProperty('--bg-color', t.backgroundColor);
        root.style.setProperty('--text-color', t.textColor);
        root.style.setProperty('--button-radius', t.buttonRadius + 'px');
    }

    applyMainPageSettings() {
        if (!this.settings || !this.settings.mainPage) return;
        const mp = this.settings.mainPage;
        
        // Store in localStorage for main site to access
        try {
            localStorage.setItem('mainPageSettings', JSON.stringify(mp));
            // Dispatch event to notify main site of changes
            if (window.opener || window.parent !== window) {
                // If admin opened from main site, notify it
                window.dispatchEvent(new CustomEvent('mainPageSettingsUpdated', { detail: mp }));
            }
        } catch (error) {
            console.error('Error applying main page settings:', error);
        }
    }

    initializeLoginForm() {
        const loginForm = document.getElementById('adminLoginForm');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
                sessionStorage.setItem('adminSession', 'true');
                this.isLoggedIn = true;
                this.showDashboard();
                this.initializeEventListeners();
                this.renderProductsTable();
            } else {
                document.getElementById('loginError').textContent = 'Invalid username or password';
                document.getElementById('password').value = '';
            }
        });
    }

    initializeEventListeners() {
        // Navigation buttons
        document.querySelectorAll('.nav-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const tabName = e.target.dataset.tab;
                this.switchTab(tabName);
            });
        });

        // Logout button
        document.getElementById('logoutButton').addEventListener('click', () => {
            this.logout();
        });

        // Add product form
        document.getElementById('addProductForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addProduct();
        });

        // Search and filter
        document.getElementById('searchProducts').addEventListener('input', () => {
            this.renderProductsTable();
        });

        document.getElementById('categoryFilter').addEventListener('change', () => {
            this.renderProductsTable();
        });

        // Edit modal close
        document.getElementById('closeEditModal').addEventListener('click', () => {
            this.closeEditModal();
        });

        // Edit form submit
        document.getElementById('editProductForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveProductChanges();
        });

        // Delete button in modal
        document.getElementById('deleteProductBtn').addEventListener('click', () => {
            this.openDeleteConfirm();
        });

        // Cancel edit
        document.getElementById('cancelEditBtn').addEventListener('click', () => {
            this.closeEditModal();
        });

        // Delete confirmation
        document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
            this.deleteProduct();
        });

        document.getElementById('cancelDeleteBtn').addEventListener('click', () => {
            this.closeDeleteConfirm();
        });

        // Close modal on background click
        document.getElementById('editModal').addEventListener('click', (e) => {
            if (e.target.id === 'editModal') {
                this.closeEditModal();
            }
        });

        document.getElementById('deleteConfirmModal').addEventListener('click', (e) => {
            if (e.target.id === 'deleteConfirmModal') {
                this.closeDeleteConfirm();
            }
        });

        // Theme customization
        this.initializeThemeControls();
        this.initializeMainPageControls();
        this.initializeCategoryControls();
    }

    initializeThemeControls() {
        const colorInputs = ['primaryColor', 'secondaryColor', 'backgroundColor', 'textColor'];
        const radiusInput = document.getElementById('themeButtonRadius');

        colorInputs.forEach(input => {
            const camelCase = input.charAt(0).toUpperCase() + input.slice(1);
            const elem = document.getElementById(`theme${camelCase}`);
            const valueDisplay = document.getElementById(`theme${camelCase}Value`);
            
            if (elem) {
                elem.value = this.settings.theme[input];
                if (valueDisplay) {
                    valueDisplay.textContent = this.settings.theme[input];
                }
                
                elem.addEventListener('change', (e) => {
                    this.settings.theme[input] = e.target.value;
                    if (valueDisplay) valueDisplay.textContent = e.target.value;
                    this.saveSettings(this.settings);
                });
                
                elem.addEventListener('input', (e) => {
                    if (valueDisplay) valueDisplay.textContent = e.target.value;
                });
            }
        });

        // Button radius
        if (radiusInput) {
            radiusInput.value = this.settings.theme.buttonRadius;
            radiusInput.addEventListener('change', (e) => {
                this.settings.theme.buttonRadius = e.target.value;
                this.saveSettings(this.settings);
            });
        }
    }

    initializeMainPageControls() {
        const mainPageInputs = {
            headerBgColor: 'mainPageHeaderBgColor',
            headerTextColor: 'mainPageHeaderTextColor',
            bodyBgColor: 'mainPageBodyBgColor',
            searchBorderColor: 'mainPageSearchBorderColor',
            searchBgColor: 'mainPageSearchBgColor',
            productBoxBgColor: 'mainPageProductBoxBgColor',
            headerHeight: 'mainPageHeaderHeight',
            logoScale: 'mainPageLogoScale'
        };

        Object.entries(mainPageInputs).forEach(([settingsKey, elementId]) => {
            const elem = document.getElementById(elementId);
            if (!elem) return;

            if (elementId.includes('Color')) {
                // Color inputs
                elem.value = this.settings.mainPage[settingsKey];
                const valueDisplay = document.getElementById(`${elementId}Value`);
                
                if (valueDisplay) {
                    valueDisplay.textContent = this.settings.mainPage[settingsKey];
                }

                elem.addEventListener('change', (e) => {
                    this.settings.mainPage[settingsKey] = e.target.value;
                    if (valueDisplay) valueDisplay.textContent = e.target.value;
                    this.saveSettings(this.settings);
                });

                elem.addEventListener('input', (e) => {
                    if (valueDisplay) valueDisplay.textContent = e.target.value;
                });
            } else {
                // Number inputs (height, scale)
                elem.value = this.settings.mainPage[settingsKey];
                elem.addEventListener('change', (e) => {
                    this.settings.mainPage[settingsKey] = e.target.value;
                    this.saveSettings(this.settings);
                });
            }
        });
    }

    initializeCategoryControls() {
        const categoryCheckboxes = document.querySelectorAll('.category-visibility-checkbox');
        categoryCheckboxes.forEach(checkbox => {
            const cat = checkbox.value;
            checkbox.checked = this.settings.visibleCategories.includes(cat);
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    if (!this.settings.visibleCategories.includes(cat)) {
                        this.settings.visibleCategories.push(cat);
                    }
                } else {
                    this.settings.visibleCategories = this.settings.visibleCategories.filter(c => c !== cat);
                }
                this.saveSettings(this.settings);
            });
        });

        // Category order drag and drop
        const orderList = document.getElementById('categoryOrderList');
        if (orderList) {
            orderList.innerHTML = this.settings.categoryOrder.map((cat, idx) => `
                <div class="category-order-item" draggable="true" data-category="${cat}">
                    <span class="drag-handle">⋮⋮</span>
                    <span>${this.getCategoryLabel(cat)}</span>
                </div>
            `).join('');

            const items = orderList.querySelectorAll('.category-order-item');
            let draggedItem = null;

            items.forEach(item => {
                item.addEventListener('dragstart', (e) => {
                    draggedItem = item;
                    item.style.opacity = '0.5';
                });

                item.addEventListener('dragend', (e) => {
                    item.style.opacity = '1';
                    draggedItem = null;
                });

                item.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    if (draggedItem && draggedItem !== item) {
                        orderList.insertBefore(draggedItem, item);
                    }
                });
            });

            // Save new order on drop
            orderList.addEventListener('drop', () => {
                const newOrder = Array.from(orderList.querySelectorAll('.category-order-item'))
                    .map(item => item.dataset.category);
                this.settings.categoryOrder = newOrder;
                this.saveSettings(this.settings);
            });
        }
    }

    switchTab(tabName) {
        // Update active nav button
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');
    }

    renderProductsTable() {
        const searchTerm = document.getElementById('searchProducts').value.toLowerCase();
        const categoryFilter = document.getElementById('categoryFilter').value;

        let allProducts = [];
        Object.values(this.productsData).forEach(categoryProducts => {
            allProducts = allProducts.concat(categoryProducts);
        });

        // Filter products - exclude deleted ones
        let filteredProducts = allProducts.filter(product => {
            if (product.deleted) return false;
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            const matchesCategory = !categoryFilter || product.category === categoryFilter;
            return matchesSearch && matchesCategory;
        });

        // Sort by ID
        filteredProducts.sort((a, b) => a.id - b.id);

        const tableBody = document.getElementById('productsTableBody');
        tableBody.innerHTML = filteredProducts.map(product => `
            <tr>
                <td>#${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price} kr</td>
                <td>${product.originalPrice ? `${product.originalPrice} kr (-${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%)` : 'None'}</td>
                <td>${this.getCategoryLabel(product.category)}</td>
                <td>${product.image}</td>
                <td>
                    <div class="product-actions">
                        <button type="button" class="btn-edit" onclick="admin.openEditModal(${product.id})">EDIT</button>
                        <button type="button" class="btn-delete" onclick="admin.openDeleteConfirm(${product.id})">DELETE</button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    getCategoryLabel(category) {
        const labels = {
            mensTshirts: "Men's T-Shirts",
            mensShorts: "Men's Shorts",
            womensClothing: "Women's Clothing",
            accessories: 'Accessories',
            newArrivals: 'New Arrivals',
            saleItems: 'Sale Items'
        };
        return labels[category] || category;
    }

    renderTrashcan() {
        let deletedProducts = [];
        Object.values(this.productsData).forEach(categoryProducts => {
            deletedProducts = deletedProducts.concat(categoryProducts.filter(p => p.deleted));
        });

        const tableBody = document.getElementById('trashcanTableBody');
        
        if (deletedProducts.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="8" class="empty-trashcan">Trashcan is empty</td></tr>';
            return;
        }

        // Sort by deleted date (newest first)
        deletedProducts.sort((a, b) => {
            const dateA = new Date(a.deletedAt || 0);
            const dateB = new Date(b.deletedAt || 0);
            return dateB - dateA;
        });

        tableBody.innerHTML = deletedProducts.map(product => {
            const deletedDate = new Date(product.deletedAt).toLocaleDateString();
            return `
                <tr class="deleted-product">
                    <td>#${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price} kr</td>
                    <td>${product.originalPrice ? `${product.originalPrice} kr` : 'None'}</td>
                    <td>${this.getCategoryLabel(product.category)}</td>
                    <td>${product.image}</td>
                    <td>${deletedDate}</td>
                    <td>
                        <div class="product-actions">
                            <button type="button" class="btn-restore" onclick="admin.restoreProduct(${product.id})">RESTORE</button>
                            <button type="button" class="btn-delete-permanent" onclick="admin.permanentlyDeleteProduct(${product.id})">DELETE</button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    addProduct() {
        const name = document.getElementById('newProductName').value;
        const price = parseInt(document.getElementById('newProductPrice').value);
        const originalPrice = document.getElementById('newProductDiscount').value ? parseInt(document.getElementById('newProductDiscount').value) : null;
        const category = document.getElementById('newProductCategory').value;
        const image = document.getElementById('newProductImage').value;
        const hoverImage = document.getElementById('newProductHoverImage').value;

        if (!name || !price || !category || !image) {
            alert('Please fill in all required fields');
            return;
        }

        // Get next ID or use provided ID
        let maxId = 0;
        Object.values(this.productsData).forEach(categoryProducts => {
            categoryProducts.forEach(p => {
                if (p.id > maxId) maxId = p.id;
            });
        });

        const manualId = document.getElementById('newProductId').value;
        let productId = manualId ? parseInt(manualId) : maxId + 1;

        // Check if ID already exists
        const idExists = this.findProductById(productId);
        if (idExists) {
            alert('This product ID already exists! Please choose a different ID.');
            return;
        }

        const newProduct = {
            id: productId,
            name: name,
            price: price,
            originalPrice: originalPrice,
            image: image,
            hoverImage: hoverImage || image,
            category: category
        };

        // Add to category
        if (!this.productsData[category]) {
            this.productsData[category] = [];
        }
        this.productsData[category].push(newProduct);

        // Save and update UI
        if (this.saveProductsData()) {
            alert(`Product "${name}" added successfully! (ID: ${productId})`);
            document.getElementById('addProductForm').reset();
            this.switchTab('products');
            this.renderProductsTable();
        }
    }

    openEditModal(productId) {
        this.currentEditingId = productId;
        const product = this.findProductById(productId);

        if (!product) {
            alert('Product not found');
            return;
        }

        document.getElementById('editProductName').value = product.name;
        document.getElementById('editProductPrice').value = product.price;
        document.getElementById('editProductDiscount').value = product.originalPrice || '';
        document.getElementById('editProductCategory').value = product.category;
        document.getElementById('editProductImage').value = product.image;
        document.getElementById('editProductHoverImage').value = product.hoverImage;

        document.getElementById('editModal').classList.add('active');
    }

    closeEditModal() {
        document.getElementById('editModal').classList.remove('active');
        this.currentEditingId = null;
    }

    saveProductChanges() {
        if (!this.currentEditingId) return;

        const product = this.findProductById(this.currentEditingId);
        if (!product) return;

        product.name = document.getElementById('editProductName').value;
        product.price = parseInt(document.getElementById('editProductPrice').value);
        product.originalPrice = document.getElementById('editProductDiscount').value ? parseInt(document.getElementById('editProductDiscount').value) : null;
        product.category = document.getElementById('editProductCategory').value;
        product.image = document.getElementById('editProductImage').value;
        product.hoverImage = document.getElementById('editProductHoverImage').value || product.image;

        // Move product to new category if changed
        const oldCategory = this.findProductCategory(this.currentEditingId);
        if (oldCategory && oldCategory !== product.category) {
            this.productsData[oldCategory] = this.productsData[oldCategory].filter(p => p.id !== this.currentEditingId);
            if (!this.productsData[product.category]) {
                this.productsData[product.category] = [];
            }
            this.productsData[product.category].push(product);
        }

        if (this.saveProductsData()) {
            alert('Product updated successfully!');
            this.closeEditModal();
            this.renderProductsTable();
        }
    }

    openDeleteConfirm(productId = null) {
        if (productId) {
            this.currentEditingId = productId;
        }
        document.getElementById('deleteConfirmModal').classList.add('active');
    }

    closeDeleteConfirm() {
        document.getElementById('deleteConfirmModal').classList.remove('active');
    }

    deleteProduct() {
        if (!this.currentEditingId) return;

        const product = this.findProductById(this.currentEditingId);
        const category = this.findProductCategory(this.currentEditingId);

        if (category && this.productsData[category]) {
            // Soft delete - mark as deleted instead of removing
            const productIndex = this.productsData[category].findIndex(p => p.id === this.currentEditingId);
            if (productIndex !== -1) {
                this.productsData[category][productIndex].deleted = true;
                this.productsData[category][productIndex].deletedAt = new Date().toISOString();

                if (this.saveProductsData()) {
                    alert(`Product "${product.name}" moved to trash!`);
                    this.closeDeleteConfirm();
                    this.closeEditModal();
                    this.renderProductsTable();
                }
            }
        }
    }

    permanentlyDeleteProduct(id) {
        const category = this.findProductCategory(id);
        if (category && this.productsData[category]) {
            this.productsData[category] = this.productsData[category].filter(p => p.id !== id);

            if (this.saveProductsData()) {
                alert('Product permanently deleted!');
                this.renderTrashcan();
            }
        }
    }

    restoreProduct(id) {
        const category = this.findProductCategory(id);
        const product = this.findProductById(id);

        if (category && this.productsData[category] && product) {
            const productIndex = this.productsData[category].findIndex(p => p.id === id);
            if (productIndex !== -1) {
                delete this.productsData[category][productIndex].deleted;
                delete this.productsData[category][productIndex].deletedAt;

                if (this.saveProductsData()) {
                    alert(`Product "${product.name}" restored!`);
                    this.renderTrashcan();
                    this.renderProductsTable();
                }
            }
        }
    }

    renderTrashcan() {
        let deletedProducts = [];
        Object.values(this.productsData).forEach(categoryProducts => {
            deletedProducts = deletedProducts.concat(
                categoryProducts.filter(p => p.deleted)
            );
        });

        deletedProducts.sort((a, b) => new Date(b.deletedAt) - new Date(a.deletedAt));

        const tableBody = document.getElementById('trashcanTableBody');
        if (!tableBody) return;

        if (deletedProducts.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 20px; color: #999;">Trashcan is empty</td></tr>';
            return;
        }

        tableBody.innerHTML = deletedProducts.map(product => `
            <tr class="deleted-product">
                <td>#${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price} kr</td>
                <td>${product.originalPrice ? `${product.originalPrice} kr` : 'None'}</td>
                <td>${this.getCategoryLabel(product.category)}</td>
                <td>${product.image}</td>
                <td>${new Date(product.deletedAt).toLocaleDateString()}</td>
                <td>
                    <div class="product-actions">
                        <button type="button" class="btn-restore" onclick="admin.restoreProduct(${product.id})">RESTORE</button>
                        <button type="button" class="btn-delete-permanent" onclick="admin.permanentlyDeleteProduct(${product.id})">PERMANENT</button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    findProductById(id) {
        for (const category of Object.values(this.productsData)) {
            const product = category.find(p => p.id === id);
            if (product) return product;
        }
        return null;
    }

    findProductCategory(id) {
        for (const [category, products] of Object.entries(this.productsData)) {
            if (products.find(p => p.id === id)) return category;
        }
        return null;
    }

    initializeAdvancedTools() {
        const exportBtn = document.getElementById('exportDataBtn');
        const importBtn = document.getElementById('importDataBtn');
        const resetBtn = document.getElementById('resetDataBtn');
        const clearBtn = document.getElementById('clearCacheBtn');
        const importInput = document.getElementById('importDataInput');

        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportData());
        }
        if (importBtn) {
            importBtn.addEventListener('click', () => importInput.click());
        }
        if (importInput) {
            importInput.addEventListener('change', (e) => this.importData(e));
        }
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetToDefault());
        }
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearCache());
        }

        this.updateStatistics();
    }

    exportData() {
        const data = {
            products: this.productsData,
            settings: this.settings,
            timestamp: new Date().toISOString()
        };
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `gym-store-backup-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        alert('✅ Data exported successfully!');
    }

    importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.products && data.settings) {
                    localStorage.setItem('productsData', JSON.stringify(data.products));
                    localStorage.setItem('adminSettings', JSON.stringify(data.settings));
                    this.productsData = data.products;
                    this.settings = data.settings;
                    this.renderProductsTable();
                    this.updateStatistics();
                    alert('✅ Data imported successfully! Please refresh the page.');
                } else {
                    alert('❌ Invalid data format!');
                }
            } catch (error) {
                alert('❌ Error importing data: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    resetToDefault() {
        if (confirm('⚠️ This will reset ALL data to default. Are you sure?')) {
            localStorage.removeItem('productsData');
            localStorage.removeItem('adminSettings');
            localStorage.removeItem('mainPageSettings');
            location.reload();
        }
    }

    clearCache() {
        if (confirm('Clear browser cache for this store?')) {
            localStorage.removeItem('shoppingCart');
            localStorage.removeItem('favorites');
            alert('✅ Cache cleared!');
            this.updateStatistics();
        }
    }

    updateStatistics() {
        let totalProducts = 0;
        let categoriesCount = 0;

        for (const [category, products] of Object.entries(this.productsData)) {
            if (Array.isArray(products) && products.length > 0) {
                totalProducts += products.length;
                categoriesCount++;
            }
        }

        const dataSize = (new Blob([JSON.stringify(this.productsData)]).size / 1024).toFixed(2);

        document.getElementById('totalProductsCount').textContent = totalProducts;
        document.getElementById('totalCategoriesCount').textContent = categoriesCount;
        document.getElementById('dataSizeInfo').textContent = dataSize + ' KB';
    }

    showLoginScreen() {
        document.getElementById('loginScreen').style.display = 'flex';
        document.getElementById('adminDashboard').style.display = 'none';
    }

    showDashboard() {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'flex';
    }

    logout() {
        if (confirm('Are you sure you want to logout?')) {
            sessionStorage.removeItem('adminSession');
            this.isLoggedIn = false;
            this.showLoginScreen();
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            document.getElementById('loginError').textContent = '';
        }
    }
}

// Initialize admin panel
let admin;
document.addEventListener('DOMContentLoaded', () => {
    admin = new AdminPanel();
});
