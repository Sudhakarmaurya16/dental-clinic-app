import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, onClick }) => {
  const Icon = service.icon;

  return (
    <div
      onClick={() => onClick(service)}
      className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm 
                 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer 
                 overflow-hidden perspective-1000"
    >
      {/* Subtle background icon for 3D depth */}
      <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon size={120} />
      </div>

      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                      shadow-lg transform group-hover:rotate-6 transition-all ${service.bgColor} ${service.color}`}
      >
        <Icon size={32} />
      </div>

      <h3 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
        {service.title}
      </h3>

      <p className="text-slate-500 font-medium mb-6 leading-relaxed">
        {service.shortDesc}
      </p>

      <button className="flex items-center text-sky-600 font-black text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
        Learn More <ArrowRight size={18} className="ml-2" />
      </button>
    </div>
  );
};

export default ServiceCard;
