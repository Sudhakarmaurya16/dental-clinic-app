import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white pt-20 pb-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Heart size={20} className="text-white fill-white" />
              </div>
              <div className="leading-none">
                <h2 className="text-2xl font-extrabold text-white">
                  K K Dental
                </h2>
                <span className="text-xs text-cyan-400 font-bold tracking-widest">
                  CLINIC
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Providing world-class dental care with a gentle touch. Your smile
              is our top priority.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Services",
                "Book Appointment",
                "Contact",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>{" "}
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              Our Treatments
            </h3>
            <ul className="space-y-3">
              {[
                "Root Canal",
                "Cosmetic Dentistry",
                "Dental Implants",
                "Teeth Whitening",
                "Kids Dentistry",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="text-slate-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 text-sm">
                <MapPin size={20} className="text-cyan-500 shrink-0" />
                <span>
                  K K Dental Clinic Near RTO Office Road, (300 meters inside
                  from Nedula Churaha), Khalilabad, Distt. Sant Kabir Nagar,
                  Uttar Pradesh - 272175
                </span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Phone size={20} className="text-cyan-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Mail size={20} className="text-cyan-500 shrink-0" />
                <span>care@kkdental.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} K K Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
