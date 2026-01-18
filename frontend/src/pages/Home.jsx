import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Quote,
  PenTool,
  Send,
  Video as VideoIcon,
} from "lucide-react";
import Video from "../assets/home_me_jo_image_hai_doctor_k.mp4";
import Img from "../assets/image.png";

// Import Data
import { treatmentCards } from "../data/treatmentsData";

const Home = () => {
  // --- STATES ---
  const [selectedService, setSelectedService] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // New state for video section

  // Initial Reviews Data
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sudhakar Maurya",
      treatment: "Root Canal",
      rating: 5,
      review:
        "I was terrified of visiting the dentist due to past bad experiences, but Dr. Kuldeep completely changed my perspective. I underwent a Root Canal treatment here, and it was surprisingly painless! The use of advanced technology and the doctor's gentle approach put me at ease immediately. Highly recommended!",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "RP Maurya",
      treatment: "Dental Implants",
      rating: 4.5,
      review:
        "My father needed dental implants, and we are so glad we chose this clinic. The facility is state-of-the-art, and the hygiene standards are impeccable. The surgery went smoothly, and the post-op care was excellent. It’s rare to find such dedication and expertise in one place.",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "Ananya Singh",
      treatment: "Invisible Aligners",
      rating: 5,
      review:
        "I am currently getting my teeth aligned here. The clinic is very modern, and the staff is always polite and helpful. Dr. Kuldeep creates a very friendly environment, which makes the monthly visits pleasant. I am already seeing great improvements in just 3 months!",
      date: "2 weeks ago",
    },
  ]);

  // Form Data State
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    rating: 5,
  });

  // --- HANDLE REVIEW SUBMIT ---
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review)
      return alert("Please fill details");

    const reviewObj = {
      id: reviews.length + 1,
      name: newReview.name,
      treatment: "New Patient",
      rating: newReview.rating,
      review: newReview.review,
      date: "Just Now",
    };

    setReviews([reviewObj, ...reviews]);
    setShowReviewForm(false);
    setNewReview({ name: "", review: "", rating: 5 });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden relative font-sans pt-20">
      {/* 1. HERO SECTION */}
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

      {/* 2. TREATMENTS GRID */}
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

      {/* ================= 3. NEW: CLINIC TOUR VIDEO SECTION ================= */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/10">
            <VideoIcon size={14} /> Clinic Tour
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Experience Our{" "}
            <span className="text-cyan-400">Advanced Facility</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
            Take a virtual tour of K K Dental Clinic. We maintain international
            standards of hygiene and use the latest dental technology for your
            comfort.
          </p>

          {/* LARGE VIDEO PLAYER */}
          <div className="relative max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] border-[8px] border-white/10 bg-black aspect-video group">
            {/* Thumbnail / Video */}
            <video
              src={Video}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
              controls={isPlaying} // Play hone par controls dikhana
              poster={Img} // Agar video load na ho to Image dikhegi
              onClick={() => setIsPlaying(true)}
            ></video>

            {/* Custom Play Button (Hidden when playing) */}
            {!isPlaying && (
              <button
                onClick={() => {
                  const vid = document.querySelector("video");
                  if (vid) {
                    vid.play();
                    setIsPlaying(true);
                  }
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/50 text-white hover:scale-110 hover:bg-cyan-500 hover:border-transparent transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
              >
                <Play size={40} fill="currentColor" className="ml-2" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 4. PATIENT REVIEWS & LIVE FEEDBACK */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-yellow-200">
                REAL STORIES
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mt-4">
                Patient Feedback
              </h2>
            </div>

            <button
              onClick={() => setShowReviewForm(true)}
              className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-cyan-600 transition-all shadow-lg active:scale-95"
            >
              <PenTool size={18} /> Write a Review
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < rev.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-slate-600 italic font-medium mb-6 relative z-10">
                  <Quote
                    className="absolute -top-3 -left-2 text-cyan-200 opacity-50 transform rotate-180"
                    size={24}
                  />
                  "{rev.review}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{rev.name}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase">
                      {rev.treatment} • {rev.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLINIC IMAGE SECTION */}
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
            Advanced <br />
            <span className="text-cyan-600">Dental Facility</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Equipped with digital X-rays and intraoral cameras to provide
            accurate diagnosis and patient comfort.
          </p>
        </div>
      </section>

      {/* ================= MODAL: REVIEW FORM ================= */}
      {showReviewForm && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl relative animate-in zoom-in-95">
            <button
              onClick={() => setShowReviewForm(false)}
              className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-red-100 text-slate-500 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-black text-slate-800 mb-6">
              Share Your Experience 💬
            </h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex: Rahul Kumar"
                  className="w-full bg-slate-50 p-4 rounded-xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  value={newReview.name}
                  onChange={(e) =>
                    setNewReview({ ...newReview, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        setNewReview({ ...newReview, rating: star })
                      }
                      className={`p-2 rounded-lg transition-transform active:scale-95 ${
                        newReview.rating >= star
                          ? "text-yellow-400"
                          : "text-slate-200"
                      }`}
                    >
                      <Star
                        size={32}
                        className={
                          newReview.rating >= star ? "fill-current" : ""
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Your Review
                </label>
                <textarea
                  required
                  placeholder="Treatment kaisa raha?"
                  rows="3"
                  className="w-full bg-slate-50 p-4 rounded-xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-cyan-500 resize-none transition-all"
                  value={newReview.review}
                  onChange={(e) =>
                    setNewReview({ ...newReview, review: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-lg hover:bg-cyan-600 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Submit Review <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SERVICE MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-xl">
          <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 z-10 bg-slate-100 p-3 rounded-full hover:bg-slate-200"
            >
              {" "}
              <X size={24} />{" "}
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
    </div>
  );
};

export default Home;
