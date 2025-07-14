import React from 'react';

const features = [
  {
    title: 'Monitor trades from top wallets',
  },
  {
    title: 'Discover New and Trending tokens',
  },
  {
    title: 'Analyze the Most profitable wallets',
  },
];

const FeaturesSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto px-6 py-12" data-aos="fade-up" data-aos-duration="1200">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex-1 bg-gray-800 rounded-xl shadow-md p-8 text-white text-center text-lg font-medium"
        >
          {feature.title}
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection; 