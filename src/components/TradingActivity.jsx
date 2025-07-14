import React from 'react';

// Example trade data
const trades = [
  {
    id: 1,
    seller: 'CryptoKing',
    amount: '2.5',
    token: 'ETH',
    price: '$4,200',
    timeAgo: '2 mins ago',
  },
  {
    id: 2,
    seller: 'TokenQueen',
    amount: '0.1',
    token: 'BTC',
    price: '$6,500',
    timeAgo: '5 mins ago',
  },
  {
    id: 3,
    seller: 'NFTNinja',
    amount: '1,000',
    token: 'USDC',
    price: '$1,000',
    timeAgo: '10 secs ago',
  },
  {
    id: 4,
    seller: 'DeFiDude',
    amount: '5',
    token: 'SOL',
    price: '$120',
    timeAgo: '1 min ago',
  },
  {
    id: 5,
    seller: 'CryptoKing',
    amount: '0.5',
    token: 'ETH',
    price: '$4,100',
    timeAgo: '3 mins ago',
  },
  {
    id: 6,
    seller: 'TokenQueen',
    amount: '2',
    token: 'BTC',
    price: '$6,600',
    timeAgo: '7 mins ago',
  },
  {
    id: 7,
    seller: 'NFTNinja',
    amount: '500',
    token: 'USDC',
    price: '$500',
    timeAgo: '12 secs ago',
  },
  {
    id: 8,
    seller: 'DeFiDude',
    amount: '10',
    token: 'SOL',
    price: '$125',
    timeAgo: '4 mins ago',
  },
  {
    id: 9,
    seller: 'CryptoKing',
    amount: '1',
    token: 'ETH',
    price: '$4,250',
    timeAgo: '8 mins ago',
  },
  {
    id: 10,
    seller: 'TokenQueen',
    amount: '0.2',
    token: 'BTC',
    price: '$6,550',
    timeAgo: '15 mins ago',
  },
];

const TradingActivity = () => {
  return (
    <div className="bg-gray-800 rounded-md shadow-lg my-10 mx-6 md:mx-auto max-w-2xl  overflow-hidden">
      {trades.map((trade, idx) => (
        <div
          key={trade.id}
          className={`flex items-center justify-between px-6 py-4 text-white ${idx !== trades.length - 1 ? 'border-b border-gray-600' : ''}`}
        >
          <span className="text-base md:text-lg">
            <span className="font-semibold text-blue-400">{trade.seller}</span> sold <span className="font-semibold">{trade.amount}</span> of <span className="font-semibold text-purple-400">{trade.token}</span> at <span className="font-semibold text-green-400">{trade.price}</span>.
          </span>
          <span className="text-xs text-gray-400 ml-4 whitespace-nowrap">{trade.timeAgo}</span>
        </div>
      ))}
    </div>
  );
};

export default TradingActivity; 