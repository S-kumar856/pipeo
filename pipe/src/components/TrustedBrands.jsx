import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your logo images here
import logo1 from '../assets/logos/logo1.png';
import logo2 from '../assets/logos/logo2.png';
import logo3 from '../assets/logos/logo3.png';
import logo4 from '../assets/logos/logo4.png';
import logo5 from '../assets/logos/logo5.png';
import logo6 from '../assets/logos/logo6.png';

const TrustedBrands = () => {
  // Sample logos from the image
  const logos = [
    { id: 1, src: logo1, alt: 'Logo 1' },
    { id: 2, src: logo2, alt: 'Logo 2' },
    { id: 3, src: logo3, alt: 'Logo 3' },
    { id: 4, src: logo4, alt: 'Logo 4' },
    { id: 5, src: logo5, alt: 'Logo 5' },
    { id: 6, src: logo6, alt: 'Logo 6' },
  ];

  // Revised settings to prevent bouncing when dragging
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    swipeToSlide: true,           // This allows users to swipe to a slide
    draggable: true,              // Ensures dragging is enabled
    touchThreshold: 10,           // Makes dragging more responsive (lower number = more sensitive)
    waitForAnimate: false,        // Don't wait for animation to finish when manually navigating
    pauseOnFocus: true,           // Pause autoplay when slider is focused
    pauseOnDotsHover: true,       // Pause autoplay when hovering on dots
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full bg-gray-100 py-4 md:py-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className='flex items-center justify-center'>
          <h2 className="heading3 text-center text-xl md:text-3xl md:w-190 lg:text-4xl font-bold textcolor1 mb-4 md:mb-6">
            Trusted by 25,000+ world-class brands and organizations of all sizes
          </h2>
        </div>

        <div className="max-w-9xl px-0 md:px-2 md:py-6 lg:py-12 lg:px-15">
          <Slider {...settings} className="mx-auto">
            {logos.map((logo) => (
              <div key={logo.id} className="px-2 sm:px-3 flex items-center justify-center h-15 md:h-15 lg:h-22">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-18 md:h-18 lg:h-28 lg:w-50 md:w-50 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;