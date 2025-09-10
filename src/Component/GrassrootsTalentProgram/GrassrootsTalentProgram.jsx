import React, { useState } from "react";
import SupportCTA from "../SupportCTA/SupportCTA";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import RoadmapCircle from "./RoadmapCircle";
import about1 from "../../assets/about1.jpeg"
import aboutus from "../../assets/aboutus.jpeg"
const GrassrootsTalentProgram = () => {
  const [activeStory, setActiveStory] = useState(0);
  const athletes = [

    {
      name: "Vasundhara Nagare",
      title: "Rising Star",
      achievement: "State Level Champion & National Qualifier",
      description:
        "Vasundhara's rapid progress through our program demonstrates the effectiveness of our talent development approach.",
      image:
        "https://readdy.ai/api/search-image?query=determined%20young%20female%20squash%20player%20in%20action%20pose%20with%20racket%20wearing%20professional%20sports%20attire%20against%20clean%20white%20studio%20background&width=300&height=400&seq=athlete3&orientation=portrait",
    },
    {
      name: "Anika Dubey",
      title: "National Champion",
      achievement: "Winner of Under-15 National Championship",
      description:
        "Anika's journey from grassroots to national recognition showcases the power of structured training and unwavering determination.",
      image:
        "https://readdy.ai/api/search-image?query=young%20female%20squash%20player%20holding%20trophy%20with%20confident%20smile%20wearing%20sports%20attire%20against%20clean%20white%20background%20professional%20sports%20photography&width=300&height=400&seq=athlete1&orientation=portrait",
    },
    {
      name: "Akanksha Gupta",
      title: "International Competitor",
      achievement: "Represented India in Asian Junior Championships",
      description:
        "From local courts to international stages, Akanksha exemplifies how grassroots programs can nurture world-class talent.",
      image:
        "https://readdy.ai/api/search-image?query=confident%20young%20female%20athlete%20with%20squash%20racket%20wearing%20blue%20sports%20uniform%20against%20minimalist%20white%20background%20professional%20portrait%20photography&width=300&height=400&seq=athlete2&orientation=portrait",
    },

  ];
  const programs = [
    {
      title: "Kanga Kids Program",
      period: "2022 - Present",
      description:
        "Aimed at grassroots players, this program introduces new players to squash, offering them the chance to play, compete, and build foundational skills. It serves as the first step for aspiring athletes from diverse backgrounds.",
      participants: "100+ Kids",
      achievements: "15 State Champions",
    },
    {
      title: "Pune Program",
      period: "2014 - 2019",
      description:
        "Initiated at Thube Park in Pune, this program involved the construction of the first public court, catering to players from diverse backgrounds. Over 100 kids from Pune and Mumbai were involved.",
      participants: "550+ Kids",
      achievements: "National & International Players",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section - Program Introduction */}
      <section
        className="relative bg-cover bg-center py-12 md:py-16"
        style={{
          backgroundImage:
            `url(${about1})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        <div className="relative">
          {/* Hero Section - Program Introduction */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-20">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Grassroots Talent Development
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              <strong>Chance2Sports</strong>, under the guidance of{" "}
              <strong>Abhinav Sinha</strong>, a highly accomplished international
              squash player and visionary coach, has been fostering junior national
              champions from diverse backgrounds since <strong>2017</strong>.
            </p>
          </div>

          {/* Mission Overview */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
              <div className="w-full lg:w-1/2 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  Championing Equal Access to Sports Infrastructure
                </h2>
                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  In a world where sports can unite and inspire, Chance2Sports stands
                  as a beacon of hope, breaking down barriers that have historically
                  kept children from economically challenged backgrounds on the
                  sidelines.
                </p>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-users text-orange-600 text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 md:mb-2">
                        Building Resilience & Discipline
                      </h3>
                      <p className="text-sm md:text-base">
                        Developing character through structured sports training and
                        mentorship programs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-trophy text-orange-600 text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 md:mb-2">
                        Personal Growth & Brighter Futures
                      </h3>
                      <p className="text-sm md:text-base">
                        Creating pathways for young athletes to achieve their full
                        potential and dreams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
                  <img
                    src={aboutus}
                    alt="Young athletes training"
                    className="w-full h-64 md:h-96 object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Growing the Sport Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Growing the Sport from the Grassroots
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              To truly grow sports and elevate competition levels, we engage
              children from smaller towns and rural areas, creating a stronger
              foundation for athletic excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center group p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-chart-line text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Increase Participation
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Engaging children from diverse backgrounds increases the overall
                number of players, enriching the talent pool and creating more
                opportunities.
              </p>
            </div>
            <div className="text-center group p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-medal text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Enhance Competition
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                A larger, more varied group of athletes raises competitive
                standards, pushing everyone to perform better and achieve
                excellence.
              </p>
            </div>
            <div className="text-center group p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-handshake text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Foster Community Development
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Sports serve as a powerful tool for community building,
                providing young people with positive outlets and belonging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      {/* <RoadmapCircle/> */}

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Our Program Highlights
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              Transforming lives through structured sports development initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            {/* <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:shadow-md md:hover:shadow-xl transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-0">
            Youth Athlete Development
          </h3>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
            2023-24
          </span>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
          Empowering young athletes through tailored coaching, mentorship, and exposure to competitive platforms, building strong foundations for long-term success.
        </p>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
            <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">
              300+
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Participants
            </div>
          </div>
          <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
            <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">
              45 Events
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Achievements
            </div>
          </div>
        </div>
      </div> */}

            {/* Card 2 */}
            {/* <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:shadow-md md:hover:shadow-xl transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-0">
            Women in Sports Initiative
          </h3>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
            2023-24
          </span>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
          Designed to uplift and empower women athletes, this program promotes gender equality by offering specialized training, mentorship, and scholarship support.
        </p>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
            <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">
              120+
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Participants
            </div>
          </div>
          <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
            <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">
              20 Scholarships
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Achievements
            </div>
          </div>
        </div>
      </div> */}

            {/* Card 3 - School Collaboration Program */}
            {/* <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:shadow-md md:hover:shadow-xl transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-0">
            School Collaboration Program
          </h3>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
            Ongoing
          </span>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
          Focused on providing equal opportunities, this initiative supports talented athletes with training and development. It helps students build skills, compete confidently, and progress to higher levels in their sporting journey.
        </p>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
            <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">
              550+
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Students Benefited
            </div>
          </div>
          <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
            <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">
              30+
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Training Programs
            </div>
          </div>
        </div>
      </div> */}
            {/* Card 1 New */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:shadow-md md:hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                  Kanga Kids Program
                </h3>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  2022 - Present
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Aimed at grassroots players, this program introduces new players to squash, offering them the chance to play, compete, and build foundational skills. It serves as the first step for aspiring athletes from diverse backgrounds.
              </p>
              {/* <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
                  <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">
                    200+ Kids
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    Participants
                  </div>
                </div>
                <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
                  <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">
                    15 State Champions
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    Achievements
                  </div>
                </div>
              </div> */}
            </div>

            {/* Card 2 New */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:shadow-md md:hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                  Pune Program
                </h3>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  2014 - 2019
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Initiated at Thube Park in Pune, this program involved the construction of the first public court, catering to players from diverse backgrounds. Over 100 kids from Pune and Mumbai were involved.
              </p>
              {/* <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
                  <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">
                    100+ Kids
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    Participants
                  </div>
                </div>
                <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
                  <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">
                    National & International Players
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    Achievements
                  </div>
                </div>
              </div> */}
            </div>

            {/* Card 4 - SSPM Talent Identification Program */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:shadow-md md:hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                  SSPM Talent Identification Program
                </h3>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  2024 Launch
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                A scouting-based initiative aimed at identifying high-potential athletes in schools and grassroots centers. Selected athletes receive personalized training and access to elite resources.
              </p>
              {/* <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
                  <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">
                    100+
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    Talents Identified
                  </div>
                </div>
                <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
                  <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">
                    15+
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    Selected for Elite Training
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>



      {/* Success Stories */}
      <section
        className="py-12 md:py-20 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/XvXr0Rk1/pexels-cottonbro-5739200.jpg')", // Change to your background image
        }}
      >
        {/* Dark blur overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Success Stories
            </h2>
            <p className="text-sm md:text-lg text-gray-200 max-w-3xl mx-auto">
              The impact of Chance2Sports is evident in the success stories of
              athletes who have risen from challenging circumstances to achieve
              greatness.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md md:shadow-lg overflow-hidden mb-8 md:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 md:p-8 lg:p-12">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  Silent Revolution on a Single Squash Court
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-gray-600 text-sm md:text-base">
                    In the town of Kalamb in Maharashtra, India, where limited
                    resources and diverse backgrounds once created barriers, a
                    silent revolution has been unfolding on the squash court.
                  </p>
                  <div className="border-l-4 border-orange-500 pl-3 md:pl-4 my-4 md:my-6">
                    <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1 md:space-y-2 text-gray-600 text-xs md:text-sm">
                      <li>• 5 players qualified for national championships</li>
                      <li>• 3 players ranked in top 10 nationally</li>
                      <li>• 100% improvement in player performance</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 md:p-4 rounded-lg mt-4 md:mt-6">
                    <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                      Future Vision
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Our goal is to expand this initiative to more communities,
                      creating a network of training centers that can nurture
                      talent from grassroots to glory.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <img
                  src="https://i.postimg.cc/yNKR4Qrw/pexels-isabella-mendes-107313-342361.jpg"
                  alt="Kalamb Success Story"
                  className="w-full h-64 md:h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div className="bg-white p-5 md:p-8 rounded-xl shadow-md md:shadow-lg">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Emerging Talent from Kalamb
              </h3>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                Inspired by Vasundhara Nangare's success, two more players from
                Kalamb have started performing at the national level.
              </p>
              <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-star text-orange-500"></i>
                  <span>Vedant Shinde - Top 15 Boys U-11</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-star text-orange-500"></i>
                  <span>Vinay & Vivek Shinde - Top 10 consistently</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-xl shadow-md md:shadow-lg">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Community Impact
              </h3>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                The transformation in Kalamb demonstrates the power of focused
                investment in grassroots sports development.
              </p>
              <div className="grid grid-cols-3 gap-3 md:gap-4 text-center">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-orange-500">
                    13
                  </div>
                  <div className="text-xs text-gray-600">Active Players</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-orange-500">
                    5
                  </div>
                  <div className="text-xs text-gray-600">National Level</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-orange-500">
                    3
                  </div>
                  <div className="text-xs text-gray-600">Top Rankings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}


      {/* Impact Stories */}
      {/* <section
  className="relative py-12 md:py-20 bg-gray-50"
  style={{
    backgroundImage: "url('https://i.postimg.cc/9FLTqkSY/3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
> */}
      {/* Dark Overlay with slight blur */}
      {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 md:mb-16 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Champions We've Created
      </h2>
      <p className="text-base md:text-xl">
        Meet the athletes who exemplify the success of our grassroots
        development approach
      </p>
    </div>

    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {athletes.map((athlete, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer ${
              activeStory === index
                ? "ring-2 md:ring-4 ring-orange-500 ring-opacity-50"
                : ""
            }`}
            onClick={() => setActiveStory(index)}
          >
            <div className="text-center mb-4 md:mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden">
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                {athlete.name}
              </h3>
              <div className="text-orange-600 font-medium mb-1 md:mb-2 text-sm md:text-base">
                {athlete.title}
              </div>
              <div className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                {athlete.achievement}
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
              {athlete.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 md:mt-8 space-x-2">
        {athletes.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors cursor-pointer ${
              activeStory === index ? "bg-orange-500" : "bg-gray-300"
            }`}
            onClick={() => setActiveStory(index)}
            aria-label={`View story ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section> */}


      {/* Kanga Program Impact */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                The Impact of Chance2Sports
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The achievements of our athletes highlight the crucial role of
                structured training programs and support systems in nurturing
                young talent. A significant contributor to this success has been
                the <strong>Kanga Kids program</strong>, a passionate squash
                initiative supported by Ms. Deborah Kanga in memory of her
                husband, Noshir Kanga.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 text-center">
              <div className="bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-md">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className="fas fa-users text-orange-600 text-xl md:text-2xl"></i>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                  100+
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  Young Athletes Trained
                </div>
              </div>
              <div className="bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-md">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className="fas fa-trophy text-blue-600 text-xl md:text-2xl"></i>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                  15+
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  National Champions
                </div>
              </div>
              <div className="bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-md">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className="fas fa-globe text-green-600 text-xl md:text-2xl"></i>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                  10+
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  International Players
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SupportCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GrassrootsTalentProgram;