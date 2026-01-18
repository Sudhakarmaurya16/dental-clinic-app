import React from "react";
import { Link } from "react-router-dom";
import Dr from "../assets/dr.jpeg";
import {
  Award,
  Users,
  Clock,
  Heart,
  Linkedin,
  Twitter,
  Facebook,
  Stethoscope,
  GraduationCap,
  Activity,
} from "lucide-react";

const About = () => {
  // 👨‍⚕️ DOCTORS DATA
  const doctors = [
    {
      id: 1,
      name: "Dr. kuldeep krishn maurya (BDS kgmu)",
      role: "Senior Consultant",
      exp: "5+ Years Exp",
      image: Dr,
      specialty: "Oral and dental surgeon",
      color: "blue",
    },
    {
      id: 2,
      name: "Dr. said zafar( Bds'mds)",
      role: "Orthodontics ",
      exp: "12+ Years Exp",
      image: "",
      specialty: "Smile Makeovers",
      color: "purple",
    },
    {
      id: 3,
      name: "Dr. Ashish (BDS)",
      role: "Implantologist",
      exp: "10+ Years Exp",
      image: "",
      specialty: "Dental Implants",
      color: "cyan",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden relative">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px]"></div>
      </div>

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative z-10 pt-36 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 rounded-full text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Heart size={14} className="fill-blue-600" /> About K K Dental
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 leading-tight mb-6">
            Healing Smiles with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Passion & Precision.
            </span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Founded in 2015, we set out on a mission to make world-class dental
            care accessible, painless, and affordable for everyone in our
            community.
          </p>
        </div>
      </section>

      {/* ================= 2. OUR STORY (Glass Card) ================= */}
      <section className="py-16 relative z-10 px-4">
        <div className="container mx-auto">
          <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white shadow-2xl relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Text Side */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                  More Than Just a Clinic.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  At K K Dental, we believe a visit to the dentist should be
                  something you look forward to. We have replaced the clinical
                  smell and scary tools with a <b>spa-like ambiance</b> and
                  <b> advanced painless technology</b>.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  {[
                    { label: "Patients Treated", val: "5000+", icon: Users },
                    { label: "Years Experience", val: "15+", icon: Clock },
                    { label: "Awards Won", val: "12", icon: Award },
                    { label: "Branches", val: "02", icon: Activity },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                        <stat.icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-slate-800">
                          {stat.val}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium uppercase">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side (3D Layered) */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.5rem] transform rotate-3 scale-95 opacity-20"></div>
                <img
                  src="https://img.freepik.com/free-photo/team-young-specialists-doctors-standing-corridor-hospital_1303-21199.jpg?w=800"
                  alt="Our Team"
                  className="relative rounded-[2.5rem] shadow-lg border-4 border-white w-full object-cover transform hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. MEET OUR DOCTORS ================= */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
              Meet Our Experts
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our team consists of gold-medalist doctors dedicated to providing
              the best care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="group relative bg-white rounded-[2.5rem] p-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                {/* Image Container */}
                <div className="h-64 w-full rounded-[2rem] overflow-hidden relative mb-6">
                  <div
                    className={`absolute inset-0 bg-${doc.color}-900/10 group-hover:bg-transparent transition-colors z-10`}
                  ></div>
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-lg flex items-center gap-2">
                    <Stethoscope
                      size={14}
                      className={`text-${doc.color}-600`}
                    />{" "}
                    {doc.exp}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center px-4 pb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">
                    {doc.name}
                  </h3>
                  <p
                    className={`text-${doc.color}-600 font-semibold text-sm mb-4`}
                  >
                    {doc.role}
                  </p>

                  <div className="flex justify-center gap-2 mb-6">
                    <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <GraduationCap size={12} /> {doc.specialty}
                    </span>
                  </div>

                  {/* Social Links (Hover Reveal) */}
                  <div className="flex justify-center gap-4 border-t border-slate-100 pt-6">
                    {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="text-slate-400 hover:text-blue-600 transition-colors transform hover:scale-110"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>

                  <Link
                    to="/appointment"
                    className={`mt-6 block w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all`}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. CTA BANNER ================= */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-blue-100 text-lg">
                Join 5000+ happy patients today. First consultation is
                absolutely free!
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-2xl transition-all"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
