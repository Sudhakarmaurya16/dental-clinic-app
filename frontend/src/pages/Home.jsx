import React, { useState } from "react";
import { Link } from "react-router-dom";
import Video from "../assets/home_me_jo_image_hai_doctor_k.mp4";
import Img from "../assets/image.png";
import {
  CheckCircle,
  Star,
  ShieldCheck,
  ArrowRight,
  X,
  Sparkles,
  Zap,
  Activity,
  Award,
  HeartPulse,
  Microscope,
} from "lucide-react";

const Home = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  // 🦷 DENTAL-SPECIFIC SERVICES DATA
  const features = [
    {
      id: 1,
      title: "General Dental Care",
      shortDesc: "Complete oral health & hygiene.",
      fullDesc:
        "Routine dental checkups, professional cleaning, cavity detection, and preventive care using modern diagnostic tools to keep your teeth healthy for life.",
      benefits: [
        "Pain-Free Cleaning",
        "Advanced Digital X-Ray",
        "Preventive Care Focus",
      ],
      price: "₹500 – ₹1500",
      icon: <ShieldCheck size={32} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      shortDesc: "Smile enhancement treatments.",
      fullDesc:
        "Enhance your smile with teeth whitening, veneers, and smile designing using digital planning for natural and long-lasting results.",
      benefits: ["Whiter Teeth", "Natural Smile Design", "Confidence Boost"],
      price: "Consultation Required",
      icon: <Sparkles size={32} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Laser Dental Treatment",
      shortDesc: "Advanced painless procedures.",
      fullDesc:
        "State-of-the-art laser dentistry for gum treatment, root canal therapy, and surgeries with minimal pain, no bleeding, and faster healing.",
      benefits: ["No Cutting", "Quick Recovery", "High Precision"],
      price: "₹3000 Onwards",
      icon: <Zap size={32} />,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden relative font-sans">
      {/* ================= 3D BACKGROUND GLOW ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-200/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      {/* ================= 1. HERO SECTION ================= */}
      <header className="relative z-10 pt-32 pb-24 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT CONTENT */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/90 backdrop-blur-md border border-cyan-100 rounded-full shadow-sm text-cyan-700 font-bold text-sm tracking-wide hover:shadow-md transition-shadow cursor-default">
              <Activity size={16} className="text-cyan-500" /> Trusted Dental
              Care Since 2015
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
              Healthy Teeth,
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
                Confident Smile.
              </span>
            </h1>

            <p className="text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              At <strong>K K Dental Clinic</strong>, we combine advanced dental
              technology with gentle care to deliver painless, safe, and
              long-lasting treatments for your entire family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/appointment"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-700 shadow-[0_10px_30px_-10px_rgba(6,182,212,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.7)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Appointment{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-slate-600 bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:text-cyan-600 hover:border-cyan-100 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            {/* TRUST STATS */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-200/60">
              {[
                { val: "5000+", label: "Happy Patients" },
                { val: "15+", label: "Expert Doctors" },
                { val: "4.9★", label: "Google Rating" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="hover:scale-105 transition-transform duration-300 cursor-default"
                >
                  <h3 className="text-3xl font-extrabold text-slate-800 bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-slate-600">
                    {stat.val}
                  </h3>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3D VIDEO CONTAINER */}
          <div className="relative perspective-1000 lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 rounded-full blur-[80px] animate-pulse-slow"></div>

            <div className="relative w-full max-w-lg aspect-[4/5] bg-white/10 backdrop-blur-md p-3 rounded-[3rem] border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transform rotate-y-12 hover:rotate-y-0 hover:scale-[1.02] transition-all duration-700 ease-out group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 rounded-[3rem] pointer-events-none"></div>

              <video
                src={Video}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[2.5rem] w-full h-full object-cover shadow-inner"
              />

              <div className="absolute bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/60 flex items-center gap-4 animate-float z-20 max-w-[200px]">
                <div className="bg-green-100 p-3 rounded-full text-green-600 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 leading-tight">
                    100% Safe
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Sterilized Clinic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= 2. SERVICES SECTION ================= */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-cyan-600 font-bold tracking-wider uppercase text-sm mb-3 block">
              World Class Care
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
              Advanced Dental Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              We leverage modern dentistry techniques to ensure your treatment
              is precise, comfortable, and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((f) => (
              <div
                key={f.id}
                onClick={() => setSelectedFeature(f)}
                className="group relative bg-white rounded-[2.5rem] p-8 cursor-pointer
                shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] 
                transition-all duration-500 transform hover:-translate-y-2
                border border-slate-100 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${f.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>

                <div
                  className={`relative w-20 h-20 mb-8 rounded-3xl flex items-center justify-center
                  bg-gradient-to-br ${f.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  {f.icon}
                </div>

                <h3 className="relative text-2xl font-bold mb-3 text-slate-800 group-hover:text-cyan-700 transition-colors">
                  {f.title}
                </h3>
                <p className="relative text-slate-500 mb-8 leading-relaxed">
                  {f.shortDesc}
                </p>

                <div className="relative inline-flex items-center font-bold text-cyan-600 group-hover:gap-2 transition-all">
                  View Details <ArrowRight size={18} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. WHY CHOOSE US (New 3D Section - FIXED IMAGES) ================= */}
      <section className="py-24 relative z-10 bg-white/50 backdrop-blur-sm">
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: 3D IMAGE COLLAGE - FIXED */}
            <div className="relative order-2 lg:order-1 perspective-1000">
              {/* Main Image (Dental Chair) */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-y-6 group hover:rotate-y-0 transition-transform duration-700 bg-gray-100">
                <img
                  src={Img}
                  alt="Modern Dental Clinic Interior"
                  className="w-full object-cover shadow-inner group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-cyan-300">
                    World Class Facility
                  </p>
                  <h3 className="text-3xl font-bold">
                    State-of-the-Art Clinic
                  </h3>
                </div>
              </div>

              {/* Floating Secondary Image (Doctor working) */}
              <div className="absolute -bottom-12 -right-12 w-3/5 rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white z-20 animate-float hidden md:block bg-gray-100">
                <img
                  src="https://img.freepik.com/free-photo/female-dentist-examining-patient-teeth_1098-18456.jpg?w=600"
                  alt="Dentist Treating Patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT: TEXT DETAILS */}
            <div className="space-y-10 order-1 lg:order-2">
              <div>
                <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-widest mb-4 border border-blue-100">
                  WHY CHOOSE US?
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-[1.1] mb-6">
                  We Care About Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    Smile & Comfort.
                  </span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Experience dental care like never before. Our approach
                  combines medical expertise with a spa-like comfort to ensure
                  you leave with a smile.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Advanced Diagnostics",
                    desc: "High-resolution Digital X-Rays (RVG) & Intraoral Cameras.",
                    icon: Microscope,
                    color: "cyan",
                  },
                  {
                    title: "Painless Treatment",
                    desc: "Modern anesthesia & gentle handling for anxiety-free visits.",
                    icon: HeartPulse,
                    color: "purple",
                  },
                  {
                    title: "Experienced Specialists",
                    desc: "MDS doctors specializing in Orthodontics, Implants & Surgery.",
                    icon: Award,
                    color: "orange",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-5 items-start p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default border border-transparent hover:border-slate-100"
                  >
                    <div
                      className={`w-14 h-14 bg-${item.color}-50 rounded-2xl flex items-center justify-center text-${item.color}-600 group-hover:bg-${item.color}-500 group-hover:text-white transition-all duration-300 shadow-sm shrink-0`}
                    >
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h4
                        className={`text-xl font-bold text-slate-800 mb-1 group-hover:text-${item.color}-700 transition-colors`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="group inline-flex items-center text-blue-700 font-bold hover:gap-2 transition-all"
                >
                  Learn More About Us{" "}
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3D MODAL ================= */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedFeature(null)}
          ></div>

          <div className="relative bg-white max-w-lg w-full rounded-[2.5rem] shadow-2xl animate-scaleUp overflow-hidden">
            <div
              className={`relative h-40 bg-gradient-to-br ${selectedFeature.color} flex items-center justify-center`}
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-6 right-6 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-3xl shadow-inner text-white">
                {React.cloneElement(selectedFeature.icon, { size: 48 })}
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
                  {selectedFeature.title}
                </h2>
                <span className="inline-block px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-bold">
                  {selectedFeature.price}
                </span>
              </div>

              <p className="mb-8 text-slate-600 leading-relaxed text-center">
                {selectedFeature.fullDesc}
              </p>

              <div className="space-y-3 mb-8">
                {selectedFeature.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"
                  >
                    <CheckCircle
                      className="text-green-500 shrink-0"
                      size={20}
                    />
                    <span className="text-slate-700 font-medium">{b}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/appointment"
                className={`block w-full text-center py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-[0.98]
                bg-gradient-to-r ${selectedFeature.color}`}
              >
                Book This Treatment
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ================= 4. TESTIMONIAL ================= */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[3rem] p-12 md:p-20 text-white text-center shadow-[0_30px_60px_-15px_rgba(6,182,212,0.4)] relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-1000"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-8 text-yellow-300 gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  fill="currentColor"
                  size={28}
                  className="drop-shadow-md"
                />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight drop-shadow-sm">
              “Completely painless treatment and very professional doctors. The
              best dental experience I've ever had!”
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold mb-3 border border-white/30">
                R
              </div>
              <p className="font-bold text-xl">Rahul Sharma</p>
              <p className="text-cyan-100 text-sm">Verified Patient</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
