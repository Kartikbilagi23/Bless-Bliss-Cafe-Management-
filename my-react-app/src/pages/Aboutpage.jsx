import react from 'react'
import coffee from '../assets/images/coffee.webp'
import dessert from '../assets/images/dessert.jpg'
const Aboutpage = () => {
  return (
    <div className="min-h-screen bg-[#fff8f0] text-gray-500 flex flex-col items-center py-20 px-6">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-amber-900 mb-6">About Beans & Bliss</h1>
      {/* Intro Para */}
      <p className="max-w-3xl text-lg text-gray-700 leading-relaxed text-center">Welcome to
        <span className="font-semibold text-amber-800"> Beans & Bliss</span> — a cozy corner 
        where the comforting scent of freshly ground coffee meets the joy of heartfelt conversations. 
        Founded with a passion for creating a space that feels like home, we blend
        <span className="italic"> warmth, flavor,</span>and
        <span className="italic">&nbsp;community</span> in every cup we serve.
      </p>
      {/* About para */}
      <div className="max-w-4xl mt-10 space-y-6 text-center">
        <p className="text-gray-700">          Our beans are sourced from trusted farms that share our love for sustainability and quality. 
          From rich&nbsp;
          <span className="text-amber-700 font-medium">Espressos&nbsp;</span>
          <span className="text-amber-700 font-medium">Lattes&nbsp;</span>and indulgent&nbsp;
          <span className="text-amber-700 font-medium">desserts</span>, every sip and bite is crafted with care.
        </p>
        <p className="text-gray-700"> Whether you’re catching up with friends, getting some work done, or simply enjoying a quiet moment 
          to yourself, Beans & Bliss welcomes you with open arms and the aroma of something special brewing.</p>
        <p className="text-gray-700 font-medium italic"> Because for us, coffee isn’t just a drink — it’s a moment, a story, and a connection.</p>
      </div>
      {/* Mission and promise card */}
      <div className="mt-12 flex flex-col sm:flex-row gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-72">
          <h3 className="text-xl font-semibold text-amber-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">To serve not just great coffee, but a comforting experience that inspires connection and creativity.</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 w-72">
          <h3 className="text-xl font-semibold text-amber-800 mb-2">Our Promise</h3>
          <p className="text-gray-600">Every cup brewed with honesty, passion, and a little sprinkle of love — because you deserve nothing less.</p>
        </div>
      </div>
      {/* 3-Image Gallery */}
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img src={coffee} alt="Coffee-cup" className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img src={dessert} alt="2"  className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"/>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage
