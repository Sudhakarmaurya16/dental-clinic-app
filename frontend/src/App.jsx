import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact"; // <--- 1. NEW: Real Contact Page Import kiya
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
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />

            {/* 2. Ab yeh Asli 3D Contact Page dikhayega */}
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
