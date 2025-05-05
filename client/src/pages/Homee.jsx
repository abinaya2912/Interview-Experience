import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddExperience from './AddExperience';
import ViewExperiences from './ViewExperiences';

function Homee() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-white">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 leading-tight">
            Share & Explore Real Interview Experiences
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Unlock tips, tricks, and questions asked by top companies. Your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/add-experience"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition"
            >
              Add Experience
            </Link>
            <Link
              to="/view-experiences"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition"
            >
              View Experiences
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-white px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-12">
          Why Join Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Real Stories",
              description:
                "Read honest interview experiences from candidates across the globe.",
            },
            {
              title: "Top Company Insights",
              description:
                "Access curated questions from companies like Google, Amazon, and more.",
            },
            {
              title: "Give Back",
              description:
                "Help others succeed by sharing your own interview journey and tips.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-blue-50 rounded-2xl shadow transition duration-300 hover:shadow-lg hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Routes */}
      <section className="px-6 pb-16">
        <Routes>
          <Route path="/add-experience" element={<AddExperience />} />
          <Route path="/view-experiences" element={<ViewExperiences />} />
        </Routes>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 text-center text-gray-600 py-4 text-sm">
        © {new Date().getFullYear()} Interview Insights. All rights reserved.
      </footer>
    </main>
  );
}

export default Homee;
