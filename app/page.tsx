import React from "react";
import { Button } from "antd";

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="mb-6">
          <div className="w-24 h-24 bg-[#FFC300] rounded-full mb-4"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFC300]">
            MGH Prolife
          </h1>
          <p className="text-lg mt-4 max-w-xl mx-auto text-[#DCDCDC]">
            Empowering lives through holistic health, physiotherapy & wellness.
          </p>
        </div>
        <Button className="border-none !text-black hover:bg-[#FFC300] !bg-[#FFC300]">
          Get in Touch
        </Button>
      </section>

      {/* About Us */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-[#FFC300] mb-6 text-center">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-[#DCDCDC]">
          MGH Prolife is committed to providing innovative health and wellness solutions
          designed for modern lifestyles. Our mission is to deliver care that goes
          beyond treatment—nurturing mind, body, and spirit.
        </p>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-[#FFC300] mb-10 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {['Physiotherapy', 'Wellness Programs', 'Corporate Health Events'].map((service, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{service}</h3>
              <p className="text-[#DCDCDC]">
                Tailored programs crafted by certified professionals to promote recovery,
                fitness and holistic well-being.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-[#FFC300] mb-10 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-700 h-40 rounded-xl flex items-center justify-center text-gray-400">
              Image Placeholder {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#FFC300] mb-6">Contact Us</h2>
        <p className="mb-4 text-[#DCDCDC]">Email: contact@mghprolife.com | Phone: +91-XXXX-XXXXXX</p>
        <Button type="default" className="border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-black">
          Send a Message
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black text-[#DCDCDC]">
        &copy; 2025 MGH Prolife. All rights reserved.
      </footer>
    </main>
  );
}
