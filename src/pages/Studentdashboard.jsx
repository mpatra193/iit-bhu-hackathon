// Studentdashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../components/StudentDashboard/Sidebar';
import Navbar from '../components/StudentDashboard/Navbar';
import Hero from '../components/StudentDashboard/Hero';
import CourseSection from '../components/StudentDashboard/CourseSection';
import InstructorSection from '../components/StudentDashboard/InstructorSection';
import Testimonial from '../components/StudentDashboard/Testimonial';
import Footer from '../components/StudentDashboard/Footer';

import {
  faCompass, faBook, faTasks, faChartLine, faBullhorn
} from '@fortawesome/free-solid-svg-icons';

import {
  trendingCourses, topRatedCourses, newCourses, instructors
} from '../data';

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
    <>
      <div className="flex min-h-screen bg-white">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeMenuItem={activeMenuItem}
          handleMenuItemClick={handleMenuItemClick}
          menuItems={menuItems}
        />

        <div className="flex-1 flex flex-col">
          <Navbar toggleSidebar={toggleSidebar} />
          <Hero activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="max-w-7xl mx-auto space-y-20">
            <div className='bg-[#262525] w-[98%] h-[184px] p-5 mb-90 mt-20' style={{ borderRadius: "12px", flexShrink: "0" }}>
              <CourseSection title="Trending Courses" courses={trendingCourses} isFirst={true} />
            </div>
            <CourseSection title="Top Rated Courses" courses={topRatedCourses} />
            <CourseSection title="New on Platform" courses={newCourses} />
            <div className='bg-[#262525] w-[98%] h-[10%] p-5 mb-15' style={{ borderRadius: "12px", flexShrink: "0" }}>
              <InstructorSection title="Meet our TOP Instructors" instructors={instructors} isLast={true} />
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <Footer />
    </>
  );
};

export default Studentdashboard;
