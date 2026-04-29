import React from 'react';
import { 
  FaLaptopCode, 
  FaWifi, 
  FaChalkboardTeacher, 
  FaShieldAlt, 
  FaHeadset, 
  FaBriefcase 
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      title: "Online Lec & Notes",
      desc: "SKIT has been providing high-quality and open access to multilingual educational resources including E-books and study Materials. The e-resources can be accessed globally.",
      icon: <FaLaptopCode className="text-4xl text-[#85b92b]" />,
    },
    {
      title: "e-campus",
      desc: "Wi-Fi allowed communications and wireless ad hoc networks. Proven popular with digital CCTV, Projectors, and other consumer electronics devices across the campus.",
      icon: <FaWifi className="text-4xl text-[#85b92b]" />,
    },
    {
      title: "Digital Classroom",
      desc: "Spacious classrooms and lecture halls with the latest audio-visual and multimedia technology. Classrooms are enabled with internet, projectors, and sound systems.",
      icon: <FaChalkboardTeacher className="text-4xl text-[#85b92b]" />,
    },
    {
      title: "CCTV Security",
      desc: "Equipped with 24/7 CCTV cameras and experienced security personnel. Strict ID card policy ensures a safe and secure environment for all staff and students.",
      icon: <FaShieldAlt className="text-4xl text-[#85b92b]" />,
    },
    {
      title: "Student Support Cell",
      desc: "Established in 2016-17, this cell guides students through academic and personal challenges, preserving data to track co-curricular and extracurricular excellence.",
      icon: <FaHeadset className="text-4xl text-[#85b92b]" />,
    },
    {
      title: "Training & Placement",
      desc: "Dedicated department for student placement. We advise on career options and provide the latest information on training and employment opportunities.",
      icon: <FaBriefcase className="text-4xl text-[#85b92b]" />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
          <div className="lg:w-1/3">
            <span className="text-[#85b92b] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Features & <br />
              <span className="text-[#85b92b] italic underline underline-offset-8 decoration-1">Overviews</span>
            </h2>
          </div>
          
          <div className="lg:w-2/3">
            <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-slate-200 pl-8">
              SKIT campus hosts a wide variety of exceptional facilities to create an environment where you can shape your future. We give massive importance to our facilities and learning resources and continuously ensure that our staff and students have full access to everything they need to help them succeed in their work and study.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:-translate-y-2"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#85b92b]/10 transition-colors">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#85b92b] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {feature.desc}
              </p>

              {/* Bottom Decoration */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#85b92b] transition-all duration-500 group-hover:w-full rounded-b-xl"></div>
              
              {/* Arrow link (Visual only) */}
              <div className="flex items-center text-[#85b92b] text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More 
                <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
