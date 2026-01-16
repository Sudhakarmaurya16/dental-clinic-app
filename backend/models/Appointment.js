const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    // ✅ NEW FIELD: Age
    age: { type: String, required: false }, // String rakha hai taaki "25" ya "25 yrs" dono chalein

    phone: { type: String, required: true },

    // ✅ NEW FIELD: City
    city: { type: String, required: false },

    email: { type: String },
    service: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
