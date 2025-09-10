import React from 'react'
import { Link } from 'react-router-dom'
const SupportCTA = () => {
    return (
        <>
            {/* Support CTA Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-orange-100 to-white">
                <div
                    className="absolute inset-0 hero-parallax"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.85)), url('https://readdy.ai/api/search-image?query=bright%20and%20modern%20sports%20facility%20with%20natural%20sunlight%2C%20young%20athletes%20training%20together%2C%20clean%20minimalist%20design%20with%20inspiring%20atmosphere&width=1440&height=800&seq=support2&orientation=landscape')`
                    }}
                />
                {/* Floating geometric shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full floating-animation" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/30 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-orange-400/25 rounded-full floating-animation" style={{ animationDelay: '4s' }}></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-orbitron text-5xl font-bold text-slate-800 mb-6 text-reveal">
                        Help Them Rise
                    </h2>
                    <p className="font-inter text-2xl text-slate-600 mb-12 text-reveal" style={{ animationDelay: '0.3s' }}>
                        Your donation keeps our programs completely free and creates the next generation of champions from all backgrounds
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/donatejoinus">
                         <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 !rounded-button font-inter font-bold text-lg pulse-glow hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer">
                            Donate Now
                        </button>
                        </Link>
                       
                        {/* <button className="neon-border bg-transparent px-10 py-4 !rounded-button font-inter font-bold text-lg whitespace-nowrap cursor-pointer">
                            Help Them Rise
                        </button> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SupportCTA
