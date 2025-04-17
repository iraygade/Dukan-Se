// Store configuration
let STORE_CONFIG = {};
let products = [];
let categories = [];

// Store configurations
const STORES = {
    quickkart: {
        name: "Dukan Se",
        whatsappNumber: "",
        isInfoPage: true,
        description: {
            en: `<div class="app-info">
                <h2 class="text-center mb-4">Dukan Se!</h2>
                <h5 class="text-center mb-4">An Online Ordering System for Local Stores.</h5>
                
                <p>Dukan Se! is a simple solution that enables stores to accept online orders through their store app/URL.</p>
                <p>The orders are sent by customers and recieved by the merchant via WhatsApp.</p>
                <p>Orders are also visible and manageable on merchant phone or computer.</p>
                
                <h4>App features for customers</h4>
                <ul>
                    <li>Product catalog</li>
                    <li>Sort by item type/price/weight/fresh</li>
                    <li>Add to cart functionality</li>
                    <li>Pay using CoD/UPI</li>
                    <li>Custom UPI QR for order amounts</li>
                    <li>WhatsApp message checkout</li>
                </ul>
                
                <h4>Features for Merchant</h4>
                <ul>
                    <li>Sale tracking</li>
                    <li>Inventory overview</li>
                    <li>Expiry tracking</li>
                    <li>Stock reminder</li>
                    <li>Sale analytics</li>
                </ul>
                
                <h4>Onboarding process</h4>
                <p><strong>If inventory is digital:</strong></p>
                <ol>
                    <li>Sync inventory with app.</li>
                    <li>Generate a QR code for your store's URL and app.</li>
                    <li>Display QR and spread the news.</li>
                    <li>You are now ready to start taking orders online!</li>
                </ol>
                
                <p><strong>If inventory is manual:</strong></p>
                <ol>
                    <li>Set-up tech.</li>
                    <li>Create a digital inventory by logging all items during store down-time.</li>
                    <li>Generate a QR code for your store's URL and app.</li>
                    <li>Display QR and spread the news.</li>
                    <li>You are now ready to start taking orders online</li>
                </ol>
                
                <h4>How It Works:</h4>
                <ol>
                    <li>Customers scan the QR code to download the app or visit your store's URL.</li>
                    <li>They register using their Name, Address and Phone Number.</li>
                    <li>They browse products and add items to their cart.</li>
                    <li>When ready, they click "Proceed to payment" and select payment mode.</li>
                    <li>If UPI is selected, a payment request opens on customer's UPI app with pre-entered order amount ready for payment.</li>
                    <li>If CoD is selected, payment is taken in cash or UPI using QR.</li>
                    <li>After payment process, "Send Order via WhatsApp" can be clicked.</li>
                    <li>This sends a pre-filled message with their order using WhatsApp to the merchant with their order.</li>
                    <li>Merchant receives the order on WhatsApp and on their dashboard.</li>
                    <li>Store packs and delivers order.</li>
                    <li>The orders can be viewed and managed on merchant phone or computer.</li>
                </ol>
                
                <p class="mt-4"><strong>Data is collected only for record-keeping. No data collected by the service is sold.</strong></p>
                <p>If you would like to set up Dukan Se! for your store, contact me at <a href="mailto:ipraygade@yahoo.com">ipraygade@yahoo.com</a>.</p>
                
                <p class="text-center mt-4">Select a store from the dropdown above to start shopping!</p>
            </div>`,
            hi: `<div class="app-info">
                <h3>दुकान से के बारे में</h3>
                <p>दुकान से स्थानीय दुकानों को ऑनलाइन लाता है, जिससे उन्हें कॉर्पोरेट डिजिटल प्लेटफॉर्म के साथ प्रतिस्पर्धा करने में मदद मिलती है।</p>
                <p>आमचे लक्ष्य छोटे व्यवसायों को महंगे तकनीकी निवेशों के बिना ऑनलाइन ग्राहकों तक पहुंचने का एक सरल तरीका प्रदान करके सशक्त बनाना है।</p>
                <h4>मुख्य विशेषताएँ:</h4>
                <ul>
                    <li><strong>सरल सेटअप:</strong> स्टोर मालिक मिनटों में ऑनलाइन हो सकते हैं</li>
                    <li><strong>व्हाट्सएप एकीकरण:</strong> मौजूदा संचार चैनलों का उपयोग करें</li>
                    <li><strong>कोई कमीशन नहीं:</strong> कॉर्पोरेट प्लेटफॉर्मों के विपरीत, हम कोई हिस्सा नहीं लेते</li>
                    <li><strong>स्थानीय फोकस:</strong> पड़ोस के व्यवसायों का समर्थन करें</li>
                    <li><strong>बहुभाषी:</strong> विविध समुदायों को उनकी भाषा में सेवा दें</li>
                </ul>
                <p>खरीदारी शुरू करने के लिए ऊपर ड्रॉपडाउन से एक स्टोर चुनें!</p>
            </div>`,
            mr: `<div class="app-info">
                <h3>दुकान से बद्दल</h3>
                <p>दुकान से स्थानिक दुकानांना ऑनलाइन आणते, त्यांना कॉर्पोरेट डिजिटल प्लॅटफॉर्मसह स्पर्धा करण्यात मदत करते.</p>
                <p>आमचे लक्ष्य छोट्या व्यवसायांना महागड्या तांत्रिक गुंतवणुकीशिवाय ऑनलाइन ग्राहकांपर्यंत पोहोचण्याचा सोपा मार्ग देऊन सशक्त करणे आहे.</p>
                <h4>मुख्य वैशिष्ट्ये:</h4>
                <ul>
                    <li><strong>सोपी सेटअप:</strong> स्टोअर मालक मिनिटांमध्ये ऑनलाइन होऊ शकतात</li>
                    <li><strong>व्हाट्सअॅप एकत्रीकरण:</strong> विद्यमान संवाद चॅनेल वापरा</li>
                    <li><strong>कमिशन नाही:</strong> कॉर्पोरेट प्लॅटफॉर्मच्या विपरीत, आम्ही हिस्सा घेत नाही</li>
                    <li><strong>स्थानिक फोकस:</strong> शेजारील व्यवसायांना समर्थन द्या</li>
                    <li><strong>बहुभाषिक:</strong> विविध समुदायांना त्यांच्या भाषेत सेवा द्या</li>
                </ul>
                <p>खरेदी सुरू करण्यासाठी वरील ड्रॉपडाउनमधून स्टोअर निवडा!</p>
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
        whatsappNumber: "918390020796",
        products: [
            {
                id: 1,
                name: "Tata Sampann Toor Dal (1kg)",
                price: 160,
                category: "Dals & Pulses",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Toor+Dal"
            },
            {
                id: 2,
                name: "Aashirvaad Atta (5kg)",
                price: 250,
                category: "Atta & Flour",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Atta"
            },
            {
                id: 3,
                name: "Fortune Sunflower Oil (1L)",
                price: 140,
                category: "Oils & Ghee",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Oil"
            },
            {
                id: 4,
                name: "Daawat Basmati Rice (5kg)",
                price: 450,
                category: "Rice & Grains",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Rice"
            },
            {
                id: 5,
                name: "Amul Pure Ghee (500ml)",
                price: 275,
                category: "Oils & Ghee",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Ghee"
            },
            {
                id: 6,
                name: "Madhur Pure Sugar (1kg)",
                price: 55,
                category: "Essentials",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Sugar"
            },
            {
                id: 7,
                name: "Tata Salt (1kg)",
                price: 25,
                category: "Essentials",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Salt"
            },
            {
                id: 8,
                name: "Everest Turmeric Powder (100g)",
                price: 60,
                category: "Spices",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Turmeric"
            },
            {
                id: 9,
                name: "MTR Red Chilli Powder (100g)",
                price: 65,
                category: "Spices",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Chilli"
            },
            {
                id: 10,
                name: "Parle-G Biscuits (250g)",
                price: 30,
                category: "Biscuits & Snacks",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Parle-G"
            },
            {
                id: 11,
                name: "Maggi Noodles (Pack of 4)",
                price: 60,
                category: "Instant Food",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Maggi"
            },
            {
                id: 12,
                name: "Amul Milk (500ml)",
                price: 30,
                category: "Dairy",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Milk"
            },
            {
                id: 13,
                name: "Britannia Bread (400g)",
                price: 40,
                category: "Bread & Bakery",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Bread"
            },
            {
                id: 14,
                name: "Red Label Tea (250g)",
                price: 140,
                category: "Tea & Coffee",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Tea"
            },
            {
                id: 15,
                name: "Nescafe Classic Coffee (50g)",
                price: 160,
                category: "Tea & Coffee",
                image: "https://dummyimage.com/150x150/cccccc/333333.png&text=Coffee"
            }
        ],
        categories: ["Dals & Pulses", "Atta & Flour", "Rice & Grains", "Oils & Ghee", "Essentials", "Spices", "Biscuits & Snacks", "Instant Food", "Dairy", "Bread & Bakery", "Tea & Coffee"],
        productTranslations: {
            hi: {
                "Tata Sampann Toor Dal (1kg)": "टाटा सम्पन्न तूर दाल (1kg)",
                "Aashirvaad Atta (5kg)": "आशीर्वाद आटा (5kg)",
                "Fortune Sunflower Oil (1L)": "फॉर्च्यून सनफ्लावर ऑयल (1L)",
                "Daawat Basmati Rice (5kg)": "दावत बासमती चावल (5kg)",
                "Amul Pure Ghee (500ml)": "अमूल शुद्ध घी (500ml)",
                "Madhur Pure Sugar (1kg)": "मधुर शुद्ध चीनी (1kg)",
                "Tata Salt (1kg)": "टाटा नमक (1kg)",
                "Everest Turmeric Powder (100g)": "एवरेस्ट हल्दी पाउडर (100g)",
                "MTR Red Chilli Powder (100g)": "MTR लाल मिर्च पाउडर (100g)",
                "Parle-G Biscuits (250g)": "पार्ले-जी बिस्कुट (250g)",
                "Maggi Noodles (Pack of 4)": "मैगी नूडल्स (4 का पैक)",
                "Amul Milk (500ml)": "अमूल दूध (500ml)",
                "Britannia Bread (400g)": "ब्रिटानिया ब्रेड (400g)",
                "Red Label Tea (250g)": "रेड लेबल चाय (250g)",
                "Nescafe Classic Coffee (50g)": "नेस्कैफे क्लासिक कॉफी (50g)"
            },
            mr: {
                "Tata Sampann Toor Dal (1kg)": "टाटा संपन्न तूर डाळ (1kg)",
                "Aashirvaad Atta (5kg)": "आशीर्वाद पीठ (5kg)",
                "Fortune Sunflower Oil (1L)": "फॉर्च्यून सूर्यफूल तेल (1L)",
                "Daawat Basmati Rice (5kg)": "दावत बासमती तांदूळ (5kg)",
                "Amul Pure Ghee (500ml)": "अमूल शुद्ध तूप (500ml)",
                "Madhur Pure Sugar (1kg)": "मधुर शुद्ध साखर (1kg)",
                "Tata Salt (1kg)": "टाटा मीठ (1kg)",
                "Everest Turmeric Powder (100g)": "एवरेस्ट हळद पावडर (100g)",
                "MTR Red Chilli Powder (100g)": "MTR लाल मिरची पावडर (100g)",
                "Parle-G Biscuits (250g)": "पार्ले-जी बिस्किट (250g)",
                "Maggi Noodles (Pack of 4)": "मॅगी नूडल्स (4 चा पॅक)",
                "Amul Milk (500ml)": "अमूल दूध (500ml)",
                "Britannia Bread (400g)": "ब्रिटानिया ब्रेड (400g)",
                "Red Label Tea (250g)": "रेड लेबल चहा (250g)",
                "Nescafe Classic Coffee (50g)": "नेस्कैफे क्लासिक कॉफी (50g)"
            }
        },
        categoryTranslations: {
            hi: {
                "Dals & Pulses": "दाल और अनाज",
                "Atta & Flour": "आटा और मैदा",
                "Rice & Grains": "चावल और अनाज",
                "Oils & Ghee": "तेल और घी",
                "Essentials": "आवश्यक सामग्री",
                "Spices": "मसाले",
                "Biscuits & Snacks": "बिस्कुट और स्नैक्स",
                "Instant Food": "इंस्टेंट खाना",
                "Dairy": "डेयरी",
                "Bread & Bakery": "ब्रेड और बेकरी",
                "Tea & Coffee": "चाय और कॉफी"
            },
            mr: {
                "Dals & Pulses": "डाळी आणि कडधान्य",
                "Atta & Flour": "पीठ आणि मैदा",
                "Rice & Grains": "तांदूळ आणि धान्य",
                "Oils & Ghee": "तेल आणि तूप",
                "Essentials": "आवश्यक वस्तू",
                "Spices": "मसाले",
                "Biscuits & Snacks": "बिस्किट आणि स्नॅक्स",
                "Instant Food": "इन्स्टंट अन्न",
                "Dairy": "दुग्धजन्य",
                "Bread & Bakery": "ब्रेड आणि बेकरी",
                "Tea & Coffee": "चहा आणि कॉफी"
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
        appName: "Dukan Se",
        allItems: "All Items",
        search: "Search products...",
        clearSearch: "Clear",
        yourCart: "Your Cart",
        emptyCart: "Your cart is empty",
        total: "Total",
        items: "items",
        checkoutBtn: "Proceed to Payment",
        customerInfo: "Your Delivery Details",
        editCustomerInfo: "Add/Edit Delivery Details",
        saveCustomerInfo: "Save Details",
        customerName: "Full Name",
        customerPhone: "Phone Number",
        customerAddress: "Delivery Address",
        placeOrder: "Place Order",
        sendViaWhatsApp: "Send Order via WhatsApp",
        addToCart: "Add",
        selectPaymentMethod: "Select Payment Method",
        cashOnDelivery: "Cash on Delivery",
        upiPayment: "UPI Payment",
        errorMessage: "Please fill all the details before proceeding",
        enterDetails: "Please enter your delivery details before adding to cart",
        paymentModalTitle: "Payment & Checkout",
        closeBtn: "Close",
        orderSuccess: "Order placed successfully!",
        orderDetails: "Order Details",
        orderTotal: "Order Total",
        deliveryTo: "Delivery to",
        quantity: "Qty",
        privacyNote: "Your data is secure and only used for order processing"
    },
    hi: {
        appName: "दुकान से",
        allItems: "सभी आइटम",
        search: "उत्पाद खोजें...",
        clearSearch: "साफ़ करें",
        yourCart: "आपका कार्ट",
        emptyCart: "आपकी कार्ट खाली है",
        total: "कुल",
        items: "आइटम",
        checkoutBtn: "भुगतान के लिए आगे बढ़ें",
        customerInfo: "आपका डिलीवरी विवरण",
        editCustomerInfo: "डिलीवरी विवरण जोड़ें/संपादित करें",
        saveCustomerInfo: "विवरण सहेजें",
        customerName: "पूरा नाम",
        customerPhone: "फोन नंबर",
        customerAddress: "डिलीवरी का पता",
        placeOrder: "ऑर्डर करें",
        sendViaWhatsApp: "WhatsApp के माध्यम से ऑर्डर भेजें",
        addToCart: "जोड़ें",
        selectPaymentMethod: "भुगतान विधि चुनें",
        cashOnDelivery: "डिलीवरी पर नकद भुगतान",
        upiPayment: "UPI भुगतान",
        errorMessage: "आगे बढ़ने से पहले कृपया सभी विवरण भरें",
        enterDetails: "कार्ट में जोडण्यापूर्वी कृपया तुमचा डिलीवरी विवरण दर्ज करें",
        paymentModalTitle: "भुगतान और चेकआउट",
        closeBtn: "बंद करें",
        orderSuccess: "ऑर्डर सफलतापूर्वक दिया गया!",
        orderDetails: "ऑर्डर विवरण",
        orderTotal: "ऑर्डर का कुल",
        deliveryTo: "डिलीवरी",
        quantity: "संख्या",
        privacyNote: "तुमचा डेटा सुरक्षित आहे आणि फक्त ऑर्डर प्रक्रियेसाठी वापरला जातो"
    },
    mr: {
        appName: "दुकान से",
        allItems: "सर्व आयटम",
        search: "उत्पादने शोधा...",
        clearSearch: "साफ करा",
        yourCart: "तुमची कार्ट",
        emptyCart: "तुमची कार्ट रिकामी आहे",
        total: "एकूण",
        items: "आयटम",
        checkoutBtn: "पेमेंटसाठी पुढे जा",
        customerInfo: "तुमचा डिलिव्हरी तपशील",
        editCustomerInfo: "डिलिव्हरी तपशील जोडा/संपादित करा",
        saveCustomerInfo: "तपशील जतन करा",
        customerName: "पूर्ण नाव",
        customerPhone: "फोन नंबर",
        customerAddress: "डिलिव्हरी पत्ता",
        placeOrder: "ऑर्डर करा",
        sendViaWhatsApp: "WhatsApp द्वारे ऑर्डर पाठवा",
        addToCart: "जोडा",
        selectPaymentMethod: "पेमेंट पद्धत निवडा",
        cashOnDelivery: "डिलिव्हरीवर रोख",
        upiPayment: "UPI पेमेंट",
        errorMessage: "पुढे जाण्यापूर्वी कृपया सर्व तपशील भरा",
        enterDetails: "कार्टमध्ये जोडण्यापूर्वी कृपया तुमचा डिलिव्हरी तपशील भरा",
        paymentModalTitle: "पेमेंट आणि चेकआउट",
        closeBtn: "बंद करा",
        orderSuccess: "ऑर्डर यशस्वीरित्या दिले गेले!",
        orderDetails: "ऑर्डर तपशील",
        orderTotal: "ऑर्डर एकूण",
        deliveryTo: "डिलिव्हरी",
        quantity: "संख्या",
        privacyNote: "तुमचा डेटा सुरक्षित आहे आणि फक्त ऑर्डर प्रक्रियेसाठी वापरला जातो"
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
    
    // Load and apply theme preference
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
    document.querySelector('h1').textContent = t.appName;
    document.getElementById('app-description').textContent = t.appDescription;
    document.getElementById('cart-title').textContent = t.yourCart;
    document.getElementById('checkout-btn-text').textContent = t.checkoutBtn;
    document.getElementById('payment-modal-title').textContent = t.paymentModalTitle;
    document.getElementById('payment-section-title').textContent = t.selectPaymentMethod;
    document.getElementById('upi-label').textContent = t.upiPayment;
    document.getElementById('cod-label').textContent = t.cashOnDelivery;
    document.getElementById('whatsapp-btn-text').textContent = t.sendViaWhatsApp;
    document.querySelector('.modal-title').textContent = t.customerInfo;
    document.querySelector('label[for="customer-name"]').textContent = t.customerName;
    document.querySelector('label[for="customer-phone"]').textContent = t.customerPhone;
    document.querySelector('label[for="customer-address"]').textContent = t.customerAddress;
    document.getElementById('save-customer-info').textContent = t.saveCustomerInfo;
    document.getElementById('close-payment-btn').textContent = t.closeBtn;
    
    if (searchInput) {
        searchInput.placeholder = t.search;
    }
    
    // If we're on the Dukan Se info page, update its content
    if (STORE_CONFIG.isInfoPage) {
        const currentStore = STORES[STORE_CONFIG.storeId || 'quickkart'];
        if (currentStore && currentStore.description && currentStore.description[currentLanguage]) {
            productCatalog.innerHTML = currentStore.description[currentLanguage];
        }
    } else {
        // Re-render products and categories
        renderCategories();
        renderProducts();
    }
    
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
            storeSwitcher.value = STORE_CONFIG.storeId || 'quickkart';
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
        
        return `
            <div class="col-6 col-md-4 mb-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${productName}" class="product-image" onerror="handleImageError(this)">
                    <h5 class="mt-2">${productName}</h5>
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
    
    // Apply error handling to all images
    enhanceProductRendering();
}

// Get product quantity in cart
function getProductQuantityInCart(productId) {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
}

// Add product to cart
function addToCart(productId) {
    if (!customerInfo.name) {
        alert(translations[currentLanguage].enterDetails);
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
    if (!cartItems) return;
    
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Update cart count badges
    if (cartCount) cartCount.textContent = cart.length;
    
    // Update fixed cart count
    const fixedCartCount = document.getElementById('fixed-cart-count');
    if (fixedCartCount) fixedCartCount.textContent = cart.length;
    
    // Calculate total
    let total = 0;
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            total += product.price * item.quantity;
        }
    });
    
    // Update cart totals
    if (cartTotal) cartTotal.textContent = `${STORE_CONFIG.currency}${total}`;
    
    // Update fixed cart total
    const fixedCartTotal = document.getElementById('fixed-cart-total');
    if (fixedCartTotal) fixedCartTotal.textContent = `${STORE_CONFIG.currency}${total}`;
    
    // Enable/disable checkout button
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
    
    // Show/hide fixed checkout
    const fixedCheckout = document.getElementById('checkout-fixed');
    if (fixedCheckout) {
        if (cart.length > 0) {
            fixedCheckout.classList.remove('d-none');
        } else {
            fixedCheckout.classList.add('d-none');
        }
    }
    
    // Clear and rebuild cart items
    cartItems.innerHTML = '';
    
    // Add items to cart
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;
        
        // Get translated product name if available
        let productName = product.name;
        if (currentLanguage !== 'en' && STORE_CONFIG.productTranslations && 
            STORE_CONFIG.productTranslations[currentLanguage] && 
            STORE_CONFIG.productTranslations[currentLanguage][product.name]) {
            productName = STORE_CONFIG.productTranslations[currentLanguage][product.name];
        }
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-name">${productName}</div>
            <div class="d-flex justify-content-between align-items-center">
                <div>${STORE_CONFIG.currency}${product.price} × ${item.quantity}</div>
                <div class="d-flex align-items-center">
                    <button class="item-quantity-btn me-2" onclick="updateQuantity(${product.id}, -1)">-</button>
                    <span class="me-2">${item.quantity}</span>
                    <button class="item-quantity-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Save cart to localStorage
    saveCartToStorage();
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
window.handleImageError = handleImageError;

// Initialize the app
init(); 