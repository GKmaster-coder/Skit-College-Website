import React from 'react';
import { FaCheckCircle, FaRocket, FaGraduationCap, FaHandshake, FaLaptopCode } from 'react-icons/fa';

const WhyChooseUs = () => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      text: "We offer a strong academic foundation in your chosen field."
    },
    {
      icon: <FaHandshake />,
      text: "Experienced faculty with industry expertise."
    },
    {
      icon: <FaRocket />,
      text: "Excellent placement opportunities with various companies."
    },
    {
      icon: <FaLaptopCode />,
      text: "Supportive learning environment with practical hands-on experience through internships and projects."
    }
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#85b92b] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Image with Creative Frame */}
        <div className="relative group">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              src="/about/whychoose.webp" 
              alt="SKIT Campus Excellence" 
              className="w-full h-100 object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8">
              <p className="text-white font-serif text-2xl italic">"Dreams Come True Here"</p>
            </div>
          </div>
          
          {/* Decorative Border Frame */}
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-white/30 rounded-2xl z-0 hidden md:block"></div>
        </div>

        {/* Right Side: Content */}
        <div className="text-white">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block backdrop-blur-md border border-white/30">
            Pioneer in Education
          </span>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Why Choose <span className="italic underline decoration-white/40 underline-offset-8">SKIT?</span>
          </h2>
          
          <p className="text-white/90 text-lg mb-10 leading-relaxed font-medium">
            SKIT is a pioneer centre for teaching, learning and research, consistently ranked among the top professional & technical institutes in Kanpur (D).
          </p>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-2 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-2xl text-white mt-1 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-white font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-white/80 italic text-sm leading-relaxed border-t border-white/20 pt-6">
            A vibrant student community and a reputation for producing successful graduates in both business and IT sectors, giving you a competitive edge in the job market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;