require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Models
const Appointment = require("./models/Appointment");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION & AUTO-ADMIN SETUP ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected Successfully");

    // *** AUTO-CREATE ADMIN LOGIC ***
    try {
      const adminExists = await User.findOne({ username: "admin" });

      if (!adminExists) {
        console.log("⚠️ Admin user not found. Creating one now...");

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("admin123", salt);

        // Save New Admin
        const newAdmin = new User({
          username: "admin",
          password: hashedPassword,
        });

        await newAdmin.save();
        console.log("🎉 ADMIN ACCOUNT CREATED AUTOMATICALLY!");
        console.log("👉 Username: admin");
        console.log("👉 Password: admin123");
      } else {
        console.log("✅ Admin account already exists.");
      }
    } catch (err) {
      console.error("Error checking admin:", err);
    }
    // ***********************************
  })
  .catch((err) => console.log("❌ DB Error:", err));

// Middleware: Auth Check
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
};

// --- ROUTES ---

// 1. Admin Login (With Debugging)
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;

  console.log(`Attempting login for: ${username}`);

  // Find User
  const user = await User.findOne({ username });
  if (!user) {
    console.log("❌ User not found in DB");
    return res
      .status(400)
      .json({ msg: "Invalid Credentials (User not found)" });
  }

  // Check Password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log("❌ Password mismatch");
    return res
      .status(400)
      .json({ msg: "Invalid Credentials (Wrong password)" });
  }

  console.log("✅ Login Successful");
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token, user: { id: user._id, username: user.username } });
});

// --- NEW ROUTE: Check Booked Slots for a Date (PUBLIC) ---
// This allows the frontend to gray out taken slots
app.get("/api/appointments/booked-slots", async (req, res) => {
  try {
    const { date } = req.query; // Frontend sends date like ?date=2023-10-25

    // Find all appointments for that specific date
    const appointments = await Appointment.find({ date });

    // Extract only the time strings (e.g. ["10:00 AM", "12:30 PM"])
    const bookedTimes = appointments.map((appt) => appt.time);

    res.json(bookedTimes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Create Appointment (Public)
app.post("/api/appointments", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Get Appointments (Protected - Admin Only)
app.get("/api/appointments", authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Update Status (Protected - Admin Only)
app.put("/api/appointments/:id", authMiddleware, async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Delete Appointment (Protected - Admin Only)
app.delete("/api/appointments/:id", authMiddleware, async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ msg: "Appointment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
