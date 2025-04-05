import React from 'react';
import user from '../../assets/faculty.png'
import bgimg from '../../assets/Frame 8779.png'


const Hero = () => {
  return (
    <div className="w-full relative">
      {/* Blue wave background with rounded corners */}
      <div className="w-[95%] m-auto h-32 md:h-36 lg:h-40  relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
        {/* SVG wave effect overlay */}
        <div className="absolute w-full h-full">
          <img src={bgimg}  className='w-full h-full object-cover rounded-lg'/>
        </div>
      </div>
      
      {/* Profile content section - positioned to create half overlap */}
      <div className="flex flex-col items-center relative">
        {/* Profile picture - positioned absolutely to create perfect half overlap */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md z-10">
          <img 
            src={user} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile information - pushed down to make room for the profile picture */}
        <div className="mt-16 md:mt-20 text-center">
          <h2 className="text-lg font-semibold text-gray-800">Priya Rawat</h2>
          
          {/* Stats row */}
          <div className="flex justify-center mt-1 space-x-6 text-sm text-gray-600 flex-wrap">
            <div className="flex items-center">
              <span className="mr-1">👥</span>
              <span>56 Learners</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">📚</span>
              <span>02 Courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;