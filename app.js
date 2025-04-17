// Store configuration
let STORE_CONFIG = {};
let products = [];
let categories = [];

// Store configurations
const STORES = {
    dukanSe: {
        name: "Dukan Se!",
        whatsappNumber: "",
        isInfoPage: true,
        description: {
            en: `<div class="app-info">
                <h2 class="text-center mb-4">Dukan Se!</h2>
                <h5 class="text-center mb-4">An Online Ordering System for Local Stores.</h5>
                
                <p>Dukan Se! is a simple solution that enables stores to accept online orders through their store app/URL.</p>
        <!-- ... existing content ... -->
    </div>`,
            hi: `<div class="app-info">
                <h3 class="text-center mb-4">दुकान से!</h3>
                <h5 class="text-center mb-4">स्थानीय दुकानों के लिए एक ऑनलाइन ऑर्डरिंग सिस्टम।</h5>
                
                <p>दुकान से! एक सरल समाधान है जो दुकानों को अपने स्टोर ऐप/URL के माध्यम से ऑनलाइन ऑर्डर स्वीकार करने में सक्षम बनाता है।</p>
                <p>ऑर्डर ग्राहकों द्वारा भेजे जाते हैं और व्यापारी द्वारा व्हाट्सएप के माध्यम से प्राप्त किए जाते हैं।</p>
                <p>ऑर्डर व्यापारी के फोन या कंप्यूटर पर भी दिखाई देते हैं और प्रबंधनीय होते हैं।</p>
                
                <h4 class="text-center mb-3">ग्राहकों के लिए ऐप सुविधाएँ</h4>
                <ul>
                    <li>उत्पाद कैटलॉग</li>
                    <li>आइटम प्रकार/मूल्य/वजन/ताजगी के अनुसार क्रमबद्ध करें</li>
                    <li>कार्ट में जोड़ने की कार्यक्षमता</li>
                    <li>CoD/UPI का उपयोग करके भुगतान करें</li>
                    <li>ऑर्डर राशि के लिए कस्टम UPI QR</li>
                    <li>व्हाट्सएप मैसेज चेकआउट</li>
                </ul>
                
                <h4 class="text-center mb-3">व्यापारी के लिए सुविधाएँ</h4>
                <ul>
                    <li>बिक्री ट्रैकिंग</li>
                    <li>इन्वेंटरी ओवरव्यू</li>
                    <li>समाप्ति ट्रैकिंग</li>
                    <li>स्टॉक रिमाइंडर</li>
                    <li>बिक्री विश्लेषण</li>
                </ul>
                
                <p class="text-center mt-4">शॉपिंग शुरू करने के लिए ऊपर ड्रॉपडाउन से एक स्टोर चुनें!</p>
            </div>`,
            mr: `<div class="app-info">
                <h3 class="text-center mb-4">दुकान से!</h3>
                <h5 class="text-center mb-4">स्थानिक दुकानांसाठी ऑनलाइन ऑर्डरिंग सिस्टम.</h5>
                
                <p>दुकान से! एक सोपा उपाय आहे जो दुकानांना त्यांच्या स्टोअर अॅप/URL द्वारे ऑनलाइन ऑर्डर स्वीकारण्यास सक्षम करतो.</p>
                <p>ऑर्डर ग्राहकांकडून पाठविले जातात आणि व्यापाऱ्यांद्वारे व्हाट्सअॅप द्वारे प्राप्त केले जातात.</p>
                <p>ऑर्डर व्यापारी फोन किंवा संगणकावर देखील दिसतात आणि व्यवस्थापित करण्यायोग्य आहेत.</p>
                
                <h4 class="text-center mb-3">ग्राहकांसाठी अॅप वैशिष्ट्ये</h4>
                <ul>
                    <li>उत्पादन कॅटलॉग</li>
                    <li>आयटम प्रकार/किंमत/वजन/ताजे प्रमाणे क्रमवारी</li>
                    <li>कार्टमध्ये जोडण्याची कार्यक्षमता</li>
                    <li>CoD/UPI वापरून पेमेंट</li>
                    <li>ऑर्डर रकमेसाठी कस्टम UPI QR</li>
                    <li>व्हाट्सअॅप मेसेज चेकआउट</li>
                </ul>
                
                <h4 class="text-center mb-3">व्यापारी साठी वैशिष्ट्ये</h4>
                <ul>
                    <li>विक्री ट्रॅकिंग</li>
                    <li>इन्व्हेंटरी ओव्हरव्ह्यू</li>
                    <li>एक्सपायरी ट्रॅकिंग</li>
                    <li>स्टॉक रिमाइंडर</li>
                    <li>विक्री विश्लेषण</li>
                </ul>
                
                <p class="text-center mt-4">खरेदी सुरू करण्यासाठी वरील ड्रॉपडाउनमधून स्टोअर निवडा!</p>
            </div>`
        },
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
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=NaOH"
            },
            {
                id: 2,
                name: "Hydrochloric Acid (HCl)",
                price: 380,
                category: "Industrial Chemicals",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=HCl"
            },
            {
                id: 3,
                name: "Sulfuric Acid (H2SO4)",
                price: 420,
                category: "Industrial Chemicals",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=H2SO4"
            },
            {
                id: 4,
                name: "Ethanol (C2H5OH)",
                price: 550,
                category: "Solvents",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Ethanol"
            },
            {
                id: 5,
                name: "Acetone (C3H6O)",
                price: 480,
                category: "Solvents",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Acetone"
            },
            {
                id: 6,
                name: "Ammonia Solution",
                price: 320,
                category: "Cleaning Agents",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Ammonia"
            },
            {
                id: 7,
                name: "Hydrogen Peroxide (H2O2)",
                price: 280,
                category: "Cleaning Agents",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=H2O2"
            },
            {
                id: 8,
                name: "Sodium Bicarbonate",
                price: 150,
                category: "Laboratory Chemicals",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=NaHCO3"
            }
        ],
        categories: ["Industrial Chemicals", "Solvents", "Cleaning Agents", "Laboratory Chemicals"],
        productTranslations: {
            hi: {
                "Sodium Hydroxide (NaOH)": "सोडियम हाइड्रॉक्साइड (NaOH)",
                "Hydrochloric Acid (HCl)": "हाइड्रोक्लोरिक एसिड (HCl)",
                "Sulfuric Acid (H2SO4)": "सल्फ्यूरिक एसिड (H2SO4)",
                "Ethanol (C2H5OH)": "इथेनॉल (C2H5OH)",
                "Acetone (C3H6O)": "एसीटोन (C3H6O)",
                "Ammonia Solution": "अमोनिया सॉल्यूशन",
                "Hydrogen Peroxide (H2O2)": "हाइड्रोजन पेरोक्साइड (H2O2)",
                "Sodium Bicarbonate": "सोडियम बाइकार्बोनेट"
            },
            mr: {
                "Sodium Hydroxide (NaOH)": "सोडियम हायड्रॉक्साईड (NaOH)",
                "Hydrochloric Acid (HCl)": "हायड्रोक्लोरिक अॅसिड (HCl)",
                "Sulfuric Acid (H2SO4)": "सल्फ्युरिक अॅसिड (H2SO4)",
                "Ethanol (C2H5OH)": "इथेनॉल (C2H5OH)",
                "Acetone (C3H6O)": "अॅसिटोन (C3H6O)",
                "Ammonia Solution": "अमोनिया सोल्युशन",
                "Hydrogen Peroxide (H2O2)": "हायड्रोजन पेरॉक्साईड (H2O2)",
                "Sodium Bicarbonate": "सोडियम बायकार्बोनेट"
            }
        },
        categoryTranslations: {
            hi: {
                "Industrial Chemicals": "औद्योगिक रसायन",
                "Solvents": "विलायक",
                "Cleaning Agents": "सफाई एजेंट",
                "Laboratory Chemicals": "प्रयोगशाला रसायन"
            },
            mr: {
                "Industrial Chemicals": "औद्योगिक रसायने",
                "Solvents": "द्रावक",
                "Cleaning Agents": "सफाई एजंट",
                "Laboratory Chemicals": "प्रयोगशाळा रसायने"
            }
        }
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
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Rice"
            },
            {
                id: 2,
                name: "Toor Dal (1kg)",
                price: 120,
                category: "Grains & Pulses",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Dal"
            },
            {
                id: 3,
                name: "Sugar (1kg)",
                price: 45,
                category: "Essentials",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Sugar"
            },
            {
                id: 4,
                name: "Wheat Flour (5kg)",
                price: 220,
                category: "Grains & Pulses",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Flour"
            },
            {
                id: 5,
                name: "Cooking Oil (1L)",
                price: 180,
                category: "Essentials",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Oil"
            },
            {
                id: 6,
                name: "Salt (1kg)",
                price: 25,
                category: "Essentials",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Salt"
            },
            {
                id: 7,
                name: "Tea Powder (500g)",
                price: 150,
                category: "Beverages",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Tea"
            },
            {
                id: 8,
                name: "Coffee Powder (200g)",
                price: 200,
                category: "Beverages",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Coffee"
            }
        ],
        categories: ["Grains & Pulses", "Essentials", "Beverages"],
        productTranslations: {
            hi: {
                "Basmati Rice (5kg)": "बासमती चावल (5kg)",
                "Toor Dal (1kg)": "तूर दाल (1kg)",
                "Sugar (1kg)": "चीनी (1kg)",
                "Wheat Flour (5kg)": "गेहूं का आटा (5kg)",
                "Cooking Oil (1L)": "खाना पकाने का तेल (1L)",
                "Salt (1kg)": "नमक (1kg)",
                "Tea Powder (500g)": "चाय पाउडर (500g)",
                "Coffee Powder (200g)": "कॉफी पाउडर (200g)"
            },
            mr: {
                "Basmati Rice (5kg)": "बासमती तांदूळ (5kg)",
                "Toor Dal (1kg)": "तूर डाळ (1kg)",
                "Sugar (1kg)": "साखर (1kg)",
                "Wheat Flour (5kg)": "गव्हाचे पीठ (5kg)",
                "Cooking Oil (1L)": "खाद्यतेल (1L)",
                "Salt (1kg)": "मीठ (1kg)",
                "Tea Powder (500g)": "चहा पावडर (500g)",
                "Coffee Powder (200g)": "कॉफी पावडर (200g)"
            }
        },
        categoryTranslations: {
            hi: {
                "Grains & Pulses": "अनाज और दालें",
                "Essentials": "आवश्यक सामग्री",
                "Beverages": "पेय पदार्थ"
            },
            mr: {
                "Grains & Pulses": "धान्य आणि डाळी",
                "Essentials": "आवश्यक वस्तू",
                "Beverages": "पेय पदार्थ"
            }
        }
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
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Milk"
            },
            {
                id: 2,
                name: "Eggs (Dozen)",
                price: 80,
                category: "Dairy & Eggs",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Eggs"
            },
            {
                id: 3,
                name: "Bread (400g)",
                price: 40,
                category: "Bakery",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Bread"
            },
            {
                id: 4,
                name: "Butter (100g)",
                price: 50,
                category: "Dairy & Eggs",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Butter"
            },
            {
                id: 5,
                name: "Cheese (200g)",
                price: 120,
                category: "Dairy & Eggs",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Cheese"
            },
            {
                id: 6,
                name: "Yogurt (500g)",
                price: 45,
                category: "Dairy & Eggs",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Yogurt"
            },
            {
                id: 7,
                name: "Croissant (Pack of 4)",
                price: 100,
                category: "Bakery",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Croissant"
            },
            {
                id: 8,
                name: "Muffins (Pack of 6)",
                price: 150,
                category: "Bakery",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Muffins"
            }
        ],
        categories: ["Dairy & Eggs", "Bakery"],
        productTranslations: {
            hi: {
                "Fresh Milk (1L)": "ताजा दूध (1L)",
                "Eggs (Dozen)": "अंडे (दर्जन)",
                "Bread (400g)": "ब्रेड (400g)",
                "Butter (100g)": "मक्खन (100g)",
                "Cheese (200g)": "पनीर (200g)",
                "Yogurt (500g)": "दही (500g)",
                "Croissant (Pack of 4)": "क्रोइसेंट (4 का पैक)",
                "Muffins (Pack of 6)": "मफिन्स (6 का पैक)"
            },
            mr: {
                "Fresh Milk (1L)": "ताजे दूध (1L)",
                "Eggs (Dozen)": "अंडी (डझन)",
                "Bread (400g)": "ब्रेड (400g)",
                "Butter (100g)": "लोणी (100g)",
                "Cheese (200g)": "चीझ (200g)",
                "Yogurt (500g)": "दही (500g)",
                "Croissant (Pack of 4)": "क्रोसाँ (4 चा पॅक)",
                "Muffins (Pack of 6)": "मफिन्स (6 चा पॅक)"
            }
        },
        categoryTranslations: {
            hi: {
                "Dairy & Eggs": "डेयरी और अंडे",
                "Bakery": "बेकरी उत्पाद"
            },
            mr: {
                "Dairy & Eggs": "दुग्धजन्य आणि अंडी",
                "Bakery": "बेकरी उत्पादने"
            }
        }
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
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=🤧"
            },
            {
                id: 2,
                name: "High Blood Pressure",
                price: 499,
                category: "Chronic Conditions",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=🫀"
            },
            {
                id: 3,
                name: "Diabetes",
                price: 999,
                category: "Chronic Conditions",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=🍬"
            },
            {
                id: 4,
                name: "Migraine",
                price: 299,
                category: "Neurological",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=🤕"
            },
            {
                id: 5,
                name: "Insomnia",
                price: 399,
                category: "Sleep Disorders",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=😴"
            },
            {
                id: 6,
                name: "Anxiety",
                price: 199,
                category: "Mental Health",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=😰"
            },
            {
                id: 7,
                name: "Allergies",
                price: 149,
                category: "Immune System",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=🤧"
            },
            {
                id: 8,
                name: "Back Pain",
                price: 249,
                category: "Musculoskeletal",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=🦴"
            },
            {
                id: 9,
                name: "Acne",
                price: 79,
                category: "Skin Conditions",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=😳"
            },
            {
                id: 10,
                name: "Hair Loss",
                price: 599,
                category: "Hair & Scalp",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=💇"
            }
        ],
        categories: ["Viral Infections", "Chronic Conditions", "Neurological", "Sleep Disorders", "Mental Health", "Immune System", "Musculoskeletal", "Skin Conditions", "Hair & Scalp"],
        productTranslations: {
            hi: {
                "Common Cold": "जुकाम",
                "High Blood Pressure": "उच्च रक्तचाप",
                "Diabetes": "मधुमेह",
                "Migraine": "माइग्रेन",
                "Insomnia": "अनिद्रा",
                "Anxiety": "चिंता",
                "Allergies": "एलर्जी",
                "Back Pain": "पीठ दर्द",
                "Acne": "मुंहासे",
                "Hair Loss": "बालों का झड़ना"
            },
            mr: {
                "Common Cold": "सर्दी",
                "High Blood Pressure": "उच्च रक्तदाब",
                "Diabetes": "मधुमेह",
                "Migraine": "अर्धशिशी",
                "Insomnia": "अनिद्रा",
                "Anxiety": "चिंता",
                "Allergies": "अॅलर्जी",
                "Back Pain": "पाठीचा त्रास",
                "Acne": "मुरुम",
                "Hair Loss": "केस गळणे"
            }
        },
        categoryTranslations: {
            hi: {
                "Viral Infections": "वायरल संक्रमण",
                "Chronic Conditions": "पुरानी बीमारियां",
                "Neurological": "तंत्रिका संबंधी",
                "Sleep Disorders": "नींद विकार",
                "Mental Health": "मानसिक स्वास्थ्य",
                "Immune System": "प्रतिरक्षा प्रणाली",
                "Musculoskeletal": "मांसपेशी-कंकाल",
                "Skin Conditions": "त्वचा की स्थिति",
                "Hair & Scalp": "बाल और खोपड़ी"
            },
            mr: {
                "Viral Infections": "विषाणूजन्य संसर्ग",
                "Chronic Conditions": "दीर्घकालीन आजार",
                "Neurological": "चेतासंस्थेविषयक",
                "Sleep Disorders": "झोपेचे विकार",
                "Mental Health": "मानसिक आरोग्य",
                "Immune System": "रोगप्रतिकारशक्ती",
                "Musculoskeletal": "स्नायू-अस्थि",
                "Skin Conditions": "त्वचेचे आजार",
                "Hair & Scalp": "केस आणि कवटी"
            }
        }
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

// Theme state
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use the system preference
const savedTheme = localStorage.getItem('theme');
let currentTheme = savedTheme ? savedTheme : (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply theme on page load
applyTheme(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
});

// Function to apply theme
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (document.getElementById('theme-toggle')) {
            document.getElementById('theme-toggle').checked = true;
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (document.getElementById('theme-toggle')) {
            document.getElementById('theme-toggle').checked = false;
        }
    }
    
    // Update meta theme-color for mobile devices
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#222222' : '#f8f9fa');
    }
    
    localStorage.setItem('theme', theme);
}

// Add theme-color meta tag if it doesn't exist
if (!document.querySelector('meta[name="theme-color"]')) {
    const metaTag = document.createElement('meta');
    metaTag.name = 'theme-color';
    metaTag.content = currentTheme === 'dark' ? '#222' : '#f8f9fa';
    document.head.appendChild(metaTag);
}

// Check if system preference changes
prefersDarkScheme.addEventListener('change', (e) => {
    // Only auto-switch if the user hasn't set a preference
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme);
        currentTheme = newTheme;
    }
});

// Translations
const translations = {
    en: {
        appTitle: "Dukan Se!",
        appDescription: "Your local stores, now online! Order directly in just a few clicks via WhatsApp.",
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
        orderSuccess: "Order submitted successfully! Please check WhatsApp for confirmation.",
        total: "Total:",
        orderSummary: "Order Summary",
        deliveryTo: "Delivery to:",
        itemQuantity: "Quantity",
        enterWeight: "Enter weight",
        enterValidWeight: "Please enter a valid weight"
    },
    hi: {
        appTitle: "दुकान से!",
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
        orderSuccess: "ऑर्डर सफलतापूर्वक सबमिट किया गया! पुष्टि के लिए व्हाट्सएप देखें।",
        total: "कुल:",
        orderSummary: "ऑर्डर सारांश",
        deliveryTo: "डिलीवरी:",
        itemQuantity: "मात्रा",
        enterWeight: "वजन दर्ज करा",
        enterValidWeight: "कृपया एक वैध वजन दर्ज करें"
    },
    mr: {
        appTitle: "दुकान से!",
        appDescription: "तुमच्या स्थानिक दुकाने, आता ऑनलाइन! व्हाट्सअॅप द्वारे थेट काही क्लिकमध्ये ऑर्डर करा.",
        addToCart: "कार्टमध्ये टाका",
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
        allItems: "सर्व वस्तू",
        addDeliveryDetails: "डिलिव्हरी तपशील जोडा/संपादित करा",
        orderSuccess: "ऑर्डर यशस्वीरित्या सबमिट केले! पुष्टीकरणासाठी व्हाट्सअॅप तपासा.",
        total: "एकूण:",
        orderSummary: "ऑर्डर सारांश",
        deliveryTo: "डिलिव्हरी:",
        itemQuantity: "संख्या",
        enterWeight: "वजन प्रविष्ट करा",
        enterValidWeight: "कृपया वैध वजन प्रविष्ट करा"
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

// Add sorting functionality
let currentSort = 'default';
let sortSelect;

// Add translations for product categories
const categoryTranslations = {
    hi: {
        "Essentials": "आवश्यक सामग्री",
        "Flour & Grains": "आटा और अनाज",
        "Pulses & Lentils": "दाल",
        "Cooking Oils": "खाना पकाने का तेल",
        "Dairy": "डेयरी उत्पाद",
        "Beverages": "पेय पदार्थ",
        "Spices": "मसाले",
        "Snacks": "स्नैक्स",
        "Ready to Cook": "पकाने के लिए तैयार",
        "Sauces & Spreads": "सॉस और स्प्रेड",
        "Fresh Vegetables": "ताजी सब्जियां",
        "Fresh Fruits": "ताजे फल",
        "Fresh Herbs": "ताजी जड़ी-बूटियां",
        "Dairy & Eggs": "डेयरी और अंडे",
        "Industrial Chemicals": "औद्योगिक रसायन",
        "Solvents": "विलायक",
        "Cleaning Agents": "सफाई एजेंट",
        "Laboratory Chemicals": "प्रयोगशाला रसायन",
        "Food Grade Chemicals": "खाद्य श्रेणी के रसायन"
    },
    mr: {
        "Essentials": "आवश्यक वस्तू",
        "Flour & Grains": "पीठ आणि धान्य",
        "Pulses & Lentils": "डाळी",
        "Cooking Oils": "खाद्यतेल",
        "Dairy": "दुग्धजन्य पदार्थ",
        "Beverages": "पेय",
        "Spices": "मसाले",
        "Snacks": "नाश्ता",
        "Ready to Cook": "स्वयंपाकासाठी तयार",
        "Sauces & Spreads": "सॉस आणि स्प्रेड",
        "Fresh Vegetables": "ताज्या भाज्या",
        "Fresh Fruits": "ताजी फळे",
        "Fresh Herbs": "ताज्या हर्ब्स",
        "Dairy & Eggs": "दुग्धजन्य पदार्थ आणि अंडी",
        "Industrial Chemicals": "औद्योगिक रसायने",
        "Solvents": "द्रावक",
        "Cleaning Agents": "सफाई एजंट",
        "Laboratory Chemicals": "प्रयोगशाळा रसायने",
        "Food Grade Chemicals": "अन्न-दर्जाचे रसायने"
    }
};

// Add translations for common product names
const productTranslations = {
    hi: {
        // Existing translations for grocery items
        "Tata Salt (1kg)": "टाटा नमक (1kg)",
        "Fortune Sunflower Oil (1L)": "फॉर्च्यून सनफ्लावर ऑयल (1L)",
        
        // New translations for fruits and vegetables
        "Potatoes": "आलू",
        "Tomatoes": "टमाटर",
        "Onions": "प्याज",
        "Fresh Coriander": "ताजा धनिया",
        "Green Chillies": "हरी मिर्च",
        "Bananas": "केले",
        "Apples": "सेब",
        "Mangoes": "आम",
        "Spinach": "पालक",
        "Mint Leaves": "पुदीना",
        "Cauliflower": "फूलगोभी",
        "Cabbage": "पत्ता गोभी",
        "Ginger": "अदरक",
        "Garlic": "लहसुन",
        "Fresh Coconut": "ताजा नारियल",
        "Cucumber": "खीरा",
        
        // Chemical product translations
        "Sodium Hydroxide (NaOH)": "सोडियम हाइड्रॉक्साइड (NaOH)",
        "Hydrochloric Acid (HCl)": "हाइड्रोक्लोरिक एसिड (HCl)",
        "Sulfuric Acid (H2SO4)": "सल्फ्यूरिक एसिड (H2SO4)",
        "Ethanol (C2H5OH)": "इथेनॉल (C2H5OH)",
        "Acetone (C3H6O)": "एसीटोन (C3H6O)",
        "Ammonia Solution": "अमोनिया सॉल्यूशन",
        "Hydrogen Peroxide (H2O2)": "हाइड्रोजन पेरोक्साइड (H2O2)",
        "Sodium Bicarbonate": "सोडियम बाइकार्बोनेट",
        "Calcium Carbonate (CaCO3)": "कैल्शियम कार्बोनेट (CaCO3)",
        "Potassium Hydroxide (KOH)": "पोटेशियम हाइड्रॉक्साइड (KOH)",
        "Nitric Acid (HNO3)": "नाइट्रिक एसिड (HNO3)",
        "Methanol (CH3OH)": "मेथानॉल (CH3OH)",
        "Isopropyl Alcohol (C3H8O)": "आइसोप्रोपिल अल्कोहल (C3H8O)",
        "Phosphoric Acid (H3PO4)": "फॉस्फोरिक एसिड (H3PO4)",
        "Citric Acid": "साइट्रिक एसिड",
        "Bleach Solution": "ब्लीच सॉल्यूशन",
        "Magnesium Sulfate (MgSO4)": "मैग्नीशियम सल्फेट (MgSO4)",
        "Sodium Chloride (NaCl)": "सोडियम क्लोराइड (NaCl)",
        "Tartaric Acid": "टार्टरिक एसिड",
        "Xylene (C8H10)": "जाइलीन (C8H10)"
    },
    mr: {
        // Existing translations for grocery items
        "Tata Salt (1kg)": "टाटा मीठ (1kg)",
        "Fortune Sunflower Oil (1L)": "फॉर्च्यून सूर्यफूल तेल (1L)",
        
        // New translations for fruits and vegetables
        "Potatoes": "बटाटे",
        "Tomatoes": "टोमॅटो",
        "Onions": "कांदे",
        "Fresh Coriander": "ताजे कोथिंबीर",
        "Green Chillies": "हिरव्या मिरच्या",
        "Bananas": "केळी",
        "Apples": "सफरचंद",
        "Mangoes": "आंबे",
        "Spinach": "पालक",
        "Mint Leaves": "पुदिना",
        "Cauliflower": "फुलकोबी",
        "Cabbage": "कोबी",
        "Ginger": "आले",
        "Garlic": "लसूण",
        "Fresh Coconut": "ताजे नारळ",
        "Cucumber": "काकडी",
        
        // Chemical product translations
        "Sodium Hydroxide (NaOH)": "सोडियम हायड्रॉक्साईड (NaOH)",
        "Hydrochloric Acid (HCl)": "हायड्रोक्लोरिक अॅसिड (HCl)",
        "Sulfuric Acid (H2SO4)": "सल्फ्युरिक अॅसिड (H2SO4)",
        "Ethanol (C2H5OH)": "इथेनॉल (C2H5OH)",
        "Acetone (C3H6O)": "अॅसिटोन (C3H6O)",
        "Ammonia Solution": "अमोनिया सोल्युशन",
        "Hydrogen Peroxide (H2O2)": "हायड्रोजन पेरॉक्साईड (H2O2)",
        "Sodium Bicarbonate": "सोडियम बायकार्बोनेट",
        "Calcium Carbonate (CaCO3)": "कॅल्शियम कार्बोनेट (CaCO3)",
        "Potassium Hydroxide (KOH)": "पोटॅशियम हायड्रॉक्साईड (KOH)",
        "Nitric Acid (HNO3)": "नायट्रिक अॅसिड (HNO3)",
        "Methanol (CH3OH)": "मिथेनॉल (CH3OH)",
        "Isopropyl Alcohol (C3H8O)": "आयसोप्रोपिल अल्कोहोल (C3H8O)",
        "Phosphoric Acid (H3PO4)": "फॉस्फरिक अॅसिड (H3PO4)",
        "Citric Acid": "सिट्रिक अॅसिड",
        "Bleach Solution": "ब्लीच सोल्युशन",
        "Magnesium Sulfate (MgSO4)": "मॅग्नेशियम सल्फेट (MgSO4)",
        "Sodium Chloride (NaCl)": "सोडियम क्लोराईड (NaCl)",
        "Tartaric Acid": "टार्टरिक अॅसिड",
        "Xylene (C8H10)": "झायलीन (C8H10)"
    }
};

// Initialize the app
function init() {
    // Initialize DOM elements
    productContainer = document.getElementById('product-container') || document.querySelector('.product-grid');
    categoryFilter = document.getElementById('category-filter');
    cartItems = document.getElementById('cart-items');
    cartTotal = document.getElementById('cart-total');
    cartCount = document.getElementById('cart-count');
    checkoutBtn = document.getElementById('checkout-btn');
    searchInput = document.getElementById('search-input');
    clearSearchBtn = document.getElementById('clear-search');
    customerInfoBtn = document.getElementById('customer-info-btn');
    customerInfoDisplay = document.getElementById('customer-info-display');
    sortSelect = document.getElementById('sort-select');
    
    // Set up customer info modal if it exists
    const customerInfoModalEl = document.getElementById('customerInfoModal');
    if (customerInfoModalEl) {
        customerInfoModal = new bootstrap.Modal(customerInfoModalEl);
    }
    
    const saveInfoBtn = document.getElementById('save-customer-info');
    if (saveInfoBtn) {
        saveCustomerInfoBtn = saveInfoBtn;
    }
    
    updateTextTranslations();
    
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDarkScheme.matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
}

// Update text translations
function updateTextTranslations() {
    const t = translations[currentLanguage];
    
    // Update placeholders and labels
    if (searchInput) {
        searchInput.placeholder = t.searchProducts;
    }
    
    // Update cart/checkout text
    if (document.getElementById('cart-text')) {
        document.getElementById('cart-text').textContent = t.yourCart;
    }
    
    if (document.getElementById('total-text')) {
        document.getElementById('total-text').textContent = t.total;
    }
    
    if (document.getElementById('checkout-text')) {
        document.getElementById('checkout-text').textContent = t.sendOrder || t.checkout;
    }
    
    // Update sort options if they exist
    if (sortSelect) {
        const options = sortSelect.options;
        if (options[0]) options[0].text = t.defaultSort || 'Default';
        if (options[1]) options[1].text = t.priceLowHigh || 'Price: Low to High';
        if (options[2]) options[2].text = t.priceHighLow || 'Price: High to Low';
        if (options[3]) options[3].text = t.weightLowHigh || 'Weight: Low to High';
        if (options[4]) options[4].text = t.weightHighLow || 'Weight: High to Low';
        
        // Update sort label
        const sortLabel = document.querySelector('.sort-label');
        if (sortLabel) {
            sortLabel.textContent = t.sortBy || 'Sort by:';
        }
    }
    
    // Update customer info button text
    if (customerInfoBtn) {
        customerInfoBtn.textContent = t.addDeliveryDetails;
    }
    
    // Reinitialize the UI
    updateCustomerInfoDisplay();
    updateCartUI();
}

// Switch store
function switchStore(storeId) {
    const store = STORES[storeId];
    if (!store) return;

    // Clear the cart when switching stores
    if (cart.length > 0) {
        if (confirm('Switching stores will clear your current cart. Continue?')) {
            cart = [];
            saveCartToStorage();
        } else {
            // User cancelled, revert the dropdown
            storeSwitcher.value = STORE_CONFIG.storeId || 'dukanSe';
            return;
        }
    }

    // Update store configuration
    STORE_CONFIG = {
        storeName: store.name,
        whatsappNumber: store.whatsappNumber,
        isInfoPage: store.isInfoPage || false,
        storeId: storeId
    };

    // Update products and categories
    products = store.products;
    categories = store.categories;

    // Update store name in header
    document.querySelector('h1').textContent = STORE_CONFIG.storeName;

    // Reset search and category
    currentSearchTerm = '';
    currentCategory = 'all';
    if (searchInput) searchInput.value = '';

    // Handle info page vs store page
    if (store.isInfoPage) {
        // Show description
        productCatalog.innerHTML = store.description[currentLanguage];
        
        // Hide other elements
        if (categoryFilter) categoryFilter.style.display = 'none';
        if (searchInput) searchInput.parentElement.parentElement.style.display = 'none';
        document.getElementById('fixed-checkout').style.display = 'none';
    } else {
        // Show store elements
        if (categoryFilter) categoryFilter.style.display = 'flex';
        if (searchInput) searchInput.parentElement.parentElement.style.display = 'block';
        document.getElementById('fixed-checkout').style.display = 'block';
        
        // Render store content
        renderCategories();
        renderProducts();
    }
    
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
    localStorage.setItem('dukanSe_customer', JSON.stringify(customerInfo));
}

// Load customer info from localStorage
function loadCustomerInfo() {
    const savedInfo = localStorage.getItem('dukanSe_customer');
    if (savedInfo) {
        customerInfo = JSON.parse(savedInfo);
        updateCustomerInfoDisplay();
    }
}

// Render category filters
function renderCategories() {
    if (!categoryFilter || STORE_CONFIG.isInfoPage) return;
    
    const t = translations[currentLanguage];
    const currentStore = STORES[storeSwitcher.value];
    
    categoryFilter.innerHTML = `
        <button class="category-btn active" data-category="all">
            ${t.allItems}
        </button>
        ${categories.map(category => {
            // Get translated category name if available
            let categoryName = category;
            if (currentLanguage !== 'en' && currentStore.categoryTranslations && 
                currentStore.categoryTranslations[currentLanguage] && 
                currentStore.categoryTranslations[currentLanguage][category]) {
                categoryName = currentStore.categoryTranslations[currentLanguage][category];
            }
            
            return `
                <button class="category-btn" data-category="${category}">
                    ${categoryName}
                </button>
            `;
        }).join('')}
    `;

    // Add event listeners to category buttons
    categoryFilter.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryFilter.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
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

// Function to handle broken images
function handleImageError(img) {
    const productName = img.alt || 'Product';
    img.src = `https://dummyimage.com/150x150/cccccc/333333.png&text=${encodeURIComponent(productName.split(' ')[0])}`;
    img.onerror = null; // Prevent infinite error loop
}

// Function to enhance product rendering with image error handling
function enhanceProductRendering() {
    // Add error handler to all product images
    document.querySelectorAll('.product-image').forEach(img => {
        img.onerror = function() {
            handleImageError(this);
        };
    });
}

// Sort products based on current sorting option
function sortProducts(productsToSort) {
    const sortedProducts = [...productsToSort];
    
    switch (currentSort) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'weight-low':
            sortedProducts.sort((a, b) => {
                const aWeight = extractWeight(a.name);
                const bWeight = extractWeight(b.name);
                return aWeight - bWeight;
            });
            break;
        case 'weight-high':
            sortedProducts.sort((a, b) => {
                const aWeight = extractWeight(a.name);
                const bWeight = extractWeight(b.name);
                return bWeight - aWeight;
            });
            break;
        default:
            // Keep original order
            break;
    }
    
    return sortedProducts;
}

// Helper function to extract weight from product name
function extractWeight(name) {
    const regex = /(\d+\.?\d*)\s*(kg|g|ml|l)/i;
    const match = name.match(regex);
    
    if (match) {
        const value = parseFloat(match[1]);
        const unit = match[2].toLowerCase();
        
        // Convert to a common unit (grams)
        if (unit === 'kg') {
            return value * 1000;
        } else if (unit === 'l') {
            return value * 1000;
        }
        
        return value;
    }
    
    return 0; // Default weight if not found
}

// Original render products function with image error handling
function renderProducts() {
    // If this is an info page, don't render products
    if (STORE_CONFIG.isInfoPage) return;
    
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
        
        // Get translated product name if available
        let productName = product.name;
        const currentStore = STORES[storeSwitcher.value];
        if (currentLanguage !== 'en' && currentStore.productTranslations && 
            currentStore.productTranslations[currentLanguage] && 
            currentStore.productTranslations[currentLanguage][product.name]) {
            productName = currentStore.productTranslations[currentLanguage][product.name];
        }
        
        // Create add to cart button based on whether product is weighted or not
        let addToCartHtml = '';
        if (quantity === 0) {
            if (product.isWeighted) {
                addToCartHtml = `
                    <div class="weight-input-container">
                        <input type="number" class="form-control weight-input" id="weight-${product.id}" 
                            min="0.1" step="0.1" value="1" placeholder="${t.enterWeight}">
                        <select class="form-select weight-unit" id="unit-${product.id}">
                            <option value="kg">kg</option>
                            <option value="g">g</option>
                        </select>
                    </div>
                    <button class="btn btn-primary w-100 mt-2" onclick="addToCart(${product.id}, true)">
                        ${t.addToCart} (₹${product.pricePerKg}/kg)
                    </button>
                `;
            } else {
                addToCartHtml = `
                    <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">
                        ${t.addToCart}
                    </button>
                `;
            }
        } else {
            addToCartHtml = `
                <div class="product-quantity">
                    <button onclick="updateQuantity(${product.id}, -1)">-</button>
                    <span>${quantity}</span>
                    <button onclick="updateQuantity(${product.id}, 1)">+</button>
                </div>
            `;
        }
        
        return `
            <div class="col-6 col-md-4 mb-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${productName}" class="product-image" onerror="handleImageError(this)">
                    <h5 class="mt-2">${productName}</h5>
                    <p class="text-muted">₹${product.price}${product.isWeighted ? '/kg' : ''}</p>
                    ${addToCartHtml}
                </div>
            </div>
        `;
    }).join('');
    
    // Apply error handling to all images
    enhanceProductRendering();
}

// Get product quantity in cart
function getProductQuantityInCart(productId) {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
}

// Add product to cart
function addToCart(productId, isWeighted = false) {
    if (!customerInfo.name) {
        alert(translations[currentLanguage].addDeliveryDetails);
        editCustomerInfoBtn.click();
        return;
    }

    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    // Get translated product name if available
    let productName = product.name;
    const currentStore = STORES[storeSwitcher.value];
    if (currentLanguage !== 'en' && currentStore.productTranslations && 
        currentStore.productTranslations[currentLanguage] && 
        currentStore.productTranslations[currentLanguage][product.name]) {
        productName = currentStore.productTranslations[currentLanguage][product.name];
    }

    // Handle weighted products
    if (isWeighted && product.isWeighted) {
        const weightInput = document.getElementById(`weight-${productId}`);
        const unitSelect = document.getElementById(`unit-${productId}`);
        
        if (!weightInput || !unitSelect) {
            console.error('Weight input or unit select not found');
            return;
        }
        
        let weight = parseFloat(weightInput.value);
        const unit = unitSelect.value;
        
        // Convert grams to kg if needed
        if (unit === 'g') {
            weight = weight / 1000;
        }
        
        if (isNaN(weight) || weight <= 0) {
            alert(translations[currentLanguage].enterValidWeight);
            return;
        }
        
        // Calculate price based on weight
        const itemPrice = Math.round(product.pricePerKg * weight);
        
        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.weight = weight;
            existingItem.price = itemPrice;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                displayName: productName,
                price: itemPrice,
                originalPrice: product.pricePerKg,
                weight: weight,
                quantity: 1,
                storeId: storeSwitcher.value,
                isWeighted: true
            });
        }
    } else {
        // Handle regular products
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                displayName: productName,
                price: product.price,
                quantity: 1,
                storeId: storeSwitcher.value
            });
        }
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
        cartItems.innerHTML = cart.map(item => {
            // Get translated product name if available
            let productName = item.displayName || item.name;
            if (!item.displayName && currentLanguage !== 'en') {
                const itemStore = STORES[item.storeId];
                if (itemStore && itemStore.productTranslations && 
                    itemStore.productTranslations[currentLanguage] && 
                    itemStore.productTranslations[currentLanguage][item.name]) {
                    productName = itemStore.productTranslations[currentLanguage][item.name];
                }
            }
            
            // Show weight for weighted items
            const priceDisplay = item.isWeighted 
                ? `₹${item.price} (${item.weight}kg × ₹${item.originalPrice})` 
                : `₹${item.price} × ${item.quantity}`;
            
            return `
                <div class="cart-item">
                    <div>
                        <h6 class="mb-0">${productName}</h6>
                        <small class="text-muted">${priceDisplay}</small>
                    </div>
                    <div class="quantity-controls">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            `;
        }).join('');
        checkoutBtn.disabled = !customerInfo.name;
    }

    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    fixedCartTotal.textContent = `₹${total}`;
    
    // Re-render products to update quantity controls
    renderProducts();
}

// Generate WhatsApp message and form data
function generateOrderData() {
    const items = cart.map(item => {
        // Get translated product name if available
        let productName = item.displayName || item.name;
        if (!item.displayName && currentLanguage !== 'en') {
            const itemStore = STORES[item.storeId];
            if (itemStore && itemStore.productTranslations && 
                itemStore.productTranslations[currentLanguage] && 
                itemStore.productTranslations[currentLanguage][item.name]) {
                productName = itemStore.productTranslations[currentLanguage][item.name];
            }
        }
        
        // Format differently for weighted items
        if (item.isWeighted) {
            return `${productName} (${item.weight}kg × ₹${item.originalPrice} = ₹${item.price})`;
        }
        
        return `${productName} (${item.quantity} × ₹${item.price})`;
    }).join('\n');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const paymentMethod = selectedPaymentMethod === 'upi' 
        ? translations[currentLanguage].upiPayment
        : translations[currentLanguage].cashOnDelivery;
    
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
    localStorage.setItem('dukanSe_cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('dukanSe_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Make functions available globally
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.handleCheckout = handleCheckout;
window.handleImageError = handleImageError;

// Initialize the app
init();

// Load store data from the server or JSON file
async function loadStoreData() {
    try {
        // Fetch from products.json or use default data
        let response;
        try {
            response = await fetch('products.json');
            const data = await response.json();
            
            // Update STORES with data from JSON file
            Object.keys(data).forEach(storeId => {
                if (STORES[storeId]) {
                    Object.assign(STORES[storeId], data[storeId]);
                } else {
                    STORES[storeId] = data[storeId];
                }
            });
        } catch (error) {
            console.warn('Could not load products.json, using default data:', error);
        }
        
        // Add category and product translations to each store
        Object.keys(STORES).forEach(storeId => {
            const store = STORES[storeId];
            
            // Add category translations if not already present
            if (store.categories && store.categories.length > 0) {
                if (!store.categoryTranslations) {
                    store.categoryTranslations = {};
                }
                
                // Add Hindi translations
                if (!store.categoryTranslations.hi) {
                    store.categoryTranslations.hi = {};
                }
                
                store.categories.forEach(category => {
                    if (categoryTranslations.hi[category] && !store.categoryTranslations.hi[category]) {
                        store.categoryTranslations.hi[category] = categoryTranslations.hi[category];
                    }
                });
                
                // Add Marathi translations
                if (!store.categoryTranslations.mr) {
                    store.categoryTranslations.mr = {};
                }
                
                store.categories.forEach(category => {
                    if (categoryTranslations.mr[category] && !store.categoryTranslations.mr[category]) {
                        store.categoryTranslations.mr[category] = categoryTranslations.mr[category];
                    }
                });
            }
            
            // Add product translations if not already present
            if (store.products && store.products.length > 0) {
                if (!store.productTranslations) {
                    store.productTranslations = {};
                }
                
                // Add Hindi translations
                if (!store.productTranslations.hi) {
                    store.productTranslations.hi = {};
                }
                
                store.products.forEach(product => {
                    if (productTranslations.hi[product.name] && !store.productTranslations.hi[product.name]) {
                        store.productTranslations.hi[product.name] = productTranslations.hi[product.name];
                    }
                });
                
                // Add Marathi translations
                if (!store.productTranslations.mr) {
                    store.productTranslations.mr = {};
                }
                
                store.products.forEach(product => {
                    if (productTranslations.mr[product.name] && !store.productTranslations.mr[product.name]) {
                        store.productTranslations.mr[product.name] = productTranslations.mr[product.name];
                    }
                });
            }
        });
        
        // Initialize with current store
        const currentStoreId = storeSwitcher ? storeSwitcher.value : 'dukanSe';
        switchStore(currentStoreId);
        
        // Update UI after loading data
        updateUILanguage();
        loadCartFromStorage();
        updateCartUI();
    } catch (error) {
        console.error('Error loading store data:', error);
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});