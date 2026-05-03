import React from 'react';
import { FaGraduationCap, FaTrophy, FaStar, FaSearch } from 'react-icons/fa';
import PageBanner from '../components/shared/PageBanner';

const Result = () => {
  // Updated data with local image paths
  // Replace the image paths with your actual filenames in public/assets/students/
  const bbaResults = [
    { name: "Adesh kumar", course: "BBA 2", grade: "A", image: "/assets/students/adesh.jpg" },
    { name: "Divya kushwaha", course: "BBA", grade: "A", image: "/assets/students/divya.jpg" },
    { name: "Farheen akhtar", course: "BBA", grade: "A", image: "/assets/students/farheen.jpg" },
    { name: "Tabbasum khan", course: "BBA", grade: "A", image: "/assets/students/tabbasum.jpg" },
    { name: "Roshan Aara", course: "BBA", grade: "A", image: "/assets/students/roshan.jpg" },
    { name: "Tarranum Khan", course: "BBA", grade: "A", image: "/assets/students/tarranum.jpg" },
    { name: "Suryansh singh", course: "BBA", grade: "A", image: "/assets/students/suryansh.jpg" },
    { name: "Shrasti katiyar", course: "BBA", grade: "A", image: "/assets/students/shrasti.jpg" },
    { name: "Swati", course: "BBA", grade: "A", image: "/assets/students/swati.jpg" },
  ];

  const bcaResults = [
    { name: "Poonam Shankhwar", course: "BCA", grade: "A", image: "/assets/students/poonam.jpg" },
    { name: "Rohit Pal", course: "BCA", grade: "A", image: "/assets/students/rohit.jpg" },
    { name: "Ankita Kushwaha", course: "BCA", grade: "A", image: "/assets/students/ankita.jpg" },
    { name: "Sandhya Gupta", course: "BCA", grade: "A", image: "/assets/students/sandhya.jpg" },
    { name: "Prakashni dixit", course: "BCA", grade: "A", image: "/assets/students/prakashni.jpg" },
    { name: "Akshita diwedi", course: "BCA", grade: "A", image: "/assets/students/akshita.jpg" },
    { name: "Astha Porwal", course: "BCA", grade: "A", image: "/assets/students/astha.jpg" },
    { name: "Sumra", course: "BCA", grade: "A", image: "/assets/students/sumra.jpg" },
    { name: "Richa Katiyar", course: "BCA", grade: "A", image: "/assets/students/richa.jpg" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Academic Results" 
        subtitle="Celebrating the hard work and excellence of our top performing students." 
        breadcrumbCurrent="Results" 
      />

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#85b92b] font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                <FaTrophy /> Merit List 2025-26
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-2">
                Our <span className="text-[#7A1F29] italic underline underline-offset-8 decoration-1">Star</span> Performers
              </h2>
            </div>
            
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search student name..." 
                className="pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#85b92b] transition-all w-full md:w-80 shadow-sm"
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#85b92b] transition-colors" />
            </div>
          </div>

          {/* Result Sections */}
          <ProgramSection title="BBA Program" subtitle="Bachelor of Business Administration" data={bbaResults} accentColor="#7A1F29" />
          <div className="h-24"></div>
          <ProgramSection title="BCA Program" subtitle="Bachelor of Computer Applications" data={bcaResults} accentColor="#85b92b" />

        </div>
      </section>
    </div>
  );
};

const ProgramSection = ({ title, subtitle, data, accentColor }) => (
  <div className="space-y-8">
    <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-lg" style={{ backgroundColor: accentColor }}>
        <FaGraduationCap />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">{subtitle}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((student, index) => (
        <div key={index} className="group relative bg-white rounded-[2rem] p-6 border border-slate-100 hover:border-[#85b92b] hover:shadow-2xl hover:shadow-[#85b92b]/10 transition-all duration-500">
          
          {/* Grade Badge */}
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#85b92b]/10 flex items-center justify-center text-[#85b92b] font-black text-xl border border-[#85b92b]/20 z-10">
            {student.grade}
          </div>

          <div className="flex items-center gap-5">
            {/* Student Image Section */}
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-slate-100 overflow-hidden border-4 border-white shadow-md group-hover:border-[#85b92b] transition-colors duration-500">
                <img 
                  src={student.image} 
                  alt={student.name}
                  // Using a fallback avatar if image fails to load
                  onError={(e) => { e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`; }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#85b92b] rounded-lg flex items-center justify-center text-white text-xs shadow-lg">
                <FaStar />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#7A1F29] transition-colors leading-tight">
                {student.name}
              </h4>
              <p className="text-slate-500 text-sm font-semibold mt-1">
                {student.course}
              </p>
              <div className="mt-3 flex items-center gap-2 px-3 py-1 bg-[#85b92b]/10 rounded-full w-fit">
                <span className="w-2 h-2 bg-[#85b92b] rounded-full animate-pulse"></span>
                <span className="text-[10px] text-[#85b92b] font-bold uppercase tracking-wider">Top Scorer</span>
              </div>
            </div>
          </div>

          {/* Subtle Decorative Background Icon */}
          <div className="absolute -bottom-4 -right-4 text-slate-50 text-7xl opacity-50 group-hover:scale-110 group-hover:text-[#85b92b]/10 transition-all duration-700 pointer-events-none">
            <FaTrophy />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Result;