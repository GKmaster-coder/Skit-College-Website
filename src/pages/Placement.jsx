import React from 'react';
import { FaBriefcase, FaBuilding, FaUserTie, FaSearch, FaStar, FaAward, FaUniversity } from 'react-icons/fa';
import PageBanner from '../components/shared/PageBanner';

const Placement = () => {
  const privateSector = [
    { name: 'Gazala Siddque', company: 'Vimal Export Global LLP', image: '' },
    { name: 'Aniket Sharma', company: 'Realishtic Realstate Private Ltd', image: '' },
    { name: 'Arti Rathaur', company: 'Private Sector', image: '' },
    { name: 'Gaurav Kumar', company: 'Honda Pvt Ltd', image: '' },
    { name: 'Harshit Shrivastava', company: 'Shri Ram Finance', image: '' },
    { name: 'Kashish Batham', company: 'Private Sector', image: '' },
    { name: 'Himanshu Katiyar', company: 'Private Sector', image: '' },
    { name: 'Priyanshu Kamal', company: 'Private Sector', image: '' },
    { name: 'Rishabh Verma', company: 'Vedanta Hospital', image: '' },
    { name: 'Richa', company: 'Private Sector', image: '' },
    { name: 'Pradeep Dixit', company: 'Center Fruit Pvt Ltd', image: '' },
    { name: 'Shashank Diwedi', company: 'Private Sector', image: '' },
    { name: 'Suryansh', company: 'Private Sector', image: '' },
    { name: 'Mohit', company: 'Private Sector', image: '' },
    { name: 'Sanjeev Raypuria', company: 'Synergy Telematics Pvt. Ltd. Noida UP', image: '' },
  ];

  const govtSector = [
    { name: 'Mukesh Prajapati', department: 'ARMY Agniveer', image: '' },
    { name: 'Saurabh Yadav', department: 'Army', image: '' },
    { name: 'Sahil', department: 'UP Police', image: '' },
    { name: 'Abhsihek', department: 'Government Sector', image: '' },
  ];

  const topScorers = [
    { name: 'Student 2', class: 'BBA 1st Year', percent: '88%' },
    { name: 'Student 1', class: 'BBA 1st Year', percent: '85%' },
    { name: 'Student 2', class: 'BBA 1st Year', percent: '88%' },
    { name: 'Student 2', class: 'BBA 1st Year', percent: '88%' },
    { name: 'Student 2', class: 'BBA 1st Year', percent: '88%' },
    { name: 'Student 2', class: 'BBA 1st Year', percent: '88%' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Placements & Success" 
        subtitle="Bridging the gap between education and professional excellence." 
        breadcrumbCurrent="Placements" 
      />

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#85b92b] font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                <FaAward /> Career Milestones
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-2">
                Our <span className="text-[#7A1F29] italic underline underline-offset-8 decoration-1">Corporate</span> Alumni
              </h2>
              <p className="text-slate-500 mt-4">Our Placed student in private sector...</p>
            </div>
            
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search by student or company..." 
                className="pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#85b92b] transition-all w-full md:w-80 shadow-sm"
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#85b92b] transition-colors" />
            </div>
          </div>

          {/* PRIVATE SECTOR */}
          <PlacementGrid 
            title="Private Sector Placements" 
            icon={<FaBuilding />} 
            accentColor="#7A1F29" 
            data={privateSector}
            type="company"
          />

          <div className="my-24 h-px bg-slate-100" />

          {/* GOVERNMENT SECTOR */}
          <PlacementGrid 
            title="Government Sector" 
            icon={<FaUniversity />} 
            accentColor="#85b92b" 
            data={govtSector}
            type="department"
          />

          {/* ACADEMIC TOPPERS SPOTLIGHT */}
          {/* <div className="mt-32 pt-20 border-t border-slate-100">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-serif font-bold text-slate-900">Academic Excellence</h3>
              <p className="text-slate-500 mt-2">Current year top performers across departments</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topScorers.map((student, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group text-center">
                   <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center text-[#85b92b] shadow-sm border border-slate-100 group-hover:bg-[#85b92b] group-hover:text-white transition-all">
                    <FaStar size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">{student.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{student.class}</p>
                  <div className="mt-4 inline-block px-4 py-1 bg-[#7A1F29] text-white rounded-full text-sm font-bold">
                    {student.percent} Score
                  </div>
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </section>
    </div>
  );
};

const getInitials = (name = '') =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');

const StudentAvatar = ({ name, image }) => {
  const [showFallback, setShowFallback] = React.useState(!image);
  const initials = getInitials(name);

  if (showFallback) {
    return (
      <div className="w-12 h-12 rounded-full bg-[#7A1F29] text-white flex items-center justify-center font-semibold text-sm">
        {initials || 'ST'}
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={name}
      className="w-12 h-12 rounded-full object-cover"
      onError={() => setShowFallback(true)}
    />
  );
};

const PlacementGrid = ({ title, icon, accentColor, data, type }) => (
  <div className="space-y-10">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl" style={{ backgroundColor: accentColor }}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <div key={index} className="group p-6 bg-white border border-slate-100 rounded-3xl hover:border-[#85b92b] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-50 shrink-0 overflow-hidden border border-slate-100">
              <StudentAvatar name={item.name} image={item.image} />
            </div>
            <div className="z-10">
              <h4 className="font-bold text-slate-900 group-hover:text-[#7A1F29] transition-colors leading-tight">
                {item.name}
              </h4>
              <p className="text-sm text-[#85b92b] font-medium mt-1 flex items-center gap-1">
                <FaBriefcase className="text-[10px]" /> {item[type]}
              </p>
            </div>
          </div>
          
          {/* Decorative subtle icon in background */}
          <div className="absolute -bottom-2 -right-2 text-slate-50 text-5xl opacity-40 group-hover:text-slate-100 transition-colors">
            <FaUserTie />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Placement;
