import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What is the fee of BBA/BCA course per year?",
      answer: (
        <div className="space-y-3">
          <p>उत्तर प्रदेश में BBA और BCA करने का खर्चा कई कारकों पर निर्भर करता है। सरकारी कॉलेज की फीस लगभग 20,000 से 50,000 के बीच रहती है।</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>BBA:</strong> ₹50,000 - ₹1,30,000 प्रति वर्ष</li>
            <li><strong>BCA:</strong> ₹50,000 - ₹1,30,000 प्रति वर्ष</li>
          </ul>
          <p className="text-xs italic text-gray-500">Note: फीस शहर, विश्वविद्यालय और अन्य खर्चों (होस्टल, किताबें) पर निर्भर करती है।</p>
        </div>
      )
    },
    {
      question: "BBA / BCA: is a better career option or not?",
      answer: (
        <div className="space-y-3">
          <p>हाँ, दोनों ही करियर के लिए अच्छे विकल्प हैं। यह आपकी रूचि पर निर्भर करता है:</p>
          <p><strong>बीबीए कोर्स:</strong> व्यवसाय और प्रबंधन (Marketing, HR, Finance) में रूचि रखने वालों के लिए बेहतरीन है।</p>
          <p><strong>बीसीए कोर्स:</strong> कंप्यूटर विज्ञान और IT (Programming, Web Dev) में रूचि रखने वालों के लिए अच्छा है।</p>
        </div>
      )
    },
    {
      question: "Higher Education Opportunities After BBA and BCA?",
      answer: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-[#85b92b] mb-2">After BBA:</p>
            <p className="text-sm">MBA, PGDM, B.Ed, LLB, या Digital Marketing और Business Analytics में सर्टिफिकेट कोर्स।</p>
          </div>
          <div>
            <p className="font-bold text-[#85b92b] mb-2">After BCA:</p>
            <p className="text-sm">MCA, M.Tech, M.Sc IT, या Data Science, Cyber Security और Full Stack Development में सर्टिफिकेट।</p>
          </div>
        </div>
      )
    },
    {
      question: "What are the opportunities in government sector after doing BBA/BCA?",
      answer: "BBA/BCA के बाद बैंकिंग, प्रशासन, रक्षा (Defense), रेलवे और सरकारी आईटी सेक्टर (Government IT Sector) में कई विकल्प उपलब्ध हैं।"
    },
    {
      question: "Career After BBA/BCA in the private sector?",
      answer: (
        <div className="space-y-4">
          <div>
            <p className="font-bold">Private Jobs:</p>
            <p className="text-sm">BBA के बाद HR, फाइनेंस और मार्केटिंग में, जबकि BCA के बाद IT और सॉफ्टवेयर डेवलपमेंट में बहुत स्कोप है।</p>
          </div>
          <div className="bg-[#85b92b]/10 p-3 rounded-lg border-l-4 border-[#85b92b]">
            <p className="font-bold text-slate-900">Salary & Growth:</p>
            <p className="text-sm italic">फ्रेशर सैलरी: 3 से 6 LPA | अनुभव के बाद: 10-25 LPA (बड़े MNC में)</p>
          </div>
        </div>
      )
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#85b92b] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Information Center
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Frequently Asked <span className="text-[#85b92b] italic underline underline-offset-8 decoration-1">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Essential information regarding fees, career prospects, and higher education at SKIT.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 bg-white ${
                openIndex === index 
                ? 'border-[#85b92b] shadow-lg' 
                : 'border-slate-200 hover:border-[#85b92b]/50 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors pr-4 ${
                  openIndex === index ? 'text-[#85b92b]' : 'text-slate-800'
                }`}>
                  {item.question}
                </span>
                <div className={`shrink-0 p-2 rounded-full transition-all ${
                  openIndex === index ? 'bg-[#85b92b] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                }`}>
                  <FaChevronDown className="text-xs" />
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-slate-50 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Didn't find what you were looking for?</p>
          <a 
            href="mailto:skitkd64@gmail.com" 
            className="text-[#7A1F29] font-bold border-b-2 border-[#7A1F29] hover:text-[#85b92b] hover:border-[#85b92b] transition-all"
          >
            Email us your query: skitkd64@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;