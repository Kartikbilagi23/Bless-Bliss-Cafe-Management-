import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/Aboutpage";
import MenuPage from "./pages/Menupage";
import ContactPage from "./pages/Contactpage";
import BlogPage from "./pages/Blogpage";
import {Signup} from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/LoginForm';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';

import { AuthProvider, useAuth } from './context/Authcontext';
import { CartProvider } from "./context/Cartcontext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

function AppRoutes() {
  const { user } = useAuth();

  if (!user) {
    // Routes for non-authenticated users
    return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<LoginForm />} /> {/* fallback */}
      </Routes>
    );
  }

  // Routes for authenticated users
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* fallback to home */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
