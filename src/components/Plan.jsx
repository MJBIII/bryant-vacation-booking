const Plan = () => {
    return (
      <div className='max-w-[1400] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
          {/* left side */}
          <div className='grid grid-cols-2 grid-rows-6 h-80vh'>
              <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/16962872/pexels-photo-16962872/free-photo-of-aerial-footage-of-palm-tree-shadows-on-a-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
              <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/5326951/pexels-photo-5326951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
              <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1074442/pexels-photo-1074442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
              <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3426870/pexels-photo-3426870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
              <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/7902914/pexels-photo-7902914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
          </div>
          {/* right side */}
          <div className='flex flex-col h-full justify-center'>  
              <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
              <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
              <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ipsum voluptate nobis placeat perferendis, ut et harum voluptatibus officia optio odio qui repellendus ipsam ipsa quod labore provident natus fuga!</p>
          <div>
              <button className='border-black text-white mr-4 hover:shadow-xl'>Learn More</button>
              <button className='bg-black text-white border-black hover:shadow-xl'>Book Trip</button>
          </div>
          </div>
      </div>
    )
  }
  
  export default Plan