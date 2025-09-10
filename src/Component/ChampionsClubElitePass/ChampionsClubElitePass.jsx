// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import SupportCTA from "../SupportCTA/SupportCTA";
import TalentIdentificationSection from "./TalentIdentificationSection";
import banner from "../../assets/banner.jpeg";
import CEP from "../../assets/CEP.png";
const ChampionsClubElitePass = () => {
  const [activeTab, setActiveTab] = useState("stage1");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-white py-12 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                CHAMPIONS {" "}
                <span className="text-orange-500">ELITE PASS</span>
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                A comprehensive initiative dedicated to identifying, supporting,
                and elevating exceptional athletic talent with the potential to
                achieve top ranks in national and international competitions.
              </p>
              {/* <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-6 md:mb-8">
                <div className="text-center min-w-[100px]">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Elite Athletes
                  </div>
                </div>
                <div className="text-center min-w-[100px]">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    National Titles
                  </div>
                </div>
                <div className="text-center min-w-[100px]">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                    8+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    International Medals
                  </div>
                </div>
              </div> */}
            </div>
            <div className="relative order-first lg:order-last">
              <a
                href="https://thesportsgrail.com/empowering-young-champions-the-champions-club-elite-pass/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  // src="https://readdy.ai/api/search-image?query=Young%20professional%20athlete%20holding%20trophy%20with%20confident%20smile%20wearing%20sports%20uniform%20in%20modern%20training%20facility%20with%20clean%20white%20background%20and%20professional%20lighting&width=600&height=700&seq=hero-athlete-001&orientation=portrait"
                  src={CEP}
                  alt="Elite Athlete"
                  className="w-full h-auto max-h-[500px] rounded-lg shadow-xl md:shadow-2xl object-cover object-top"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Identification Section */}
      <TalentIdentificationSection />

      {/* Elite Athletes Section */}









      {/* Support CTA */}
      <SupportCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ChampionsClubElitePass;