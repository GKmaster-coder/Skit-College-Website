import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaCertificate, FaBriefcase, FaUsers } from 'react-icons/fa';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only happens once
    threshold: 0.2,    // Starts when 20% of the section is visible
  });

  const stats = [
    { id: 1, number: 2032, label: "Happy Enrolled Students", icon: <FaUserGraduate />, color: "bg-blue-50 text-blue-600" },
    { id: 2, number: 1721, label: "University Graduates", icon: <FaCertificate />, color: "bg-green-50 text-green-600" },
    { id: 3, number: 1453, label: "Students Placed", icon: <FaBriefcase />, color: "bg-purple-50 text-purple-600" },
    { id: 4, number: 42, label: "Dedicated Staff", icon: <FaUsers />, color: "bg-orange-50 text-orange-600" },
  ];

  return (
    <section ref={ref} className="bg-gray-50 py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-transparent hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 md:w-20 md:h-20 ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                <span className="text-2xl md:text-3xl">{stat.icon}</span>
              </div>

              {/* Counter Logic */}
              <div className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                {inView ? stat.number.toLocaleString() : "0"}
                <span className="text-[#85b92b] ml-1">+</span>
              </div>

              {/* Label */}
              <p className="mt-3 text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">
                {stat.label}
              </p>
              
              {/* Bottom Decorative Line */}
              <div className="w-10 h-1 bg-gray-100 group-hover:w-20 group-hover:bg-[#85b92b] transition-all duration-500 mt-4 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
