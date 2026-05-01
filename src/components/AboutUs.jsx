import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side */}
        <div className="relative h-125 md:h-150">
          
          <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-sm overflow-hidden shadow-xl z-10">
            <img 
              src="/about/img1.jpeg" 
              alt="Students learning" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-sm overflow-hidden shadow-2xl z-20 border-8 border-white">
            <img 
              src="/about/img2.jpg" 
              alt="Campus life" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circular Badge */}
          <div className="absolute -top-5 right-[10%] w-32 h-32 z-30 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className=" text-[10px] font-bold uppercase fill-[#85b92b] tracking-widest">
                <textPath xlinkHref="#circlePath">
                  SKIT Kanpur • Quality Education • Since 2014 •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
               <img src="/skit-logo.png" alt="logo" className="w-14 h-14 object-contain" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-8">
          
          <div className="space-y-2">
            <span className="text-[#85b92b] font-bold tracking-widest uppercase border-b-2 border-[#85b92b] inline-block mb-4 text-sm">
              Established 2014
            </span>

            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">
              About <br /> 
              <span className="text-[#85b92b] italic underline decoration-1 underline-offset-8">
                SKIT Kanpur
              </span>
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Shakuntala Krishna Institute of Technology (SKIT), located in Bhitaura, 
            Kanpur Dehat, is a private institution committed to delivering high-quality 
            professional and technical education, especially to students from rural areas. 
            Since its establishment, SKIT has focused on empowering students with practical 
            skills and industry-relevant knowledge.
          </p>

          <div className="pl-6 border-l-4 border-[#85b92b] py-2">
            <p className="text-slate-800 font-medium italic text-lg">
              "Our mission is to provide skill-based education, foster innovation, 
              and prepare students for successful careers in a competitive world."
            </p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            The institute is affiliated with CSJMU and offers programs like BCA and BBA 
            with modern specializations such as Data Science and Digital Marketing. 
            SKIT also provides training in AI, Machine Learning, Web Development, and App Development.
          </p>

          {/* Info */}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" 
                alt="SKIT Campus" 
                className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div>
                <p className="text-[#85b92b] font-bold">Kanpur Dehat, Uttar Pradesh</p>
                <h4 className="text-xl font-serif font-bold text-slate-900">
                  Shakuntala Krishna Institute of Technology
                </h4>
              </div>
            </div>

            <div className="opacity-80">
              <span className="font-signature text-4xl text-[#85b92b] select-none">
                SKIT
              </span>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');
        .font-signature {
          font-family: 'Mrs+Saint+Delafield', cursive;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
