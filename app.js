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
                <h2 class="text-center mb-4">दुकान से!</h2>
                <h5 class="text-center mb-4">स्थानीय दुकानों के लिए ऑनलाइन ऑर्डरिंग सिस्टम।</h5>
                
                <p>दुकान से! एक सरल समाधान है जो दुकानों को अपने स्टोर ऐप/URL के माध्यम से ऑनलाइन ऑर्डर स्वीकार करने की सुविधा देता है।</p>
                <p>ग्राहकों द्वारा ऑर्डर भेजे जाते हैं और व्यापारी द्वारा व्हाट्सएप के माध्यम से प्राप्त किए जाते हैं।</p>
                <p>ऑर्डर व्यापारी के फोन या कंप्यूटर पर भी दिखाई देते हैं और प्रबंधनीय होते हैं।</p>
                
                <h4>ग्राहकों के लिए ऐप सुविधाएँ</h4>
                <ul>
                    <li>उत्पाद कैटलॉग</li>
                    <li>आइटम प्रकार/मूल्य/वजन/ताज़ा के अनुसार क्रमबद्ध करें</li>
                    <li>कार्ट में जोड़ने की कार्यक्षमता</li>
                    <li>CoD/UPI का उपयोग करके भुगतान करें</li>
                    <li>ऑर्डर राशि के लिए कस्टम UPI QR</li>
                    <li>व्हाट्सएप मैसेज चेकआउट</li>
                </ul>
                
                <h4>व्यापारी के लिए सुविधाएँ</h4>
                <ul>
                    <li>बिक्री ट्रैकिंग</li>
                    <li>इन्वेंटरी ओवरव्यू</li>
                    <li>एक्सपायरी ट्रैकिंग</li>
                    <li>स्टॉक रिमाइंडर</li>
                    <li>बिक्री विश्लेषण</li>
                </ul>
                
                <h4>ऑनबोर्डिंग प्रक्रिया</h4>
                <p><strong>यदि इन्वेंटरी डिजिटल है:</strong></p>
                <ol>
                    <li>ऐप के साथ इन्वेंटरी सिंक करें।</li>
                    <li>अपने स्टोर के URL और ऐप के लिए QR कोड जनरेट करें।</li>
                    <li>QR प्रदर्शित करें और समाचार फैलाएं।</li>
                    <li>अब आप ऑनलाइन ऑर्डर लेने के लिए तैयार हैं!</li>
                </ol>
                
                <p><strong>यदि इन्वेंटरी मैनुअल है:</strong></p>
                <ol>
                    <li>टेक सेट-अप करें।</li>
                    <li>स्टोर के डाउन-टाइम के दौरान सभी आइटम को लॉग करके डिजिटल इन्वेंटरी बनाएं।</li>
                    <li>अपने स्टोर के URL और ऐप के लिए QR कोड जनरेट करें।</li>
                    <li>QR प्रदर्शित करें और समाचार फैलाएं।</li>
                    <li>अब आप ऑनलाइन ऑर्डर लेने के लिए तैयार हैं।</li>
                </ol>
                
                <h4>यह कैसे काम करता है:</h4>
                <ol>
                    <li>ग्राहक ऐप डाउनलोड करने के लिए किंवा तुमच्या स्टोर के URL पर जाने के लिए QR कोड स्कैन करते हैं।</li>
                    <li>वे अपना नाम, पता और फोन नंबर का उपयोग करके पंजीकरण करते हैं।</li>
                    <li>वे उत्पादों को ब्राउज़ करते हैं और अपनी कार्ट में आइटम जोड़ते हैं।</li>
                    <li>जब तैयार हों, वे "भुगतान के लिए आगे बढ़ें" पर क्लिक करते हैं और भुगतान मोड का चयन करते हैं।</li>
                    <li>यदि UPI चुना जाता है, तो ग्राहक के UPI ऐप पर पहले से दर्ज ऑर्डर राशि के साथ भुगतान के लिए तैयार भुगतान अनुरोध खुलता है।</li>
                    <li>यदि CoD चुना जाता है, तो भुगतान नकद या QR का उपयोग करके UPI में लिया जाता है।</li>
                    <li>भुगतान प्रक्रिया के बाद, "व्हाट्सएप के माध्यम से ऑर्डर भेजें" पर क्लिक किया जा सकता है।</li>
                    <li>यह व्यापारी को उनके ऑर्डर के साथ व्हाट्सएप का उपयोग करके उनके ऑर्डर के साथ एक पहले से भरा हुआ संदेश भेजता है।</li>
                    <li>व्यापारी व्हाट्सएप पर और अपने डैशबोर्ड पर ऑर्डर प्राप्त करता है।</li>
                    <li>स्टोर ऑर्डर पैक करता है और डिलीवर करता है।</li>
                    <li>ऑर्डर व्यापारी के फोन या कंप्यूटर पर देखे और प्रबंधित किए जा सकते हैं।</li>
                </ol>
                
                <p class="mt-4"><strong>डेटा केवल नोंदी ठेवन्यासाठी गोळा केला जातो. सेवेद्वारे गोळा केलेला कोणताही डेटा विकला जात नाही.</strong></p>
                <p>यदि आप अपने स्टोर के लिए दुकान से! सेट अप करना चाहते हैं, तो मुझसे <a href="mailto:ipraygade@yahoo.com">ipraygade@yahoo.com</a> पर संपर्क करें।</p>
                
                <p class="text-center mt-4">खरीदारी शुरू करने के लिए ऊपर ड्रॉपडाउन से स्टोर चुनें!</p>
            </div>`,
            mr: `<div class="app-info">
                <h2 class="text-center mb-4">दुकान से!</h2>
                <h5 class="text-center mb-4">स्थानिक दुकानांसाठी ऑनलाइन ऑर्डरिंग सिस्टम.</h5>
                
                <p>दुकान से! हे एक सोपे उपाय आहे जे दुकानांना त्यांच्या स्टोअर अॅप/URL द्वारे ऑनलाइन ऑर्डर स्वीकारण्याची क्षमता देते.</p>
                <p>ग्राहकांकडून ऑर्डर पाठवले जातात आणि व्यापाऱ्यांना व्हाट्सअॅप द्वारे प्राप्त होतात.</p>
                <p>ऑर्डर व्यापारी फोन किंवा संगणकावर देखील दिसतात आणि व्यवस्थापित केले जाऊ शकतात.</p>
                
                <h4>ग्राहकांसाठी अॅप वैशिष्ट्ये</h4>
                <ul>
                    <li>उत्पादन कॅटलॉग</li>
                    <li>आयटम प्रकार/किंमत/वजन/ताजे द्वारे क्रमवारी लावा</li>
                    <li>कार्टमध्ये जोडण्याची कार्यक्षमता</li>
                    <li>CoD/UPI वापरून पेमेंट करा</li>
                    <li>ऑर्डर रकमेसाठी कस्टम UPI QR</li>
                    <li>व्हाट्सअॅप संदेश चेकआउट</li>
                </ul>
                
                <h4>व्यापाऱ्यांसाठी वैशिष्ट्ये</h4>
                <ul>
                    <li>विक्री ट्रॅकिंग</li>
                    <li>इन्व्हेंटरी ओव्हरव्ह्यू</li>
                    <li>एक्स्पायरी ट्रॅकिंग</li>
                    <li>स्टॉक रिमाइंडर</li>
                    <li>विक्री अॅनालिटिक्स</li>
                </ul>
                
                <h4>ऑनबोर्डिंग प्रक्रिया</h4>
                <p><strong>जर इन्व्हेंटरी डिजिटल असेल:</strong></p>
                <ol>
                    <li>अॅपसह इन्व्हेंटरी सिंक करा.</li>
                    <li>तुमच्या स्टोअरच्या URL आणि अॅपसाठी QR कोड तयार करा.</li>
                    <li>QR प्रदर्शित करा आणि बातमी पसरवा.</li>
                    <li>आता तुम्ही ऑनलाइन ऑर्डर घेण्यास तयार आहात!</li>
                </ol>
                
                <p><strong>जर इन्व्हेंटरी मॅन्युअल असेल:</strong></p>
                <ol>
                    <li>तंत्रज्ञान सेट-अप करा.</li>
                    <li>स्टोअर डाउन-टाइम दरम्यान सर्व आयटम्स लॉग करून डिजिटल इन्व्हेंटरी तयार करा.</li>
                    <li>तुमच्या स्टोअरच्या URL आणि अॅपसाठी QR कोड तयार करा.</li>
                    <li>QR प्रदर्शित करा आणि बातमी पसरवा.</li>
                    <li>आता तुम्ही ऑनलाइन ऑर्डर घेण्यास तयार आहात.</li>
                </ol>
                
                <h4>हे कसे कार्य करते:</h4>
                <ol>
                    <li>ग्राहक अॅप डाउनलोड करण्यासाठी किंवा तुमच्या स्टोअरच्या URL ला भेट देण्यासाठी QR कोड स्कॅन करतात.</li>
                    <li>ते त्यांचे नाव, पत्ता आणि फोन नंबर वापरून नोंदणी करतात.</li>
                    <li>ते उत्पादने ब्राउझ करतात आणि त्यांच्या कार्टमध्ये आयटम्स जोडतात.</li>
                    <li>तयार असल्यावर, ते "पेमेंटसाठी पुढे जा" वर क्लिक करतात आणि पेमेंट मोड निवडतात.</li>
                    <li>जर UPI निवडले असेल, तर ग्राहकाच्या UPI अॅपवर आधीपासूनच भरलेल्या ऑर्डर रकमेसह पेमेंटसाठी तयार पेमेंट विनंती उघडते.</li>
                    <li>जर CoD निवडले असेल, तर पेमेंट रोख किंवा QR वापरून UPI द्वारे घेतले जाते.</li>
                    <li>पेमेंट प्रक्रियेनंतर, "व्हाट्सअॅप द्वारे ऑर्डर पाठवा" वर क्लिक केले जाऊ शकते.</li>
                    <li>हे व्यापाऱ्याला त्यांच्या ऑर्डरसह व्हाट्सअॅप वापरून त्यांच्या ऑर्डरसह एक पूर्व-भरलेला संदेश पाठवते.</li>
                    <li>व्यापारी व्हाट्सअॅपवर आणि त्यांच्या डॅशबोर्डवर ऑर्डर प्राप्त करतो.</li>
                    <li>स्टोअर ऑर्डर पॅक करते आणि वितरित करते.</li>
                    <li>ऑर्डर व्यापारी फोन किंवा संगणकावर पाहिले आणि व्यवस्थापित केले जाऊ शकतात.</li>
                </ol>
                
                <p class="mt-4"><strong>डेटा केवळ नोंदी ठेवण्यासाठी गोळा केला जातो. सेवेद्वारे गोळा केलेला कोणताही डेटा विकला जात नाही.</strong></p>
                <p>जर तुम्हाला तुमच्या स्टोअरसाठी दुकान से! सेट अप करायचे असेल, तर मला <a href="mailto:ipraygade@yahoo.com">ipraygade@yahoo.com</a> वर संपर्क करा.</p>
                
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
        whatsappNumber: "918390020796",
        products: [
            {
                id: 1,
                name: "Tata Sampann Toor Dal (1kg)",
                price: 140,
                category: "Dals & Pulses",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Toor+Dal"
            },
            {
                id: 2,
                name: "Aashirvaad Atta (5kg)",
                price: 275,
                category: "Atta & Flours",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Atta"
            },
            {
                id: 3,
                name: "Fortune Sunflower Oil (1L)",
                price: 165,
                category: "Oils & Ghee",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Oil"
            },
            {
                id: 4,
                name: "India Gate Basmati Rice (5kg)",
                price: 550,
                category: "Rice & Grains",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Basmati"
            },
            {
                id: 5,
                name: "Amul Pure Ghee (500ml)",
                price: 295,
                category: "Oils & Ghee",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Ghee"
            },
            {
                id: 6,
                name: "Tata Salt (1kg)",
                price: 28,
                category: "Masalas & Spices",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Salt"
            },
            {
                id: 7,
                name: "Maggi Noodles (Pack of 6)",
                price: 90,
                category: "Instant Food",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Maggi"
            },
            {
                id: 8,
                name: "MDH Garam Masala (100g)",
                price: 80,
                category: "Masalas & Spices",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Masala"
            },
            {
                id: 9,
                name: "Nestle Everyday Dairy Whitener (400g)",
                price: 190,
                category: "Dairy & Eggs",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Milk+Powder"
            },
            {
                id: 10,
                name: "Parle-G Gold Biscuits (1kg)",
                price: 130,
                category: "Snacks & Biscuits",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Parle-G"
            },
            {
                id: 11,
                name: "Red Label Tea (500g)",
                price: 240,
                category: "Tea & Coffee",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Tea"
            },
            {
                id: 12,
                name: "Nescafe Classic Coffee (200g)",
                price: 410,
                category: "Tea & Coffee",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Coffee"
            },
            {
                id: 13,
                name: "Saffola Oats (1kg)",
                price: 170,
                category: "Breakfast Cereals",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Oats"
            },
            {
                id: 14,
                name: "Madhur Pure Sugar (1kg)",
                price: 50,
                category: "Sugar & Jaggery",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Sugar"
            },
            {
                id: 15,
                name: "Haldiram's Bhujia (400g)",
                price: 90,
                category: "Snacks & Biscuits",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Bhujia"
            },
            {
                id: 16,
                name: "Mother Dairy Milk (1L)",
                price: 68,
                category: "Dairy & Eggs",
                image: "https://dummyimage.com/150x150/f2f2f2/333333.png&text=Milk"
            }
        ],
        categories: ["Dals & Pulses", "Atta & Flours", "Oils & Ghee", "Rice & Grains", "Masalas & Spices", "Instant Food", "Dairy & Eggs", "Snacks & Biscuits", "Tea & Coffee", "Breakfast Cereals", "Sugar & Jaggery"],
        productTranslations: {
            hi: {
                "Tata Sampann Toor Dal (1kg)": "टाटा सम्पन्न तूर दाल (1kg)",
                "Aashirvaad Atta (5kg)": "आशीर्वाद आटा (5kg)",
                "Fortune Sunflower Oil (1L)": "फॉर्च्यून सनफ्लावर ऑयल (1L)",
                "India Gate Basmati Rice (5kg)": "इंडिया गेट बासमती चावल (5kg)",
                "Amul Pure Ghee (500ml)": "अमूल शुद्ध घी (500ml)",
                "Tata Salt (1kg)": "टाटा नमक (1kg)",
                "Maggi Noodles (Pack of 6)": "मैगी नूडल्स (6 का पैक)",
                "MDH Garam Masala (100g)": "एमडीएच गरम मसाला (100g)",
                "Nestle Everyday Dairy Whitener (400g)": "नेस्ले एवरीडे डेयरी व्हाइटनर (400g)",
                "Parle-G Gold Biscuits (1kg)": "पार्ले-जी गोल्ड बिस्कुट (1kg)",
                "Red Label Tea (500g)": "रेड लेबल चाय (500g)",
                "Nescafe Classic Coffee (200g)": "नेस्काफे क्लासिक कॉफी (200g)",
                "Saffola Oats (1kg)": "सफोला ओट्स (1kg)",
                "Madhur Pure Sugar (1kg)": "मधुर शुद्ध चीनी (1kg)",
                "Haldiram's Bhujia (400g)": "हल्दीराम भुजिया (400g)",
                "Mother Dairy Milk (1L)": "मदर डेयरी दूध (1L)"
            },
            mr: {
                "Tata Sampann Toor Dal (1kg)": "टाटा संपन्न तूर डाळ (1kg)",
                "Aashirvaad Atta (5kg)": "आशीर्वाद गहू पीठ (5kg)",
                "Fortune Sunflower Oil (1L)": "फॉर्च्यून सूर्यफूल तेल (1L)",
                "India Gate Basmati Rice (5kg)": "इंडिया गेट बासमती तांदूळ (5kg)",
                "Amul Pure Ghee (500ml)": "अमूल शुद्ध तूप (500ml)",
                "Tata Salt (1kg)": "टाटा मीठ (1kg)",
                "Maggi Noodles (Pack of 6)": "मॅगी नूडल्स (6 का पॅक)",
                "MDH Garam Masala (100g)": "एमडीएच गरम मसाला (100g)",
                "Nestle Everyday Dairy Whitener (400g)": "नेस्ले एव्हरीडे दूध पावडर (400g)",
                "Parle-G Gold Biscuits (1kg)": "पार्ले-जी गोल्ड बिस्किट (1kg)",
                "Red Label Tea (500g)": "रेड लेबल चहा (500g)",
                "Nescafe Classic Coffee (200g)": "नेस्काफे क्लासिक कॉफी (200g)",
                "Saffola Oats (1kg)": "सफोला ओट्स (1kg)",
                "Madhur Pure Sugar (1kg)": "मधुर शुद्ध साखर (1kg)",
                "Haldiram's Bhujia (400g)": "हल्दीराम भुजिया (400g)",
                "Mother Dairy Milk (1L)": "मदर डेरी दूध (1L)"
            }
        },
        categoryTranslations: {
            hi: {
                "Dals & Pulses": "दाल और अनाज",
                "Atta & Flours": "आटा और मैदा",
                "Oils & Ghee": "तेल और घी",
                "Rice & Grains": "चावल और अनाज",
                "Masalas & Spices": "मसाले",
                "Instant Food": "इंस्टेंट फूड",
                "Dairy & Eggs": "डेयरी और अंडे",
                "Snacks & Biscuits": "स्नैक्स और बिस्कुट",
                "Tea & Coffee": "चाय और कॉफी",
                "Breakfast Cereals": "नाश्ता अनाज",
                "Sugar & Jaggery": "चीनी और गुड़"
            },
            mr: {
                "Dals & Pulses": "डाळी आणि कडधान्ये",
                "Atta & Flours": "पीठ आणि मैदा",
                "Oils & Ghee": "तेल आणि तूप",
                "Rice & Grains": "तांदूळ आणि धान्य",
                "Masalas & Spices": "मसाले",
                "Instant Food": "इन्स्टंट फूड",
                "Dairy & Eggs": "दुग्धजन्य आणि अंडी",
                "Snacks & Biscuits": "स्नॅक्स आणि बिस्किट",
                "Tea & Coffee": "चहा आणि कॉफी",
                "Breakfast Cereals": "नाश्ता धान्य",
                "Sugar & Jaggery": "साखर आणि गूळ"
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
    if (!productCatalog || STORE_CONFIG.isInfoPage) return;
    
    const t = translations[currentLanguage];
    
    productCatalog.innerHTML = '';
    let filteredProducts = products;
    
    // Apply search filter
    if (currentSearchTerm.trim() !== '') {
        const query = currentSearchTerm.toLowerCase();
        filteredProducts = products.filter(product => {
            const name = getTranslatedProductName(product).toLowerCase();
            return name.includes(query);
        });
    }
    
    // Apply category filter
    if (currentCategory && currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    
    if (filteredProducts.length === 0) {
        productCatalog.innerHTML = `<div class="col-12 text-center py-5"><h5>${t.noProductsFound}</h5></div>`;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'col';
        
        // Get translated product name if available
        const productName = getTranslatedProductName(product);
        
        const cartQuantity = getProductQuantityInCart(product.id);
        
        productEl.innerHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${productName}" class="product-image" onerror="handleImageError(this)">
                <div class="card-body">
                    <h5 class="product-title">${productName}</h5>
                    <p class="text-muted mb-0">${product.category}</p>
                    <div class="product-price">${STORE_CONFIG.currency}${product.price}</div>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        ${cartQuantity > 0 ? `
                            <div class="product-quantity">
                                <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${product.id}, -1)">-</button>
                                <span class="mx-2">${cartQuantity}</span>
                                <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${product.id}, 1)">+</button>
                            </div>
                        ` : `
                            <button class="btn btn-sm btn-primary" onclick="addToCart(${product.id})">
                                ${t.addToCart}
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
        
        productCatalog.appendChild(productEl);
    });
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
    
    const t = translations[currentLanguage];
    const cart = getCart();
    const cartArray = Object.values(cart);
    
    cartCount.textContent = cartArray.reduce((total, item) => total + item.quantity, 0);
    
    let total = 0;
    cartItems.innerHTML = '';
    
    if (cartArray.length === 0) {
        cartItems.innerHTML = `<div class="text-center py-3">${t.emptyCart}</div>`;
        fixedCartTotal.textContent = `${STORE_CONFIG.currency}0`;
        checkoutBtn.disabled = true;
        return;
    }
    
    cartArray.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${STORE_CONFIG.currency}${item.price} × ${item.quantity}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="item-quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <button class="item-quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(itemEl);
    });
    
    fixedCartTotal.textContent = `${STORE_CONFIG.currency}${total}`;
    checkoutBtn.disabled = false;
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