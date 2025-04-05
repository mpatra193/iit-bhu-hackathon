import React, { useState } from 'react';
import Sidebar from '../components/StudentDashboard/Sidebar';
import Navbar from '../components/StudentDashboard/Navbar';
import Hero from '../components/FacultyDashboard/Hero';
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
import CoursesUploaded from '../components/FacultyDashboard/Courseuploaded';
import Feedback from '../components/FacultyDashboard/Feedback';

const Facultydashboard = () => {
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

        <div className="max-w-7xl mx-auto space-y-8">
          <CoursesUploaded  />
          <Feedback  />
        </div>

        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default Facultydashboard;
