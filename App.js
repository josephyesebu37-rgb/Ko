import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import Transactions from './components/Transactions';

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Banner />
      <Services />
      <Transactions />
    </div>
  );
}