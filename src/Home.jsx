import React from 'react'
import RidesComingSoon from './ComingSoon.jsx';
import RidesComingNav from './RidesComingNav.jsx';

function Home() {
  return (
    <div>
        <div className="flex flex-col min-h-screen bg-white">
      
    <RidesComingNav />
    <RidesComingSoon />
    <footer className="w-full p-4 bg-white">
      <p className="text-base sm:text-lg text-[#0C2353] text-center">
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
  </div>
  )
}

export default Home