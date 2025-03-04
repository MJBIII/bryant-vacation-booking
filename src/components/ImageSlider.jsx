import {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {

    const slides = [
        {
            url: 'https://images.pexels.com/photos/30133542/pexels-photo-30133542/free-photo-of-elegant-plated-scallops-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Scallops',
        },
        {
            url: 'https://images.pexels.com/photos/6240973/pexels-photo-6240973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Gnocchi',
        },
        {
            url: 'https://images.pexels.com/photos/18015000/pexels-photo-18015000/free-photo-of-roasted-beef-with-sauce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Steak',
        },
        {
            url: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Lobster',
        },
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => { 
        setCurrentIndex(slideIndex);
    }

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[currentIndex].url})`}}
        ></div>
    {/* Left Arrow */}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>

    <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
            <div className='text-2xl cursor-pointer' 
            key={slideIndex} 
            onClick={() => goToSlide(slideIndex)}
            >
                <RxDotFilled />
            </div>
        ))}
    </div>

    </div>
  );
};

export default ImageSlider;