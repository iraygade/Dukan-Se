// Handle checkout
function handleCheckout() {
    if (!customerInfo.name) {
        alert('Please add your delivery details before checkout');
        editCustomerInfoBtn.click();
        return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('entry.694161999', customerInfo.name); // Name
    formData.append('entry.589917315', customerInfo.phone); // Phone
    formData.append('entry.1365426664', customerInfo.address); // Address
    
    // Format items ordered
    const itemsOrdered = cart.map(item => 
        `${item.name} (${item.quantity} × ₹${item.price})`
    ).join(', ');
    formData.append('entry.1117891860', itemsOrdered); // Items Ordered
    
    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    formData.append('entry.574399891', `₹${total}`); // Order Total
    
    // Add store name as additional notes
    formData.append('entry.1367012781', `Store: ${STORE_CONFIG.storeName}`); // Additional Notes
    
    // Set payment type
    formData.append('entry.1517370118', 'UPI'); // Payment Type

    // Submit to Google Form
    fetch('https://docs.google.com/forms/d/1sQlAgcs1cuNohYYZXp8l_QBb7gt7pRgEYSiGkCnLxN4/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
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
