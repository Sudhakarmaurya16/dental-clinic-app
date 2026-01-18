import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/LOGO.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[88px] flex items-center justify-between">
        {/* ================= LOGO SECTION (FIXED & CLEAR) ================= */}
        <Link to="/" className="flex items-center gap-3 group pl-2">
          {/* 3D Logo Container with White Border for Clarity */}
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] border-2 border-cyan-100 overflow-hidden">
            {/* Subtle Glow inside circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <img
              src={Logo}
              alt="K K Dental Clinic Logo"
              className="h-full w-full object-cover 
                         transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) 
                         group-hover:scale-110"
            />
          </div>

          {/* Logo Text with Better Contrast */}
          <div className="flex flex-col leading-tight transition-transform duration-300 group-hover:translate-x-1">
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
              K K Dental
            </span>
            <span className="text-[10px] tracking-[0.3em] font-bold text-blue-900/60 uppercase">
              Clinic & Research
            </span>
          </div>
        </Link>
        {/* ========================================================= */}

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative text-sm font-bold tracking-wide transition-all ${
                  isActive
                    ? "text-cyan-600"
                    : "text-gray-600 hover:text-cyan-600"
                }`
              }
            >
              {item}
              <span className="absolute left-0 -bottom-1.5 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
          ))}

          <Link
            to="/appointment"
            className="ml-4 px-7 py-3 rounded-full font-bold text-white
            bg-gradient-to-r from-cyan-600 to-blue-700
            shadow-lg shadow-cyan-500/30
            hover:shadow-cyan-500/50 hover:-translate-y-0.5
            transition-all active:scale-95"
          >
            Book Appointment
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white border-t border-gray-100 shadow-2xl
        transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 py-8"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 text-lg font-bold">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-cyan-600 transition-colors"
            >
              {item}
            </NavLink>
          ))}

          <Link
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-4 rounded-2xl text-center font-bold shadow-lg"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
