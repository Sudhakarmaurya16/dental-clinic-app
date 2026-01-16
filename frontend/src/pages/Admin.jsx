import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import {
  Trash2,
  CheckCircle,
  Clock,
  User,
  Lock,
  LogIn,
  LayoutDashboard,
  LogOut,
  Calendar,
  Search,
  MapPin,
  PhoneCall, // New: Call Icon
  MessageCircle, // New: WhatsApp Icon
  Filter, // New: Filter Icon
  X, // New: Clear Icon
} from "lucide-react";

const Admin = () => {
  const { token, login, logout } = useContext(AuthContext);

  const [appointments, setAppointments] = useState([]);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ NEW: Date Filter State
  const [filterDate, setFilterDate] = useState("");

  // Fetch Data
  const fetchAppointments = async () => {
    try {
      const res = await axios.get("https://dental-clinic-app-ptz8.onrender.com/api/appointments", {
        headers: { Authorization: token },
      });
      setAppointments(res.data);
    } catch (err) {
      toast.error("Failed to fetch data");
    }
  };

  useEffect(() => {
    if (token) fetchAppointments();
  }, [token]);

  // Actions
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://dental-clinic-app-ptz8.onrender.com/api/auth/login",
        loginData
      );
      login(res.data.token);
      toast.success("Login Successful!");
    } catch (err) {
      console.error(err);
      toast.error("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `https://dental-clinic-app-ptz8.onrender.com/api/appointments/${id}`,
        { status },
        { headers: { Authorization: token } }
      );
      fetchAppointments();
      toast.success(`Appointment ${status}`);
    } catch (err) {
      toast.error("Error updating status");
    }
  };

  const deleteAppt = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      await axios.delete(`https://dental-clinic-app-ptz8.onrender.com/api/appointments/${id}`, {
        headers: { Authorization: token },
      });
      fetchAppointments();
      toast.success("Record Deleted");
    } catch (err) {
      toast.error("Error deleting record");
    }
  };

  // ✅ UPDATED FILTER LOGIC: Search + Date Filter
  const filteredAppointments = appointments.filter((appt) => {
    // 1. Search Filter (Name, Phone, City)
    const matchesSearch =
      appt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appt.phone.includes(searchTerm) ||
      (appt.city && appt.city.toLowerCase().includes(searchTerm.toLowerCase()));

    // 2. Date Filter (Agar admin ne date select ki hai tabhi check karega)
    const matchesDate = filterDate ? appt.date === filterDate : true;

    return matchesSearch && matchesDate;
  });

  // ==============================================
  // 1. LOGIN SCREEN (Same as before)
  // ==============================================
  if (!token)
    return (
      <div className="min-h-screen bg-[#F0F9FF] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse delay-1000"></div>

        <div className="relative z-10 w-full max-w-md p-10 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl mx-auto flex items-center justify-center shadow-lg shadow-cyan-500/30 mb-6 transform rotate-6 hover:rotate-0 transition-all duration-500 cursor-pointer">
              <LayoutDashboard size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800">
              Admin Portal
            </h2>
            <p className="text-slate-500 font-medium mt-2">
              K K Dental Clinic Management
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="group">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User
                    className="text-slate-400 group-focus-within:text-cyan-600 transition-colors"
                    size={20}
                  />
                </div>
                <input
                  placeholder="Username"
                  className="w-full bg-slate-50 border-none text-slate-800 text-sm rounded-2xl py-4 pl-12 pr-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all outline-none"
                  onChange={(e) =>
                    setLoginData({ ...loginData, username: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="group">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock
                    className="text-slate-400 group-focus-within:text-cyan-600 transition-colors"
                    size={20}
                  />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-slate-50 border-none text-slate-800 text-sm rounded-2xl py-4 pl-12 pr-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all outline-none"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
            </div>
            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-lg"
            >
              {loading ? "Verifying..." : "Login"}{" "}
              {!loading && <LogIn size={20} />}
            </button>
          </form>
        </div>
      </div>
    );

  // ==============================================
  // 2. DASHBOARD (Updated with Date Filter)
  // ==============================================
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* --- Header & Filters --- */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 w-full xl:w-auto">
            <div className="bg-cyan-100 p-3 rounded-2xl text-cyan-700">
              <LayoutDashboard size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-800">
                Dashboard
              </h1>
              <p className="text-slate-500 text-sm">Welcome back, Admin</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full xl:w-auto">
            {/* ✅ NEW: Date Filter Input */}
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Filter size={16} />
              </div>
              <input
                type="date"
                className="w-full md:w-48 pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border-none text-sm focus:ring-2 focus:ring-cyan-200 outline-none text-slate-600 font-medium cursor-pointer"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                title="Filter by Date"
              />
              {/* Clear Date Button */}
              {filterDate && (
                <button
                  onClick={() => setFilterDate("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-400 hover:text-red-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                placeholder="Search Name, Phone, City..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border-none text-sm focus:ring-2 focus:ring-cyan-200 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              onClick={logout}
              className="flex items-center gap-2 bg-red-50 text-red-500 px-5 py-2.5 rounded-xl hover:bg-red-500 hover:text-white transition-all font-bold text-sm shadow-sm whitespace-nowrap"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        {/* --- Appointments Table --- */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-800">
              {filterDate
                ? `Appointments for ${filterDate}`
                : "Recent Appointments"}
            </h3>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold">
              {filteredAppointments.length} Found
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 text-slate-500 text-xs uppercase tracking-wider font-bold">
                  <th className="p-6">Patient Info</th>
                  <th className="p-6">Location</th>
                  <th className="p-6">Schedule</th>
                  <th className="p-6">Treatment</th>
                  <th className="p-6">Status</th>
                  <th className="p-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredAppointments.length > 0 ? (
                  filteredAppointments.map((appt) => (
                    <tr
                      key={appt._id}
                      className="hover:bg-cyan-50/30 transition-colors group"
                    >
                      {/* Patient Info */}
                      <td className="p-6">
                        <div className="font-bold text-slate-800 text-base">
                          {appt.name}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          Age: {appt.age || "-"}
                        </div>
                      </td>

                      {/* Location */}
                      <td className="p-6">
                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                          <MapPin size={14} className="text-slate-400" />
                          {appt.city || "N/A"}
                        </div>
                      </td>

                      {/* Schedule */}
                      <td className="p-6">
                        <div className="flex items-center gap-2 text-slate-700 font-bold bg-slate-100 px-3 py-1.5 rounded-lg w-fit">
                          <Clock size={14} className="text-slate-400" />{" "}
                          {appt.time}
                        </div>
                        <div className="text-xs text-slate-400 mt-2 font-medium pl-1">
                          {appt.date}
                        </div>
                      </td>

                      {/* Service */}
                      <td className="p-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100">
                          {appt.service}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="p-6">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border ${
                            appt.status === "Confirmed"
                              ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                              : "bg-amber-50 text-amber-600 border-amber-200"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              appt.status === "Confirmed"
                                ? "bg-emerald-500"
                                : "bg-amber-500"
                            }`}
                          ></span>
                          {appt.status}
                        </span>
                      </td>

                      {/* ✅ ACTIONS: Contact & Manage */}
                      <td className="p-6 text-right">
                        <div className="flex justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                          {/* Call Button */}
                          <a
                            href={`tel:${appt.phone}`}
                            className="p-2.5 bg-blue-50 text-blue-600 hover:bg-blue-500 hover:text-white rounded-xl transition-all shadow-sm active:scale-95"
                            title="Call Patient"
                          >
                            <PhoneCall size={18} />
                          </a>

                          {/* WhatsApp Button */}
                          <a
                            href={`https://wa.me/91${appt.phone}`}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 bg-green-50 text-green-600 hover:bg-green-500 hover:text-white rounded-xl transition-all shadow-sm active:scale-95"
                            title="WhatsApp"
                          >
                            <MessageCircle size={18} />
                          </a>

                          {/* Confirm Button */}
                          {appt.status !== "Confirmed" && (
                            <button
                              onClick={() =>
                                updateStatus(appt._id, "Confirmed")
                              }
                              className="p-2.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-xl transition-all shadow-sm active:scale-95"
                              title="Confirm"
                            >
                              <CheckCircle size={18} />
                            </button>
                          )}

                          {/* Delete Button */}
                          <button
                            onClick={() => deleteAppt(appt._id)}
                            className="p-2.5 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all shadow-sm active:scale-95"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-16 text-center text-slate-400">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
                          {filterDate ? (
                            <Calendar size={30} />
                          ) : (
                            <Search size={30} />
                          )}
                        </div>
                        <p>
                          {filterDate
                            ? `No appointments found on ${filterDate}`
                            : "No appointments found."}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
