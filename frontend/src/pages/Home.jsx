import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import Video from "../assets/home_me_jo_image_hai_doctor_k.mp4";
import Img from "../assets/image.png";

// ================= IMPORT SEPARATE DATA =================
import { treatmentCards } from "../data/treatmentsData";

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden relative font-sans pt-20">
      {/* 3D BACKGROUND GLOW */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* HERO SECTION */}
      <header className="relative z-10 py-16 px-6 container mx-auto lg:flex items-center gap-12">
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-1 bg-white/80 backdrop-blur-md border border-cyan-100 rounded-full shadow-lg">
            <span className="text-cyan-700 font-bold text-sm tracking-widest">
              ✨ EXPERT DENTAL CARE
            </span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-slate-800 leading-tight">
            Smile with <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Confidence.
              </span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-cyan-100 -z-10 rounded-full"></span>
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
            At **K K Dental Clinic**, we use cutting-edge technology to provide
            100% sterilized and painless care.
          </p>
          <Link
            to="/appointment"
            className="inline-block px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-xl hover:-translate-y-2 transition-all"
          >
            Book Now ⚡
          </Link>
        </div>

        <div className="lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center perspective-[2000px]">
          <div className="relative w-full max-w-sm transform rotate-y-[-10deg] hover:rotate-0 transition-transform duration-1000">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-[4rem] blur-2xl animate-pulse"></div>
            <video
              src={Video}
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 rounded-[3.5rem] w-full aspect-[3/4] object-cover shadow-[25px_50px_60px_-15px_rgba(0,0,0,0.3)] border-[12px] border-white"
            />
          </div>
        </div>
      </header>

      {/* TREATMENTS GRID (Using Imported Data) */}
      <section className="py-24 relative z-10 px-6 container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-800 tracking-tight">
            Treatments at K K Dental
          </h2>
          <p className="text-slate-500 mt-4 font-bold uppercase tracking-widest text-sm italic">
            Inspired by Professional Standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {treatmentCards.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedService(item)}
              className="group relative h-80 perspective-[1000px] cursor-pointer"
            >
              <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-12">
                <div className="absolute inset-0 bg-white rounded-[2.5rem] p-8 shadow-xl border border-white flex flex-col items-center justify-center text-center">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-black uppercase tracking-widest group-hover:text-cyan-600 transition-colors">
                    Details & Price +
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL POPUP FOR DETAILS */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-xl">
          <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 z-10 bg-slate-100 p-3 rounded-full hover:bg-slate-200"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row">
              <div
                className={`md:w-1/3 bg-gradient-to-br ${selectedService.color} p-12 flex items-center justify-center text-white`}
              >
                <div className="transform scale-[2.5] drop-shadow-lg">
                  {selectedService.icon}
                </div>
              </div>
              <div className="md:w-2/3 p-10">
                <h3 className="text-4xl font-black text-slate-800 mb-2">
                  {selectedService.title}
                </h3>
                <p className="text-xl font-bold text-cyan-600 mb-6">
                  {selectedService.price}
                </p>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  {selectedService.fullDesc}
                </p>
                <div className="space-y-3 mb-10">
                  {selectedService.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100"
                    >
                      <CheckCircle className="text-green-500" size={20} />
                      <span className="font-bold text-slate-700 text-sm">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/appointment"
                  onClick={() => setSelectedService(null)}
                  className={`block w-full py-5 text-center rounded-2xl text-white font-black text-lg bg-gradient-to-r ${selectedService.color} shadow-lg hover:brightness-110 transition-all`}
                >
                  Book This Treatment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CLINIC IMAGE SECTION */}
      <section className="py-24 relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative perspective-[1500px]">
          <div className="transform rotate-y-12 hover:rotate-0 transition-transform duration-1000">
            <img
              src={Img}
              alt="K K Dental Clinic"
              className="rounded-[3rem] shadow-2xl border-[10px] border-white w-full"
            />
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-5xl font-black text-slate-800 leading-tight">
            State-of-the-Art <br />
            <span className="text-cyan-600">Dental Facility</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Equipped with digital X-rays and intraoral cameras to provide
            accurate diagnosis and patient comfort.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
