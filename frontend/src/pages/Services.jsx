import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  CheckCircle,
  Clock,
  Banknote,
  ShieldCheck,
  Award,
  Droplet,
  Microscope,
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  // Modal state ki ab zaroorat nahi hai agar aap direct page par bhej rahe hain,
  // lekin maine ise rakha hai agar aap future mein use karna chahein.
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "unset";
  }, [selectedService]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-white overflow-hidden text-center px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-sky-50/50 -z-10 blur-3xl" />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 tracking-tight">
            Our Dental <span className="text-sky-600">Services</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium mb-10 leading-relaxed">
            Advanced dental care for a healthy and confident smile.
          </p>
          <Link
            to="/appointment"
            className="inline-block bg-sky-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-sky-200 hover:bg-sky-500 hover:-translate-y-1 transition-all"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* 2. SERVICES GRID (FIXED WITH LINKS) */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group block"
            >
              <ServiceCard
                service={service}
                // onClick logic ab page redirect sambhal lega
                onClick={() => {}}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-800 mb-16">
            Why Choose Our Clinic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: Award,
                text: "Experienced Dentists",
                color: "text-blue-500",
              },
              {
                icon: Microscope,
                text: "Modern Equipment",
                color: "text-emerald-500",
              },
              {
                icon: ShieldCheck,
                text: "Hygienic & Safe",
                color: "text-sky-500",
              },
              {
                icon: Droplet,
                text: "Affordable Treatment",
                color: "text-teal-500",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div
                  className={`p-6 rounded-3xl bg-slate-50 mb-4 group-hover:bg-sky-50 transition-colors`}
                >
                  <item.icon size={48} className={item.color} />
                </div>
                <p className="text-lg font-bold text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            Need a perfect smile? <br />
            Book your appointment today.
          </h2>
          <Link
            to="/appointment"
            className="bg-sky-500 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* MODAL POPUP (KEEPS AS BACKUP IF NEEDED) */}
      {selectedService && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] w-full max-w-2xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 hover:bg-red-50 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="p-10">
              <h3 className="text-4xl font-black text-slate-800 mb-4">
                {selectedService.title}
              </h3>
              <p className="text-lg text-slate-500 mb-8">
                {selectedService.fullDesc}
              </p>
              <Link
                to="/appointment"
                className="w-full inline-block text-center py-5 bg-sky-600 text-white rounded-3xl font-black text-lg"
              >
                Book This Service Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
