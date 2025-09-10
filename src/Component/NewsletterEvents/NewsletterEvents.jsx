// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import SupportCTA from '../SupportCTA/SupportCTA';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";
import img12 from "../../assets/12.jpg";
import img13 from "../../assets/13.jpg";
import img14 from "../../assets/14.jpg";
import img15 from "../../assets/15.jpg";
import img16 from "../../assets/16.jpg";
import img17 from "../../assets/17.jpg";
import { img } from 'framer-motion/client';

const NewsletterEvents = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('latest');

    const newsletters = [
        {
            id: 1,
            title: 'Anika Dubey Wins Bronze at 32nd Asian Junior Championship',
            date: '2025-02-19',
            image: img1,
            excerpt: 'Anika Dubey won bronze at the 32nd Asian Junior Championship in the GU17 category, bringing pride to Chance2Sports and India.'
        },
        {
            id: 2,
            title: 'SportsSkill Talent Hunt Success at SSPM Day School',
            date: '2025-02-18',
            image: img2,
            excerpt: 'SportsSkill conducted a successful technology-driven sports education and talent identification drive at SSPM Day School, Pune, with a vibrant prize distribution ceremony.'
        },
        {
            id: 3,
            title: 'Anika Dubey and Akanksha Gupta Selected for Asian Team Championship',
            date: '2025-02-14',
            image: img3,
            excerpt: 'Double delight for Chance2Sports as Anika Dubey and Akanksha Gupta make the Indian team for Asian Team Championship 2025.'
        },
        {
            id: 4,
            title: 'Double Triumph: Akansha & Anika Qualify for Asian Championship',
            date: '2025-02-11',
            image: img4,
            excerpt: 'Chance2Sports celebrates as Akansha Gupta and Anika Dubey qualify for Asian Championship, a testament to their training program.'
        },
        {
            id: 5,
            title: 'Chance2Sports: A Platform for Excellence',
            date: '2025-02-10',
            image: img5,
            excerpt: 'Chance2Sports continues its mission of identifying and nurturing young talent through its flagship Kanga Kids program.'
        },
        {
            id: 6,
            title: 'School State Squash Champions Celebrated',
            date: '2025-02-08',
            image: img6,
            excerpt: 'SportsSkill congratulates the School State Squash Second Champions including Vasundhara Nangare (GU14 First place) and Vinay Shinde (BU14 Second place).'
        },
        {
            id: 7,
            title: 'Akanksha and Anika Strike Gold at National Games',
            date: '2025-02-05',
            image: img7,
            excerpt: 'Champions of the Court: Akanksha and Anika win gold at National Games, showcasing their exceptional squash skills.'
        },
        {
            id: 8,
            title: 'Vasundhara Nangare: A Sport Success Story',
            date: '2025-02-03',
            image: img8,
            excerpt: 'Vasundhara Nangare shares how she developed passion for squash through determination and hard work.'
        },
        {
            id: 9,
            title: 'Gold for Maharashtra Women\'s Team at National Games',
            date: '2025-01-30',
            image: img9,
            excerpt: 'Maharashtra Women\'s Team wins gold at National Games 2025, with strong representation from Chance2Sports athletes.'
        },
        {
            id: 10,
            title: 'SportsSkill: Redefining the Game with Sports Technology',
            date: '2025-01-22',
            image: img10,
            excerpt: 'SportsSkill is redefining sports with cutting-edge technology, featured in The Karo Startup for its innovative approach.'
        },
        {
            id: 11,
            title: 'Anika Dubey: "Playing For India Is A Dream Come True"',
            date: '2025-01-20',
            image: img11,
            excerpt: 'Anika Dubey shares her excitement before Squash Asian Team Championships, calling it a dream come true to represent India.'
        },
        {
            id: 12,
            title: 'Abhinav Sinha Reaches Top 8 in National Games 2015',
            date: '2024-07-15',
            image: img12,
            excerpt: 'Abhinav Sinha, a top squash athlete and lawyer from Pune, made Maharashtra proud by securing a position in the top 8 at the National Games 2015 held in Kerala.'
        },
        {
            id: 13,
            title: 'SportsSkill Featured Among Top Indian Sports Tech Startups',
            date: '2024-07-14',
            image: img13,
            excerpt: 'Inc42 recognizes SportsSkill as a leading sports tech startup helping athletes track performance and connect with coaches using data-driven tools.'
        },
        {
            id: 14,
            title: 'WestBridge Cofounder KP Balaraj Backs SportsSkill',
            date: '2024-07-10',
            image: img14,
            excerpt: 'SportsSkill secured funding from KP Balaraj, cofounder of WestBridge Capital, who praised the startup\'s vision in sports and tech.'
        }
    ];

    const events = [
        {
            id: 1,
            title: 'Rishikul India Sports Championship 2024',
            date: '2024-07-12 to 2024-07-14',
            location: 'Rishikul School, Laxmangarh',
            type: 'Past Event',
            image: 'https://i.postimg.cc/nrNphYs7/Screenshot-2025-07-25-130626.png',
            description: `The Rishikul India Sports Championship 2024 was successfully organized at Rishikul School, Laxmangarh, in association with SportsSkill. This three-day event brought together students from various regions to compete in a diverse range of sports disciplines, showcasing their talent, teamwork, and competitive spirit.
Over 350 students from Class 1 to college level enthusiastically participated in events such as athletics, cricket, chess, badminton, and fun games. The championship was not only a platform for athletic performance but also focused on the overall personality development of students through discipline, team coordination, and leadership.
The event was inaugurated in a grand ceremony attended by school leaders, local dignitaries, and coaches. Throughout the fest, a spirit of community and sportsmanship was evident. The organizing team ensured that the event ran smoothly with top-notch facilities and coordination.
This initiative marks a significant step toward encouraging youth participation in physical activities and helping students explore their potential through sports.`,
            highlights: [
                '350+ participants from schools and colleges',
                'Wide variety of sports including athletics, cricket, badminton, and chess',
                'Focus on discipline, leadership, and personal development',
                'Organized in collaboration with SportsSkill and Rishikul School',
                'Strong support from educators, coaches, and local dignitaries'
            ]
        },
        {
            id: 2,
            title: 'Regional Championship Training Camp',
            date: '2024-08-15 to 2024-08-18',
            location: 'SportsSkill Academy',
            type: 'Upcoming Event',
            image: 'https://readdy.ai/api/search-image?query=intensive%20sports%20training%20camp%20with%20professional%20coaches%20and%20young%20athletes%20practicing%20various%20sports%20in%20modern%20facility%20with%20motivational%20atmosphere&width=400&height=250&seq=event2&orientation=landscape',
            description: 'Join our intensive four-day training camp designed to prepare athletes for upcoming regional championships.'
        },
        {
            id: 3,
            title: 'Community Sports Day',
            date: '2024-09-05',
            location: 'Central Sports Complex',
            type: 'Upcoming Event',
            image: 'https://readdy.ai/api/search-image?query=community%20sports%20day%20with%20families%20and%20children%20participating%20in%20fun%20athletic%20activities%20in%20bright%20outdoor%20setting%20with%20festive%20atmosphere&width=400&height=250&seq=event3&orientation=landscape',
            description: 'A fun-filled day of sports activities for the entire community, promoting fitness and healthy living.'
        }
    ];

    const itemsPerPage = 6;
    
    // Filter newsletters based on search term
    const filteredNewsletters = newsletters.filter(newsletter => 
        newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        newsletter.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Sort newsletters based on sort option
    const sortedNewsletters = [...filteredNewsletters].sort((a, b) => {
        if (sortOption === 'latest') {
            return new Date(b.date) - new Date(a.date);
        } else if (sortOption === 'oldest') {
            return new Date(a.date) - new Date(b.date);
        }
        return 0;
    });
    
    const totalPages = Math.ceil(sortedNewsletters.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNewsletters = sortedNewsletters.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />
            
            {/* Main Hero */}
            <div className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=modern%20sports%20stadium%20with%20dynamic%20lighting%20and%20energetic%20atmosphere%20professional%20athletes%20training%20and%20competing%20with%20dramatic%20sunset%20background%20perfect%20for%20newsletter%20header&width=1440&height=400&seq=header1&orientation=landscape"
                        alt="Newsletter Header"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Newsletter & Events</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Stay updated with our latest news, success stories, and upcoming events.
                        Discover how we're building champions and transforming communities through sports.
                    </p>
                </div>
            </div>
            
            {/* Yellow Highlighted Section with Controls */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        {/* Static Buttons (Non-functional) */}
                        <div className="flex space-x-2">
                            <button className="flex items-center px-4 py-2 bg-black-400 text-dark rounded-lg font-medium shadow-sm">
                                <i className="fas fa-envelope mr-2"></i>
                                Newsletters 
                            </button>
                            
                            <button className="flex items-center px-4 py-2 bg-black-400 text-dark rounded-lg font-medium shadow-sm">
                                <i className="fas fa-calendar-alt mr-2"></i>
                                Events
                            </button>
                        </div>
                        
                        {/* Search and Sort Controls */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <div className="relative flex-grow">
                                <input
                                    type="text"
                                    placeholder="Search newsletters..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                />
                                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            </div>
                            
                            <div className="relative">
                                <select
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="appearance-none pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                                >
                                    <option value="latest">Latest First</option>
                                    <option value="oldest">Oldest First</option>
                                </select>
                                <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Content Area */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                {/* Newsletters Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Newsletters</h2>
                    
                    {/* Newsletters Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {currentNewsletters.length > 0 ? (
                            currentNewsletters.map((newsletter) => (
                                <div key={newsletter.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                    <div className="h-70 overflow-hidden">
                                        <img
                                            src={newsletter.image}
                                            alt={newsletter.title}
                                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-orange-500 mb-2">{newsletter.date}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{newsletter.title}</h3>
                                        <p className="text-gray-600 mb-0 line-clamp-3">{newsletter.excerpt}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-12">
                                <i className="fas fa-search text-gray-300 text-5xl mb-4"></i>
                                <h3 className="text-xl font-medium text-gray-700 mb-2">No newsletters found</h3>
                                <p className="text-gray-500">Try adjusting your search term</p>
                            </div>
                        )}
                    </div>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center space-x-2">
                            <button
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`px-4 py-2 rounded-lg ${currentPage === index + 1
                                        ? 'bg-yellow-500 text-white'
                                        : 'border border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    )}
                </div>
                
                {/* Events Section */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Events</h2>
                    
                    {/* Featured Event */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                        <div className="md:flex">
                            <div className="md:w-1/2 h-full overflow-hidden">
                                <img
                                    src={events[0].image}
                                    alt={events[0].title}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <div className="flex items-center mb-4">
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {events[0].type}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{events[0].title}</h2>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <i className="fas fa-calendar-alt mr-2"></i>
                                    <span>{events[0].date}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-6">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    <span>{events[0].location}</span>
                                </div>
                                <p className="text-gray-700 mb-6 leading-relaxed">{events[0].description}</p>
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                                    <ul className="space-y-2">
                                        {events[0].highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                <i className="fas fa-check-circle text-orange-500 mr-2"></i>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    The event not only showcased remarkable talent but also fostered a deep sense of teamwork,
                                    sportsmanship, and physical fitness among participants. With over 350 students engaging in
                                    multiple competitions, the SportsSkill Fest became a memorable celebration of unity,
                                    dedication, and sporting excellence.
                                </p>
                                <p className="text-gray-700 font-medium">
                                    We thank all the participants, volunteers, and school staff for making this event a resounding success!
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Other Events Grid */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {events.slice(1).map((event) => (
                                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                    <div className="h-70 overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                {event.type}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h4>
                                        <div className="flex items-center text-gray-600 mb-2">
                                            <i className="fas fa-calendar-alt mr-2 text-sm"></i>
                                            <span className="text-sm">{event.date}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 mb-4">
                                            <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
                                            <span className="text-sm">{event.location}</span>
                                        </div>
                                        <p className="text-gray-700 mb-0">{event.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Help Them Rise CTA */}
            <SupportCTA />
            
            {/* Footer */}
            <Footer />
            
            <style>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                input[type="number"] {
                    -moz-appearance: textfield;
                }
            `}</style>
        </div>
    );
};

export default NewsletterEvents;