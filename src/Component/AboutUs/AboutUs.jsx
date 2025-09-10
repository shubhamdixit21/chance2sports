import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SupportCTA from "../SupportCTA/SupportCTA";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import "./AboutUs.css";
import aboutus from "../../assets/aboutus.jfif"
import banner3 from "../../assets/banner3.jpeg"
import kangakids from "../../assets/Kanga-Kids.png"
const AboutUs = () => {

  const mentors = [
    {
      name: "Anil Nayar",
      title: "28-time National Champion",
      description:
        "A 28-time National Champion across India, USA, Canada, and Mexico. Former National Champion trained at Cricket Club of India and Harvard University.",
      achievements: [
        "• William J. Bingham Award - Harvard University (1969)",
        "• Arjuna Award (1969)",
        "• U.S. Squash Hall of Fame (2018)",
      ],
      image: "https://i.postimg.cc/V6vMPD9F/3.png",
      linkedin: "https://www.linkedin.com/in/anil-nayar-1983102",
    },
    {
      name: "Naval Pandole",
      title: "Vice President",
      description:
        "Vice President of The Cricket Club of India for two successful terms and dedicated Secretary of the Squash Department for over 25 years. Pioneered India’s first state-of-the-art glass-backed squash court.",
      achievements: [

        "• Mentored teams at Junior Asians in Bahrain",
        "• Asian Senior Championships coach",
        "• 25+ years in squash promotion",
      ],
      image: "https://i.postimg.cc/bNkm5www/4.png",
    },
    {
      name: "Rishad Pandole",
      title: "Head of Corporate Solutions",
      description:
        "Head of Corporate Solutions at Real Estate Advisor and University of Rochester alumnus, he has been India No. 1 in both Under-19 and Over-35 squash categories, with notable international achievements.",
      achievements: [
        "• Quarter-finalist, World Over-35 Championships",
        "• Semi-finalist, British Open Over-35",
        "• 25+ years in squash promotion",
      ],
      image: "https://i.postimg.cc/K8r6QBWj/Rishad-Pandole.jpg",
      linkedin: "https://in.linkedin.com/in/rishad-pandole-51bb926",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const computeItemsPerSlide = () => {
      if (typeof window === "undefined") return 1;
      return window.innerWidth >= 768 ? 2 : 1; // md breakpoint
    };

    const handleResize = () => {
      const next = computeItemsPerSlide();
      setItemsPerSlide((prev) => (prev !== next ? next : prev));
    };

    // Initialize and listen for changes
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = React.useMemo(() => {
    const chunks = [];
    for (let i = 0; i < mentors.length; i += itemsPerSlide) {
      chunks.push(mentors.slice(i, i + itemsPerSlide));
    }
    return chunks;
  }, [mentors, itemsPerSlide]);

  useEffect(() => {
    // Reset slide index if slides count changes (e.g., on resize)
    setCurrentSlideIndex((prev) => (prev >= slides.length ? 0 : prev));
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % Math.max(slides.length, 1));
    }, 4500); // Auto-scroll every 4.5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const milestones = [
    {
      year: "2009",
      title: "Where it all began",
      description: "RNSF was established to promote sports in Pune.",
    },
    {
      year: "2014",
      title: "Laying the foundation",
      description:
        "Built the city's first public court and launched our community program.",
    },
    {
      year: "2017",
      title: "Reaching new heights",
      description:
        "Expanded to multiple cities, mentored national and international players, and promoted free sports activities.",
    },
    {
      year: "2019",
      title: "International success",
      description:
        "Trained the GU-17 Scottish Junior Open winner and several National Champions.",
    },
    {
      year: "2022",
      title: "Empowering young talent",
      description:
        "Continued supporting grassroots programs and nurturing future stars.",
    },
    {
      year: "2024",
      title: "Bigger and better",
      description:
        "Launched the largest public court center and introduced a talent hunt to discover and train young athletes.",
    },
    {
      year: "2025",
      title: "The future is here",
      description:
        "Set to open high-performance centers and expand our community programs to empower even more talent.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-auto md:h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/mZJ4Hk1p/7d8787172662ed7b86e743b3b5cefa67.jpg"
            alt="Sports Training Facility"
            className="w-full h-full object-cover object-top opacity-30"
            loading="lazy"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-16 md:py-0">
          <div className="text-black max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Equal Opportunity in Sports
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-800">
              Chance2Sports drives various initiatives through its two arms:
              RNSF and Champions Gurukul, creating pathways for athletes to
              achieve their dreams.
            </p>
            <Link
              to="/donatejoinus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap text-sm md:text-base"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* C2S Overview */}
      <section
        className="relative py-12 md:py-20 bg-gray-50 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${banner3}')`,
        }}
      >
        {/* Dark & Blurred Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={aboutus}
                alt="C2S Overview"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                About Chance2Sports
              </h2>
              <p className="text-base md:text-lg mb-4 md:mb-6">
                At Chance2Sports, we believe every athlete deserves an
                opportunity to excel. Our comprehensive approach combines
                grassroots development with elite training programs, creating a
                complete ecosystem for sporting excellence.
              </p>
              <p className="text-base md:text-lg mb-6 md:mb-8">
                Through our two main pillars - RNSF and Champions Gurukul - we
                provide structured pathways from community-level participation
                to international competition, ensuring no talent goes unnoticed.
              </p>

              {/* <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center p-3 md:p-4 bg-white bg-opacity-90 rounded-lg shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1 md:mb-2">
                    15+
                  </div>
                  <div className="text-sm md:text-base text-gray-800">
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center p-3 md:p-4 bg-white bg-opacity-90 rounded-lg shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1 md:mb-2">
                    500+
                  </div>
                  <div className="text-sm md:text-base text-gray-800">
                    Athletes Trained
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>



      {/* Journey Reflection */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Our journey continues
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Our journey is proof that with hard work, focus, and passion, dreams
            can become reality. Stay tuned for more milestones as we continue to
            inspire and uplift the sports community!
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-12 md:py-20 bg-gray-50">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(${banner3})`,
            zIndex: 0,
          }}
          aria-hidden="true"
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" style={{ zIndex: 1 }} aria-hidden="true"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
          <div className="text-center mb-12 md:mb-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg md:text-xl">
              Meet the visionaries driving our mission forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <a
              href="https://in.linkedin.com/in/abhinav-sinha-a5627631"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://i.postimg.cc/dVtq0fR8/2.png"
                    alt="Abhinav Sinha"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover object-top mb-4 md:mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                    Abhinav Sinha
                  </h3>
                  <div className="text-orange-500 font-medium mb-3 md:mb-4">
                    Founder & CEO
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    A lawyer turned serial sports entrepreneur, Abhinav is one of
                    the youngest racket sports Player/Coach to mentor National
                    Champions consistently every year. Former International squash
                    player who coached the Indian team for Asian Junior
                    Championship (2023), British Junior Open (2020) & World Junior
                    Championship (2019). Two-time National champion in 2019 & 2020
                    (Pro Coach) with highest world ranking of 285.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://in.linkedin.com/in/chetan-desai-gssi"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://i.postimg.cc/tJQqCCDT/1.png"
                    alt="Chetan Desai"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover object-top mb-4 md:mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                    Chetan Desai
                  </h3>
                  <div className="text-orange-500 font-medium mb-3 md:mb-4">
                    Co-Founder & Director
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    With sports close to his heart and passion in his mind, Chetan
                    has been one of the finest Tennis players with more than 50
                    years of experience. Former ATP-ranked player with career high
                    of 310. Won Gold medal in inaugural National Games (Olympic
                    Format) in 1985 at New Delhi. Leadership spans C-suite roles
                    across FMCG, garment exports, sports management, and media
                    industries.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>


      {/* Mentors Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3 md:mb-4">
              Our Mentors
            </h2>
            <p className="text-lg md:text-xl text-dark">
              We are privileged to have legendary mentors deeply involved in our
              program
            </p>
          </div>
          <div className="relative">
            {/* Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
              >
                {slides.map((slideMentors, slideIdx) => (
                  <div key={slideIdx} className="flex-shrink-0 w-full">
                    <div
                      className={`grid grid-cols-1 ${itemsPerSlide > 1 ? "md:grid-cols-2" : ""
                        } gap-4`}
                    >
                      {slideMentors.map((mentor, index) => (
                        <div key={`${slideIdx}-${index}`} className="p-2">
                          <a
                            href={mentor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 md:p-8 rounded-lg">
                              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                                <img
                                  src={mentor.image}
                                  alt={mentor.name || mentor.title}
                                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-top mx-auto md:mx-0"
                                  loading="lazy"
                                />
                                <div>
                                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                                    {mentor.name || mentor.title}
                                  </h3>
                                  <div className="text-orange-500 font-medium mb-2 md:mb-3">
                                    {mentor.title}
                                  </div>
                                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                                    {mentor.description}
                                  </p>
                                  <div className="space-y-1 text-xs md:text-sm text-gray-500">
                                    {mentor.achievements.map((achievement, idx) => (
                                      <div key={idx}>{achievement}</div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-[-1rem] md:left-[-3.5rem] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-transform hover:scale-110"
            >
              <i className="fas fa-chevron-left text-gray-700"></i>
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-[-1rem] md:right-[-3.5rem] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-transform hover:scale-110"
            >
              <i className="fas fa-chevron-right text-gray-700"></i>
            </button>
          </div>
        </div>
      </section>


      {/* Donors Recognition */}
      <section className="py-12 md:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Our Contributors / Donors
            </h2>
            <p className="text-lg md:text-xl text-white">
              Grateful to our donors and partners who make our mission possible
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {/* Kanga Kids */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-6 rounded-lg shadow-sm text-center">
                  {/* <i className="fas fa-child text-3xl text-pink-500 mb-3"></i> */}
                  <img
                    src={kangakids}
                    alt="Kanga Kids"
                    className="w-[80px] h-[80px] object-cover object-top"
                    loading="lazy"
                  />
                  <div className="font-semibold text-base text-gray-900">
                    Kanga Kids
                  </div>
                </div>
                <div className="flip-card-back bg-pink-50 p-6 rounded-lg shadow-sm text-center">
                  <p className="font-semibold text-gray-900">Deborah Kanga</p>
                </div>
              </div>
            </div>

            {/* Trust Foundations */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-6 rounded-lg shadow-sm text-center">
                  <i className="fas fa-users text-3xl text-orange-500 mb-3"></i>
                  <div className="font-semibold text-base text-gray-900">
                    Trust Foundations
                  </div>
                </div>
                <div className="flip-card-back bg-orange-50 p-6 rounded-lg shadow-sm text-center">
                  <p className="font-semibold text-gray-900">Lalji Mehrotra</p>
                </div>
              </div>
            </div>

            {/* Donors */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-6 rounded-lg shadow-sm text-center">
                  <i className="fas fa-hand-holding-heart text-3xl text-yellow-500 mb-3"></i>
                  <div className="font-semibold text-base text-gray-900">
                    Donors
                  </div>
                </div>
                <div className="flip-card-back bg-yellow-50 p-6 rounded-lg shadow-sm text-center">
                  <p className="font-semibold text-gray-900">Anil Nayar</p>
                  <p className="font-semibold text-gray-900">Naval Pandole</p>
                  <p className="font-semibold text-gray-900">Chetan Mehrotra</p>
                  <p className="font-semibold text-gray-900">Gautam Rege</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <p className="text-gray-50 mb-4 md:mb-6">
              Interested in supporting our mission? Join our community of changemakers.
            </p>
            <Link to="/donatejoinus">
              <button className="bg-orange-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap text-sm md:text-base">
                Become a Supporter
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* Support CTA */}
      <SupportCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;