import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BrandStory = () => {
  return (
    <section className="py-20 bg-ls-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-ls-white mb-6">
              We don't make clothes. <br />
              <span className="text-ls-neon">We engineer domination.</span>
            </h2>

            <p className="text-gray-300 mb-6 text-lg">
              Founded by elite athletes who were tired of compromising, Lightspeed was born from a simple belief: performance gear should never limit your potential.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-ls-neon mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300"><strong className="text-ls-white">Speed:</strong> Lightweight, aerodynamic designs that move with you, not against you.</p>
              </div>

              <div className="flex items-start">
                <div className="text-ls-neon mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300"><strong className="text-ls-white">Focus:</strong> Distraction-free construction that keeps you in the zone when it matters most.</p>
              </div>

              <div className="flex items-start">
                <div className="text-ls-neon mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300"><strong className="text-ls-white">Resilience:</strong> Materials tested in extreme conditions to withstand your toughest workouts.</p>
              </div>

              <div className="flex items-start">
                <div className="text-ls-neon mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300"><strong className="text-ls-white">Grit:</strong> Backed by a community that never quits, never settles, and never backs down.</p>
              </div>
            </div>

            <Link href="/about" className="btn-primary inline-flex items-center">
              Our Story
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/images/brand-story.svg"
                alt="Athlete wearing Lightspeed gear"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-ls-dark p-6 rounded-lg shadow-lg md:max-w-xs">
              <div className="flex items-start space-x-8">
                <div>
                  <p className="text-ls-neon text-3xl font-bold">87%</p>
                  <p className="text-gray-400 text-sm">of athletes report improved performance</p>
                </div>
                <div>
                  <p className="text-ls-neon text-3xl font-bold">24+</p>
                  <p className="text-gray-400 text-sm">Olympic medals won in our gear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
