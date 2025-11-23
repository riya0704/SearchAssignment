const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products');
const Product = require('./models/Product');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    seedDatabase();
  })
  .catch((error) => console.error('MongoDB connection error:', error));

// Seed database with sample products
async function seedDatabase() {
  try {
    const count = await Product.countDocuments();

    if (count === 0) {
      const sampleProducts = [
        {
          name: 'Smartphone Max 20',
          category: 'Electronics',
          price: 699.99,
          rating: 4.5,
          image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Wireless Headphones Pro',
          category: 'Electronics',
          price: 199.99,
          rating: 4.7,
          image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Laptop Ultra 15',
          category: 'Electronics',
          price: 1299.99,
          rating: 4.8,
          image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Smart Watch Series 5',
          category: 'Electronics',
          price: 399.99,
          rating: 4.3,
          image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Bluetooth Speaker Mini',
          category: 'Electronics',
          price: 49.99,
          rating: 4.2,
          image: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Gaming Mouse RGB',
          category: 'Electronics',
          price: 79.99,
          rating: 4.6,
          image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Mechanical Keyboard',
          category: 'Electronics',
          price: 129.99,
          rating: 4.7,
          image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'USB-C Hub Adapter',
          category: 'Electronics',
          price: 39.99,
          rating: 4.1,
          image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Cotton T-Shirt Pack',
          category: 'Clothing',
          price: 29.99,
          rating: 4.4,
          image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Denim Jeans Classic',
          category: 'Clothing',
          price: 59.99,
          rating: 4.5,
          image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Running Shoes Sport',
          category: 'Sports',
          price: 89.99,
          rating: 4.6,
          image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Yoga Mat Premium',
          category: 'Sports',
          price: 34.99,
          rating: 4.3,
          image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Coffee Maker Deluxe',
          category: 'Home & Kitchen',
          price: 149.99,
          rating: 4.5,
          image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Blender Pro 3000',
          category: 'Home & Kitchen',
          price: 79.99,
          rating: 4.4,
          image: 'https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Non-Stick Pan Set',
          category: 'Home & Kitchen',
          price: 99.99,
          rating: 4.6,
          image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'LED Desk Lamp',
          category: 'Home & Kitchen',
          price: 44.99,
          rating: 4.2,
          image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Fiction Novel Bestseller',
          category: 'Books',
          price: 14.99,
          rating: 4.7,
          image: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Cookbook Healthy Meals',
          category: 'Books',
          price: 24.99,
          rating: 4.5,
          image: 'https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Backpack Travel Pro',
          category: 'Sports',
          price: 69.99,
          rating: 4.4,
          image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Water Bottle Insulated',
          category: 'Sports',
          price: 24.99,
          rating: 4.3,
          image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ];

      await Product.insertMany(sampleProducts);
      console.log('Database seeded with sample products');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Routes
app.use('/api', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Product Landing Page API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
