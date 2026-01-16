import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/dental.png";

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
          ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[88px] flex items-center justify-between">
        {/* ================= LOGO SECTION (FIXED) ================= */}
        <Link to="/" className="flex items-center gap-3 group pl-2">
          {/* 3D Logo Container */}
          <div className="relative flex items-center justify-center w-14 h-14">
            {/* Glow Effect behind logo */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

            <img
              src={Logo}
              alt="K K Dental Clinic Logo"
              className="relative h-14 w-auto object-contain 
                          mix-blend-multiply       /* ✨ MAGIC: Removes White Background */
                          filter contrast-125      /* Improves visibility */
                          drop-shadow-[0_4px_6px_rgba(6,182,212,0.3)] 
                          transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) 
                          group-hover:scale-110 
                          group-hover:-rotate-6 
                          group-hover:drop-shadow-[0_15px_20px_rgba(6,182,212,0.4)]"
            />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col leading-none transition-transform duration-300 group-hover:translate-x-1">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">
              K K Dental
            </span>
            <span className="text-sm text-cyan-600 font-bold tracking-[0.2em] drop-shadow-sm">
              CLINIC
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
                `relative text-sm font-semibold transition-all ${
                  isActive
                    ? "text-cyan-600"
                    : "text-gray-600 hover:text-cyan-600"
                }`
              }
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
          ))}

          <Link
            to="/appointment"
            className="ml-4 px-6 py-2.5 rounded-full font-semibold text-white
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
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white border-t border-gray-100 shadow-xl
        transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 py-6"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 text-base font-semibold">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-cyan-600 transition"
            >
              {item}
            </NavLink>
          ))}

          <Link
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-3 rounded-full text-center font-bold shadow-md"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
