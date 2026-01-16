import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Smile,
  Activity,
  Baby,
  ArrowRight,
  X,
  Clock,
  CheckCircle,
  Banknote,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Expanded Data with details for Popup
  const servicesList = [
    {
      id: 1,
      title: "General Dentistry",
      shortDesc: "Routine checkups, scaling, cleaning, and fillings.",
      fullDesc:
        "Our General Dentistry services focus on preventative care to maintain your oral hygiene. We recommend a checkup every 6 months to catch issues early.",
      benefits: [
        "Prevents Cavities",
        "Gum Disease Prevention",
        "Fresh Breath",
        "Plaque Removal",
      ],
      duration: "30 - 45 Mins",
      price: "₹500 - ₹1500",
      icon: <Stethoscope size={40} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Teeth Whitening",
      shortDesc: "Advanced laser whitening to brighten your smile instantly.",
      fullDesc:
        "Using safe and effective laser technology, we remove years of stains caused by coffee, tea, and aging. Get a dazzling smile in just one session.",
      benefits: [
        "Instant Results",
        "Safe for Enamel",
        "Long-lasting White",
        "Boosts Confidence",
      ],
      duration: "60 Mins",
      price: "₹5000 - ₹8000",
      icon: <Sparkles size={40} />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 3,
      title: "Root Canal Treatment",
      shortDesc: "Painless therapy to save infected teeth instantly.",
      fullDesc:
        "Don't extract your tooth! Our painless Root Canal Treatment removes infection from deep inside the tooth and seals it to prevent future pain.",
      benefits: [
        "Saves Natural Tooth",
        "Relieves Pain Instantly",
        "Prevents Infection Spread",
        "Painless Procedure",
      ],
      duration: "2 Sittings (45 Mins each)",
      price: "₹3000 - ₹6000",
      icon: <Activity size={40} />,
      color: "bg-red-100 text-red-600",
    },
    {
      id: 4,
      title: "Dental Implants",
      shortDesc: "Permanent solution for missing teeth with titanium implants.",
      fullDesc:
        "Implants are the gold standard for replacing missing teeth. They look, feel, and function exactly like your natural teeth.",
      benefits: [
        "Lifetime Durability",
        "Prevents Bone Loss",
        "Natural Look",
        "No Damage to Nearby Teeth",
      ],
      duration: "3 - 6 Months Process",
      price: "₹20,000+",
      icon: <ShieldCheck size={40} />,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 5,
      title: "Cosmetic Dentistry",
      shortDesc: "Smile makeovers, veneers, and bonding for perfect alignment.",
      fullDesc:
        "Transform your smile with veneers, bonding, and contouring. We design a smile that fits your face perfectly using Digital Smile Design.",
      benefits: [
        "Fixes Gaps",
        "Corrects Alignment",
        "Hides Chips/Cracks",
        "Hollywood Smile",
      ],
      duration: "1 - 2 Weeks",
      price: "Consultation Required",
      icon: <Smile size={40} />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 6,
      title: "Kids Dentistry",
      shortDesc: "Friendly and gentle dental care specifically for children.",
      fullDesc:
        "We create a fun and fear-free environment for kids. From fluoride treatments to cavity fillings, we ensure your child loves visiting the dentist.",
      benefits: [
        "Pain-free Techniques",
        "Habit Counseling",
        "Fluoride Protection",
        "Friendly Environment",
      ],
      duration: "30 Mins",
      price: "₹400 - ₹1000",
      icon: <Baby size={40} />,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* 1. Hero Header */}
      <div className="bg-cyan-50 py-16 text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          World-Class <span className="text-cyan-600">Dental Services</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Click on any service below to view detailed procedures, pricing, and
          benefits.
        </p>
      </div>

      {/* 2. Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)} // CLICK TRIGGER
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${service.color}`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {service.shortDesc}
              </p>
              <button className="inline-flex items-center text-cyan-600 font-semibold hover:gap-2 transition-all">
                View Details <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Call to Action */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Expert Advice?</h2>
          <Link
            to="/contact"
            className="bg-white text-cyan-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>

      {/* ================= POPUP MODAL ================= */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden relative animate-scaleUp">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-red-100 hover:text-red-500 transition"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div
              className={`${selectedService.color} p-8 flex items-center gap-4`}
            >
              <div className="bg-white/80 p-3 rounded-full shadow-sm">
                {selectedService.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedService.title}
              </h2>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Info Grid (Duration & Price) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                  <Clock className="text-cyan-600" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Duration
                    </p>
                    <p className="font-semibold text-gray-800">
                      {selectedService.duration}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                  <Banknote className="text-green-600" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Estimated Cost
                    </p>
                    <p className="font-semibold text-gray-800">
                      {selectedService.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Key Benefits:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                    >
                      <CheckCircle size={16} className="text-cyan-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t flex justify-end">
                <Link
                  to="/appointment"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-cyan-500/30 transition-transform active:scale-95"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
