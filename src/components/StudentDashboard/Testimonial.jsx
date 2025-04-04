import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Hannah Schmitt",
      role: "Cyber Security",
      image: "/api/placeholder/80/80",
      quote: "Amazing platform to study cyber security! Every course is well organized and study material is up to the mark. Haven't found any problem and solved my doubts in no time.",
      rating: 5,
      time: "2h hrs. ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Web Development",
      image: "/api/placeholder/80/80",
      quote: "The learning resources are incredibly comprehensive. I've been able to advance my skills significantly and apply them directly to my work projects.",
      rating: 5,
      time: "1 day ago"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Data Science",
      image: "/api/placeholder/80/80",
      quote: "This platform offered exactly what I needed to transition into data science. The practical exercises and projects were particularly valuable.",
      rating: 4,
      time: "3 days ago"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Generate stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <svg key={index} className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Testimonial Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Testimonials</h2>
          <p className="text-gray-600 mt-1">What our valuable users say about us</p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mt-12">
          {/* Dark Circle Background */}
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-gray-900 rounded-full -z-10"></div>

          {/* Testimonial Card */}
          <div className="relative flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl mx-auto border border-gray-100">
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* User Info */}
                <h3 className="text-lg font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
                <p className="text-sm text-gray-600 mb-4">{testimonials[currentIndex].role}</p>

                {/* Quote */}
                <p className="text-center text-gray-700 mb-4 px-4">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Rating */}
                <div className="flex space-x-1 mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Time */}
                <p className="text-sm text-gray-500">{testimonials[currentIndex].time}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white rounded-full p-2 shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white rounded-full p-2 shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;