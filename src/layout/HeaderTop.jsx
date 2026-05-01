import React from 'react';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.41 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 5.59 5.59l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const HeaderTop = () => {
  return (
    <div className="bg-[#85b92b] py-1.5 px-6 flex justify-between items-center font-['Outfit',sans-serif] flex-wrap">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <a
          href="tel:7800048009"
          className="flex items-center gap-1.5 text-white text-xs no-underline hover:opacity-80 transition-opacity"
        >
          <PhoneIcon />
          +91 78000 48009
        </a>

        <div className="w-px h-3.5 bg-white/40" />

        <span className="flex items-center gap-1.5 text-white text-xs">
          <MapIcon />
          Bahabalpur, Kanpur(D)
        </span>
      </div>

      {/* Right Side Links */}
      <div className="flex items-center gap-4">
        <a
          href="https://skitlog.netlify.app/login"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs no-underline hover:opacity-80 transition-opacity"
        >
          Department Login
        </a>

        <div className="w-px h-3.5 bg-white/40" />

        <a
          href="https://skitlog.netlify.app/login"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs no-underline hover:opacity-80 transition-opacity"
        >
          Student Login
        </a>

        <div className="w-px h-3.5 bg-white/40" />

        <a
          href="https://csjmu.samarth.edu.in/index.php/studentlogin/registration/register"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs no-underline hover:opacity-80 transition-opacity font-semibold"
        >
          Samarth Portal
        </a>
      </div>
    </div>
  );
};

export default HeaderTop;
