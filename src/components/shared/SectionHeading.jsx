import React from 'react';

const SectionHeading = ({ 
  badge, 
  title, 
  highlight, 
  description, 
  center = true, 
  className = "" 
}) => {
  return (
    <div className={`${center ? 'text-center' : 'text-left'} mb-16 ${className}`}>
      {/* Small Badge Text */}
      {badge && (
        <span className="text-[#85b92b] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
          {badge}
        </span>
      )}

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
        {title} 
        {highlight && (
          <>
            {" "}
            <span className="text-[#7A1F29] italic underline underline-offset-8 decoration-1">
              {highlight}
            </span>
          </>
        )}
      </h2>

      {/* Description Paragraph */}
      {description && (
        <p className={`text-gray-600 text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;


// how to use 

// <SectionHeading 
//   badge="Get In Touch"
//   title="Contact"
//   highlight="SKIT"
//   description="Just send us your questions or concerns by starting a new message and we will give you the help you need."
// />