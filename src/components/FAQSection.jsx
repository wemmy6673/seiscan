import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is SeiScan?',
    answer:
      'Seiscan is a Sei wallet tracker that monitors the activities of top memecoin traders and KOLs. It provides realtime transactions, token PnL, and a leaderboard ranking their performance.',
  },
  {
    question: 'Is Seiscan free to use?',
    answer:
      'All Seiscan features are free to use.',
  },
  {
    question: 'Can I track non-KOL wallets?',
    answer:
      'Yes, you can search any wallet address on Seiscan. However, its data is initially limited to the last 100 transactions unless you choose to load more.',
  },
  {
    question: 'How do I get my wallet on the leaderboard?',
    answer:
      'We are looking for the top trenchers! If you have $100k+ PnL in recent months, DM us your wallet for verification on X @seiscan.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 my-16" data-aos="fade-up" data-aos-duration="1200">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">FAQs</h2>
      <div className="flex flex-col gap-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl shadow-md">
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-medium text-white focus:outline-none"
              onClick={() => toggle(idx)}
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`ml-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`px-6 pb-4 text-gray-300 text-base transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{
                transitionProperty: 'max-height, opacity',
              }}
            >
              {openIndex === idx && <div>{faq.answer}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection; 