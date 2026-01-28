import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F0F9FF] relative overflow-hidden pt-24 pb-16">
      {/* ================= BACKGROUND BLOBS ================= */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse pointer-events-none delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 drop-shadow-sm">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Have questions about your dental health? We are here to help. Book
            an appointment or visit us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* ================= LEFT: INFO CARDS ================= */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: MapPin,
                title: "Our Location",
                text: "Vikas Bhawan Marg, Nedula, Khalilabad, U.P.",
              },
              { icon: Phone, title: "Phone Number", text: "+91 79858 81382" },
              { icon: Mail, title: "Email Address", text: "care@kkdental.com" },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-lg border border-white/60 p-5 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-5"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_#fff] group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.text}</p>
                </div>
              </div>
            ))}

            {/* Hours Card */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/60 p-5 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_#fff]">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Working Hours</h3>
                <p className="text-slate-500 text-sm">
                  Mon - Sun: 9:30 AM - 7:00 PM
                </p>
                <p className="text-cyan-600 font-bold text-xs mt-1">
                  Open Everyday
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: CONTACT FORM ================= */}
          <div className="lg:col-span-3 bg-white/80 backdrop-blur-xl border border-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="block text-slate-700 font-bold mb-2 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 text-slate-800 rounded-xl px-5 py-4 border-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-cyan-500 focus:bg-white outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-50 text-slate-800 rounded-xl px-5 py-4 border-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-cyan-500 focus:bg-white outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2 ml-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-slate-50 text-slate-800 rounded-xl px-5 py-4 border-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-cyan-500 focus:bg-white outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* ================= BOTTOM: MAP (Auto-Search Link) ================= */}
        <div className="mt-16 h-[400px] w-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl relative z-10">
          <iframe
            // Ye link 'Search Mode' use karta hai jo bina API key ke bhi chalta hai
            src="https://maps.google.com/maps?q=KK+Dental+Clinic+Nedula+Khalilabad+Sant+Kabir+Nagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="KK Dental Clinic Location"
            className="filter grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
