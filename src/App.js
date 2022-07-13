import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="bg-gray-200 min-h-screen w-full bg-[img('https://www.freepik.com/photos/star-sky)]  ">
      <div className="bg-gradient-to-r from-sky-400 container mx-auto to-purple-500 text-white rounded-lg text-center">
        <h1 className="text-7xl">STAR WARS</h1>
        <p className="capitalize">May the force be with you</p>
      </div>
    </div>
  );
}
