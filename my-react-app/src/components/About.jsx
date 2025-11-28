const About = () => {
    return (
        <>
<section className="py-16 bg-[#fff8f0]">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
    <div className="md:w-1/2">
      <img className="rounded-2xl shadow-lg" src="/img-1.png" alt="Cafe" />
    </div>

    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-bold text-amber-900 mb-4">About Cafe</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        <span className="font-semibold text-amber-800">Cafe Aroma</span>, we believe that
        coffee is more than just a drink — it's an experience. From our freshly brewed espresso
        to our cozy atmosphere, every detail is crafted to give you comfort and joy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Our beans are sourced ethically from the best farms around the world, roasted with
        precision, and served with love.
      </p>
      <button className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 font-medium">
        Learn more
      </button>
    </div>
  </div>
</section>



        </>
    )
}
export default About;