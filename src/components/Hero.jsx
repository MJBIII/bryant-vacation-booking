const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="top-0 left-0 w-full h-full object-cover"  // Ensures image covers full screen
        src="https://images.pexels.com/photos/30826586/pexels-photo-30826586/free-photo-of-tropical-paradise-in-tobago-with-palm-lined-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" /> {/* Overlay */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl py-2 text-1xl">Private Beaches & Getaways</h1>
          <p className="max-w-[600px] drop-shadow-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nemo dolorum voluptas, veniam cupiditate sed. Ipsam
            distinctio aperiam laborum assumenda sunt quam provident quos mollitia! Eligendi eum molestiae eos necessitatibus.
          </p>
          <button className="bg-white text-white py-2 px-6 rounded-md hover:bg-gray-200 transition-all duration-200">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
