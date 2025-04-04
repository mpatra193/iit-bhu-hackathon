import React, { useState } from 'react';
import courseimg from '../../assets/course.png'

const Courses = (props) => {
  const [activeFilter, setActiveFilter] = useState('Cloud Computer');
  
  const categories = [
    'Cloud Computer',
    'Cyber Security',
    'Design',
    'Data Science'
  ];
  
  const courses = [
    {
      id: 1,
      title: 'The Ultimate Beginners Guide to Cloud Computer',
      level: 'Beginner',
      image: courseimg
    },
    {
      id: 2,
      title: 'The Ultimate Beginners Guide to Cloud Computer',
      level: 'Expert',
      image: courseimg
    },
    {
      id: 3,
      title: 'The Ultimate Beginners Guide to Cloud Computer',
      level: 'Beginner',
      image: courseimg
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        {props.title}
      </h2>
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
              activeFilter === category 
                ? 'bg-violet-600 text-white' 
                : 'bg-violet-100 text-violet-700 hover:bg-white hover:text-violet-700 hover:border-violet-600 border border-transparent'
            }`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Course Cards - Flex row on desktop */}
      <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex-shrink-0 w-full md:w-80"
          >
            <div className="relative">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            </div>
            <div className="p-4">
              <span className={`inline-block px-3 py-1 text-xs rounded-full mb-3 ${
                course.level === 'Beginner' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {course.level}
              </span>
              <h3 className="text-lg font-medium text-gray-800">{course.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="flex justify-between mt-6">
        <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
          <span className="sr-only">Previous</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
          <span className="sr-only">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Courses;