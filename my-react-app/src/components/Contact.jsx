import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    console.log("Form submitted:", data);
    e.target.reset(); 
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-10">Get in Touch</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
        {/* Left Info Section */}
        <div className="flex flex-col justify-center text-left space-y-4">
          <h3 className="text-2xl font-semibold text-amber-900 mb-4">Visit Us</h3>
          <p className="text-gray-700">📍 123 Brew Street, Coffee City</p>
          <p className="text-gray-700">📞 +91 98765 43210</p>
          <p className="text-gray-700">📧 kartik@23.com</p>
          <p className="text-gray-700 mt-4">
            Open Hours: <br /> Mon - Sun: 8:00 AM - 10:00 PM
          </p>
        </div>

        {/* Right Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#fff8f0] shadow-md rounded-2xl p-6 text-left space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-gray-800 mb-2 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-800 mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-800 mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message..."
              required
              className="w-full border border-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <button
            type="submit"
            className="bg-amber-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-amber-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
