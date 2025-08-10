import React from 'react';

export default function Services() {
  const services = [
    { name: 'Recharge', icon: '📱' },
    { name: 'Electricity', icon: '💡' },
    { name: 'Water Bill', icon: '🚰' },
    { name: 'Insurance', icon: '🛡' },
  ];
  return (
    <div className="p-4 grid grid-cols-4 gap-4">
      {services.map((s) => (
        <div key={s.name} className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl">{s.icon}</div>
          <p className="mt-2">{s.name}</p>
        </div>
      ))}
    </div>
  );
}