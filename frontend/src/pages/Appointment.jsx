import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import {
  Calendar,
  User,
  Phone,
  Mail,
  FileText,
  Clock,
  CheckCircle,
  ShieldCheck,
  Star,
  Download,
  ArrowRight,
  Sparkles,
  AlertCircle,
  MapPin, // New Icon for City
  Hash, // New Icon for Age
} from "lucide-react";

const Appointment = () => {
  const [loading, setLoading] = useState(false);
  const [confirmedData, setConfirmedData] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isHoliday, setIsHoliday] = useState(false);
  const receiptRef = useRef();

  // --- CONFIGURATION ---
  const doctorLeaves = ["2026-01-26", "2026-08-15", "2026-12-25"];
  const offDays = [0];

  const timeSlots = [];
  for (let i = 8; i <= 20; i++) {
    const hour = i > 12 ? i - 12 : i;
    const ampm = i >= 12 && i < 24 ? "PM" : "AM";
    timeSlots.push(`${hour}:00 ${ampm}`);
    if (i !== 20) timeSlots.push(`${hour}:30 ${ampm}`);
  }

  // ✅ NEW FIELDS ADDED: age, city
  const [formData, setFormData] = useState({
    name: "",
    age: "", // New
    phone: "",
    city: "", // New
    email: "",
    service: "General Checkup",
    date: "",
    time: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    if (formData.date) {
      checkAvailability(formData.date);
    }
  }, [formData.date]);

  const checkAvailability = async (selectedDate) => {
    const dateObj = new Date(selectedDate);
    const day = dateObj.getDay();

    if (offDays.includes(day) || doctorLeaves.includes(selectedDate)) {
      setIsHoliday(true);
      setBookedSlots([]);
      setFormData((prev) => ({ ...prev, time: "" }));
      toast.warning("Doctor is on leave on this date!");
      return;
    }

    setIsHoliday(false);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/appointments/booked-slots?date=${selectedDate}`
      );
      setBookedSlots(res.data);
    } catch (err) {
      console.error("Error fetching slots", err);
    }
  };

  const handleTimeSelect = (slot) => {
    if (bookedSlots.includes(slot) || isHoliday) return;
    setFormData({ ...formData, time: slot });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isHoliday) {
      toast.error("Doctor is not available on this date.");
      return;
    }
    if (!formData.time) {
      toast.error("Please select a valid time slot!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/appointments",
        formData
      );
      setConfirmedData(res.data);
      toast.success("Appointment Booked Successfully!");
      setFormData({
        name: "",
        age: "",
        phone: "",
        city: "",
        email: "",
        service: "General Checkup",
        date: "",
        time: "",
      });
    } catch (err) {
      toast.error("Error: This slot might have just been booked.");
      checkAvailability(formData.date);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (receiptRef.current === null) return;
    try {
      const dataUrl = await toPng(receiptRef.current, { cacheBust: true });
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight =
        (receiptRef.current.offsetHeight * pdfWidth) /
        receiptRef.current.offsetWidth;
      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Appointment-${confirmedData.name}.pdf`);
    } catch (err) {
      toast.error("Could not generate PDF.");
    }
  };

  // ==========================================
  // VIEW 1: RECEIPT (Updated with Age & City)
  // ==========================================
  if (confirmedData) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-28 pb-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 pointer-events-none"></div>
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-300/20 rounded-full blur-[100px]"></div>

        <div className="max-w-lg w-full relative z-10 animate-scaleUp">
          <div
            ref={receiptRef}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-white/60 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Booking Confirmed!
              </h2>
              <p className="text-slate-500 text-sm">
                Your appointment is scheduled.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-300 text-left space-y-4 relative">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase">
                  Token ID
                </span>
                <span className="text-xl font-mono font-bold text-cyan-600 tracking-wider">
                  #{confirmedData._id.slice(-6).toUpperCase()}
                </span>
              </div>

              {/* ✅ UPDATED RECEIPT GRID */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
                <div className="col-span-1">
                  <p className="text-xs text-slate-400">Patient Name</p>
                  <p className="font-semibold text-slate-700">
                    {confirmedData.name}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-xs text-slate-400">Age</p>
                  <p className="font-semibold text-slate-700">
                    {confirmedData.age || "N/A"} Yrs
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="font-semibold text-slate-700">
                    {confirmedData.phone}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-xs text-slate-400">City/Village</p>
                  <p className="font-semibold text-slate-700 truncate">
                    {confirmedData.city || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Date</p>
                  <p className="font-semibold text-slate-700">
                    {confirmedData.date}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Time</p>
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-bold">
                    <Clock size={12} /> {confirmedData.time}
                  </div>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-200">
                  <p className="text-xs text-slate-400">Service</p>
                  <p className="font-bold text-cyan-700">
                    {confirmedData.service}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-center text-slate-400">
              Please arrive 10 mins early.
              <br />K K Dental Clinic • Mumbai
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={handleDownloadPDF}
              className="flex-1 bg-slate-900 text-white py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <Download size={18} /> Save Receipt
            </button>
            <button
              onClick={() => setConfirmedData(null)}
              className="px-6 py-3.5 rounded-xl font-bold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: BOOKING FORM
  // ==========================================
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse pointer-events-none delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: INFO */}
          <div className="lg:col-span-5 space-y-8 mt-4">
            <div className="animate-fadeInLeft">
              <span className="inline-flex items-center gap-1 py-1 px-3 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold tracking-wider mb-4 border border-cyan-100">
                <Sparkles size={12} /> ONLINE BOOKING
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-4">
                Your Smile, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Our Priority.
                </span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed">
                Book your slot in seconds. We operate from{" "}
                <span className="font-bold text-slate-700">
                  8:00 AM to 8:00 PM
                </span>{" "}
                daily to serve you better.
              </p>
            </div>

            <div className="space-y-4 animate-fadeInLeft delay-200">
              {[
                {
                  title: "Instant Confirmation",
                  desc: "Digital token generated immediately.",
                  icon: CheckCircle,
                },
                {
                  title: "Expert Doctors",
                  desc: "Consult with top specialists.",
                  icon: Star,
                },
                {
                  title: "Zero Waiting Time",
                  desc: "Pre-booked slots ensure no delays.",
                  icon: Clock,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{item.title}</h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden animate-fadeInUp">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    Patient Details
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Check availability below
                  </p>
                </div>
                <div className="hidden md:flex h-10 w-10 bg-slate-50 rounded-full items-center justify-center text-slate-400">
                  <User size={20} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Age (Modified Grid) */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Name takes 2 columns */}
                  <div className="md:col-span-2 relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 text-slate-800 rounded-xl pl-12 pr-4 py-4 font-medium border-none focus:ring-2 focus:ring-cyan-500 outline-none"
                      placeholder="Full Name"
                    />
                  </div>
                  {/* Age takes 1 column */}
                  <div className="relative">
                    <Hash
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      required
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full bg-slate-50 text-slate-800 rounded-xl pl-12 pr-4 py-4 font-medium border-none focus:ring-2 focus:ring-cyan-500 outline-none"
                      placeholder="Age"
                    />
                  </div>
                </div>

                {/* Phone & City (New Row) */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 text-slate-800 rounded-xl pl-12 pr-4 py-4 font-medium border-none focus:ring-2 focus:ring-cyan-500 outline-none"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="relative">
                    <MapPin
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-slate-50 text-slate-800 rounded-xl pl-12 pr-4 py-4 font-medium border-none focus:ring-2 focus:ring-cyan-500 outline-none"
                      placeholder="City / Village"
                    />
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 text-slate-800 rounded-xl pl-12 pr-4 py-4 font-medium border-none focus:ring-2 focus:ring-cyan-500 outline-none"
                      placeholder="Email (Optional)"
                    />
                  </div>
                  <div className="relative">
                    <FileText
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 text-slate-800 rounded-xl pl-12 pr-4 py-4 font-medium border-none focus:ring-2 focus:ring-cyan-500 outline-none appearance-none cursor-pointer"
                    >
                      <option>General Checkup</option>
                      <option>Teeth Whitening</option>
                      <option>Root Canal</option>
                      <option>Dental Implants</option>
                    </select>
                  </div>
                </div>

                {/* DATE PICKER */}
                <div className="group">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">
                    Select Date
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      required
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-slate-50 text-slate-800 rounded-xl pl-12 pr-4 py-4 font-medium border-none focus:ring-2 focus:ring-cyan-500 outline-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* INTELLIGENT TIME SLOTS */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase mb-3 block flex items-center gap-2">
                    <Clock size={14} />
                    {isHoliday ? (
                      <span className="text-red-500">
                        Doctor is on Leave / Holiday
                      </span>
                    ) : (
                      "Available Slots"
                    )}
                  </label>

                  {isHoliday ? (
                    <div className="bg-red-50 text-red-500 p-4 rounded-xl flex items-center gap-3 border border-red-100">
                      <AlertCircle size={20} />
                      <span className="text-sm font-bold">
                        Please select another date. Clinic is closed.
                      </span>
                    </div>
                  ) : formData.date ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                      {timeSlots.map((slot, index) => {
                        const isBooked = bookedSlots.includes(slot);
                        return (
                          <button
                            key={index}
                            type="button"
                            disabled={isBooked}
                            onClick={() => handleTimeSelect(slot)}
                            className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all ${
                              isBooked
                                ? "bg-slate-100 text-slate-300 border-slate-100 cursor-not-allowed decoration-slice line-through"
                                : formData.time === slot
                                ? "bg-cyan-600 text-white border-cyan-600 shadow-md transform scale-105"
                                : "bg-white text-slate-600 border-slate-200 hover:border-cyan-400 hover:text-cyan-600"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-400 italic">
                      Please select a date first to see slots.
                    </p>
                  )}
                </div>

                <button
                  disabled={loading || isHoliday}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Booking..." : "Confirm Appointment"}
                  {!loading && <ArrowRight size={20} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
