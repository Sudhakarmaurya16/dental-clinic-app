import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail"; // ✅ Import ServiceDetail
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        {/* Main Content with Padding for Fixed Navbar */}
        <div className="min-h-screen bg-gray-50 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/admin" element={<Admin />} />
            {/* Services Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />{" "}
            {/* ✅ Dynamic 3D Detail Page */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
        <ToastContainer position="bottom-right" />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
