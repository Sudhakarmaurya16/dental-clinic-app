require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const resetAdmin = async () => {
  try {
    // 1. Database Connect karein
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🔌 MongoDB Connected...");

    // 2. Purane 'admin' ko delete karein (agar hai toh)
    await User.deleteOne({ username: "admin" });
    console.log("🗑️  Old Admin Deleted (if existed)");

    // 3. Naya Password Hash karein
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);

    // 4. Naya Admin Create karein
    const user = new User({
      username: "admin",
      password: hashedPassword,
    });

    await user.save();
    console.log("✅ NEW Admin Created Successfully!");
    console.log("👉 Username: admin");
    console.log("👉 Password: admin123");

    process.exit();
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

resetAdmin();
