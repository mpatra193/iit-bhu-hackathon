// App.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass, faBook, faTasks, faChartLine,
  faBullhorn, faSignOutAlt, faBars, faSearch,
  faBell, faGlobe
} from '@fortawesome/free-solid-svg-icons';
import bgimg from '../assets/dashboard_heroimg.png'

import CourseSection from "../components/StudentDashboard/CourseSection"
import InstructorSection from "../components/StudentDashboard/InstructorSection"
import { trendingCourses, topRatedCourses, newCourses, instructors } from "../data"
import Testimonial from '../components/StudentDashboard/Testimonial';
import Footer from '../components/StudentDashboard/Footer';






const Studentdashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Explore Courses');
  const [activeTab, setActiveTab] = useState('Explore');

  const menuItems = [
    { name: 'Explore Courses', icon: faCompass },
    { name: 'My Lectures', icon: faBook },
    { name: 'Assignment', icon: faTasks },
    { name: 'Report', icon: faChartLine },
    { name: 'Announcement', icon: faBullhorn },
  ];

  const tabs = ['Explore', 'Learn', 'Grow'];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuItemClick = (name) => {
    setActiveMenuItem(name);
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`w-56 bg-gray-900 text-white fixed md:static h-full z-50 transition-all duration-300 ${sidebarOpen ? 'left-0' : '-left-56 md:left-0'
          }`}
      >
        <div className="p-5 border-b border-gray-800">
          <h2 className="text-xl font-bold tracking-widest">DASHBOARD</h2>
        </div>

        <div className="py-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center px-5 py-4 cursor-pointer transition-colors hover:bg-gray-800 ${activeMenuItem === item.name ? 'bg-gray-800 border-l-4 border-purple-500' : ''
                }`}
              onClick={() => handleMenuItemClick(item.name)}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-3 text-lg" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-gray-800 px-5 py-4 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
          <span>Logout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button
              className="text-xl md:hidden mr-4"
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="relative ml-2 max-w-md w-full">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative mr-5 cursor-pointer">
              <FontAwesomeIcon icon={faBell} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"></div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                U
              </div>
              <span className="ml-2 text-sm text-gray-600 hidden md:block">User_name</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="flex flex-wrap p-6">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-3xl text-gray-700 mb-2">Upgrade your skill for better</h2>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">FUTURE</h1>

            {/* Tabs */}
            <div className="relative flex gap-8 mb-8">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`px-4 py-2 cursor-pointer font-medium ${activeTab === tab ? 'text-purple-500' : 'text-gray-500'
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
              <div
                className="absolute bottom-0 h-1 w-20 bg-purple-500 rounded-md transition-all duration-300"
                style={{ left: `${tabs.indexOf(activeTab) * 96}px` }}
              ></div>
            </div>

            {/* Stats */}
            <div className="flex items-center mt-6">

              <div className="text-sm text-gray-600">
                120+ Instructors and more than 25,000 learners joined globally
              </div>
            </div>


          </div>

          {/* Hero Image */}
          <div className="flex-1 min-w-[300px] flex justify-center items-center p-4">
            <img
              src={bgimg}
              alt="Student with books"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>


        {/* courses */}


        <div className="max-w-7xl mx-auto space-y-8">
          <CourseSection title="Trending Courses" courses={trendingCourses} />

          <CourseSection title="Top Rated Courses" courses={topRatedCourses} />

          <CourseSection title="New on Platform" courses={newCourses} />

          <InstructorSection title="Meet our TOP Instructors" instructors={instructors} />
        </div>
        <Testimonial  />
        <Footer  />
      </div>
      
      
    </div>


  );
};

export default Studentdashboard;