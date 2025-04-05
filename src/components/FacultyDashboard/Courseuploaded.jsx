import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CoursesUploaded = () => {
  const [activeTab, setActiveTab] = useState('Ongoing');
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Recent');

  // Sample course data
  const courses = [
    {
      id: 1,
      title: 'The Ultimate Beginners Guide to Cloud Computer',
      category: 'Cloud',
      level: 'Intermediate',
      status: 'Ongoing',
      rating: 0
    },
    {
      id: 2,
      title: 'The Ultimate Beginners Guide to Cloud Computer',
      category: 'Cloud',
      level: 'Intermediate',
      status: 'Completed',
      rating: 4
    },
    {
      id: 3,
      title: 'The Ultimate Beginners Guide to Cloud Computer',
      category: 'Cloud',
      level: 'Intermediate',
      status: 'Completed',
      rating: 5
    }
  ];

  // Filter courses based on active tab
  const filteredCourses = courses.filter(course => course.status === activeTab);
  
  // Sort options
  const sortOptions = ['Recent', 'Oldest', 'Highest Rated', 'Lowest Rated'];
  
  // Handle sort selection
  const handleSortSelect = (option) => {
    setSortBy(option);
    setSortMenuOpen(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Courses Uploaded</h2>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-6 text-center ${activeTab === 'Ongoing' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Ongoing')}
        >
          Ongoing
        </button>
        <button
          className={`py-2 px-6 text-center ${activeTab === 'Completed' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Completed')}
        >
          Completed
        </button>
      </div>
      
      {/* Sort Button */}
      <div className="flex justify-end mb-4 relative">
        <button
          className="flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-lg bg-white text-sm"
          onClick={() => setSortMenuOpen(!sortMenuOpen)}
        >
          <span className="text-gray-700">Sort</span>
          <ChevronDown size={16} className={`transition-transform ${sortMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Sort Dropdown */}
        {sortMenuOpen && (
          <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md border border-gray-200 z-10 w-40 py-1">
            {sortOptions.map((option) => (
              <button
                key={option}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${sortBy === option ? 'bg-gray-50 font-medium' : ''}`}
                onClick={() => handleSortSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
            {/* Course Image */}
            <div className="h-36 bg-gray-900 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Rating stars for completed courses */}
              {course.status === 'Completed' && (
                <div className="absolute bottom-2 right-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < course.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
            </div>
            
            {/* Course Info */}
            <div className="p-4">
              {/* Tags */}
              <div className="flex gap-2 mb-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  {course.category}
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                  {course.level}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-gray-800 font-medium text-sm">
                {course.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesUploaded;