import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo3.png';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const latestUpdates = [
    {
      title: 'New Scholarship Program Launched',
      date: '2024-01-15',
      image:
        'https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20athletes%20receiving%20scholarship%20certificates%20in%20modern%20ceremony%20hall%20with%20celebratory%20atmosphere%20and%20professional%20lighting&width=400&height=250&seq=update1&orientation=landscape',
      excerpt:
        '50 new scholarships awarded to promising athletes across 10 different sports categories.'
    },
    {
      title: 'International Training Camp Success',
      date: '2024-01-10',
      image:
        'https://readdy.ai/api/search-image?query=young%20athletes%20training%20with%20international%20coaches%20in%20state-of-art%20sports%20facility%20with%20focused%20training%20atmosphere%20and%20professional%20equipment&width=400&height=250&seq=update2&orientation=landscape',
      excerpt:
        '15 athletes selected for advanced international training programs with world-class coaches.'
    },
    {
      title: 'Record Breaking Performance',
      date: '2024-01-05',
      image:
        'https://readdy.ai/api/search-image?query=young%20athlete%20breaking%20finish%20line%20tape%20with%20celebration%20crowd%20in%20background%20during%20championship%20event%20with%20dynamic%20action%20photography&width=400&height=250&seq=update3&orientation=landscape',
      excerpt:
        'C2S athletes set 8 new state records in recent championship competitions.'
    }
  ];


  const [currentUpdate, setCurrentUpdate] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % latestUpdates.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [latestUpdates.length]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 mb-5 transition-all duration-300 ${isScrolled ? 'bg-white/95 glass-morphism shadow-lg' : 'bg-white/70'
          }`}
      >
        <div className="mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-end">
              <Link to="/">
                <img
                  src={Logo}
                  alt="C2S Logo"
                  className="h-13 w-60 object-contain"
                />
              </Link>
              {/* <span className="text-sm text-gray-700 mt-1">Section 8 Company</span> */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors font-inter font-medium cursor-pointer ${isActive ? 'text-orange-600' : 'text-slate-700 hover:text-orange-600'
                  }`
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  `transition-colors font-inter font-medium cursor-pointer ${isActive ? 'text-orange-600' : 'text-slate-700 hover:text-orange-600'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/grassrootstalent"
                className={({ isActive }) =>
                  `transition-colors font-inter font-medium cursor-pointer ${isActive ? 'text-orange-600' : 'text-slate-700 hover:text-orange-600'
                  }`
                }
              >
                Grassroots Talent Program
              </NavLink>
              <NavLink
                to="/championsclub"
                className={({ isActive }) =>
                  `transition-colors font-inter font-medium cursor-pointer ${isActive ? 'text-orange-600' : 'text-slate-700 hover:text-orange-600'
                  }`
                }
              >
                Champions ElitePass
              </NavLink>
              <NavLink
                to="/newsletter"
                className={({ isActive }) =>
                  `transition-colors font-inter font-medium cursor-pointer ${isActive ? 'text-orange-600' : 'text-slate-700 hover:text-orange-600'
                  }`
                }
              >
                Newsletters & Events
              </NavLink>
              <Link to="/donatejoinus">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 !rounded-button font-inter font-semibold pulse-glow hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer">
                  Donate / Join Us
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden cursor-pointer text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-slate-900/95 glass-morphism rounded-lg p-4 z-[60] relative">
              <nav className="flex flex-col space-y-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition-colors font-inter cursor-pointer ${isActive ? 'text-orange-400 font-medium' : 'text-white hover:text-orange-400'
                    }`
                  }
                  end
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    `transition-colors font-inter cursor-pointer ${isActive ? 'text-orange-400 font-medium' : 'text-white hover:text-orange-400'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/grassrootstalent"
                  className={({ isActive }) =>
                    `transition-colors font-inter cursor-pointer ${isActive ? 'text-orange-400 font-medium' : 'text-white hover:text-orange-400'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Grassroot Program
                </NavLink>
                <NavLink
                  to="/championsclub"
                  className={({ isActive }) =>
                    `transition-colors font-inter cursor-pointer ${isActive ? 'text-orange-400 font-medium' : 'text-white hover:text-orange-400'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Champions Elite Program
                </NavLink>
                <NavLink
                  to="/newsletter"
                  className={({ isActive }) =>
                    `transition-colors font-inter cursor-pointer ${isActive ? 'text-orange-400 font-medium' : 'text-white hover:text-orange-400'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Newsletters & Events
                </NavLink>
                <Link
                  to="/donatejoinus"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 !rounded-button font-inter font-semibold whitespace-nowrap cursor-pointer w-full">
                    Donate / Join Us
                  </button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to push hero section down */}
      <div className="mt-20"></div>
    </>
  );
};

export default Header;
