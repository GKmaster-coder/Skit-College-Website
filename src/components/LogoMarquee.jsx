import React from 'react';

const LogoMarquee = () => {
    // Replace these with your actual partner/company logo paths
    const logos = [
        { id: 1, src: "/logo/tcs.png", alt: "Partner 1" },
        { id: 2, src: "/logo/cisco.png", alt: "Partner 2" },
        { id: 3, src: "/logo/tcs.png", alt: "Partner 3" },
        { id: 4, src: "/logo/cisco.png", alt: "Partner 4" },
        { id: 5, src: "/logo/tcs.png", alt: "Partner 5" },
        { id: 6, src: "/logo/tcs.png", alt: "Partner 6" },
    ];

    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <h3 className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">
                    Our Students Placed In Top Companies
                </h3>
            </div>

            {/* Main Slider Container */}
            <div className="relative flex overflow-hidden group">

                {/* Gradient Overlays for smooth fade effect */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* The Marquee Track */}
                <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-24 items-center py-4">
                    {/* First set of logos */}
                    {logos.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    ))}
                    {/* Duplicate set for seamless looping */}
                    {logos.map((logo) => (
                        <img
                            key={`dup-${logo.id}`}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>

            {/* Required Tailwind Custom Animation */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        /* Pause on hover for better user experience */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default LogoMarquee;
