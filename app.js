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

// Language state
let currentLanguage = 'en';

// Translations
const translations = {
    en: {
        appTitle: "Dukan Se",
        appDescription: "Your local stores, now online! Order directly via WhatsApp with just a few clicks.",
        addToCart: "Add to Cart",
        yourCart: "Your Cart",
        emptyCart: "Your cart is empty",
        proceedToPayment: "Proceed to Payment",
        selectPaymentMethod: "Select Payment Method",
        upiPayment: "UPI Payment",
        cashOnDelivery: "Cash on Delivery / UPI on Delivery",
        sendOrderViaWhatsApp: "Send Order via WhatsApp",
        deliveryDetails: "Delivery Details",
        name: "Name",
        phone: "Phone Number",
        address: "Delivery Address",
        saveDetails: "Save Details",
        close: "Close",
        searchProducts: "Search products...",
        noProductsFound: "No products found. Try adjusting your search or category.",
        allItems: "All Items",
        addDeliveryDetails: "Add/Edit Delivery Details",
        orderSuccess: "Order submitted successfully! Please check WhatsApp for confirmation."
    },
    hi: {
        appTitle: "दुकान से",
        appDescription: "आपकी स्थानीय दुकानें, अब ऑनलाइन! व्हाट्सएप के माध्यम से सीधे कुछ ही क्लिक में ऑर्डर करें।",
        addToCart: "कार्ट में जोड़ें",
        yourCart: "आपका कार्ट",
        emptyCart: "आपका कार्ट खाली है",
        proceedToPayment: "भुगतान के लिए आगे बढ़ें",
        selectPaymentMethod: "भुगतान विधि चुनें",
        upiPayment: "यूपीआई भुगतान",
        cashOnDelivery: "डिलीवरी पर नकद / यूपीआई",
        sendOrderViaWhatsApp: "व्हाट्सएप के माध्यम से ऑर्डर भेजें",
        deliveryDetails: "डिलीवरी विवरण",
        name: "नाम",
        phone: "फोन नंबर",
        address: "डिलीवरी पता",
        saveDetails: "विवरण सहेजें",
        close: "बंद करें",
        searchProducts: "उत्पाद खोजें...",
        noProductsFound: "कोई उत्पाद नहीं मिला। अपनी खोज या श्रेणी को समायोजित करें।",
        allItems: "सभी आइटम",
        addDeliveryDetails: "डिलीवरी विवरण जोड़ें/संपादित करें",
        orderSuccess: "ऑर्डर सफलतापूर्वक सबमिट किया गया! पुष्टि के लिए व्हाट्सएप देखें।"
    },
    mr: {
        appTitle: "दुकान से",
        appDescription: "तुमच्या स्थानिक दुकाने, आता ऑनलाइन! व्हाट्सअॅप द्वारे थेट काही क्लिकमध्ये ऑर्डर करा.",
        addToCart: "कार्टमध्ये जोडा",
        yourCart: "तुमचे कार्ट",
        emptyCart: "तुमचे कार्ट रिकामे आहे",
        proceedToPayment: "पेमेंटसाठी पुढे जा",
        selectPaymentMethod: "पेमेंट पद्धत निवडा",
        upiPayment: "यूपीआय पेमेंट",
        cashOnDelivery: "डिलिव्हरीवर रोख / यूपीआय",
        sendOrderViaWhatsApp: "व्हाट्सअॅपद्वारे ऑर्डर पाठवा",
        deliveryDetails: "डिलिव्हरी तपशील",
        name: "नाव",
        phone: "फोन नंबर",
        address: "डिलिव्हरी पत्ता",
        saveDetails: "तपशील जतन करा",
        close: "बंद करा",
        searchProducts: "उत्पादने शोधा...",
        noProductsFound: "कोणतीही उत्पादने सापडली नाहीत. तुमचा शोध किंवा श्रेणी समायोजित करा.",
        allItems: "सर्व आयटम",
        addDeliveryDetails: "डिलिव्हरी तपशील जोडा/संपादित करा",
        orderSuccess: "ऑर्डर यशस्वीरित्या सबमिट केले! पुष्टीकरणासाठी व्हाट्सअॅप तपासा."
    }
};

// DOM Elements
const productCatalog = document.getElementById('product-catalog');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const fixedCartTotal = document.getElementById('fixed-cart-total');
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
const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
const proceedToWhatsappBtn = document.getElementById('proceed-to-whatsapp');
const languageSwitcher = document.querySelector('.language-switcher');

// Payment state
let selectedPaymentMethod = null;

// Initialize the app
function init() {
    // Set initial store to QuickKart
    switchStore('quickkart');
    updateCartUI();
    loadCartFromStorage();
    loadCustomerInfo();
    setupEventListeners();
    updateUILanguage();
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

    // Payment method selection
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            selectedPaymentMethod = e.target.value;
            proceedToWhatsappBtn.disabled = false;
        });
    });

    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (!customerInfo.name) {
            alert(translations[currentLanguage].addDeliveryDetails);
            editCustomerInfoBtn.click();
            return;
        }
        paymentModal.show();
    });

    // Proceed to WhatsApp button
    proceedToWhatsappBtn.addEventListener('click', handleCheckout);
    
    // Language switcher
    if (languageSwitcher) {
        languageSwitcher.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                languageSwitcher.querySelectorAll('button').forEach(btn => {
                    btn.classList.remove('active');
                });
                // Add active class to clicked button
                button.classList.add('active');
                // Set current language
                currentLanguage = button.dataset.lang;
                // Update UI language
                updateUILanguage();
            });
        });
    }
}

// Update UI language
function updateUILanguage() {
    const t = translations[currentLanguage];
    
    // Update static elements
    document.querySelector('h1').textContent = t.appTitle;
    document.getElementById('app-description').textContent = t.appDescription;
    document.getElementById('cart-title').textContent = t.yourCart;
    document.getElementById('checkout-btn-text').textContent = t.proceedToPayment;
    document.getElementById('payment-modal-title').textContent = t.selectPaymentMethod;
    document.getElementById('payment-section-title').textContent = t.selectPaymentMethod;
    document.getElementById('upi-label').textContent = t.upiPayment;
    document.getElementById('cod-label').textContent = t.cashOnDelivery;
    document.getElementById('whatsapp-btn-text').textContent = t.sendOrderViaWhatsApp;
    document.querySelector('.modal-title').textContent = t.deliveryDetails;
    document.querySelector('label[for="customer-name"]').textContent = t.name;
    document.querySelector('label[for="customer-phone"]').textContent = t.phone;
    document.querySelector('label[for="customer-address"]').textContent = t.address;
    document.getElementById('save-customer-info').textContent = t.saveDetails;
    document.getElementById('close-payment-btn').textContent = t.close;
    
    if (searchInput) {
        searchInput.placeholder = t.searchProducts;
    }
    
    // Re-render products and categories
    renderCategories();
    renderProducts();
    updateCartUI();
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
    
    const t = translations[currentLanguage];
    
    categoryFilter.innerHTML = `
        <button class="btn btn-outline-primary me-2 mb-2 active" data-category="all">
            ${t.allItems}
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
    const t = translations[currentLanguage];
    const filteredProducts = filterProducts();

    if (filteredProducts.length === 0) {
        productCatalog.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">${t.noProductsFound}</p>
            </div>
        `;
        return;
    }

    productCatalog.innerHTML = filteredProducts.map(product => {
        const quantity = getProductQuantityInCart(product.id);
        return `
            <div class="col-6 col-md-4 mb-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <h5 class="mt-2">${product.name}</h5>
                    <p class="text-muted">₹${product.price}</p>
                    ${quantity === 0 ? 
                        `<button class="btn btn-primary w-100" onclick="addToCart(${product.id})">
                            ${t.addToCart}
                        </button>` 
                        : 
                        `<div class="product-quantity">
                            <button onclick="updateQuantity(${product.id}, -1)">-</button>
                            <span>${quantity}</span>
                            <button onclick="updateQuantity(${product.id}, 1)">+</button>
                        </div>`
                    }
                </div>
            </div>
        `;
    }).join('');
}

// Get product quantity in cart
function getProductQuantityInCart(productId) {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
}

// Add product to cart
function addToCart(productId) {
    if (!customerInfo.name) {
        alert(translations[currentLanguage].addDeliveryDetails);
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
    renderProducts(); // Re-render to update quantity buttons
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
    const t = translations[currentLanguage];
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="text-muted text-center">${t.emptyCart}</p>`;
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
    fixedCartTotal.textContent = `₹${total}`;
    
    // Re-render products to update quantity controls
    renderProducts();
}

// Generate WhatsApp message and form data
function generateOrderData() {
    const items = cart.map(item => 
        `${item.name} (${item.quantity} × ₹${item.price})`
    ).join('\n');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const paymentMethod = selectedPaymentMethod === 'upi' 
        ? 'UPI Payment' 
        : 'Cash on Delivery / UPI on Delivery';
    
    // Format WhatsApp message with proper line breaks
    const whatsappMessage = [
        `Hello ${STORE_CONFIG.storeName}!`,
        '',
        'I would like to order:',
        items,
        '',
        `Total: ₹${total}`,
        `Payment Method: ${paymentMethod}`,
        '',
        'Delivery Details:',
        `Name: ${customerInfo.name}`,
        `Phone: ${customerInfo.phone}`,
        `Address: ${customerInfo.address}`,
        '',
        'Thank you!'
    ].join('\n');
    
    return {
        whatsappMessage,
        formData: {
            name: customerInfo.name,
            phone: customerInfo.phone,
            address: customerInfo.address,
            items: items,
            total: total,
            payment: paymentMethod,
            notes: `Store: ${STORE_CONFIG.storeName}`
        }
    };
}

// Submit order to Google Form
async function submitToGoogleForm(formData) {
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScbKzyQW2uI-w9QBM31F7th66M9JbVkJ4z6eRTIAWX6pGcgrw/formResponse';
    
    // Create form data object
    const form = new FormData();
    form.append('entry.694161999', formData.name); // Name
    form.append('entry.589917315', formData.phone); // Phone
    form.append('entry.1365426664', formData.address); // Address
    form.append('entry.1117891860', formData.items); // Items ordered
    form.append('entry.574399891', formData.total); // Order total
    form.append('entry.1517370118', formData.payment); // Payment option
    form.append('entry.1367012781', formData.notes); // Additional notes

    try {
        // Submit the form
        const response = await fetch(baseUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: form
        });

        // Note: Due to CORS restrictions, we can't actually check the response
        // But we can assume it was successful if no error was thrown
        console.log('Order submitted to Google Form successfully');
    } catch (error) {
        console.error('Error submitting to Google Form:', error);
        // You might want to show a user-friendly error message here
        alert('There was an error submitting your order. Please try again or contact the store directly.');
    }
}

// Handle checkout
async function handleCheckout() {
    if (!selectedPaymentMethod) {
        alert(translations[currentLanguage].selectPaymentMethod);
        return;
    }

    try {
        const orderData = generateOrderData();
        
        // Send WhatsApp message
        const encodedMessage = encodeURIComponent(orderData.whatsappMessage);
        const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMessage}`;
        
        // Submit to Google Form first
        await submitToGoogleForm(orderData.formData);
        
        // Then open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Clear cart and reset UI
        cart = [];
        saveCartToStorage();
        updateCartUI();
        paymentModal.hide();
        selectedPaymentMethod = null;
        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
            radio.checked = false;
        });

        // Show success message
        alert(translations[currentLanguage].orderSuccess);
    } catch (error) {
        console.error('Error during checkout:', error);
        alert('There was an error processing your order. Please try again.');
    }
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
