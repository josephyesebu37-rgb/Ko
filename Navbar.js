import React from 'react';

export default function Navbar() {
  return (
    <div className="bg-purple-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">PhonePe</h1>
      <button className="bg-purple-500 px-3 py-1 rounded">Login</button>
    </div>
  );
}