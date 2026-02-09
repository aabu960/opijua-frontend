import React from "react";
import{ useState } from "react";
import BookingForm from "./BookingForm.jsx"; // adjust path if needed
import logo from "../assets/LOGO.png";
import D1 from "../assets/D1.png";
import D2 from "../assets/D8.jpg";
import D3 from "../assets/Dm.jpg";
import L1 from "../assets/LOCATION.png";
import Dm from "../assets/delivery.jpg";
import Sfl from "../assets/Sfl.png"
import Van from "../assets/van.jpg";
import YImg from "../assets/y.jpg";
import Hero from "./Hero";
const partnerLogos = [Sfl, logo, Sfl, Sfl, logo];
const Home = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* LOGO IMAGE */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Opijua Logo"
              className="h-10 w-auto"
            />
            <span className="text-sm text-gray-600 hidden sm:block">
              Delivery Service • Tamale
            </span>
          </div>

          <a
            href="tel:0599434111"
            className="text-indigo-700 font-semibold"
          >
            Call Now
          </a>
        </div>
      </nav>

    <Hero />



     {/* SERVICES */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-indigo-900 font-semibold uppercase tracking-wide">
        Our Services
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        What We Deliver
      </h2>
      <p className="mt-4 text-gray-600">
        Reliable delivery services tailored for individuals and businesses.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-3">

      {[
        //  {
        //   title: "Business Logistics",
        //   description: "Dedicated delivery solutions for shops, vendors, and companies.",
        //   img: "../src/assets/delivery_man.jpg",
        // },
        {
          title: "Local Delivery",
          description: "Fast and secure delivery within Tamale with same-day service.",
          img:Dm, // small thumbnail image
        },
        {
          title: "Inter-City Delivery",
          description: "We deliver packages outside Tamale to nearby towns and cities.",
          img:Van,
        },
        {
          title: "Business Logistics",
          description: "Dedicated delivery solutions for shops, vendors, and companies.",
          img: YImg,
        },
      ].map((service, i) => (
        <div
          key={i}
          className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition"
        >
          {/* THUMBNAIL IMAGE */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 bg-indigo-100 overflow-hidden">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* WHY US */}
     {/* WHY CHOOSE US */}
<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* Text */}
    <div>
      <span className="text-indigo-600 font-semibold uppercase">
        Why OPIJUA
      </span>

      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        A Delivery Partner You Can Trust
      </h2>

      <p className="mt-6 text-gray-600 max-w-xl">
        We combine speed, reliability, and professionalism to ensure your
        packages arrive safely and on time.
      </p>

      <ul className="mt-8 space-y-4">
        <li className="flex items-start gap-3">
          <span className="text-indigo-600 text-xl">✔</span>
          <span>Experienced riders and careful handling</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-indigo-600 text-xl">✔</span>
          <span>Affordable pricing with no hidden fees</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-indigo-600 text-xl">✔</span>
          <span>Available every day, including weekends</span>
        </li>
      </ul>
    </div>

   {/* Visual */}
<div className="relative">
  {/* Background glow */}
  <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-40"></div>

{/* Image Card */}
<div className="relative rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto">
  {/* Image */}
  <img
    src="../src/assets/LOCATION.png" // check the path
    alt="Our Location"
    className="w-full h-64 md:h-80 object-cover"
  />

  {/* Overlay text */}
  <div className="absolute bottom-0 left-0 w-full bg-white/70 backdrop-blur-sm p-6 rounded-b-3xl">
    <p className="text-2xl font-bold text-indigo-700">📍 Located at Kukuo</p>
    <p className="mt-2 text-gray-600">Near the Central Mosque, Tamale.</p>
  </div>
</div>

</div>


  </div>
</section>
{/* HOW IT WORKS */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="text-indigo-900 font-semibold uppercase">
        Process
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        How It Works
      </h2>
    </div>

    <div className="grid gap-12 md:grid-cols-3 text-center">
      
      <div>
        <div className="w-16 h-16 mx-auto  bg-gradient-to-r from-indigo-900 to-indigo-900 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          1
        </div>
        <h3 className="mt-6 font-bold text-xl">Book a Delivery</h3>
        <p className="mt-3 text-gray-600">
          Contact us via WhatsApp or phone to schedule a pickup.
        </p>
      </div>

      <div>
        <div className="w-16 h-16 mx-auto  bg-gradient-to-r from-indigo-900 to-indigo-900 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          2
        </div>
        <h3 className="mt-6 font-bold text-xl">Pickup & Transport</h3>
        <p className="mt-3 text-gray-600">
          Our rider picks up your package and transports it safely.
        </p>
      </div>

      <div>
        <div className="w-16 h-16 mx-auto  bg-gradient-to-r from-indigo-900 to-indigo-900 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          3
        </div>
        <h3 className="mt-6 font-bold text-xl">Fast Delivery</h3>
        <p className="mt-3 text-gray-600">
          Your package arrives on time at the destination.
        </p>
      </div>

    </div>
  </div>
</section>
{/* TESTIMONIALS */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Satisfied Clients
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      Trusted by individuals and businesses across Tamale and beyond.
    </p>

    <div className="grid gap-10 md:grid-cols-3">
      {[
        {
          name: "Abdul Rahman",
          feedback: "Very fast and reliable delivery. My package arrived on time.",
        },
        {
          name: "Amina Sule",
          feedback: "Professional riders and great customer service. Highly recommended!",
        },
        {
          name: "Yakubu Issah",
          feedback: "Best delivery service in Tamale. Affordable and trusted.",
        },
      ].map((client, i) => (
        <div
          key={i}
          className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
        >
          {/* STARS */}
          <div className="flex justify-center mb-4 text-yellow-400">
            {"★★★★★"}
          </div>

          <p className="text-gray-700 italic mb-6">
            “{client.feedback}”
          </p>

          <h4 className="font-bold text-indigo-700">
            {client.name}
          </h4>
        </div>
      ))}
    </div>

  </div>
</section>
{/* PARTNER WITH US */}
<section className="py-24 bg-gradient-to-r from-indigo-900 to-indigo-900 text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Our Partners
    </h2>

    <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
      We proudly work with these trusted companies.
    </p>

    {/* Logos Marquee */}
    <div className="overflow-hidden relative">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {/* {[
          " ../assets/Sfl.png",
           "../assets/LOGO.png",
           "../assets/Sfl.png",
          "../assets/Sfl.png",
           "../assets/LOGO.png",
        ] */}
        {partnerLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Partner ${i + 1}`}
            className="h-16 object-contain"
          />
        ))}
      </div>
    </div>

    {/* Call to Action */}
    <div className="mt-10 flex justify-center gap-4 flex-wrap">
      <a
        href="https://wa.me/233200283331?text=Hello%20OPIJUA%2C%20I%20want%20to%20partner%20with%20you."
        className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
      >
        Partner With Us
      </a>

      <a
        href="tel:0599434111"
        className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition"
      >
        Call Us
      </a>
    </div>

  </div>
</section>

{/* Add this in your global CSS or Tailwind config */}


{/* OUR TEAM */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Meet Our Team
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      Dedicated professionals working behind the scenes to make delivery fast and reliable.
    </p>

    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">

      {[
        { name: "Abubakari Opijua Wumbei", role: "CEO/Founder & Operations Lead", img: "../src/assets/LOGO.png" },
        { name: "Abdulai Oluu", role: "Software Engineer & Platform Manager", img: "../assets/LOGO.png" },
      
      ].map((member, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
        >
          {/* AVATAR IMAGE */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-200">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="font-bold text-lg mb-1">{member.name}</h3>
          <p className="text-gray-600 text-sm">{member.role}</p>
        </div>
      ))}

    </div>

  </div>
</section>

{/* CTA */}
<section className=" bg-gradient-to-r from-indigo-900 to-indigo-900 py-20 text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-extrabold">
      Ready to Send a Package?
    </h2>

    <p className="mt-4 text-blue-100 max-w-xl mx-auto">
      Contact OPIJUA Delivery today and let us handle your deliveries professionally.
    </p>

    <div className="mt-10 flex justify-center gap-6 flex-wrap">
      <a
        href="https://wa.me/233200283331"
        className="bg-white text-indigo-700 px-10 py-4 rounded-lg font-bold"
      >
        WhatsApp Us
      </a>

      <a
        href="tel:0599434111"
        className="border-2 border-white px-10 py-4 rounded-lg font-semibold"
      >
        Call Now
      </a>
    </div>

  </div>
</section>


    {/* FOOTER */}
<footer className="bg-gray-900 text-gray-300">
  
  {/* Main Footer */}
  <div className="max-w-7xl mx-auto px-6 py-20 grid gap-16 md:grid-cols-4">

    {/* BRAND */}
    <div>
      <div className="flex items-center gap-3 mb-6">
        <img
          src={logo}
          alt="Opijua Logo"
          className="h-12 w-auto"
        />
        <span className="text-white font-bold text-lg">
          OPIJUA
        </span>
      </div>

      <p className="text-gray-400 leading-relaxed max-w-sm">
        OPIJUA Delivery Service provides fast, secure, and reliable deliveries
        within and outside Tamale. We operate every day.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h4 className="text-white font-bold mb-6">Quick Links</h4>
      <ul className="space-y-4">
        <li>
          <a href="#services" className="hover:text-white">
            Services
          </a>
        </li>
        <li>
          <a href="#how-it-works" className="hover:text-white">
            How It Works
          </a>
        </li>
        <li>
          <a href="#location" className="hover:text-white">
            Location
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/233200283331"
            className="text-indigo-400 hover:text-white font-semibold"
          >
            Book a Delivery
          </a>
        </li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="text-white font-bold mb-6">Contact</h4>
      <ul className="space-y-4">
        <li>📞 <a href="tel:0599434111">059 943 4111</a></li>
        <li>💬 <a href="https://wa.me/233200283331">020 028 3331</a></li>
        <li>📧 opijua@gmail.com</li>
      </ul>
    </div>

    {/* LOCATION */}
    <div>
      <h4 className="text-white font-bold mb-6">Location</h4>
      <p className="text-gray-400 leading-relaxed">
        Kukuo, near the Central Mosque <br />
        Tamale, Ghana
      </p>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p>
        © {new Date().getFullYear()} OPIJUA DELIVERY SERVICE. All rights reserved.
      </p>

      <p className="text-gray-500">
        Built with ❤️ for fast delivery
      </p>
    </div>
  </div>

</footer>

    </div>
  );
};

export default Home;
