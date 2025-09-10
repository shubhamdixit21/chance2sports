// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css"
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import SupportCTA from '../SupportCTA/SupportCTA';
import AboutChance2Sports from './AboutChance2Sports';
import akanksha from "../../assets/Akanksha.jpg";
import anika from "../../assets/Anika.jpg";
import vasundhara from "../../assets/Vasundhara.jpg";
// import banner from "../../assets/banner.jpeg"
import banner3 from "../../assets/banner3.jpeg"
import Anika from "../../assets/Latest Updates(Home Page)/1_Anika.jpg";
import Double from "../../assets/Latest Updates(Home Page)/Double.jpg";
import Girls from "../../assets/Latest Updates(Home Page)/Girls.jpg";
import Rolling from "../../assets/Latest Updates(Home Page)/Rolling.jpg";
import SS from "../../assets/Latest Updates(Home Page)/SS.jpg";
// import Timeline from './Timeline';
import RoadmapCircle from '../GrassrootsTalentProgram/RoadmapCircle';
const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);
  const [currentUpdate, setCurrentUpdate] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mileStoneTitle, setMileStoneTitle] = useState(false);
  const [currentMilestone, setCurrentMilestone] = useState(0);

  // Infinite loop logic
  const handlePrev = () => {
    setCurrentMilestone((prev) =>
      prev === 0 ? milestones.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentMilestone((prev) =>
      prev === milestones.length - 1 ? 0 : prev + 1
    );
  };

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'founded':
        return '📅';
      case 'first win':
        return '🏆';
      case 'national recognition':
        return '🌟';
      case 'international tour':
        return '🌍';
      case 'championship':
        return '🥇';
      case "began":
        return "🏆🎾";
      case "laying":
        return "🏟️🏓";
      case "reaching":
        return "🏸⛳🏅";
      case "international":
        return "🌍🥇";
      case "empowering":
        return "🏃‍♂️🎽🎯";
      case "bigger":
        return "🏫🤾‍♂️🏏";
      case "future":
        return "🚀🏅🎯";
      default:
        return '🚀';
    }
  };
  const stories = [
    {
      name: "Vasundhara Nangare",
      image: vasundhara,
      sport: "Badminton",
      achievement: "National Gold Medalist",
      medals: "5",
      ranking: "1st"
    },
    {
      name: "Anika Dubey",
      image: anika,
      sport: "Tennis",
      achievement: "Junior State Champion",
      medals: "3",
      ranking: "3rd"
    },
    {
      name: "Akanksha Gupta",
      image: akanksha,
      sport: "Basketball",
      achievement: "District MVP",
      medals: "2",
      ranking: "4th"
    }
  ];

  const latestUpdates = [
    {
      title: 'Anika Dubey Wins GU-17 Championship',
      date: '2024-11-03',
      image: Anika,
      excerpt: 'Anika Dubey crowned winner in GU-17 category at the November 3, 2024 tournament, representing Rolling Nicks and Champions Gurukul with the motto "Believe to Achieve".'
    },
    {
      title: 'Double Victory at Sports Championship',
      date: '2024-11-03',
      image: Double,
      excerpt: 'Anika Dubey (GU-17) and Vasundhara Nangare (GU-15) secure wins for Rolling Nicks at Champions Gurukul tournament, showcasing young talent in squash.'
    },
    {
      title: 'SSFoundation Empowers Grassroots Sports',
      date: '2024-11-03',
      image: SS,
      excerpt: 'Rolling Nicks and SportsSkill pave the path for kids from grassroots level under the "Believe to Achieve" philosophy at Champions Gurukul.'
    },
    {
      title: 'Girls Empowerment in Sports Initiative',
      date: '2024-11-03',
      image: Girls,
      excerpt: 'Under SAI support, Vasundhara Nangare, Anika Dubey and Akanksha Gupta represent Sportskill\'s mission to empower girls from local to global stages.'
    },

    {
      title: 'Rolling Nicks Shines at National Championship',
      date: '2024-11-03',
      image: Rolling,
      excerpt: 'Rolling Nicks athletes dominate the podium with support from SSFoundation and Champions Gurukul, showcasing India’s rising talent in squash. The team’s dedication reflects in their performance at the national level.'
    },
  ];


  const programs = [
    {
      title: 'Grassroots Development',
      icon: 'fas fa-seedling',
      description: 'Building foundational skills and character for young athletes aged 8-14 through comprehensive training programs.',
      benefits: ['Free coaching', 'Equipment provided', 'Nutrition guidance']
    },
    {
      title: 'Talent Scouting',
      icon: 'fas fa-search',
      description: 'Identifying and nurturing exceptional talent through systematic scouting programs across rural and urban areas.',
      benefits: ['Performance analysis', 'Skill assessment', 'Career guidance']
    },
    {
      title: 'Scholarship Program',
      icon: 'fas fa-graduation-cap',
      description: 'Providing financial support and educational opportunities to deserving athletes from underprivileged backgrounds.',
      benefits: ['Full tuition support', 'Training expenses', 'Competition fees']
    },
    {
      title: 'Mentorship Network',
      icon: 'fas fa-hands-helping',
      description: 'Connecting young athletes with experienced coaches, former champions, and industry professionals.',
      benefits: ['1-on-1 mentoring', 'Career planning', 'Mental health support']
    }
  ];
  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };
  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };
  const nextUpdate = () => {
    setCurrentUpdate((prev) => (prev + 1) % latestUpdates.length);
  };
  const prevUpdate = () => {
    setCurrentUpdate((prev) => (prev - 1 + latestUpdates.length) % latestUpdates.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % latestUpdates.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [latestUpdates.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 4000); // auto-slide every 4s
    return () => clearInterval(interval);
  }, [stories.length]);


  const milestones = [
    {
      year: "2009",
      title: "Where it all began",
      icon: "began",
      description: "RNSF was established to promote sports in Pune.",
    },
    {
      year: "2014",
      title: "Laying the foundation",
      icon: "laying",
      description:
        "Built the city's first public court and launched our community program.",
    },
    {
      year: "2017",
      title: "Reaching new heights",
      icon: "reaching",
      description:
        "Expanded to multiple cities, mentored national and international players, and promoted free sports activities.",
    },
    {
      year: "2019",
      title: "International success",
      icon: "international",
      description:
        "Trained the GU-17 Scottish Junior Open winner and several National Champions.",
    },
    {
      year: "2022",
      title: "Empowering young talent",
      icon: "empowering",
      description:
        "From grassroots to greatness — nurturing talent and building tomorrow’s champions.",
    },
    {
      year: "2024",
      title: "Bigger and better",
      icon: "bigger",
      description:
        "Grassroots school program, combined with talent hunt, has already engaged over 400 children—creating opportunities to discover and train the champions of tomorrow",
    },
    {
      year: "2026",
      title: "The future is here",
      icon: "future",
      description:
        "Set to open high-performance centers and expand our community programs to empower even more talent.",
    },
  ];
  const getVisibleStories = () => {
    const total = stories.length;
    const nextIndex = (currentStory + 1) % total; // Loop back to 0
    return [stories[currentStory], stories[nextIndex]];
  };
  const cardWidthPercent = 80; // adjust to your actual card+gap width %
  const totalMilestones = milestones.length;


  const maxTranslate = (totalMilestones * cardWidthPercent) - 100;
  const translateValue = Math.min(currentMilestone * cardWidthPercent, maxTranslate);

  return (
    <div className="bg-white">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-start md:items-center relative overflow-hidden">
        <div
          className="absolute inset-0 hero-parallax"
          style={{
            backgroundImage: `linear-gradient(135deg, rgb(224, 185, 185) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 107, 53, 0.1) 100%), 
    url(${banner3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 ms-5 p-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-slate-800">
              <div className="achievement-badges mb-4 bg-orange-100">
                Empowering Champions Since 2009 -  SS Foundation (Section 8 Company)
              </div>
              <h1 className="font-orbitron text-5xl lg:text-6xl font-bold mb-6 text-reveal">
                Identifying Talent  <br />
                Nurturing <span className="text-orange-600">Champions</span>.
              </h1>
              <p className="font-inter text-xl mb-8 text-black text-reveal" style={{ animationDelay: '0.3s' }}>
                For over 15 years, Chance2Sports  has <strong>been empowering young athletes from diverse backgrounds by offering training, mentorship, and educational </strong> support—turning passion into lifelong opportunity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 text-reveal" style={{ animationDelay: '0.9s' }}>
                <Link to="/donatejoinus">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 !rounded-button font-inter font-semibold pulse-glow hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer">
                    Support Our Programs/Initiatives
                  </button>
                </Link>

                <Link to="/aboutus">
                  <button className="neon-border bg-transparent px-8 py-4 !rounded-button font-inter font-semibold whitespace-nowrap cursor-pointer">
                    Read More About Us
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AboutChance2Sports */}
      <AboutChance2Sports />

      {/* Programs Section */}


      {/* <Timeline/> */}

      {/* Milestones Timeline */}
      {/* Milestones Timeline - Circular Infographic Style */}
      {/* Milestones Timeline - Circular Infographic Style with Real Data */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Background Image with Subtle Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/Hkb4t0Xk/pexels-noel-snpr-2148726663-31790661.jpg')",
            filter: "blur(4px)",
            zIndex: 0,
          }}
        ></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Title */}
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-orbitron md:text-4xl font-bold text-black mb-3 tracking-tight">
              Our Milestones
            </h2>
            <p className="text-lg text-white-300 max-w-3xl mx-auto leading-relaxed">
              From small beginnings to big achievements, here’s our journey in sports excellence.
              {mileStoneTitle && <span>Worked with kids from diverse backgrounds, consistently producing proven results.
                Produced a National Champion every year since 2017.
                The only program to impact multiple cities with a result-oriented approach.
                Given equal importance to education and sports, ensuring holistic growth.</span>}
              <button
                onClick={() => setMileStoneTitle(!mileStoneTitle)}
                className="ml-2 text-orange-400 font-semibold hover:underline focus:outline-none"
              >
                {mileStoneTitle ? "Read Less" : "Read More"}
              </button>

            </p>
          </div>

          {/* Desktop Circular Timeline */}
          <div className="hidden relative md:flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center h-[360px]"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards ${index * 0.25}s`,
                }}
              >
                {/* Circle Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 md:min-h-40 flex flex-col items-center justify-center rounded-full border-2 border-orange-500 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Year (Main Content) */}
                  <span className="text-2xl md:text-3xl font-extrabold text-orange-600">{milestone.year}</span>

                  {/* Icon Below Year */}
                  <span className="text-lg text-gray-500 mt-1">{getIcon(milestone?.icon)}</span>
                </div>

                {/* Title & Description */}
                <div className="mt-8 text-center max-w-48">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">{milestone.title}</h3>
                  <p className="font-intern text-sm text-gray-600 mt-2 leading-relaxed">{milestone.description}</p>
                </div>

                {/* Arrow Between Circles (Desktop Only) */}
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full text-orange-500"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ----------- Mobile Slider ----------- */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentMilestone * 100}%)` }}
              >
                {milestones.map((milestone, index) => (
                  <div key={index} className="basis-full flex-shrink-0 px-4 py-4 flex flex-col items-center">
                    {/* Circle now centered */}
                    <div className="relative w-32 h-32 flex flex-col items-center justify-center rounded-full border-2 border-orange-500 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>

                      {/* Year (Main Content) */}
                      <span className="text-2xl font-extrabold text-orange-600">{milestone.year}</span>

                      {/* Icon Below Year */}
                      <span className="text-lg text-gray-500 mt-1">{getIcon(milestone?.icon)}</span>
                    </div>
                    {/* Title & Description */}
                    <div className="mt-6 text-center max-w-48">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800">{milestone.title}</h3>
                      <p className="font-intern text-sm text-gray-600 mt-2 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                ))}
              </div>
            </div>
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/90 hover:bg-white text-slate-900 shadow-lg hover:scale-110"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/90 hover:bg-white text-slate-900 shadow-lg hover:scale-110"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

        </div>

        {/* Animation Keyframes */}
        <style jsx>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
      </section>



      <section className="bg-gray-50">
        <div className="p-5 mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl font-bold text-slate-900 mb-4">Our Programs</h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to nurture talent at every stage of athletic development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <Link to="/grassrootstalent" key={index} className="block h-full">
                <div className="bg-white rounded-3xl p-8 shadow-lg card-hover cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out flex flex-col justify-between h-full min-h-[450px]">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                      <i className={`${program.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="font-poppins text-xl font-bold text-slate-900 mb-4">{program.title}</h3>
                    <p className="font-inter text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  </div>
                  <div className="space-y-2 mt-auto">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <i className="fas fa-check text-orange-500 text-sm mr-3"></i>
                        <span className="font-inter text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RoadmapCircle />

      {/* Success Stories Section */}
      {/* Success Stories Section */}
      <section
        className="relative py-20 bg-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/ydGf6CRf/pngtree-green-gradient-sports-background-picture-image-1340058.png')",
        }}
      >
        {/* Dark Overlay with Blur */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl font-bold text-white mb-4">
              Hall of Fame
            </h2>
            <p className="font-inter text-xl text-gray-200">
              Meet the athletes who started their journey with free training and reached the top
            </p>
          </div>

          {/* Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentStory * (isMobile ? 100 : 50)}%)`,
                }}
              >
                {stories.map((_, index) => (
                  <div key={index} className={`${isMobile ? "w-full" : "w-1/2"} flex-shrink-0 px-2`}>
                    <div className="grid md:grid-cols-1 gap-4">
                      {/* First Story */}
                      <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-2xl overflow-hidden card-hover">
                        <div className="relative h-85 overflow-hidden">
                          <img
                            src={stories[index].image}
                            alt={stories[index].title || "Story"}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute top-4 left-4">
                            {/* <div className="achievement-badge bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                              {stories[index]?.title?.split(" ")[0] || "Story"}
                            </div> */}
                          </div>
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="text-lg font-bold text-slate-800">{stories[index].title}</h3>
                          <p className="text-slate-600 text-sm">{stories[index].description}</p>
                        </div>
                      </div>


                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110 z-10"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110 z-10"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentStory
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Latest Updates Section */}
      <section className="py-20 bg-orange-50 relative overflow-hidden">
        {/* Watermark Layout */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 -top-20 text-[200px] md:text-[300px] font-bold text-orange-100 opacity-50 font-orbitron">
            UPDATES
          </div>
          <div className="absolute -right-20 -bottom-20 text-[200px] md:text-[300px] font-bold text-orange-100 opacity-50 font-orbitron">
            NEWS
          </div>
        </div>

        <div className="mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl font-bold text-slate-800 mb-4">Latest Updates</h2>
            <p className="font-inter text-xl text-slate-600">
              Stay updated with our recent achievements and program developments
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentUpdate * 100}%)` }}
              >
                {latestUpdates.map((update, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="max-w-4xl mx-auto">
                      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="relative h-70 md:h-auto overflow-hidden">
                            <img
                              src={update.image}
                              alt={update.title}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="text-sm font-inter text-orange-600 font-semibold mb-3">
                              {new Date(update.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                            <h3 className="font-poppins text-2xl font-bold text-slate-900 mb-4">
                              {update.title}
                            </h3>
                            <p className="font-inter text-gray-700 leading-relaxed mb-6">
                              {update.excerpt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Controls */}
            <button
              onClick={prevUpdate}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextUpdate}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {latestUpdates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentUpdate(index)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentUpdate
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-400 hover:bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}


      {/* 
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.85)), url('https://readdy.ai/api/search-image?query=bright%20and%20modern%20sports%20training%20facility%20with%20natural%20lighting%2C%20young%20athletes%20practicing%20with%20professional%20equipment%2C%20inspiring%20and%20clean%20environment&width=1440&height=800&seq=mission3&orientation=landscape')`
                    }}
                />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="floating-animation">
                            <div
                                className="h-96 rounded-3xl overflow-hidden shadow-2xl"
                                style={{
                                    backgroundImage: `url('https://readdy.ai/api/search-image?query=bright%20and%20inspiring%20portrait%20of%20young%20athlete%20with%20determined%20expression%20during%20training%2C%20natural%20lighting%20and%20clean%20modern%20background&width=500&height=400&seq=mission4&orientation=landscape')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                        </div>
                        <div className="text-slate-800">
                            <div className="mb-12">
                                <h2 className="font-orbitron text-4xl font-bold mb-6 text-orange-600">Our Mission</h2>
                                <p className="font-inter text-lg text-slate-600 leading-relaxed">
                                    Since 2010, our mission has been simple yet powerful: to provide completely free training,
                                    mentorship, and educational opportunities to young athletes regardless of their economic background.
                                    We believe talent knows no boundaries, and every child deserves the chance to become a champion.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-orbitron text-4xl font-bold mb-6 text-orange-600">Our Vision</h3>
                                <p className="font-inter text-lg text-slate-600 leading-relaxed">
                                    To create a world where every young athlete has access to quality training and mentorship,
                                    transforming not just individual lives but entire communities through the power of sports
                                    and the values it instills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



      {/* Support CTA Section */}
      <SupportCTA />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default HomePage