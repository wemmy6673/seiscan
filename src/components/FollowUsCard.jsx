import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';

const FollowUsCard = () => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md flex items-center gap-4 px-6 py-7 max-w-6xl mx-6 lg:mx-auto justify-center md:mx-6 my-10" data-aos="fade-up" data-aos-duration="1200">
      <FaXTwitter className="text-white text-3xl" />
      <span className="text-white text-lg font-medium">Follow us on X</span>
    </div>
  );
};

export default FollowUsCard; 