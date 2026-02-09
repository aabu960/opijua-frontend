import React, { useState } from "react";
import BookingForm from "./BookingForm";
import logo from "../assets/LOGO.png"; // replace with delivery logo or package image

const Hero = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-indigo-900 to-indigo-800 text-white pt-24 pb-20 sm:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16 min-h-[calc(100vh-6rem)]">

        {/* TEXT */}
        <div className="w-full md:w-1/2">
          <span className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
            Trusted Delivery in Tamale
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Fast & Reliable <br /> Delivery Service
          </h1>

          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-xl">
            We deliver within and outside Tamale. Located at Kukuo near the Central Mosque.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button
              onClick={() => setShowBooking(true)}
              className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Book Now
            </button>

            <a
              href="tel:0599434111"
              className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition"
            >
              Call Us
            </a>
          </div>
        </div>

        {/* BOXED IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-white/7 backdrop-blur-lg rounded-3xl p-6 shadow-2xl w-full max-w-lg transform hover:scale-105 transition">
            <img
              src={logo} // Replace with delivery logo or a package image
              alt="Delivery"
              className="w-full h-80 md:h-[70vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* DIAGONAL CUT - responsive */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-32 bg-white transform skew-y-[-4deg] origin-bottom-left"></div>

      {/* Booking Form Modal */}
      {showBooking && <BookingForm onClose={() => setShowBooking(false)} />}
    </section>
  );
};

export default Hero;
