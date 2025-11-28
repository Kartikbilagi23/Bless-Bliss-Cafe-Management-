import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import  {useCart } from "../context/Cartcontext";

import homeIcon from "/src/assets/images/home.svg";
import aboutIcon from "/src/assets/images/about.svg";
import menuIcon from "/src/assets/images/menu.svg";
import contactIcon from "/src/assets/images/contact.svg";
import logo from "/src/assets/images/logo.png";
import BlogIcon from "/src/assets/images/BlogIcon.svg";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const links = [
    { name: "Home", to: "/", icon: homeIcon },
    { name: "About", to: "/about", icon: aboutIcon },
    { name: "Menu", to: "/menu", icon: menuIcon },
    { name: "Contact", to: "/contact", icon: contactIcon },
    { name: "Blog", to: "/blog", icon: BlogIcon },
  ];

  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="relative w-full h-10 md:h-24 shadow-lg top-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10"></div>
      <div className="relative flex flex-col items-center justify-around h-full px-6 md:px-12 text-white">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Cafe Logo"
            className="h-[48px] w-[48px] object-contain"
          />
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-yellow-200 flex items-center gap-2">
            Beans & Bliss
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-[15px] items-center list-none">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="flex items-center gap-2 text-lg hover:text-yellow-300 transition-all duration-300"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-[20px] h-[20px] opacity-90 hover:opacity-100 transition"
                />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}

          {/* 🛒 Cart Icon */}
          <li>
            <button
              onClick={() => navigate("/cart")}
              className="relative flex items-center justify-center p-2 hover:text-yellow-300 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </li>

          {/* ✅ Conditional Login / Logout */}
          {user ? (
            <>
              <li>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-lg hover:text-yellow-300 transition-all duration-300"
                >
                  👤 {user.name || "Profile"}
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-yellow-500 text-black font-semibold px-3 py-1 rounded hover:bg-yellow-400 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/login"
                className="bg-yellow-500 text-black font-semibold px-3 py-1 rounded hover:bg-yellow-400 transition"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
