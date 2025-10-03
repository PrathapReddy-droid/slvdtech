import React from "react";
import logo from "/logo.png";

function App() {
  return (
    <div className="relative text-gray-900">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/tech-bg.gif"
          alt="Tech Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur-md shadow fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-700">SLVDTECH</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </nav>
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow hover:opacity-90 transition">Get Started</button>
        </div>
      </header>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center text-white px-6">
        <img src={logo} alt="SLVDTECH Logo" className="w-40 h-40 animate-pulseGlow" />
        <h2 className="mt-6 text-5xl font-extrabold drop-shadow-lg">SLVDTECH</h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-200 drop-shadow">
          Tech builds. <span className="text-purple-400">Value</span>
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition">Book a Meeting</button>
          <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/20 transition">Our Solutions</button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white/90 backdrop-blur-md py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-indigo-700">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600">Web Development</h4>
              <p className="mt-3 text-gray-600">Responsive, scalable, and SEO-friendly websites tailored for your business.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600">Mobile Apps</h4>
              <p className="mt-3 text-gray-600">Native and cross-platform apps that bring your ideas to the fingertips of users.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600">Cloud Solutions</h4>
              <p className="mt-3 text-gray-600">Secure, efficient cloud-native apps powered by AWS and modern tech stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 text-center text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold">Our Achievements</h3>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="p-6 bg-black/40 backdrop-blur-md rounded-xl shadow">
              <h4 className="text-4xl font-bold text-purple-300">30+</h4>
              <p className="mt-2">Clients across industries</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md rounded-xl shadow">
              <h4 className="text-4xl font-bold text-purple-300">500+</h4>
              <p className="mt-2">Projects delivered successfully</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md rounded-xl shadow">
              <h4 className="text-4xl font-bold text-purple-300">2</h4>
              <p className="mt-2">Branches (Chennai & Anantapur)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white/90 backdrop-blur-md py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-indigo-700">Contact Us</h3>
          <p className="mt-4 text-gray-600">📞 +91 95055 97205</p>
          <p className="text-gray-600">📍 Kunuthuru, Dharamavaram, Anantapur, 515672</p>
          <p className="mt-4 text-gray-600">✉️ info@slvdtech.in</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-center text-white py-6">
        <p>© 2025 SLVDTECH. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
