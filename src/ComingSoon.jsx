import React from 'react';

const RidesComingSoon = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
        `}</style>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center text-[#0C2353]"
          style={{ fontFamily: 'Italiana, serif' }}
        >
          Rides Coming Soon...
        </h1>
      </main>
    </div>
  );
};

export default RidesComingSoon;