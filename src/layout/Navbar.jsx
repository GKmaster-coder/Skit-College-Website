import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';// ─── Icons ────────────────────────────────────────────────────────────────────
const PhoneIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.41 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 5.59 5.59l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13" height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─── Nav data ─────────────────────────────────────────────────────────────────
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Course', path: '/course' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Performer', sub: [{ name: 'Placement', path: '/placement' }, { name: 'Result', path: '/result' }] },
  { name: 'Download', path: '/download' },
  { name: 'Notice', path: '/notice' },
  { name: 'Question Booklet', sub: [{ name: 'BBA', path: '/bba' }, { name: 'BCA', path: '/bca' }] },
  { name: 'Contact', path: '/contact' },
];

// ─── Desktop Nav Button ───────────────────────────────────────────────────────
const NavButton = ({ item, activeDropdown, setActiveDropdown }) => {
  const isOpen = activeDropdown === item.name;
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        if (isOpen) setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, setActiveDropdown]);

  const handleClick = () => {
    if (item.sub) {
      setActiveDropdown(isOpen ? null : item.name);
    } else if (item.path) {
      navigate(item.path);
      setActiveDropdown(null);
    }
  };

  return (
    <li ref={ref} className="relative group">
      <button
        onClick={handleClick}
        className={`flex items-center gap-1 px-3 py-3.5 text-[11.5px] font-bold uppercase tracking-wider whitespace-nowrap border-none bg-transparent cursor-pointer transition-colors duration-200 ${isOpen ? 'text-[#85b92b]' : 'text-gray-700 hover:text-[#85b92b]'}`}
      >
        <span className="relative pb-0.5">
          {item.name}
          <span
            className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-[#85b92b] rounded-t transition-all duration-300 ${isOpen ? 'w-[70%]' : 'w-0 group-hover:w-[70%]'}`}
          />
        </span>
        {item.sub && <ChevronIcon open={isOpen} />}
      </button>

      {item.sub && (
        <ul
          className={`absolute left-0 top-[calc(100%+4px)] min-w-45 bg-white border-t-[3px] border-[#85b92b] shadow-xl rounded-b-xl overflow-hidden z-50 list-none p-0 m-0 transition-all duration-200 ${
            isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1.5 pointer-events-none'
          }`}
        >
          {item.sub.map((s) => (
            <DropItem key={s.name} label={s.name} path={s.path} setActiveDropdown={setActiveDropdown} />
          ))}
        </ul>
      )}
    </li>
  );
};

const DropItem = ({ label, path, setActiveDropdown }) => {
  const navigate = useNavigate();
  return (
    <li 
      onClick={() => {
        navigate(path);
        setActiveDropdown(null);
      }}
      className="px-5 py-2.75 text-[11.5px] font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 cursor-pointer hover:bg-[#eef5d8] hover:text-[#6a9420] transition-colors duration-150"
    >
      {label}
    </li>
  );
};

// ─── Mobile Nav Item ──────────────────────────────────────────────────────────
const MobileNavItem = ({ item, setMobileOpen }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (item.sub) {
      setOpen(!open);
    } else if (item.path) {
      navigate(item.path);
      setMobileOpen(false);
    }
  };

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-between px-6 py-3.75 text-xs font-bold uppercase tracking-wider text-gray-800 bg-transparent border-none cursor-pointer hover:bg-[#eef5d8] hover:text-[#85b92b] transition-colors duration-150 text-left"
      >
        {item.name}
        {item.sub && <ChevronIcon open={open} />}
      </button>
      {item.sub && open && (
        <ul className="bg-gray-50 border-t border-gray-100 list-none p-0 m-0">
          {item.sub.map((s) => (
            <li
              key={s.name}
              onClick={() => {
                navigate(s.path);
                setMobileOpen(false);
              }}
              className="px-10 py-2.75 text-[11px] font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 cursor-pointer hover:text-[#85b92b] transition-colors duration-150"
            >
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ─── Main Navbar ──────────────────────────────────────────────────────────────
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>

      <header className="w-full bg-white sticky top-0 z-9999 shadow-[0_4px_24px_rgba(133,185,43,0.08)] font-[Outfit,sans-serif]">

        {/* ── Logo Section ── */}
        <div className="flex items-center justify-between px-7 py-1 border-b border-gray-100">

          {/* Left info — desktop only */}
          <div className="hidden lg:flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eef5d8] flex items-center justify-center text-[#85b92b] shrink-0">
              <PhoneIcon />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Helpline</span>
              <span className="text-[13px] font-bold text-gray-800 leading-tight">+91 78000 48009</span>
              <span className="text-[11px] text-gray-500">Mon–Sat, 9am–5pm</span>
            </div>
          </div>

          {/* Logo Center */}
          <Link to="/" className="flex flex-col items-center gap-1 cursor-pointer no-underline">
            <div className="flex items-center gap-4">
              {/* Decorative lines — desktop only */}
              <div className="hidden lg:block w-12 h-0.5 rounded bg-linear-to-r from-transparent to-[#85b92b]" />

              {/* Logo Image */}
              <img
                src="/skit-logo.png"
                alt="SKIT Logo"
                className="w-16 h-16 rounded-full border-[2.5px] border-[#85b92b] object-contain bg-[#eef5d8] hover:scale-105 hover:shadow-[0_0_0_6px_rgba(133,185,43,0.12)] transition-all duration-300"
              />

              <div className="hidden lg:block w-12 h-0.5 rounded bg-linear-to-l from-transparent to-[#85b92b]" />
            </div>

            <div className="text-center">
              <div
                className="text-[22px] font-extrabold text-[#85b92b] tracking-[0.18em] uppercase leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                SKIT
              </div>
              <div className="text-[9px] font-semibold text-gray-400 tracking-[0.28em] uppercase mt-0.5">
                Shaping Future Leaders
              </div>
            </div>
          </Link>

          {/* Right info — desktop only */}
          <div className="hidden lg:flex items-start gap-3 flex-row-reverse text-right">
            <div className="w-10 h-10 rounded-xl bg-[#eef5d8] flex items-center justify-center text-[#85b92b] shrink-0">
              <MapIcon />
            </div>
            <div className="flex flex-col gap-0.5 items-end">
              <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Campus</span>
              <span className="text-[13px] font-bold text-gray-800 leading-tight">Bahabalpur, Kanpur(D)</span>
              <span className="text-[11px] text-gray-500">Uttar Pradesh — 209310</span>
            </div>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-[#eef5d8] transition-colors duration-200 border-none bg-transparent cursor-pointer flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:block bg-white border-t-[3px] border-[#85b92b]">
          <ul className="flex items-center justify-center flex-wrap px-5 list-none m-0 p-0">
            {menuItems.map((item) => (
              <NavButton
                key={item.name}
                item={item}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            ))}
            {/* <li>
              <button className="bg-transparent border-none cursor-pointer px-3 py-3.5 flex items-center text-gray-500 hover:text-[#85b92b] transition-colors duration-200">
                <SearchIcon />
              </button>
            </li> */}
          </ul>
        </nav>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden flex flex-col bg-white border-t-[3px] border-[#85b92b] overflow-hidden transition-[max-height] duration-400 ease-in-out ${
            mobileOpen ? 'max-h-225' : 'max-h-0'
          }`}
        >
          {/* Mobile info strip */}
          <div className="flex flex-col gap-2.5 px-6 py-3.5 bg-[#eef5d8]">
            <div className="flex items-center gap-2.5 text-xs text-gray-800">
              <span className="text-[#85b92b]"><PhoneIcon size={15} /></span>
              <span><strong>+91 78000 48009</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-800">
              <span className="text-[#85b92b]"><MapIcon size={15} /></span>
              <span>Bahabalpur, Kanpur(D), U.P. — 209310</span>
            </div>
          </div>

          {/* Mobile nav items */}
          {menuItems.map((item) => (
            <MobileNavItem key={item.name} item={item} setMobileOpen={setMobileOpen} />
          ))}
        </div>
      </header>
    </>
  );
};

export default Navbar;