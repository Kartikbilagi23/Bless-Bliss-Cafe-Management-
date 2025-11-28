import videoFile from '../assets/images/coffee-live.mp4';
const Banner = () => {
  return (
    <section className="relative h-[80vh] flex justify-center items-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-[100]"
      >
      <source src={videoFile} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="bg-black/60 p-8 md:p-10 rounded-xl text-center shadow-lg z-[200]">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Cafeteria
        </h2>
        <p className="text-lg mb-6">Eat, relax and chat</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition duration-200">
          Explore Menu
        </button>
      </div>
    </section>
  );
};

export default Banner;
