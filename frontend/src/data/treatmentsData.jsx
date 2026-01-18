import React from "react";
import {
  Zap,
  Award,
  Sparkles,
  Smile,
  Activity,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export const treatmentCards = [
  {
    id: 1,
    title: "Root Canal Treatment (RCT)",
    shortDesc: "Save your natural teeth with painless precision.",
    fullDesc:
      "Our RCT procedure uses advanced rotary endodontics for a faster, pain-free experience. We ensure complete infection removal and structural restoration of your tooth.",
    benefits: [
      "Single Visit Option",
      "Laser Disinfection",
      "High Success Rate",
    ],
    price: "₹3,500 Onwards",
    icon: <Zap size={32} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Dental Crowns",
    shortDesc: "Strong and aesthetic protection for your teeth.",
    fullDesc:
      "We offer Zirconia and E-Max crowns that look exactly like natural teeth. Durable, biocompatible, and digitally designed for a perfect fit.",
    benefits: ["Natural Look", "15+ Year Warranty", "Digitally Scanned"],
    price: "₹2,500 Onwards",
    icon: <Award size={32} />,
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: 3,
    title: "Laser Dentistry",
    shortDesc: "Modern, bloodless, and stitch-free procedures.",
    fullDesc:
      "Experience the future of dentistry. Lasers are used for gum contouring, cavity removal, and faster healing with zero vibration and noise.",
    benefits: ["No Bleeding", "Faster Healing", "No Anesthesia required"],
    price: "₹1,500 Onwards",
    icon: <Sparkles size={32} />,
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: 4,
    title: "Clear Aligners",
    shortDesc: "Straighten teeth invisibly without wires.",
    fullDesc:
      "Say goodbye to traditional braces. Clear aligners are removable, transparent, and custom-made to shift your teeth comfortably.",
    benefits: ["100% Invisible", "Removable & Easy", "Digital Planning"],
    price: "Starting ₹40,000",
    icon: <Smile size={32} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Dental Fillings",
    shortDesc: "Composite tooth-colored restorations.",
    fullDesc:
      "We use high-grade composite resins that bond directly to your teeth, making them stronger and restoring their original beauty.",
    benefits: ["Tooth Colored", "Strong Bonding", "Long Lasting"],
    price: "₹800 - ₹2,500",
    icon: <Activity size={32} />,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 6,
    title: "Wisdom Teeth Removal",
    shortDesc: "Expert surgical removal of impacted teeth.",
    fullDesc:
      "Safe and surgical extraction of wisdom teeth using minimally invasive techniques to reduce post-op swelling and discomfort.",
    benefits: ["Surgical Expertise", "Painless Extraction", "Post-Op Care"],
    price: "₹2,500 - ₹6,000",
    icon: <HeartPulse size={32} />,
    color: "from-rose-500 to-orange-500",
  },
  {
    id: 7,
    title: "Dental Implants",
    shortDesc: "Permanent solution for missing teeth.",
    fullDesc:
      "Restore your confidence with titanium implants. A permanent, root-like structure that supports lifelong artificial teeth.",
    benefits: ["Lifetime Solution", "Look & Feel Natural", "Bone Preservation"],
    price: "₹18,000 Onwards",
    icon: <Microscope size={32} />,
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: 8,
    title: "Dentures",
    shortDesc: "High-quality partial and full sets.",
    fullDesc:
      "Customized flexible and traditional dentures designed for superior comfort and natural chewing function.",
    benefits: ["Flexible Options", "Lightweight", "Budget Friendly"],
    price: "₹5,000 Onwards",
    icon: <ShieldCheck size={32} />,
    color: "from-slate-600 to-slate-800",
  },
];
