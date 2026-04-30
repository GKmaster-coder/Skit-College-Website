import React from 'react';
import PageBanner from '../components/shared/PageBanner';
import { facultyMembers } from '../data/FacultyData';
import { FaGraduationCap, FaUserTie } from 'react-icons/fa';

const Faculty = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Our Experts" 
        subtitle="Meet the brilliant minds shaping the future at SKIT Campus." 
        breadcrumbCurrent="Faculty" 
      />

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {facultyMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                      <FaUserTie size={60} />
                    </div>
                  )}
                  
                  {/* Designation Badge Overlapping Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20">
                      <p className="text-[#7A1F29] font-bold text-[10px] uppercase tracking-wider mb-1">
                        {member.designation}
                      </p>
                      <h3 className="text-slate-900 font-bold text-lg leading-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 pt-4 flex-grow flex flex-col justify-between">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaGraduationCap className="text-[#85b92b]" />
                    </div>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      {member.qualification}
                    </p>
                  </div>
                  
                  {/* Category Tag */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">
                      {member.category}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#85b92b]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Admin/Technical Staff Footer Note */}
      <section className="py-16 bg-white px-6 text-center">
        <div className="max-w-2xl mx-auto border-t border-slate-100 pt-10">
          <p className="text-slate-400 text-sm leading-relaxed">
            Our campus is supported by a dedicated team of administrative and technical professionals committed to providing a seamless learning environment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Faculty;