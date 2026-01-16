require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

// Database Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected for Seeding..."))
  .catch((err) => console.log(err));

const createAdmin = async () => {
  try {
    // Check if admin already exists
    const userExists = await User.findOne({ username: "admin" });
    if (userExists) {
      console.log("Admin user already exists!");
      process.exit();
    }

    // Create Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);

    // Create User
    const user = new User({
      username: "admin",
      password: hashedPassword,
    });

    await user.save();
    console.log("✅ Admin Created Successfully!");
    console.log("Username: admin");
    console.log("Password: admin123");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

createAdmin();
