import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCompass, faBook, faTasks, faChartLine,
    faBullhorn, faSignOutAlt, faBars, faSearch,
    faBell, faGlobe
} from '@fortawesome/free-solid-svg-icons';
import bgimg from '../assets/dashboard_heroimg.png'
import { Sidebar } from 'lucide-react';
import "../styles/Sidebar.css";

const Sidebar = () => {
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
            
        </>
    )
};

export default Sidebar;