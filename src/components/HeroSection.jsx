import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, BookOpen } from 'lucide-react';

// Design tokens matching the Navbar
// Primary Green : #85b92b
// Light Green   : #eef5d8
// Dark Green    : #6a9420
// White         : #ffffff
// Gray text     : #374151 / #4b5563 / #9ca3af

const HeroSection = () => {
  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%   { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          0%   { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
        .anim-1 { animation: floatUp 0.7s ease forwards; }
        .anim-2 { animation: floatUp 0.7s 0.15s ease both; }
        .anim-3 { animation: floatUp 0.7s 0.30s ease both; }
        .anim-4 { animation: scaleIn 0.6s 0.45s ease both; }
        .anim-5 { animation: floatUp 0.7s 0.55s ease both; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(133,185,43,0.18); }
        .btn-primary { transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease; }
        .btn-primary:hover { transform: scale(1.04); box-shadow: 0 12px 32px rgba(133,185,43,0.35); }
        .btn-outline { transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease; }
        .btn-outline:hover { background: #85b92b; color: white; transform: scale(1.03); }
      `}</style>

      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden roboto">

        {/* ── Background ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="/college-image.jpeg"
            alt="SKIT Campus"
            className="w-full h-full object-cover"
          />
          {/* Dark base overlay for readability */}
          <div className="absolute inset-0 bg-gray-900/60" />
          {/* Subtle green tint from bottom */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(133,185,43,0.25) 0%, transparent 60%)' }}
          />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">

          {/* Admission Badge */}
          <a
            href="https://skitedu.in/register"
            target="_blank"
            rel="noopener noreferrer"
            className="anim-1 inline-flex items-center gap-2 bg-[#85b92b] text-white text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8 shadow-lg shadow-[#85b92b]/30 no-underline hover:opacity-90 transition-opacity"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Open 2025
          </a>

          {/* Main Heading */}
          <h1 className="anim-2 poppins text-white text-5xl md:text-7xl font-black leading-[1.1] mb-5 drop-shadow-xl">
            Welcome to{' '}
            <span className="text-[#85b92b]">SKIT</span>
          </h1>

          {/* Sub heading */}
          <p className="anim-3 text-white/80 text-base md:text-lg font-medium max-w-xl leading-relaxed mb-4">
            Shaping Future Leaders at{' '}
            <span className="text-[#85b92b] font-semibold">Bahabalpur, Kanpur(D)</span>
            {' '}— a centre of academic excellence in Business & Technology.
          </p>

          {/* Divider line matching navbar green */}
          <div className="anim-3 w-16 h-0.5 bg-[#85b92b] rounded mb-12" />

          {/* ── Course Cards ── */}
          <div className="anim-4 w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

            {/* BCA Card */}
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-xl border border-[#eef5d8]">
              {/* Card header stripe */}
              <div className="bg-[#85b92b] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-black text-xl tracking-wide poppins">BCA</div>
                    <div className="text-white/80 text-[10px] uppercase tracking-widest font-semibold">Bachelor of Computer Applications</div>
                  </div>
                </div>
                <span className="bg-white text-[#85b92b] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  New
                </span>
              </div>
              {/* Card body */}
              <div className="px-6 py-5 text-left">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  A hands-on curriculum in software development, web technologies, and modern coding practices — designed for the digital era.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Web Dev', 'Programming', 'Databases', 'Networking'].map(tag => (
                    <span key={tag} className="text-[10px] font-semibold text-[#6a9420] bg-[#eef5d8] px-2.5 py-1 rounded-full uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn-outline flex items-center gap-2 border-2 border-[#85b92b] text-[#85b92b] font-bold text-sm px-5 py-2.5 rounded-xl bg-transparent cursor-pointer">
                  Explore Syllabus
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* BBA Card */}
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-xl border border-[#eef5d8]">
              {/* Card header stripe */}
              <div className="bg-[#6a9420] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-black text-xl tracking-wide poppins">BBA</div>
                    <div className="text-white/80 text-[10px] uppercase tracking-widest font-semibold">Bachelor of Business Administration</div>
                  </div>
                </div>
                <span className="bg-white text-[#6a9420] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Popular
                </span>
              </div>
              {/* Card body */}
              <div className="px-6 py-5 text-left">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Develop leadership, management and entrepreneurial skills with our industry-aligned business administration programme.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Management', 'Finance', 'Marketing', 'Leadership'].map(tag => (
                    <span key={tag} className="text-[10px] font-semibold text-[#6a9420] bg-[#eef5d8] px-2.5 py-1 rounded-full uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn-outline flex items-center gap-2 border-2 border-[#6a9420] text-[#6a9420] font-bold text-sm px-5 py-2.5 rounded-xl bg-transparent cursor-pointer">
                  Explore Syllabus
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* ── CTA Button ── */}
          <div className="anim-5 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://skitedu.in/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-3 bg-[#85b92b] text-white font-bold text-base px-10 py-4 rounded-xl shadow-lg shadow-[#85b92b]/30 border-none cursor-pointer no-underline"
            >
              Apply Now for BCA & BBA
              <ArrowRight size={20} />
            </a>
            <button className="text-white/80 font-semibold text-sm underline underline-offset-4 hover:text-white transition-colors cursor-pointer bg-transparent border-none">
              Learn more about us →
            </button>
          </div>

          {/* Stats row */}
          <div className="anim-5 mt-14 flex flex-wrap justify-center gap-8">
            {[
              { value: '500+', label: 'Students Enrolled' },
              { value: '20+', label: 'Expert Faculty' },
              { value: '2', label: 'UG Programmes' },
              { value: '100%', label: 'Placement Support' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="poppins text-[#85b92b] text-3xl font-black leading-none">{value}</span>
                <span className="text-white/60 text-xs font-medium mt-1 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;
