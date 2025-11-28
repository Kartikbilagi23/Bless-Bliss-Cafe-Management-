import { useEffect, useState } from "react";

const CoffeeOrder = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then((res) => res.json())
      .then((data) => {
        const featured = data.filter((item) => item.featured);
        setCoffees(featured);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-16 bg-[#fff8f0]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-10">
          Our Coffee Specials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {coffees.map((coffee, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 max-w-[320px]"
            >
              <div className="h-40 bg-[#fffaf5] flex items-center justify-center overflow-hidden">
                <img
                  src={`http://localhost:5000${coffee.image}`}
                  alt={coffee.name}
                  className="h-full object-contain"
                />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-semibold text-amber-900 mb-2">
                  {coffee.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{coffee.desc}</p>
                <p className="text-lg font-bold text-amber-800">
                  ₹{coffee.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeOrder;
