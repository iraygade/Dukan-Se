# QuickKart - Local Store Ordering System

QuickKart is a simple, no-code solution for local stores to accept online orders via WhatsApp. It's completely free to use and requires no technical knowledge to set up.

## Features

-  Simple product catalog
-  Add to cart functionality
-  WhatsApp checkout
-  Mobile-first design
-  Zero operational cost
-  Easy inventory management

## Setup Instructions

1. **Host the Website**
   - Create an account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)
   - Upload the contents of the `app` folder
   - Your store will be live at a URL like `your-store-name.netlify.app`

2. **Customize Your Store**
   - Edit the `products.json` file with your products
   - Update the `whatsappNumber` with your store's WhatsApp number
   - Change the `storeName` to your store's name

3. **Generate QR Code**
   - Use a free QR code generator (like [QR Code Generator](https://www.qr-code-generator.com/))
   - Generate a QR code for your store's URL
   - Print and display the QR code in your store

## Managing Products

To update your product catalog:

1. Open the `products.json` file
2. Edit the products array with your items
3. Each product should have:
   - `id`: Unique number for each product
   - `name`: Product name
   - `price`: Price in rupees
   - `image`: URL of product image

Example product entry:
```json
{
    "id": 1,
    "name": "Milk (1L)",
    "price": 60,
    "image": "https://example.com/milk.jpg"
}
```

## How It Works

1. Customers scan the QR code or visit your store's URL
2. They browse products and add items to their cart
3. When ready, they click "Send Order via WhatsApp"
4. A pre-filled message opens in WhatsApp with their order
5. You receive the order in WhatsApp and process it as usual

## Tips for Store Owners

- Keep product images simple and clear
- Update prices regularly in the `products.json` file
- Make sure your WhatsApp number is correct
- Display the QR code prominently in your store
- Consider adding product categories if you have many items

## Support

If you need help setting up QuickKart, please contact us at [support@quickkart.com](mailto:support@quickkart.com)

## License

QuickKart is open-source and free to use for any purpose. 
