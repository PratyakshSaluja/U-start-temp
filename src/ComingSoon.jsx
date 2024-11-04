import React from 'react';

const RidesComingSoon = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
        `}</style>
        <h1
          className="text-8xl text-center text-[#0C2353]"
          style={{ fontFamily: 'Italiana, serif' }}
        >
          Rides Coming Soon...
        </h1>
      </main>
      
      <footer className="flex justify-center p-4">
        <p className="text-lg text-[#0C2353] text-center mb-5">
          For any queries, connect with us on{' '}
          <a
            href="mailto:contact@ustart.in"
            className="underline hover:text-blue-600"
          >
            contact@ustart.in
          </a>
        </p>
      </footer>
    </div>
  );
};

export default RidesComingSoon;
