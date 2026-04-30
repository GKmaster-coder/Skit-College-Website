import React from 'react';
import { FaGraduationCap, FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const BrightStars = () => {
  const alumni = [
    {
      name: "Rohit Pal",
      role: "Uttar Pradesh Police",
      sector: "Government Sector",
      batch: "2016 - 2019",
      course: "BCA",
      image: "/college-students/rohit.jpg",
    },
    {
      name: "Roshani Katiyar",
      role: "HDFC Bank PO",
      sector: "Private Sector",
      batch: "2017 - 2020",
      course: "BBA",
      image: "/college-students/roshani.jpg",
    },
    {
      name: "Shivam Yadav",
      role: "BSF",
      sector: "Government Sector",
      batch: "2020 - 2023",
      course: "BCA",
      image: "/college-students/shivam-yadav.jpg",
    },
    {
      name: "Priya Tripathi",
      role: "Bihar Public Service Commission",
      sector: "Government Sector",
      batch: "2016 - 2019",
      course: "BCA",
      image: "/college-students/priya-tripathi.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#85b92b]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-white font-semibold tracking-[0.25em] uppercase text-sm mb-4 block opacity-90">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Our Bright{" "}
            <span className="italic underline underline-offset-8 decoration-white">
              Stars
            </span>
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Here is what our recent SKIT Campus graduates have to say about their
            journey toward professional excellence.
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {alumni.map((student, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                {/* Badge */}
                <div className="absolute bottom-4 right-4">
                  <span
                    className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow ${
                      student.sector === "Government Sector"
                        ? "bg-[#8d343f] text-white"
                        : "bg-[#85b92b] text-white"
                    }`}
                  >
                    {student.sector}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#8d343f] transition">
                  {student.name}
                </h3>

                <p className="text-[#85b92b] font-semibold text-sm mb-4 flex items-center gap-2">
                  <FaBuilding className="text-xs" /> {student.role}
                </p>

                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> Batch
                    </span>
                    <span className="font-semibold text-gray-700">
                      {student.batch}
                    </span>
                  </div>

                  <div className="flex justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaGraduationCap /> Course
                    </span>
                    <span className="font-semibold text-gray-700">
                      {student.course}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrightStars;