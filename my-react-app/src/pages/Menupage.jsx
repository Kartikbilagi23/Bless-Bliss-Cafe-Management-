import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/Cartcontext";

const Menupage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error(err));
  }, []);

  // Group menu items by category
  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="bg-[#fffdf9] text-gray-800 min-h-screen">
      {/* Header */}
      <div className="text-center py-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Menu</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Crafted with love and brewed to perfection — explore our special selections below.
        </p>
      </div>

      {/* Menu Categories */}
      <div className="px-4 sm:px-8 pb-12">
        {Object.keys(groupedMenu).map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6">{category}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {groupedMenu[category].map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden w-72 sm:w-80 transform hover:scale-105 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={`http://localhost:5000${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-5 text-center flex flex-col items-center">
                    <h4 className="text-xl font-semibold mb-1">{item.name}</h4>
                    <p className="text-gray-600 mb-2">{item.desc}</p>
                    <p className="text-amber-700 font-bold text-lg mb-3">₹{item.price}</p>
                    <button
                      onClick={() => addToCart(item)}
                      className="mt-auto bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menupage;
