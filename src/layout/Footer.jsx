import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaChevronUp
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

// Using the provided logo path
import roundLogo from '/skit-logo.png';

const Footer = () => {

  const linkListClass = "space-y-3 text-sm text-gray-100 hover:[&>li>a]:text-white transition-all";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#7A1F29] text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

        {/* Column 1: Brand & Slogan */}
        <div className="lg:col-span-4 pr-10">
          <h3 className="font-serif text-4xl font-bold mb-2">SKIT</h3>
          <p className="text-xl font-medium text-gray-200 mb-1 italic">Learn Here...</p>
          <p className="text-xl font-medium text-gray-200 mb-8 italic">Lead Everywhere...</p>

          <div className="flex gap-4">
            {[
              { icon: FaFacebookF, href: "#" },
              { icon: FaInstagram, href: "#" },
              { icon: FaXTwitter, href: "#" },
              { icon: FaYoutube, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/30 hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="text-white text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className="lg:col-span-3">
          <h3 className="font-serif text-2xl font-bold mb-6 border-b border-white/20 pb-2 inline-block">Useful Links</h3>
          <ul className={linkListClass}>
            <li><a href="#">Home</a></li>
            <li><a href="#">CSJM University</a></li>
            <li><a href="#">Result</a></li>
            <li><a href="#">Scholarship (U.P.)</a></li>
            <li><a href="#">SAWAYAM Notes</a></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="lg:col-span-2">
          <h3 className="font-serif text-2xl font-bold mb-6 border-b border-white/20 pb-2 inline-block">Our Services</h3>
          <ul className={linkListClass}>
            <li><a href="#">About</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">Faculty</a></li>
            <li><a href="#">Infrastructure Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="lg:col-span-3">
          <h3 className="font-serif text-2xl font-bold mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h3>

          <div className="space-y-6 text-sm">
            {/* Campus Address */}
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-white mt-1 shrink-0" />

              <div>
                <p className="font-bold text-white uppercase tracking-wider text-xs mb-1">
                  Campus
                </p>

                <a
                  href="https://maps.google.com/?q=Bahabalpur+Kanpur+Dehat+209310+Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-all duration-300 hover:underline"
                >
                  Bahabalpur Kanpur(D) - 209310 Uttar Pradesh
                </a>

                <a
                  href="tel:+917800048009"
                  className="block font-semibold mt-1 hover:text-white transition-all duration-300"
                >
                  Ph: +91 78000 48009
                </a>
              </div>
            </div>

            {/* City Office */}
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-white mt-1 shrink-0" />

              <div>
                <p className="font-bold text-white uppercase tracking-wider text-xs mb-1">
                  City Office
                </p>

                <a
                  href="https://maps.google.com/?q=1st+Floor+Krishna+Dham+Flat+Kakadeo+Kanpur+208025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-all duration-300 hover:underline"
                >
                  1st Floor Krishna Dham Flat Kakadeo Kanpur - 208025
                </a>

                <a
                  href="tel:+918400341541"
                  className="block font-semibold mt-1 hover:text-white transition-all duration-300"
                >
                  Ph: +91 8400341541
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 pt-2">
              <FaRegEnvelope className="text-white shrink-0" />

              <a
                href="mailto:skitkd64@gmail.com?subject=Inquiry%20from%20Website"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:underline break-all"
              >
                skitkd64@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white/10 mb-8 relative z-10" />

      {/* Bottom Footer */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-300">
        <div className="flex items-center gap-4">
          <img
            src={roundLogo}
            alt="SKIT Logo"
            className="h-14 w-14 md:h-18 md:w-18 rounded-full object-cover  shadow-2xl"
          />
          <div>
            <p className="font-bold text-white text-lg tracking-widest">SKIT</p>
            <p className="text-[10px] uppercase tracking-[0.2em]">Excellence in Education</p>
          </div>
        </div>

        <div className="text-center md:text-right space-y-1">
          <p>© Copyright 2026 SKIT. All Rights Reserved.</p>
          <p className="text-xs text-gray-400">
            Designed by{" "}
            <a
              href="https://ntechzy.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <span className="text-white font-medium transition-all duration-300 hover:text-blue-400 hover:underline hover:tracking-wide">
                Ntechzy Pvt. Ltd.
              </span>
            </a>
          </p>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-[#912b37] transition-all shadow-2xl group"
        aria-label="Back to top"
      >
        <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;