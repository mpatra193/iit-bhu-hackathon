import React from 'react';
import bgimg from '../../assets/dashboard_heroimg.png';
import exp from '../../assets/Group 34143.png';

const Hero = ({ activeTab, setActiveTab }) => {
    const tabs = ['Explore', 'Learn', 'Grow'];

    return (
        <div className="flex flex-wrap items-center p-4 md:p-6 relative overflow-hidden">
            {/* Left Content */}
            <div className="flex-1 min-w-[300px] z-10">
                <h2 className="text-xl md:text-5xl text-gray-700 mb-1">Upgrade your skill for better</h2>
                <h1 className="text-3xl md:text-7xl font-bold text-gray-800 mb-6 md:mb-8">FUTURE</h1>

                <div className="relative flex gap-6 md:gap-8 mb-6 md:mb-8">
                    {/* explore grow ... */}
                    <img src={exp}  />
                </div>

                <div className="flex items-center mt-6">
                    <div className="flex items-center justify-center w-6 h-6 mr-2 bg-gray-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3 h-3 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h.01M15 10h.01M12 10h.01" />
                        </svg>
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-bold">
                        120+ Instructors and more than 25,000 learners joined globally
                    </div>
                </div>
            </div>

            {/* Right Content (Image with Background Elements) */}
            <div className="flex-1 min-w-[300px] flex justify-center items-center p-4 relative">
                {/* Yellow Circle Background */}
                <div className="absolute right-16 top-4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-yellow-100 z-0"></div>

                {/* Blue Blob Background */}
                <div className="absolute right-4 bottom-4 w-40 h-40 md:w-56 md:h-56 rounded-full bg-blue-100 z-0"></div>

                {/* Decorative Circles */}
                <div className="absolute top-8 right-8 w-4 h-4 border border-gray-300 rounded-full z-10"></div>
                <div className="absolute bottom-16 right-32 w-4 h-4 border border-gray-300 rounded-full z-10"></div>
                <div className="absolute top-32 left-8 w-4 h-4 border border-gray-300 rounded-full z-10"></div>

                {/* Student Image */}
                <img
                    src={bgimg}
                    alt="Student with books"
                    className="max-w-full h-auto relative z-10"
                />
            </div>
        </div>
    );
};

export default Hero;
