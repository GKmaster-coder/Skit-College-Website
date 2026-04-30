import React from 'react';
import { FaGraduationCap, FaAward, FaUniversity, FaQuoteLeft, FaUsers, FaLightbulb ,FaClock ,FaPaperPlane} from 'react-icons/fa';
import PageBanner from '../components/shared/PageBanner';

const About = () => {
  return (
    <>
      <PageBanner 
        title="About Our Institute" 
        subtitle="Shakuntala Krishna Institute Of Technology (KD64) - Empowering Rural Excellence." 
        breadcrumbCurrent="About Us" 
      />

      <section className="min-h-screen bg-white pt-20 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Section 1: Who We Are & Foundation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <span className="text-[#85b92b] font-bold tracking-[0.2em] uppercase text-sm block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                A Source of <span className="text-[#7A1F29] italic">Inspiration</span>
              </h2>
              <div className="w-20 h-1 bg-[#cfb64e] mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Late <span className="font-bold text-slate-800">Shrimati Shakuntala Devi</span>, the founder of this institution, was an educated visionary, social worker, and self-reliant woman. 
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                She established this foundation to bridge the gap in technical and professional education within rural areas. Her immense sacrifice and dedication formed the bedrock upon which SKIT stands today.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border-l-4 border-[#85b92b]">
                  <FaUniversity className="text-[#85b92b] text-2xl" />
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Affiliation</p>
                    <p className="font-bold text-slate-800">CSJMU Kanpur</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border-l-4 border-[#7A1F29]">
                  <FaAward className="text-[#7A1F29] text-2xl" />
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">College Code</p>
                    <p className="font-bold text-slate-800">KD64</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats/Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Established In", val: "2016", icon: <FaClock className="text-white"/>, color: "bg-[#85b92b]" },
                { title: "Academic Status", val: "Top in Result", icon: <FaGraduationCap className="text-white"/>, color: "bg-[#7A1F29]" },
                { title: "Career Growth", val: "Best in Placement", icon: <FaPaperPlane className="text-white"/>, color: "bg-[#cfb64e]" },
                { title: "UP Govt.", val: "Scholarship Norms", icon: <FaAward className="text-white"/>, color: "bg-slate-800" },
              ].map((item, index) => (
                <div key={index} className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xl font-bold text-slate-900">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Prayas Welfare Association */}
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden mb-24">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#85b92b]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 max-w-4xl">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                <div className="shrink-0 bg-white p-2 rounded-2xl shadow-lg">
                  <img 
                    src="/Prayas-Welfare-Association.png" 
                    alt="Prayas Welfare Association Logo" 
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold italic">Managed By Prayas Welfare Association</h3>
              </div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Established in 2014 by renowned educationists and entrepreneurs, the <span className="text-white font-semibold">Prayas Welfare Association (Reg No. 0831)</span> is a non-profit organization dedicated to social transformation through technical, industrial, and vocational training.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-10">
                <div>
                  <h4 className="text-[#cfb64e] font-bold mb-4 flex items-center gap-2">
                    <FaLightbulb /> Our Special Purpose
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li>• Serve Professional Education in Rural Areas.</li>
                    <li>• Provide higher and skill education to underprivileged children.</li>
                    <li>• Ensure no student is deprived of education due to financial lack.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#85b92b] font-bold mb-4 flex items-center gap-2">
                    <FaUniversity /> Core Objectives
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Catalyzing social transformation by facilitating modernization, economic growth, and promoting equality through comprehensive educational development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Leadership Messages */}
          <div className="space-y-20">
            {/* Chairman Message */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 sticky top-28">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-linear-to-r from-[#85b92b] to-[#cfb64e] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-white p-4 rounded-2xl border border-slate-100">
                    <div className="aspect-square bg-slate-200 rounded-xl mb-6 overflow-hidden">
                      <img 
                      src="/chairman.jpg" 
                      alt="Chairman" 
                      className="w-full h-full object-cover" 
                      />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-slate-900">Mr. Shri Krishna Kushwaha</h4>
                    <p className="text-[#7A1F29] font-bold text-sm uppercase mb-2">Chairman / Founder</p>
                    <p className="text-gray-500 text-xs">Rtd. ADO Agriculture</p>
                    <p className="text-slate-800 font-semibold mt-4">+91 6307332519</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 bg-slate-50 p-8 md:p-12 rounded-4xl relative">
                <FaQuoteLeft className="text-4xl text-[#85b92b]/20 absolute top-10 right-10" />
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Message From Chairman</h3>
                <div className="space-y-6 text-slate-700 leading-relaxed italic font-medium">
                  <p>एस. के. आई. टी. कॉलेज के संस्थापक-अध्यक्ष के रूप में, हमारे कॉलेज की वेबसाइट का उपयोग करके आपसे संवाद करना वास्तव में मेरे लिए एक अनूठा सौभाग्य है।</p>
                  <p>सफल और प्रसन्न व्यक्ति एक सफल राष्ट्र का निर्माण करते हैं। लेकिन वह क्या है जो सफलता, लक्ष्यों की प्राप्ति और एक खुशहाल और संतुष्ट जीवन जीने के आपके मिशन को पूरा करने में सहायता करता है? वह मजबूत नींव कोई और नहीं बल्कि अच्छी शिक्षा है।</p>
                  <p>हम न केवल उनमें सर्वोत्तम रचनात्मक और तकनीकी योग्यताएँ विकसित करते हैं, बल्कि उन्हें अपरिहार्य मानवीय गुण भी सिखाते हैं।</p>
                </div>
              </div>
            </div>

            {/* Director Message */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:flex-row-reverse">
               <div className="lg:col-span-8 bg-slate-50 p-8 md:p-12 rounded-4xl relative border-r-8 border-[#7A1F29]">
                <FaQuoteLeft className="text-4xl text-[#7A1F29]/20 absolute top-10 right-10" />
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Message From Director</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>It gives me great pleasure to invite you into the heart that beats behind the appealing façade of Shakuntala Krishna Institute Of Technology. I thank you for your interest in this exceptional institution.</p>
                  <p>Our mission is to inculcate the love of knowledge in our students and to develop the skills and demeanour of lifelong ‘learning,’ essential for making responsible global citizens. This will make them immensely capable of facing the future with resilience and optimism.</p>
                  <p className="font-serif italic text-slate-800">"We care for the mind—ours is a sterling academic institution; we care for the person—the accent is on the all-round development of personality."</p>
                </div>
              </div>
              <div className="lg:col-span-4 lg:order-last">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xl">
                  <div className="aspect-square bg-slate-200 rounded-xl mb-6">
                             <img 
                      src="/director.jpeg" 
                      alt="Chairman" 
                      className="w-full h-full object-cover" 
                      />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-slate-900">Vivek Pr. Singh</h4>
                  <p className="text-[#85b92b] font-bold text-sm uppercase mb-2">Director</p>
                  <p className="text-gray-500 text-xs italic">Asst. Professor</p>
                  <p className="text-slate-800 font-semibold mt-4">+91 9918629349</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;