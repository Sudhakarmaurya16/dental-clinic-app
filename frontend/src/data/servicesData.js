import {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Smile,
  Activity,
  Baby,
  Zap,
  Microscope,
  Scissors,
  HeartPulse,
} from "lucide-react";

export const servicesData = [
  {
    id: "general-dentistry", // String ID for cleaner URLs
    title: "General Dentistry",
    shortDesc: "Routine checkups, scaling, and preventative care.",
    fullDesc:
      "Comprehensive oral exams and cleanings to maintain your hygiene.",
    longDetails:
      "General Dentistry aapke muh ki health ka buniyaadi hissa hai. Isme regular checkups, scaling (safai), aur fillings shamil hain. K K Dental mein hum late-gen tools use karte hain taaki aapke daant hamesha mazboot aur saaf rahein.",
    benefits: [
      "Plaque Removal",
      "Gum Protection",
      "Early Cavity Detection",
      "Fresh Breath",
    ],

    icon: Stethoscope,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortDesc: "Advanced laser whitening for instant brightness.",
    fullDesc: "Remove deep stains and brighten your smile up to 8 shades.",
    longDetails:
      "Coffee, chai aur smoking se hone wale peelepan ko hatane ke liye hum laser technology ka use karte hain. Ye procedure surakshit hai aur sirf ek session mein aapko chamakdaar smile deti hai.",
    benefits: [
      "Instant Results",
      "Safe for Enamel",
      "Pain-free Process",
      "Confidence Boost",
    ],

    icon: Sparkles,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    shortDesc: "Painless therapy to save infected teeth.",
    fullDesc: "Specialized endodontic care using rotary technology.",
    longDetails:
      "Root Canal Treatment (RCT) tab zaroori hota hai jab infection daant ki jad tak pahunch jata hai. Hum rotary instruments aur laser sterilization ka use karte hain taaki treatment painless aur kam waqt mein ho jaye.",
    benefits: [
      "Saves Natural Tooth",
      "Painless Procedure",
      "Prevents Further Infection",
      "Rapid Relief",
    ],

    icon: Zap,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDesc: "Permanent titanium roots for missing teeth.",
    fullDesc:
      "The gold standard for tooth replacement with lifetime durability.",
    longDetails:
      "Missing daant ko replace karne ka sabse achha tarika Dental Implants hai. Ye ek titanium screw hota hai jo jad ki jagah kaam karta hai aur iske upar ek natural-looking crown lagaya jata hai.",
    benefits: [
      "Lifetime Solution",
      "Prevents Bone Loss",
      "Looks & Feels Natural",
      "Chew Comfortably",
    ],

    icon: ShieldCheck,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: "braces-orthodontics",
    title: "Braces & Orthodontics",
    shortDesc: "Metal, Ceramic, and Invisible Aligners.",
    fullDesc: "Expert alignment for both children and adults.",
    longDetails:
      "Crooked teeth (tedhe-medhe daant) ko seedha karne ke liye hum Metal, Ceramic aur Invisible Aligners (Invisalign) offer karte hain. Har case ko 3D scan ke saath plan kiya jata hai.",
    benefits: [
      "Perfect Teeth Alignment",
      "Invisible Options",
      "Improved Jaw Function",
      "Digital 3D Planning",
    ],

    icon: Activity,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDesc: "Gentle and fun dental care for kids.",
    fullDesc: "Creating a fear-free environment for our youngest patients.",
    longDetails:
      "Bachon ke liye dentist ke paas jana darawna ho sakta hai, isliye humara clinic ek dosti-bhara mahol deta hai. Milk teeth ki care aur fluoride treatment bachon ke future dental health ke liye zaroori hai.",
    benefits: [
      "Child-Friendly Environment",
      "Painless Care",
      "Fluoride Treatment",
      "Habit Counseling",
    ],

    icon: Baby,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
];
