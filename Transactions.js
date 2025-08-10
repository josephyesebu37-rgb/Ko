import React from 'react';

export default function Transactions() {
  const transactions = [
    { name: 'Ravi Kumar', amount: '₹500', date: 'Today' },
    { name: 'Electricity Bill', amount: '₹1200', date: 'Yesterday' },
  ];
  return (
    <div className="p-4">
      <h2 className="font-bold mb-2">Recent Transactions</h2>
      {transactions.map((t, i) => (
        <div key={i} className="bg-white p-3 rounded-lg shadow mb-2 flex justify-between">
          <div>
            <p className="font-semibold">{t.name}</p>
            <p className="text-gray-500 text-sm">{t.date}</p>
          </div>
          <p className="font-bold">{t.amount}</p>
        </div>
      ))}
    </div>
  );
}