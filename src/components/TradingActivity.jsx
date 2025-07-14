import React from 'react';
import spongebobImg from '../images/spongebob.jpeg';
import corgiImg from '../images/corgi.png';

// Example trade data with shuffled images
const trades = [
  {
    id: 1,
    seller: 'CryptoKing',
    amount: '2.5',
    token: 'ETH',
    price: '$4,200',
    timeAgo: '2 mins ago',
    image: spongebobImg,
  },
  {
    id: 2,
    seller: 'TokenQueen',
    amount: '0.1',
    token: 'BTC',
    price: '$6,500',
    timeAgo: '5 mins ago',
    image: corgiImg,
  },
  {
    id: 3,
    seller: 'NFTNinja',
    amount: '1,000',
    token: 'USDC',
    price: '$1,000',
    timeAgo: '10 secs ago',
    image: spongebobImg,
  },
  {
    id: 4,
    seller: 'DeFiDude',
    amount: '5',
    token: 'SOL',
    price: '$120',
    timeAgo: '1 min ago',
    image: corgiImg,
  },
  {
    id: 5,
    seller: 'CryptoKing',
    amount: '0.5',
    token: 'ETH',
    price: '$4,100',
    timeAgo: '3 mins ago',
    image: spongebobImg,
  },
  {
    id: 6,
    seller: 'TokenQueen',
    amount: '2',
    token: 'BTC',
    price: '$6,600',
    timeAgo: '7 mins ago',
    image: corgiImg,
  },
  {
    id: 7,
    seller: 'NFTNinja',
    amount: '500',
    token: 'USDC',
    price: '$500',
    timeAgo: '12 secs ago',
    image: spongebobImg,
  },
  {
    id: 8,
    seller: 'DeFiDude',
    amount: '10',
    token: 'SOL',
    price: '$125',
    timeAgo: '4 mins ago',
    image: corgiImg,
  },
  {
    id: 9,
    seller: 'CryptoKing',
    amount: '1',
    token: 'ETH',
    price: '$4,250',
    timeAgo: '8 mins ago',
    image: spongebobImg,
  },
  {
    id: 10,
    seller: 'TokenQueen',
    amount: '0.2',
    token: 'BTC',
    price: '$6,550',
    timeAgo: '15 mins ago',
    image: corgiImg,
  },
];

const TradingActivity = () => {
  return (
    <div className="bg-gray-800 rounded-md shadow-lg m-6 my-14 md:m-14 max-w-2xl md:mx-6 lg:mx-auto md:max-w-6xl">
      {trades.map((trade, idx) => (
        <div
          key={trade.id}
          className={`flex items-center justify-between px-6 py-4 text-white ${idx !== trades.length - 1 ? 'border-b border-gray-600' : ''}`}
        >
          <div className="flex items-center gap-4 flex-1">
            <img src={trade.image} alt="thumbnail" className="w-10 h-10 rounded-full object-cover bg-gray-700 flex-shrink-0" />
            <span className="text-base md:text-lg">
              <span className="font-semibold text-blue-400">{trade.seller}</span> sold <span className="font-semibold">{trade.amount}</span> of <span className="font-semibold text-purple-400">{trade.token}</span> at <span className="font-semibold text-green-400">{trade.price}</span>.
            </span>
          </div>
          <span className="text-xs text-gray-400 ml-4 whitespace-nowrap">{trade.timeAgo}</span>
        </div>
      ))}
    </div>
  );
};

export default TradingActivity; 