import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaChevronRight, FaHome } from 'react-icons/fa';

const PageBanner = ({ title, subtitle, breadcrumbCurrent }) => {
  return (
    <div className="relative w-full bg-[#85b92b] pt-26 md:pt-30 pb-16  md:pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cfb64e]/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-br from-[#85b92b] via-[#6fa021] to-[#4f7d18] opacity-95"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          {/* Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-white/90 font-medium text-md md:text-lg max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-3 text-sm md:text-base">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <FaHome className="text-white" />
              <span>Home</span>
            </Link>
            
            <FaChevronRight className="text-white/40 text-xs" />
            
            <span className="text-white font-semibold">
              {breadcrumbCurrent || title}
            </span>
          </nav>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#cfb64e] to-transparent"></div>
    </div>
  );
};

export default PageBanner;