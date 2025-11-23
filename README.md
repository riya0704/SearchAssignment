# MERN Stack Product Landing Page with Search Autosuggest

A full-stack e-commerce product landing page with real-time search functionality, shopping cart, and beautiful UI built using MongoDB, Express, React, and Node.js.

## ✨ Features

### Frontend Features
- 🎨 **Modern, Attractive UI** - Gradient designs, smooth animations, and hover effects
- 🔍 **Real-time Search with Autosuggest** - Shows up to 5 product suggestions with images as you type
- 🛒 **Fully Functional Shopping Cart** - Add/remove items, update quantities, view total
- 📱 **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🏷️ **Category Filters** - Filter products by Electronics, Clothing, Sports, etc.
- ⭐ **Product Ratings** - Star ratings displayed for each product
- 🖼️ **Real Product Images** - Using FakeStore API for actual product images
- ✨ **Smooth Animations** - Card hover effects, button animations, cart slide-in

### Backend Features
- 🚀 **RESTful API** - Clean API endpoints for products and search
- 🔎 **Smart Search** - Case-insensitive, partial match search
- 💾 **MongoDB Integration** - Mongoose ODM with auto-seeding
- 🌐 **CORS Enabled** - Ready for cross-origin requests
- 📊 **20 Sample Products** - Pre-loaded with diverse product categories

## 🛠️ Tech Stack

**Frontend:**
- React 18
- CSS3 (Modern gradients, flexbox, grid)
- Axios for API calls
- Responsive design (mobile-first)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

## 🚀 Setup Instructions

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. The `.env` file is already configured with MongoDB Atlas connection:
```
PORT=5000
MONGODB_URI=mongodb+srv://riya:riya@cluster0.mgxhkjy.mongodb.net/productdb?retryWrites=true&w=majority&appName=Cluster0
```

4. Start the backend server:
```bash
npm start
```
✅ Server will run on `http://localhost:5000`
✅ Database will auto-seed with 20 products on first run

### Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```
✅ App will open at `http://localhost:3000`

## 🎯 How to Use

1. **Browse Products** - View all 20 products on the landing page
2. **Search Products** - Type in the search bar to see real-time suggestions with images
3. **Filter by Category** - Use the dropdown to filter by Electronics, Clothing, Sports, etc.
4. **Add to Cart** - Click "Add to Cart" button on any product
5. **View Cart** - Click the cart icon (🛒) in the header to see your items
6. **Manage Cart** - Increase/decrease quantities or remove items
7. **Checkout** - Click "Proceed to Checkout" (demo button)

## 📡 API Endpoints

### Get All Products
```
GET /api/products
```
Returns all 20 products from the database.

**Response:**
```json
[
  {
    "_id": "...",
    "name": "Smartphone Max 20",
    "category": "Electronics",
    "price": 699.99,
    "rating": 4.5,
    "image": "https://fakestoreapi.com/img/..."
  }
]
```

### Search Products
```
GET /api/search?q=phone
```
Returns up to 5 products matching the search term (case-insensitive, partial match).

**Example:** `/api/search?q=phone` returns products with "phone" in the name

## 📁 Project Structure

```
/
├── frontend/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js/css      # Search bar + cart icon
│   │   │   ├── Hero.js/css        # Banner section
│   │   │   ├── Filters.js/css     # Category filter
│   │   │   ├── ProductGrid.js/css # Product layout
│   │   │   ├── ProductCard.js/css # Individual product
│   │   │   └── Cart.js/css        # Shopping cart panel
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── backend/                  # Node.js + Express backend
│   ├── models/
│   │   └── Product.js        # Mongoose schema
│   ├── routes/
│   │   └── products.js       # API routes
│   ├── server.js             # Main server file
│   ├── .env                  # Environment variables
│   └── package.json
└── README.md
```

## 🎨 Key Features Explained

### Search Autosuggest
- Debounced search (300ms delay)
- Shows product image, name, price, and category
- Click suggestion to filter results
- Clear button to reset search

### Shopping Cart
- Slide-in panel from right
- Add/remove products
- Increase/decrease quantities
- Real-time total calculation
- Persistent during session

### Responsive Design
- Desktop: 4-column grid
- Tablet: 3-column grid
- Mobile: Single column
- Touch-friendly buttons
- Optimized images

## 🌟 UI Highlights

- **Gradient Theme:** Purple to blue gradient throughout
- **Card Hover Effects:** Lift and shadow on hover
- **Smooth Animations:** Fade-in, slide-in, pulse effects
- **Modern Typography:** Clean, readable fonts
- **Visual Feedback:** Button states, loading indicators
- **Professional Layout:** Consistent spacing and alignment

## 📝 Sample Product Categories

- **Electronics:** Smartphones, Laptops, Headphones, Watches, Speakers, Keyboards, Mice
- **Clothing:** T-Shirts, Jeans
- **Sports:** Running Shoes, Yoga Mats, Backpacks, Water Bottles
- **Home & Kitchen:** Coffee Makers, Blenders, Pans, Lamps
- **Books:** Fiction Novels, Cookbooks

## 🔧 Troubleshooting

**Backend won't start:**
- Check MongoDB Atlas connection string in `.env`
- Ensure MongoDB Atlas IP whitelist includes your IP (or use 0.0.0.0/0)

**Frontend can't connect to backend:**
- Ensure backend is running on port 5000
- Check `proxy` setting in `frontend/package.json`

**Images not loading:**
- Images are from FakeStore API - check internet connection
- Some images may load slowly on first request

## 🚀 Future Enhancements

- User authentication
- Product details page
- Checkout and payment integration
- Order history
- Product reviews
- Wishlist functionality
- Admin panel for product management

---

**Developed as a MERN Stack Assignment**
Demonstrates full-stack development skills with React, Node.js, Express, and MongoDB.
"# SearchAssignment" 
