import React, { useContext } from "react";
import { CartContext } from "../context/Cartcontext";

function CartPage() {
  const { cart, total, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          items: cart,
          totalAmount:total,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Order placed successfully!");
      } else {
        alert(data.error || "Order failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf9] text-gray-800 p-4 md:p-8 flex flex-col">
      <h2 className="text-3xl font-bold text-center mb-6 md:mb-8">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
      ) : (
        <div className="flex-1 space-y-4 md:space-y-6 max-w-3xl mx-auto w-full">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center sm:justify-between bg-white p-4 sm:p-5 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={`http://localhost:5000${item.image}`}
                  alt={item.name}
                  className="w-[45vw] h-24 sm:w-20 sm:h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-amber-700 font-bold mt-1">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
                <button
                  onClick={() => updateQuantity(item._id, -1)}
                  disabled={item.quantity === 1}
                  className="px-3 py-1 bg-gray-200 rounded font-bold text-lg hover:bg-gray-300 transition disabled:opacity-50"
                >
                  –
                </button>
                <span className="w-6 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, +1)}
                  className="px-3 py-1 bg-gray-200 rounded font-bold text-lg hover:bg-gray-300 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="ml-2 sm:ml-4 text-red-500 font-bold text-lg hover:text-red-700 transition"
                >
                  ×
                </button>
              </div>
            </div>
          ))}

          {/* Total and Checkout */}
          <div className="sticky bottom-0 bg-[#fffdf9] py-4 mt-4 md:mt-6 rounded-t-lg shadow-inner flex flex-col items-center">
            <p className="text-2xl font-bold mb-3">Total: ₹{total}</p>
            <button
              onClick={handleCheckout}
              className="bg-amber-700 text-white py-3 px-8 rounded-lg hover:bg-amber-800 transition w-full sm:w-auto"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
