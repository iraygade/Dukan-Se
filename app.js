// Store configuration
let STORE_CONFIG = {};
let products = [];
let categories = [];

// Store configurations
const STORES = {
    quickkart: {
        name: "QuickKart",
        whatsappNumber: "918390020796",
        products: [],
        categories: []
    },
    chemicals: {
        name: "A to Z Chemicals",
        whatsappNumber: "919890084001",
        products: [
            {
                id: 1,
                name: "Sodium Hydroxide (NaOH)",
                price: 450,
                category: "Industrial Chemicals",
                image: "https://via.placeholder.com/150?text=NaOH"
            },
            {
                id: 2,
                name: "Hydrochloric Acid (HCl)",
                price: 380,
                category: "Industrial Chemicals",
                image: "https://via.placeholder.com/150?text=HCl"
            },
            {
                id: 3,
                name: "Sulfuric Acid (H2SO4)",
                price: 420,
                category: "Industrial Chemicals",
                image: "https://via.placeholder.com/150?text=H2SO4"
            },
            {
                id: 4,
                name: "Ethanol (C2H5OH)",
                price: 550,
                category: "Solvents",
                image: "https://via.placeholder.com/150?text=Ethanol"
            },
            {
                id: 5,
                name: "Acetone (C3H6O)",
                price: 480,
                category: "Solvents",
                image: "https://via.placeholder.com/150?text=Acetone"
            },
            {
                id: 6,
                name: "Ammonia Solution",
                price: 320,
                category: "Cleaning Agents",
                image: "https://via.placeholder.com/150?text=Ammonia"
            },
            {
                id: 7,
                name: "Hydrogen Peroxide (H2O2)",
                price: 280,
                category: "Cleaning Agents",
                image: "https://via.placeholder.com/150?text=H2O2"
            },
            {
                id: 8,
                name: "Sodium Bicarbonate",
                price: 150,
                category: "Laboratory Chemicals",
                image: "https://via.placeholder.com/150?text=NaHCO3"
            }
        ],
        categories: ["Industrial Chemicals", "Solvents", "Cleaning Agents", "Laboratory Chemicals"]
    },
    krishna: {
        name: "Krishna Grocery",
        whatsappNumber: "919823746975",
        products: [
            {
                id: 1,
                name: "Basmati Rice (5kg)",
                price: 450,
                category: "Grains & Pulses",
                image: "https://via.placeholder.com/150?text=Rice"
            },
            {
                id: 2,
                name: "Toor Dal (1kg)",
                price: 120,
                category: "Grains & Pulses",
                image: "https://via.placeholder.com/150?text=Dal"
            },
            {
                id: 3,
                name: "Sugar (1kg)",
                price: 45,
                category: "Essentials",
                image: "https://via.placeholder.com/150?text=Sugar"
            },
            {
                id: 4,
                name: "Wheat Flour (5kg)",
                price: 220,
                category: "Grains & Pulses",
                image: "https://via.placeholder.com/150?text=Flour"
            },
            {
                id: 5,
                name: "Cooking Oil (1L)",
                price: 180,
                category: "Essentials",
                image: "https://via.placeholder.com/150?text=Oil"
            },
            {
                id: 6,
                name: "Salt (1kg)",
                price: 25,
                category: "Essentials",
                image: "https://via.placeholder.com/150?text=Salt"
            },
            {
                id: 7,
                name: "Tea Powder (500g)",
                price: 150,
                category: "Beverages",
                image: "https://via.placeholder.com/150?text=Tea"
            },
            {
                id: 8,
                name: "Coffee Powder (200g)",
                price: 200,
                category: "Beverages",
                image: "https://via.placeholder.com/150?text=Coffee"
            }
        ],
        categories: ["Grains & Pulses", "Essentials", "Beverages"]
    },
    food: {
        name: "Good Food Store",
        whatsappNumber: "919823746975",
        products: [
            {
                id: 1,
                name: "Fresh Milk (1L)",
                price: 60,
                category: "Dairy & Eggs",
                image: "https://via.placeholder.com/150?text=Milk"
            },
            {
                id: 2,
                name: "Eggs (Dozen)",
                price: 80,
                category: "Dairy & Eggs",
                image: "https://via.placeholder.com/150?text=Eggs"
            },
            {
                id: 3,
                name: "Bread (400g)",
                price: 40,
                category: "Bakery",
                image: "https://via.placeholder.com/150?text=Bread"
            },
            {
                id: 4,
                name: "Butter (100g)",
                price: 50,
                category: "Dairy & Eggs",
                image: "https://via.placeholder.com/150?text=Butter"
            },
            {
                id: 5,
                name: "Cheese (200g)",
                price: 120,
                category: "Dairy & Eggs",
                image: "https://via.placeholder.com/150?text=Cheese"
            },
            {
                id: 6,
                name: "Yogurt (500g)",
                price: 45,
                category: "Dairy & Eggs",
                image: "https://via.placeholder.com/150?text=Yogurt"
            },
            {
                id: 7,
                name: "Croissant (Pack of 4)",
                price: 100,
                category: "Bakery",
                image: "https://via.placeholder.com/150?text=Croissant"
            },
            {
                id: 8,
                name: "Muffins (Pack of 6)",
                price: 150,
                category: "Bakery",
                image: "https://via.placeholder.com/150?text=Muffins"
            }
        ],
        categories: ["Dairy & Eggs", "Bakery"]
    },
    ir: {
        name: "IR",
        whatsappNumber: "919765799995",
        products: [
            {
                id: 1,
                name: "Common Cold",
                price: 99,
                category: "Viral Infections",
                image: "https://via.placeholder.com/150?text=🤧"
            },
            {
                id: 2,
                name: "High Blood Pressure",
                price: 499,
                category: "Chronic Conditions",
                image: "https://via.placeholder.com/150?text=🫀"
            },
            {
                id: 3,
                name: "Diabetes",
                price: 999,
                category: "Chronic Conditions",
                image: "https://via.placeholder.com/150?text=🍬"
            },
            {
                id: 4,
                name: "Migraine",
                price: 299,
                category: "Neurological",
                image: "https://via.placeholder.com/150?text=🤕"
            },
            {
                id: 5,
                name: "Insomnia",
                price: 399,
                category: "Sleep Disorders",
                image: "https://via.placeholder.com/150?text=😴"
            },
            {
                id: 6,
                name: "Anxiety",
                price: 199,
                category: "Mental Health",
                image: "https://via.placeholder.com/150?text=😰"
            },
            {
                id: 7,
                name: "Allergies",
                price: 149,
                category: "Immune System",
                image: "https://via.placeholder.com/150?text=🤧"
            },
            {
                id: 8,
                name: "Back Pain",
                price: 249,
                category: "Musculoskeletal",
                image: "https://via.placeholder.com/150?text=🦴"
            },
            {
                id: 9,
                name: "Acne",
                price: 79,
                category: "Skin Conditions",
                image: "https://via.placeholder.com/150?text=😳"
            },
            {
                id: 10,
                name: "Hair Loss",
                price: 599,
                category: "Hair & Scalp",
                image: "https://via.placeholder.com/150?text=💇"
            }
        ],
        categories: ["Viral Infections", "Chronic Conditions", "Neurological", "Sleep Disorders", "Mental Health", "Immune System", "Musculoskeletal", "Skin Conditions", "Hair & Scalp"]
    }
};

// Cart state
let cart = [];
let customerInfo = {
    name: '',
    phone: '',
    address: ''
};

// Search state
let currentSearchTerm = '';
let currentCategory = 'all';

// DOM Elements
const productCatalog = document.getElementById('product-catalog');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const categoryFilter = document.getElementById('category-filter');
const customerInfoModal = new bootstrap.Modal(document.getElementById('customerInfoModal'));
const editCustomerInfoBtn = document.getElementById('edit-customer-info');
const saveCustomerInfoBtn = document.getElementById('save-customer-info');
const customerInfoDisplay = document.getElementById('customer-info-display');
const customerNameDisplay = document.getElementById('customer-name-display');
const customerPhoneDisplay = document.getElementById('customer-phone-display');
const customerAddressDisplay = document.getElementById('customer-address-display');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const storeSwitcher = document.getElementById('store-switcher');

// Initialize the app
function init() {
    // Set initial store to QuickKart
    switchStore('quickkart');
    updateCartUI();
    loadCartFromStorage();
    loadCustomerInfo();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Store switcher
    storeSwitcher.addEventListener('change', (e) => {
        switchStore(e.target.value);
    });

    // Customer info modal
    editCustomerInfoBtn.addEventListener('click', () => {
        document.getElementById('customer-name').value = customerInfo.name;
        document.getElementById('customer-phone').value = customerInfo.phone;
        document.getElementById('customer-address').value = customerInfo.address;
        customerInfoModal.show();
    });

    saveCustomerInfoBtn.addEventListener('click', saveCustomerInfo);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        renderProducts();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchTerm = '';
        renderProducts();
    });

    // Checkout button
    checkoutBtn.addEventListener('click', handleCheckout);
}

// Switch store
function switchStore(storeId) {
    const store = STORES[storeId];
    if (!store) return;

    // Update store configuration
    STORE_CONFIG = {
        storeName: store.name,
        whatsappNumber: store.whatsappNumber
    };

    // Update products and categories
    products = store.products;
    categories = store.categories;

    // Update store name in header
    document.querySelector('h1').textContent = STORE_CONFIG.storeName;

    // Reset search and category
    currentSearchTerm = '';
    currentCategory = 'all';
    searchInput.value = '';

    // Re-render UI
    renderCategories();
    renderProducts();
    updateCartUI();
}

// Save customer information
function saveCustomerInfo() {
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();

    if (!name || !phone || !address) {
        alert('Please fill in all fields');
        return;
    }

    customerInfo = { name, phone, address };
    saveCustomerInfoToStorage();
    updateCustomerInfoDisplay();
    customerInfoModal.hide();
}

// Update customer info display
function updateCustomerInfoDisplay() {
    if (customerInfo.name) {
        customerNameDisplay.textContent = customerInfo.name;
        customerPhoneDisplay.textContent = customerInfo.phone;
        customerAddressDisplay.textContent = customerInfo.address;
        customerInfoDisplay.classList.remove('d-none');
    } else {
        customerInfoDisplay.classList.add('d-none');
    }
}

// Save customer info to localStorage
function saveCustomerInfoToStorage() {
    localStorage.setItem('quickkart_customer', JSON.stringify(customerInfo));
}

// Load customer info from localStorage
function loadCustomerInfo() {
    const savedInfo = localStorage.getItem('quickkart_customer');
    if (savedInfo) {
        customerInfo = JSON.parse(savedInfo);
        updateCustomerInfoDisplay();
    }
}

// Render category filters
function renderCategories() {
    if (!categoryFilter) return;
    
    categoryFilter.innerHTML = `
        <button class="btn btn-outline-primary me-2 mb-2 active" data-category="all">
            All Items
        </button>
        ${categories.map(category => `
            <button class="btn btn-outline-primary me-2 mb-2" data-category="${category}">
                ${category}
            </button>
        `).join('')}
    `;

    // Add event listeners to category buttons
    categoryFilter.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryFilter.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update current category
            currentCategory = button.dataset.category;
            // Filter products
            renderProducts();
        });
    });
}

// Filter products based on search term and category
function filterProducts() {
    return products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(currentSearchTerm);
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        return matchesSearch && matchesCategory;
    });
}

// Render products in the catalog
function renderProducts() {
    const filteredProducts = filterProducts();

    if (filteredProducts.length === 0) {
        productCatalog.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">No products found. Try adjusting your search or category.</p>
            </div>
        `;
        return;
    }

    productCatalog.innerHTML = filteredProducts.map(product => `
        <div class="col-6 col-md-4">
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h5 class="mt-2">${product.name}</h5>
                <p class="text-muted">₹${product.price}</p>
                <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add product to cart
function addToCart(productId) {
    if (!customerInfo.name) {
        alert('Please add your delivery details before adding items to cart');
        editCustomerInfoBtn.click();
        return;
    }

    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    updateCartUI();
    saveCartToStorage();
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
}

// Update quantity of a product in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
            saveCartToStorage();
        }
    }
}

// Update cart UI
function updateCartUI() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-muted text-center">Your cart is empty</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <h6 class="mb-0">${item.name}</h6>
                    <small class="text-muted">₹${item.price} × ${item.quantity}</small>
                </div>
                <div class="quantity-controls">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = !customerInfo.name;
    }

    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Generate WhatsApp message
function generateWhatsAppMessage() {
    const items = cart.map(item => 
        `${item.name} (${item.quantity} × ₹${item.price})`
    ).join('\n');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return `Hello ${STORE_CONFIG.storeName}!\n\nI would like to order:\n${items}\n\nTotal: ₹${total}\n\nDelivery Details:\nName: ${customerInfo.name}\nPhone: ${customerInfo.phone}\nAddress: ${customerInfo.address}\n\nThank you!`;
}

// Handle checkout
function handleCheckout() {
    if (!customerInfo.name) {
        alert('Please add your delivery details before checkout');
        editCustomerInfoBtn.click();
        return;
    }

    // Format items ordered
    const itemsOrdered = cart.map(item => 
        `${item.name} (${item.quantity} × ₹${item.price})`
    ).join(', ');
    
    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create form data
    const formData = new URLSearchParams();
    formData.append('entry.694161999', customerInfo.name); // Name
    formData.append('entry.589917315', customerInfo.phone); // Phone
    formData.append('entry.1365426664', customerInfo.address); // Address
    formData.append('entry.1117891860', itemsOrdered); // Items Ordered
    formData.append('entry.574399891', `₹${total}`); // Order Total
    formData.append('entry.1367012781', `Store: ${STORE_CONFIG.storeName}`); // Additional Notes
    formData.append('entry.1517370118', 'UPI'); // Payment Type

    // Submit to Google Form
    fetch('https://docs.google.com/forms/d/e/1sQlAgcs1cuNohYYZXp8l_QBb7gt7pRgEYSiGkCnLxN4/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
    })
    .then(() => {
        // After form submission, open WhatsApp
        const message = generateWhatsAppMessage();
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        
        // Clear cart after successful submission
        cart = [];
        updateCartUI();
        saveCartToStorage();
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your order. Please try again.');
    });
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('quickkart_cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('quickkart_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Make functions available globally
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.handleCheckout = handleCheckout;

// Initialize the app
init(); 
