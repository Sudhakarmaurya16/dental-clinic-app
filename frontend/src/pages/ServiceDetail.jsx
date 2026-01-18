import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Banknote,
  Calendar,
} from "lucide-react";
// ✅ Sahi data file import karein
import { servicesData } from "../data/servicesData";

const ServiceDetail = () => {
  const { id } = useParams();

  // Data fetch karne ka logic
  const service = servicesData.find((item) => String(item.id) === String(id));

  // Debugging ke liye (Browser console mein check karein)
  console.log("URL ID:", id);
  console.log("Found Service:", service);

  // Agar page load ho raha hai par data nahi mil raha
  if (!service) {
    return (
      <div className="pt-40 text-center">
        <h2 className="text-2xl font-bold text-red-500">Service Not Found!</h2>
        <p className="text-slate-500 mt-2">
          ID "{id}" ke liye koi data nahi mila.
        </p>
        <Link
          to="/services"
          className="text-cyan-600 underline mt-4 inline-block font-bold"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-cyan-600 font-bold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} /> Back to Services
        </Link>

        {/* --- 3D HERO SECTION --- */}
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div
            className={`h-64 md:h-80 bg-gradient-to-br ${service.bgColor
              .replace("bg-", "from-")
              .replace(
                "50",
                "500"
              )} to-blue-600 flex items-center justify-center text-white relative`}
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="transform scale-[3] drop-shadow-2xl">
              <service.icon size={48} />
            </div>
          </div>

          <div className="p-8 md:p-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight">
                {service.title}
              </h1>
              <span className="px-6 py-2 bg-green-50 text-green-600 rounded-full font-black border border-green-100 shadow-sm">
                {service.price}
              </span>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-cyan-500 pl-6">
              "{service.longDetails}"
            </p>

            {/* INFO GRID */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-xl font-black text-slate-800 mb-6 uppercase tracking-widest text-sm">
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  {service.benefits?.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-50"
                    >
                      <CheckCircle
                        className="text-green-500 shrink-0"
                        size={22}
                      />
                      <span className="font-bold text-slate-700">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
                <Calendar size={56} className="text-cyan-400 mb-6" />
                <h3 className="text-2xl font-black mb-2">Ready to Book?</h3>
                <p className="text-slate-400 mb-8 font-medium">
                  Get a professional consultation today.
                </p>
                <Link
                  to="/appointment"
                  className="w-full bg-cyan-500 py-4 rounded-2xl font-black text-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                >
                  Book Appointment ⚡
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
