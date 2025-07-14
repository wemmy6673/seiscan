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
    <div className="flex flex-col md:flex-row gap-6 m-6 my-14 md:m-14 max-w-2xl md:mx-6 lg:mx-auto md:max-w-6xl">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex-1 bg-gray-800 rounded-xl shadow-md px-4 py-8 text-white text-center text-lg font-medium"
        >
          {feature.title}
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection; 