// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import SupportCTA from '../SupportCTA/SupportCTA';
const VisitorFrom = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        areaOfInterest: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };
    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="max-w-md w-full mx-auto text-center">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="fas fa-check text-white text-2xl"></i>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
                        <p className="text-gray-600 mb-6">Your submission has been received. We'll get back to you soon to discuss how you can make a difference in our community.</p>
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                setFormData({
                                    name: '',
                                    email: '',
                                    phone: '',
                                    areaOfInterest: '',
                                    message: ''
                                });
                            }}
                            className="!rounded-button whitespace-nowrap cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                        >
                            Submit Another Form
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <Header />

            {/* Hero Section */}
            {/* <section className="relative bg-gradient-to-r from-white via-gray-50 to-gray-100 py-20">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20sports%20training%20facility%20with%20modern%20equipment%2C%20athletes%20in%20action%2C%20bright%20natural%20lighting%2C%20clean%20minimalist%20background%2C%20motivational%20atmosphere%2C%20high-energy%20environment%2C%20contemporary%20design%20elements&width=1440&height=600&seq=hero-bg-001&orientation=landscape')`
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                Join Our <span className="text-orange-500">Community</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Choose your path to make a difference. Whether you want to volunteer, mentor, or partner with us, we have opportunities that match your passion and skills.
                            </p>
                            <div className="flex items-center space-x-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-500">2000+</div>
                                    <div className="text-sm text-gray-600">Active Members</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-500">500+</div>
                                    <div className="text-sm text-gray-600">Volunteers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-500">150+</div>
                                    <div className="text-sm text-gray-600">Partners</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://readdy.ai/api/search-image?query=Diverse%20group%20of%20people%20working%20together%20in%20sports%20training%20environment%2C%20teamwork%20and%20collaboration%2C%20modern%20athletic%20facility%2C%20professional%20coaching%20scene%2C%20inspiring%20community%20atmosphere%2C%20clean%20bright%20background&width=600&height=500&seq=community-001&orientation=portrait"
                                alt="Community members working together"
                                className="w-full h-auto rounded-lg shadow-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Form Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
                        <p className="text-xl text-gray-600">Fill out the form below and we'll connect you with the perfect opportunity to make an impact.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="areaOfInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Area of Interest *
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="areaOfInterest"
                                            name="areaOfInterest"
                                            required
                                            value={formData.areaOfInterest}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm appearance-none cursor-pointer"
                                        >
                                            <option value="">Select your area of interest</option>
                                            <option value="volunteer">Volunteer</option>
                                            <option value="mentor">Mentor</option>
                                            <option value="partner">Partner</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <i className="fas fa-chevron-down text-gray-400 text-sm"></i>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message/Comments
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm resize-vertical"
                                        placeholder="Tell us more about your interests and how you'd like to contribute..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="!rounded-button whitespace-nowrap cursor-pointer w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin mr-2"></i>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-paper-plane mr-2"></i>
                                            Submit Application
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                        {/* Info Panel */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Join Us?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                                            <i className="fas fa-heart text-white text-sm"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Make a Real Impact</h4>
                                            <p className="text-gray-600 text-sm">Help shape the future of sports training and development in our community.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                                            <i className="fas fa-users text-white text-sm"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Join a Community</h4>
                                            <p className="text-gray-600 text-sm">Connect with like-minded individuals who share your passion for sports and development.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                                            <i className="fas fa-trophy text-white text-sm"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Grow Your Skills</h4>
                                            <p className="text-gray-600 text-sm">Develop leadership, coaching, and mentoring skills while making a difference.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <a href="mailto:chance2sports@gmail.com" className="flex items-center">
                                            <i className="fas fa-envelope text-orange-500 w-5 mr-3"></i>
                                            <span className="text-gray-600">chance2sports@gmail.com</span>
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <a href="tel:+919137476346" className="flex items-center">
                                            <i className="fas fa-phone text-orange-500 w-5 mr-3"></i>
                                            <span className="text-gray-600">+91 9137476346</span>
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <a
                                            href="https://maps.app.goo.gl/WfMouaUChRuWKZYYA?g_st=aw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center"
                                        >
                                            <i className="fas fa-map-marker-alt text-orange-500 w-5 mr-3 mt-1"></i>
                                            <span className="text-gray-600">S NO 24 P VISHAL NAGAR,JAGTAP DAIRY,Sangavi,Pune City,Pune,Maharashtra,India,41102</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
export default VisitorFrom