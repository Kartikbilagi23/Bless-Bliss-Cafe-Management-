import React, { useEffect, useState } from 'react';

const ClientReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-6 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-10">Our Customers Views</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#fff8f0] rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-amber-900"
                src={review.image}
                alt={review.name}
              />
              <p className="text-gray-700 italic mb-3">
                {review.comment} — {review.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReview;
