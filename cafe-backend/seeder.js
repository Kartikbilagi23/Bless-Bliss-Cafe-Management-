// seeder.js
const mongoose = require('mongoose');
const MenuItem = require('./models/Menuitems');
const Review = require('./models/Review');
const Blog = require('./models/Blog');

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Menu Items (with featured)
const menuItems = [
  { name: "Espresso", desc: "Strong and bold, pure caffeine bliss.", price: 120, category: "Hot Coffees", image: "/images/espresso.png", featured: true },
  { name: "Cappuccino", desc: "Creamy froth with a rich coffee base.", price: 130, category: "Hot Coffees", image: "/images/cappuccino.jpg", featured: false },
  { name: "Americano", desc: "Smooth and long black coffee.", price: 110, category: "Hot Coffees", image: "/images/americano.jpg", featured: false },
  { name: "Iced Latte", desc: "Cool and creamy delight.", price: 150, category: "Cold Coffees", image: "/images/icedlatte.jpg", featured: true },
  { name: "Cold Brew", desc: "Slow-brewed, smooth and refreshing.", price: 160, category: "Cold Coffees", image: "/images/coldbrew.jpg", featured: false },
  { name: "Mocha Frappe", desc: "Chocolate and coffee blended with ice.", price: 170, category: "Cold Coffees", image: "/images/mochafrappe.jpg", featured: false },
  { name: "Chocolate Muffin", desc: "Soft, chocolaty and freshly baked.", price: 80, category: "Snacks", image: "/images/chocomuffin.jpg", featured: false },
  { name: "Veg Sandwich", desc: "Fresh vegetables with a tasty spread.", price: 90, category: "Snacks", image: "/images/vegsandwich.jpg", featured: false },
  { name: "French Fries", desc: "Crispy golden fries served with ketchup.", price: 70, category: "Snacks", image: "/images/fries.jpg", featured: false },
  { name: "Caramel Cake", desc: "Rich caramel topping on moist cake.", price: 90, category: "Desserts", image: "/images/caramelcake.jpg", featured: true },
  { name: "Brownie", desc: "Decadent chocolate brownie with nuts.", price: 85, category: "Desserts", image: "/images/brownie.jpg", featured: false },
  { name: "Cheesecake", desc: "Creamy cheesecake with a buttery crust.", price: 95, category: "Desserts", image: "/images/cheesecake.jpg", featured: false }
];

// ✅ Reviews
const reviews = [
  { name: "Sara Khan", comment: "The cappuccino here is heavenly!", image: "http://localhost:5000/images/person1.png" },
  { name: "Aarav Mehta", comment: "I stop by every morning before work.", image: "http://localhost:5000/images/person2.webp" }
];

// ✅ Blogs
const blogs = [
  { 
    title: "Coffee Brewing Tips", 
    content: "Learn to brew the perfect espresso at home...", 
    author: "Kartik",       // added author
    image: "http://localhost:5000/images/blog1.webp" 
  }
];

// ✅ Seed function
const seedDB = async () => {
  try {
    // Clear existing data
    await MenuItem.deleteMany({});
    await Review.deleteMany({});
    await Blog.deleteMany({});

    // Insert new data
    await MenuItem.insertMany(menuItems);
    await Review.insertMany(reviews);
    await Blog.insertMany(blogs);

    console.log('✅ Database seeded successfully');
  } catch (err) {
    console.error('❌ Error seeding database:', err);
  } finally {
    mongoose.disconnect();
  }
};

seedDB();
