import React from 'react';
import { motion } from 'framer-motion';
import aboutimg from '../../assets/front-view-education-day-concept 1.png'
import highlight from '../../assets/Group.png'
import card1 from '../../assets/Images.png'
import card2 from '../../assets/Images2.png'
import card3 from '../../assets/Images3.png'

const About = () => {
    const courseCategories = [
        {
            id: 1,
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum Lore mipsumLorem ipsum Lore mipsumLorem ipsum Lore mipsumLorem ipsum Lore mipsumLorem ipsum Lore mipsum',
            icon: card1,
            bgColor: 'bg-blue-50'
        },
        {
            id: 2,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum Lore mipsumLorem ipsum Lore mipsumLorem ipsum Lore mipsumLorem ipsum Lore mipsumLorem ipsum Lore mipsum',
            icon: card2,
            bgColor: 'bg-pink-100'
        },
        {
            id: 3,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum Lore mipsumLorem ipsum Lore mipsumLorem ipsum Lore mipsumLorem ipsum Lore mipsumLorem ipsum Lore mipsum',
            icon: card3,
            bgColor: 'bg-gray-100'
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        },
        hover: {
            y: -8,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            {/* Hero Section */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className="md:w-1/3" variants={itemVariants}>
                    <img
                        src={aboutimg}
                        alt="Student learning"
                        className="w-full max-w-xs"
                    />
                </motion.div>

                <motion.div className="md:w-2/3" variants={headerVariants}>
                    <h1 className="text-2xl md:text-4xl font-bold text-navy-900 leading-tight mb-4">
                        <span className="relative flex-col">
                            <img src={highlight} className='absolute right-0 bottom-15'/>
                            Master New Skills with
                            Interactive, Guided
                        </span>
                        <br />
                        Courses
                    </h1>
                    <p className="text-gray-700">
                        Enhance your skills with structured learning and engaging content, curated by industry professionals.
                    </p>
                </motion.div>
            </motion.div>

            {/* Course Categories */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {courseCategories.map((category) => (
                    <motion.div
                        key={category.id}
                        className={`${category.bgColor} rounded-lg p-6 transition-all duration-300`}
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <div className="mb-4">
                            <img src={category.icon} alt={category.title} className="w-16 h-16" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                        <motion.a
                            href="#"
                            className="inline-flex items-center text-purple-600 font-medium"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            Learn More
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default About;