
import React from "react";
import { useState } from "react";

const BookingForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://wa.me/2330599434111?text=Hello%20OPIJUA,%20I%20want%20to%20book%20a%20delivery.%20Name:%20${encodeURIComponent(name)}%20Pickup:%20${encodeURIComponent(pickup)}%20Dropoff:%20${encodeURIComponent(dropoff)}`;
    window.open(url, "_blank");
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 font-bold text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Book a Delivery</h2>
       <form onSubmit={handleSubmit} className="space-y-6">
  {/* Name Input */}
  <div className="relative">
    <input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="peer w-full border-2 border-indigo-300 rounded-xl px-4 py-3 text-gray-900 placeholder-transparent focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 transition outline-none"
      required
    />
    <label
      className={`absolute left-4 top-3 text-gray-400 text-sm transition-all
        ${name ? "-top-2 text-xs text-indigo-700" : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-700"}`}
    >
      Your Name
    </label>
  </div>

  {/* Pickup Input */}
  <div className="relative">
    <input
      type="text"
      placeholder="Pickup Location"
      value={pickup}
      onChange={(e) => setPickup(e.target.value)}
      className="peer w-full border-2 border-indigo-300 rounded-xl px-4 py-3 text-gray-900 placeholder-transparent focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 transition outline-none"
      required
    />
    <label
      className={`absolute left-4 top-3 text-gray-400 text-sm transition-all
        ${pickup ? "-top-2 text-xs text-indigo-700" : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-700"}`}
    >
      Pickup Location
    </label>
  </div>

  {/* Dropoff Input */}
  <div className="relative">
    <input
      type="text"
      placeholder="Dropoff Location"
      value={dropoff}
      onChange={(e) => setDropoff(e.target.value)}
      className="peer w-full border-2 border-indigo-300 rounded-xl px-4 py-3 text-gray-900 placeholder-transparent focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 transition outline-none"
      required
    />
    <label
      className={`absolute left-4 top-3 text-gray-400 text-sm transition-all
        ${dropoff ? "-top-2 text-xs text-indigo-700" : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-700"}`}
    >
      Dropoff Location
    </label>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-indigo-700 text-white py-3 rounded-xl font-bold hover:bg-indigo-800 transition"
  >
    Send via WhatsApp
  </button>
</form>

      </div>
    </div>
  );
};

export default BookingForm;
