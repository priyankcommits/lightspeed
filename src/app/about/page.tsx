import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-ls-dark">
        {/* Hero section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-ls-white mb-6">Our Story</h1>
              <p className="text-xl text-gray-300 mb-8">
                We don't make clothes. We engineer domination.
              </p>
            </div>
          </div>
        </section>

        {/* Mission section */}
        <section className="py-20 bg-ls-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ls-white mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-300 mb-6">
                  Lightspeed was founded in 2018 by a team of elite athletes and innovative designers who were tired of compromising. We believed that performance gear should never limit your potential—it should enhance it.
                </p>
                <p className="text-gray-300 mb-6">
                  Our mission is simple: to create the most technically advanced athletic apparel that empowers athletes to break barriers, set records, and dominate their field. We obsess over every stitch, every material, and every design element to ensure our products deliver unmatched performance.
                </p>
                <p className="text-gray-300">
                  We're not just another sportswear brand. We're a performance engineering company that happens to make clothing. Every product we create is tested in extreme conditions by world-class athletes who demand nothing but the best.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/brand-story.jpg"
                    alt="Lightspeed mission"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-ls-dark p-6 rounded-lg shadow-lg">
                  <p className="text-ls-neon font-bold text-xl mb-1">24+</p>
                  <p className="text-gray-400 text-sm">Olympic medals won in our gear</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="py-20 bg-ls-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ls-white mb-4">Our Core Values</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                These principles guide everything we do, from product development to customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-ls-light-gray p-8 rounded-lg">
                <div className="bg-ls-neon/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ls-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-ls-white font-bold text-xl mb-3">Speed</h3>
                <p className="text-gray-300">
                  We move fast, innovate quickly, and never rest on our achievements. Our products are designed to help you do the same.
                </p>
              </div>
              
              <div className="bg-ls-light-gray p-8 rounded-lg">
                <div className="bg-ls-neon/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ls-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-ls-white font-bold text-xl mb-3">Focus</h3>
                <p className="text-gray-300">
                  We maintain laser-like concentration on creating products that solve real problems for athletes, eliminating distractions.
                </p>
              </div>
              
              <div className="bg-ls-light-gray p-8 rounded-lg">
                <div className="bg-ls-neon/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ls-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-ls-white font-bold text-xl mb-3">Resilience</h3>
                <p className="text-gray-300">
                  We test our products in extreme conditions to ensure they withstand whatever challenges you face in training and competition.
                </p>
              </div>
              
              <div className="bg-ls-light-gray p-8 rounded-lg">
                <div className="bg-ls-neon/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ls-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-ls-white font-bold text-xl mb-3">Grit</h3>
                <p className="text-gray-300">
                  We believe in the power of determination and perseverance. Our community never quits, never settles, and never backs down.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-20 bg-ls-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ls-white mb-4">Our Team</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Meet the athletes, designers, and innovators who make Lightspeed possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-ls-light-gray rounded-lg overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/testimonials/alex-rivera.jpg"
                    alt="Alex Rivera"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-ls-white font-bold text-xl mb-1">Alex Rivera</h3>
                  <p className="text-ls-neon mb-4">Co-Founder & CEO</p>
                  <p className="text-gray-300">
                    Former Olympic sprinter with a passion for performance engineering and innovative design.
                  </p>
                </div>
              </div>
              
              <div className="bg-ls-light-gray rounded-lg overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/testimonials/sarah-chen.jpg"
                    alt="Sarah Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-ls-white font-bold text-xl mb-1">Sarah Chen</h3>
                  <p className="text-ls-neon mb-4">Co-Founder & Head of Design</p>
                  <p className="text-gray-300">
                    Textile engineer and former professional athlete with a keen eye for functional aesthetics.
                  </p>
                </div>
              </div>
              
              <div className="bg-ls-light-gray rounded-lg overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/testimonials/marcus-johnson.jpg"
                    alt="Marcus Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-ls-white font-bold text-xl mb-1">Marcus Johnson</h3>
                  <p className="text-ls-neon mb-4">Chief Innovation Officer</p>
                  <p className="text-gray-300">
                    Sports scientist and material specialist with over 15 years of experience in performance apparel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join us CTA */}
        <section className="py-20 bg-ls-dark relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-ls-neon/10 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ls-white mb-6">Join the Lightspeed Movement</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Be part of a community that's redefining what's possible in athletic performance. Whether you're a professional athlete or someone who's serious about their training, Lightspeed is designed for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/products" className="btn-primary">
                  Shop the Collection
                </Link>
                <Link href="/training-club" className="btn-secondary">
                  Join Training Club
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
