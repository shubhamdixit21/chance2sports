import React from 'react';
import section2 from "../../assets/section2.jpeg"
const TalentIdentificationSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
  {/* Left: Image Full Cover */}
  <div className="mx-auto overflow-hidden rounded-2xl shadow-lg">
    <img 
      src={section2}  
      alt="Selection Banner"
      className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl"
    />
  </div>
  

  {/* Right: Content */}
  <div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-500 mb-6">
      Elite Pass Eligibility Process
    </h2>
    <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
      The prestigious and iconic <span className="font-semibold text-white">Cricket Club Of India</span> has partnered with us in this initiative.
    </p>
    <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
      Join the legacy. Be one of the elite. Are you among the best in the country? The Champions Club Elite Pass is reserved for India’s top-ranked athletes in Tennis, Squash, Table Tennis, Pickleball, and Badminton. 
      If you’re ranked <span className="font-semibold text-white">Top 8 nationally</span> or <span className="font-semibold text-white">Top 16 in Asia</span> in your age group, you may be eligible to join this elite circle. 
      Pass holders gain access to exclusive high-performance events, world-class venues, hi-tech enabled fitness support, custom elite gear, and national recognition across SportsSkill platforms and partner clubs.
    </p>

    {/* Eligibility Icons */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
          <i className="fas fa-globe text-orange-600 text-xl"></i>
        </div>
        <div>
          <h4 className="font-bold text-white">International Rankings</h4>
          <p className="text-sm text-gray-300">Top 16 in Asia</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
          <i className="fas fa-flag text-orange-600 text-xl"></i>
        </div>
        <div>
          <h4 className="font-bold text-white">National Rankings</h4>
          <p className="text-sm text-gray-300">Top 8 in India</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default TalentIdentificationSection;