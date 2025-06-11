
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "To-Do Lists",
      description: "Create and manage your daily tasks with ease"
    },
    {
      title: "Reminders",
      description: "Never forget important deadlines and appointments"
    },
    {
      title: "Notes",
      description: "Keep all your thoughts and ideas organized in one place"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Features
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-blue-50">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
