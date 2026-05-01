import React from 'react';
import { 
  FaBook, FaClock, FaLanguage, FaGraduationCap, FaWallet, 
  FaLaptopCode, FaCheckCircle, FaProjectDiagram, FaBriefcase, FaChalkboardTeacher 
} from 'react-icons/fa';
import PageBanner from '../components/shared/PageBanner';

const BCA_LAPTOP_IMG = "/assets/BCA-Mockup.png";
const BBA_LAPTOP_IMG = "/assets/BBA-Mockup.png";

const CoursePage = () => {
  const bcaSubjects = [
    "C, C++, JAVA & Python Lang.", "Engineering Math", "Database Management", 
    "Software Engineering", "Operating System", "Management"
  ];

  const bbaSubjects = [
    "Management", "Entrepreneurship", "Basic Math", 
    "Basic Computer", "Marketing", "Business Law"
  ];

  const extraActivities = [
    "Project Preparation", "Research Reports", "Mock Interviews", 
    "Presentation Skills", "Seminars & Group Discussions"
  ];

  const skillDevelopment = [
    { title: "Soft Skills", details: "English Communication, Spoken & Written, Personality Development, Workshops, Debate.", icon: <FaGraduationCap /> },
    { title: "Lab & Projects", details: "Practical Experiments, Dummy & Model Based Projects, Live Workshop Participation.", icon: <FaLaptopCode /> },
    { title: "Industrial Visits", details: "Practical Exposure, Interaction with Experts, Technical Environment, Organizational Culture.", icon: <FaProjectDiagram /> },
    { title: "Internships", details: "Real Work Situations, Resume Building, Direct Job Offer Opportunities.", icon: <FaBriefcase /> }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Our Courses" 
        subtitle="Empowering your career with technical and management excellence." 
        breadcrumbCurrent="Courses" 
      />

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* ─── BCA SECTION ───────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: text content */}
            <div className="lg:col-span-7">
              <span className="text-[#85b92b] font-bold tracking-widest uppercase text-xs">Department of IT</span>
              <h2 className="text-4xl font-serif text-slate-900 mt-2 mb-6">
                BCA – <span className="text-[#7A1F29] italic">Bachelor Of Computer Application</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The primary objective of the BCA course is to create a sound academic base from which an
                advanced career in computer applications can be developed. We initiate young minds into the
                world of software development and provide a solid grounding in information technology.
              </p>

              <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-[#85b92b] mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-[#85b92b]" /> Additional Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 font-medium">
                  <p>• Website Design &amp; Development</p>
                  <p>• Python Language Training</p>
                  <p>• DBMS Training</p>
                  <p>• Personality Development Program</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-[#7A1F29] uppercase tracking-wider text-sm flex items-center gap-2">
                    <FaBook /> Basic Subjects
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 text-gray-600">
                    {bcaSubjects.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 font-medium">
                        <div className="w-1.5 h-1.5 bg-[#85b92b] rounded-full" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-[#7A1F29] uppercase tracking-wider text-sm flex items-center gap-2">
                    <FaProjectDiagram /> Extra Activities
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 text-gray-600">
                    {extraActivities.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 font-medium">
                        <div className="w-1.5 h-1.5 bg-[#85b92b] rounded-full" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: sidebar card with laptop mockup on top */}
            <div className="lg:col-span-5 flex flex-col gap-0">

              {/* Laptop mockup hero */}
              <div className="relative rounded-t-3xl overflow-hidden px-8 pt-8 pb-0 shadow-2xl">
                {/* decorative dots */}
                <div className="absolute top-4 left-5 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                {/* floating badge */}
                <span className="absolute top-4 right-5 bg-[#85b92b]/20 border border-[#85b92b]/40 text-[#85b92b] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Tech Course
                </span>
                <img
                  src={BCA_LAPTOP_IMG}
                  alt="Laptop mockup for BCA course"
                  className="w-full max-w-85 mx-auto block drop-shadow-2xl"
                  style={{ marginBottom: '-6px' }}
                />
              </div>

              {/* Info card seamlessly below */}
              <div className="bg-[#7A1F29] px-8 py-8 rounded-b-3xl text-white shadow-2xl">
                <h3 className="text-xl font-serif font-bold mb-6 border-b border-white/20 pb-4">Course Info</h3>
                <div className="space-y-5">
                  <InfoItem icon={<FaWallet />} label="Fees" value="45,000 INR / year" />
                  <InfoItem icon={<FaGraduationCap />} label="Level" value="Graduate" />
                  <InfoItem icon={<FaChalkboardTeacher />} label="Medium" value="Campus / Regular" />
                  <InfoItem icon={<FaClock />} label="Duration" value="3 Years" />
                  <InfoItem icon={<FaLanguage />} label="Mode" value="English" />
                  <InfoItem icon={<FaLaptopCode />} label="Specialization" value="Computer & Software" />
                </div>
              </div>
            </div>
          </div>

          {/* ─── BBA SECTION ───────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: sidebar card with laptop mockup (order-2 on desktop to swap sides) */}
            <div className="lg:col-span-5 flex flex-col gap-0 order-1 lg:order-1">

              {/* Laptop mockup hero */}
              <div className="relative rounded-t-3xl overflow-hidden  px-8 pt-8 pb-0 shadow-2xl">
                {/* decorative dots */}
                <div className="absolute top-4 left-5 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                {/* floating badge */}
                <span className="absolute top-4 right-5 bg-blue-800/10 border border-blue-800/20 text-blue-800 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Management
                </span>
                <img
                  src={BBA_LAPTOP_IMG}
                  alt="Laptop mockup for BBA course"
                  className="w-full max-w-85 mx-auto block drop-shadow-2xl"
                  style={{ marginBottom: '-6px' }}
                />
              </div>

              {/* Info card seamlessly below */}
              <div className="bg-slate-900 px-8 py-8 rounded-b-3xl text-white shadow-2xl">
                <h3 className="text-xl font-serif font-bold mb-6 border-b border-white/20 pb-4">Course Info</h3>
                <div className="space-y-5">
                  <InfoItem icon={<FaWallet />} label="Fees" value="45,000 INR / year" />
                  <InfoItem icon={<FaGraduationCap />} label="Level" value="Graduate" />
                  <InfoItem icon={<FaClock />} label="Duration" value="3 Years" />
                  <InfoItem icon={<FaLanguage />} label="Mode" value="English" />
                </div>
              </div>
            </div>

            {/* Right: text content */}
            <div className="lg:col-span-7 order-2 lg:order-2">
              <span className="text-[#85b92b] font-bold tracking-widest uppercase text-xs">Department of Management</span>
              <h2 className="text-4xl font-serif text-slate-900 mt-2 mb-6">
                BBA – <span className="text-[#7A1F29] italic">Bachelor Of Business Administration</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The B.B.A course is highly beneficial for students interested in entering a management career.
                It provides a strong foundation for advanced MBA programs, combining leadership training with
                organizational ethics.
              </p>

              <div className="bg-[#85b92b]/10 p-8 rounded-3xl border-l-8 border-[#7A1F29] mb-8">
                <h3 className="text-xl font-bold text-[#7A1F29] mb-4 flex items-center gap-2">
                  <FaCheckCircle /> Professional Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 font-medium">
                  <p>• Basic Computer &amp; Advance Excel</p>
                  <p>• Tally – GST &amp; VAT</p>
                  <p>• Digital Marketing Training</p>
                  <p>• Soft Skill Development</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-[#7A1F29] uppercase tracking-wider text-sm flex items-center gap-2">
                    <FaBook /> BBA Subjects
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 text-gray-600">
                    {bbaSubjects.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 font-medium">
                        <div className="w-1.5 h-1.5 bg-[#85b92b] rounded-full" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-[#7A1F29] uppercase tracking-wider text-sm flex items-center gap-2">
                    <FaBriefcase /> Industry Skills
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 text-gray-600">
                    {extraActivities.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 font-medium">
                        <div className="w-1.5 h-1.5 bg-[#85b92b] rounded-full" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ─── SKILL DEVELOPMENT GRID ────────────────────────────────── */}
          <div className="pt-20 border-t border-slate-100">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900">Skill Development Ecosystem</h2>
              <p className="text-gray-500 mt-2">Beyond the classroom, we prepare you for the real world.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillDevelopment.map((skill, index) => (
                <div key={index} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#85b92b] transition-all group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-[#85b92b] shadow-sm group-hover:bg-[#85b92b] group-hover:text-white transition-all">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{skill.details}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="text-[#85b92b] text-xl opacity-80">{icon}</div>
    <div>
      <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">{label}</p>
      <p className="font-bold text-sm">{value}</p>
    </div>
  </div>
);

export default CoursePage;