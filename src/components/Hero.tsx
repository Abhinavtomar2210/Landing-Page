
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Organize Your Day the Smart Way
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          TaskNest helps you stay on top of your tasks, set reminders, and keep notes all in one simple app.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
