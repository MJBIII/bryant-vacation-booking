const Rooms = () => {
    return (
      <div className='max-w-[1400px] mx-auto my-20 py-16 px-8 bg-gradient-to-b from-white via-blue-200 to-white'>
          <div className='grid lg:grid-cols-3 gap-4'>
              {/* Text Section */}
              <div className='lg:col-span-1 flex flex-col justify-center'>
                  <h3 className='text-4xl md:text-5xl font-bold'>Fine Interior Rooms</h3>
                  <p className='text-xl py-4'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Voluptate temporibus ducimus eius, qui animi nesciunt.
                  </p>
              </div>
              {/* Image Section */}
              <div className='grid grid-cols-2 lg:col-span-2 gap-4 items-start'>
                  <div className='grid grid-rows-2 gap-4'>
                      <img 
                          className='object-cover w-full h-[250px]' 
                          src='https://images.pexels.com/photos/14746040/pexels-photo-14746040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                          alt='Interior Room 1'
                      />
                      <img 
                          className='object-cover w-full h-[250px]' 
                          src='https://images.pexels.com/photos/10819861/pexels-photo-10819861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                          alt='Interior Room 3'
                      />
                  </div>
                  <img 
                      className='object-cover w-full h-[510px]' 
                      src='https://images.pexels.com/photos/12720684/pexels-photo-12720684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                      alt='Interior Room 2'
                  />
              </div>
          </div>
      </div>
    );
  };
  
  export default Rooms;