import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import PageBanner from '../components/shared/PageBanner';

const Contact = () => {
  return (
    <>
    <PageBanner 
        title="Contact Us" 
        subtitle="We're here to help you with your academic journey." 
        breadcrumbCurrent="Contact" 
      />
    <section className="min-h-screen bg-white pt-28 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#85b92b] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Contact <span className="text-[#7A1F29] italic underline underline-offset-8 decoration-1">SKIT</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Just send us your questions or concerns by starting a new message and we will give you the help you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Info Cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#85b92b] transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#85b92b] group-hover:text-white transition-all text-[#85b92b]">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Our Address</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <p className="font-bold text-[#7A1F29] uppercase text-xs tracking-wider">Campus</p>
                  <p>Near Bahabalpur hawaspur kanpur dehat 209310. Uttar Pradesh</p>
                  <p className="font-semibold mt-1">Phone: 7800048001</p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <p className="font-bold text-[#7A1F29] uppercase text-xs tracking-wider">City Office</p>
                  <p>Ground Floor, Krishna Dham Flat, Naveen Nagar Kakadeo Kanpur 208025</p>
                  <p className="font-semibold mt-1">Phone: 8400341541</p>
                </div>
              </div>
            </div>

            {/* Call & Email Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#85b92b]/10 rounded-full flex items-center justify-center text-[#85b92b]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Call Us</p>
                  <p className="font-bold text-slate-900">+91 7800048009</p>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#7A1F29]/10 rounded-full flex items-center justify-center text-[#7A1F29]">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Email Us</p>
                  <p className="font-bold text-slate-900 text-sm">skitkd64@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 bg-[#7A1F29] rounded-2xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaClock className="text-[#85b92b]" />
                <h3 className="font-bold">Open Hours</h3>
              </div>
              <p className="text-gray-200 text-sm">Mon-Sat: 11AM - 23PM</p>
            </div>
          </div>

          {/* Right Side: Form & 3D Map Container */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 3D Stylized Map */}
            <div className="h-100 w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative group">
                <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"></div>
                {/* 
                   Styling note: To get the "3D" effect, we apply a perspective 
                   tilt to the map container via CSS transform. 
                */}
                <div className="w-full h-full transform transition-transform duration-700 ">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57167.20459469126!2d79.6161673!3d26.4250808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399deb1882cec92b%3A0x96f2c6817434fbc5!2sSKIT%20College!5e0!3m2!1sen!2sin!4v1777539827391!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Send Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#85b92b] transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#85b92b] transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full md:col-span-2 px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#85b92b] transition-all"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows="4" 
                  className="w-full md:col-span-2 px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#85b92b] transition-all"
                ></textarea>
                <button className="md:w-max flex items-center justify-center gap-3 bg-[#85b92b] hover:bg-[#7A1F29] text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#7A1F29]/20 transform hover:-translate-y-1">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;