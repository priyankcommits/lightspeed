import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TrainingClub = () => {
  return (
    <section className="py-20 bg-ls-dark relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/training-club-bg.svg"
          alt="Training Club Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ls-dark via-ls-dark/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-ls-neon/20 px-4 py-2 rounded-full mb-6">
              <span className="text-ls-neon font-bold text-sm">LIGHTSPEED COMMUNITY</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-ls-white mb-6 leading-tight">
              Join the Lightspeed <br />Training Club
            </h2>

            <p className="text-gray-300 mb-8 text-lg max-w-xl">
              Connect with elite coaches, follow custom training programs, and push your limits alongside a global community of athletes committed to excellence.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-ls-neon/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ls-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-ls-white">Weekly training programs from pro coaches</p>
              </div>

              <div className="flex items-center">
                <div className="bg-ls-neon/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ls-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-ls-white">Exclusive workout videos and tutorials</p>
              </div>

              <div className="flex items-center">
                <div className="bg-ls-neon/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ls-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-ls-white">Community challenges and events</p>
              </div>

              <div className="flex items-center">
                <div className="bg-ls-neon/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ls-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-2.6.9l-.7.7a4 4 0 00-.9 2.6V8m12 0V6a4 4 0 00-4-4h-.8a4 4 0 00-2.6.9l-.7.7a4 4 0 00-.9 2.6V8m12 0v9a4 4 0 01-4 4H8a4 4 0 01-4-4V8h4v1a1 1 0 001 1h2a1 1 0 001-1V8h4z" />
                  </svg>
                </div>
                <p className="text-ls-white">Early access to limited product drops</p>
              </div>
            </div>

            <Link href="/training-club" className="btn-primary inline-block">
              Join the Club
            </Link>
          </div>

          {/* Training club app mockup */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px] w-[300px] mx-auto">
              <Image
                src="/images/training-app-mockup.svg"
                alt="Lightspeed Training Club App"
                fill
                className="object-contain"
              />
            </div>

            {/* Floating stats */}
            <div className="absolute top-1/4 -left-16 bg-ls-dark/80 backdrop-blur-sm p-4 rounded-lg border border-ls-neon/30 shadow-[0_0_15px_rgba(0,255,102,0.2)]">
              <div className="flex items-center">
                <div className="bg-ls-neon/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ls-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-ls-white font-bold">500+ Workouts</p>
                  <p className="text-gray-400 text-xs">For all fitness levels</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 -right-16 bg-ls-dark/80 backdrop-blur-sm p-4 rounded-lg border border-ls-neon/30 shadow-[0_0_15px_rgba(0,255,102,0.2)]">
              <div className="flex items-center">
                <div className="bg-ls-neon/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ls-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-ls-white font-bold">1M+ Members</p>
                  <p className="text-gray-400 text-xs">Global community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingClub;
