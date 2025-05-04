import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-20 bg-ls-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-ls-neon/10 to-transparent"></div>
      
      {/* Animated lightning bolt shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 animate-pulse-slow">
            <path d="M200 0L230 170H400L260 275L310 400L200 300L90 400L140 275L0 170H170L200 0Z" fill="currentColor" className="text-ls-neon" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 animate-pulse-slow">
            <path d="M150 0L172.5 127.5H300L195 206.25L232.5 300L150 225L67.5 300L105 206.25L0 127.5H127.5L150 0Z" fill="currentColor" className="text-ls-neon" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-ls-white mb-6 leading-tight">
            Ready to Elevate Your Performance?
          </h2>
          
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Join the elite athletes who trust Lightspeed for their training and competition gear. Experience the difference that cutting-edge design and premium materials make.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/products" className="btn-primary">
              Shop the Collection
            </Link>
            <Link href="/training-club" className="btn-secondary">
              Join Training Club
            </Link>
          </div>
          
          {/* Trust badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-ls-neon mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-ls-white font-bold mb-1">Money-Back Guarantee</h3>
              <p className="text-gray-400 text-sm text-center">30-day no-questions-asked returns</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-ls-neon mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-ls-white font-bold mb-1">Performance Guarantee</h3>
              <p className="text-gray-400 text-sm text-center">Tested by elite athletes</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-ls-neon mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-ls-white font-bold mb-1">Free Shipping</h3>
              <p className="text-gray-400 text-sm text-center">On orders over $75</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-ls-neon mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-ls-white font-bold mb-1">Custom Sizing</h3>
              <p className="text-gray-400 text-sm text-center">Perfect fit for every athlete</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
