import React from 'react';

function Home() {
  return (
    <section className="flex-grow bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 leading-tight">
          Share & Explore Real Interview Experiences
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Unlock tips, tricks, and questions asked by top companies. Your journey starts here.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition"
          >
            Start Exploring
          </a>
          <a
            href="#"
            className="border-2 border-blue-600 hover:bg-blue-50 text-blue-600 px-8 py-3 rounded-full text-lg font-medium transition"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
