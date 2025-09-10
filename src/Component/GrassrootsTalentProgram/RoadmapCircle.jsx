import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const RoadmapCircle = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const rotate = useMotionValue(0);

  const cards = [
    {
      icon: 'fas fa-search',
      title: 'Talent Identification',
      angle: 0,
      content: 'Talent Hunt through roadshows at schools, NGOs, and academies. Identify, validate, and provide feedback to respective stakeholders.',
      details: [
        'Conduct nationwide scouting camps',
        // 'Evaluate 10,000+ athletes annually',
        // 'Partner with 200+ schools',
        'Digital profiling system'
      ],
      color: 'orange'
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'Training Program',
      angle: 90,
      content: 'Train shortlisted players with expert coaches. Build technical skills and introduce structured programs for foundational development.',
      details: [
        // '200 hours specialized training',
        'Nutrition and fitness planning',
        'Mental conditioning',
        'Quarterly performance reviews'
      ],
      color: 'blue'
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Competitive Exposure',
      angle: 180,
      content: 'Provide sustained training and enable participation in district and state-level tournaments to gain competitive experience.',
      details: [
        // '15+ competitive events annually',
        'Travel support',
        'Video analysis',
        'Opponent scouting'
      ],
      color: 'green'
    },
    {
      icon: 'fas fa-globe',
      title: 'Elite Development',
      angle: 270,
      content: 'Support top-performing players at state levels and guide them to compete in national and international competitions.',
      details: [
        'Elite training camps',
        'International coaches',
        'Sports science support',
        'Sponsorship assistance'
      ],
      color: 'purple'
    }
  ];

  const getCardPosition = (angle, radius) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(rad),
      y: radius * Math.sin(rad)
    };
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">

        {/* Left: Rotating Cards */}
        <div className="relative w-full max-w-[400px] h-[400px] mx-auto">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            animate={{ rotate: 360 }}
            style={{ rotate }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            {cards.map((card, index) => {
              const { x, y } = getCardPosition(card.angle, 150);
              return (
                <motion.div
                  key={index}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    zIndex: 10
                  }}
                  // whileHover={{ 
                  //   scale: 1.1,
                  //   transition: { duration: 0.2 }
                  // }}

                  onClick={() => setSelectedCard(card)}
                  className="cursor-pointer"
                >
                  <motion.div
                    style={{
                      rotate: useTransform(rotate, r => -r),
                      willChange: 'transform'
                    }}
                    className={`w-24 h-24 p-12 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center text-black border-t-4 border-${card.color}-500 hover:shadow-lg hover:z-20`}
                  >
                    <i className={`${card.icon} text-${card.color}-500 text-xl mb-1`}></i>
                    <p className="text-xs font-semibold">{card.title}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center circle - static */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center z-0">
            <h3 className="text-lg font-bold text-orange-500 text-center">Development Pathway</h3>
          </div>
        </div>

        {/* Right: Default Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-500 mb-6">
            Athlete Development Roadmap
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            With a proven track record of guiding players from an early age to the national stage, our 4-stage structured program is designed to solve real-world challenges athletes face.
            {isExpanded && (
              <> This results-driven framework transforms raw potential into world-class performance through a scientific and holistic training methodology.</>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-orange-400 font-semibold hover:underline focus:outline-none"
            >
              {isExpanded ? "" : "Read More"}
            </button>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="fas fa-medal text-orange-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-white">Proven Methodology</h4>
                <p className="text-sm text-gray-300">Global benchmark for athletes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-chart-line text-blue-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-white">Data-Driven</h4>
                <p className="text-sm text-gray-300">Performance analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Slide-In Panel */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="absolute top-0 right-0 h-full w-full md:w-[480px] bg-white  px-6 py-8 shadow-2xl rounded-tl-[180px] overflow-y-auto border-l border-gray-700 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className="flex justify-between items-start mb-6 relative">
                <div className="flex flex-col items-center w-full mt-4">
                  <i className={`${selectedCard.icon} text-${selectedCard.color}-500 text-3xl mb-2`} />
                  <h3 className="text-2xl font-semibold text-black text-center">
                    {selectedCard.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute right-0 top-0 text-3xl text-black hover:text-black-400"
                >
                  &times;
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pr-1">
                <p className="text-black leading-relaxed mb-6">
                  {selectedCard.content}
                </p>

                <h4 className="font-bold text-gray-800 mb-3">Program Includes:</h4>
                <ul className="space-y-2">
                  {selectedCard.details.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <i className={`fas fa-check text-${selectedCard.color}-500 mt-1 mr-2`}></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link to='/register'>
                  <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                    REGISTER FOR PROGRAM
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RoadmapCircle;