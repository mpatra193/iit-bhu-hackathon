import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(2);
  
  const testimonials = [
    {
      id: 1,
      quote: "Amazing platform to study cyber security. Every course is well organized and study material is up to the mark. Haven't faced any problem browsing through the platform.",
      author: "Hannah Schmitt",
      role: "Cyber Security",
      avatar: "/api/placeholder/40/40",
      rating: 5
    },
    {
      id: 2,
      quote: "Amazing platform to study cyber security. Every course is well organized and study material is up to the mark. Haven't faced any problem browsing through the platform.",
      author: "Hannah Schmitt",
      role: "Cyber Security",
      avatar: "/api/placeholder/40/40",
      rating: 5
    },
    {
      id: 3,
      quote: "Amazing platform to study cyber security. Every course is well organized and study material is up to the mark. Haven't faced any problem browsing through the platform.",
      author: "Hannah Schmitt",
      role: "Cyber Security",
      avatar: "/api/placeholder/40/40",
      rating: 5
    },
    {
      id: 4,
      quote: "Amazing platform to study cyber security. Every course is well organized and study material is up to the mark. Haven't faced any problem browsing through the platform.",
      author: "Hannah Schmitt",
      role: "Cyber Security",
      avatar: "/api/placeholder/40/40",
      rating: 5
    },
    {
      id: 5,
      quote: "Amazing platform to study cyber security. Every course is well organized and study material is up to the mark. Haven't faced any problem browsing through the platform.",
      author: "Hannah Schmitt",
      role: "Cyber Security",
      avatar: "/api/placeholder/40/40",
      rating: 5
    }
  ];
  
  const handlePrev = () => {
    setActiveSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Decorative Elements */}
        <span className="absolute top-0 left-1/2 transform -translate-x-32 -translate-y-6">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L17.2 9.64L25.2 10.88L19.6 16.56L21.04 24.72L14 20.72L6.96 24.72L8.4 16.56L2.8 10.88L10.8 9.64L14 2Z" fill="#AD7BFF" fillOpacity="0.2" stroke="#AD7BFF" strokeWidth="2"/>
          </svg>
        </span>
        
        <h2 className="text-center text-3xl font-semibold text-gray-700 mb-12 relative">
          Testimonials
          <span className="absolute -right-6 top-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4L10 14L4 8" stroke="#AD7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          {/* Left Text */}
          <div className="w-full md:w-1/3">
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 leading-tight">
              What our valuable users say about us.
            </h3>
            
            {/* Navigation Buttons */}
            <div className="mt-6 flex gap-3">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Testimonial Card */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FF8A00" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6">
                "{testimonials[activeSlide].quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonials[activeSlide].avatar} 
                  alt={testimonials[activeSlide].author} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold">{testimonials[activeSlide].author}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeSlide].role}</p>
                </div>
              </div>
              
              {/* Quote decoration */}
              <div className="absolute bottom-8 right-8 text-gray-100 opacity-50">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 34H22V24H16V18H12V34ZM26 34H36V24H30V18H26V34Z" />
                </svg>
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === activeSlide ? 'w-6 bg-purple-600' : 'bg-gray-300'
                    } transition-all duration-300`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;