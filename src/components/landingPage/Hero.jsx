import React from 'react';
import { ArrowRight } from 'lucide-react';
import bgimg from '../../assets/heroimg.png'

function Hero() {
    return (
        <section className="flex px-10 py-16 items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">
            A new way of <span className="text-indigo-600">Learning</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg">
            Learn the trending courses and boost your career to achieve your goal.
            You can easily Enroll to your interested course and get reward after
            completion
          </p>
          <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium flex items-center">
            Join now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
        <div className="w-1/3 relative">
          <img 
            src={bgimg} 
            alt="Student with thumbs up" 
            className="w-90"
          />
        </div>
      </section>
    );
}

export default Hero;