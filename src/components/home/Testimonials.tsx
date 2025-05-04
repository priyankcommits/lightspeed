import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "Lightspeed's compression gear has been a game-changer for my recovery. I've shaved minutes off my marathon time since making the switch.",
    name: "Alex Rivera",
    title: "Professional Marathon Runner",
    imageSrc: "/images/testimonials/alex-rivera.svg",
  },
  {
    id: 2,
    quote: "The attention to detail in every piece is unmatched. From the seamless stitching to the breathable fabrics, Lightspeed truly understands what athletes need.",
    name: "Sarah Chen",
    title: "Olympic Sprinter",
    imageSrc: "/images/testimonials/sarah-chen.svg",
  },
  {
    id: 3,
    quote: "I've worn every brand out there, but nothing compares to how Lightspeed gear performs under extreme conditions. It's built for those who push limits.",
    name: "Marcus Johnson",
    title: "CrossFit Champion",
    imageSrc: "/images/testimonials/marcus-johnson.svg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-ls-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ls-white mb-4">Athletes Trust Lightspeed</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't take our word for it. Hear from the professionals who rely on our gear to break records and push boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-ls-light-gray p-8 rounded-lg flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="text-ls-neon mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V15C5 14.337 5.26339 13.7011 5.73223 13.2322C6.20107 12.7634 6.83696 12.5 7.5 12.5H12.5C13.163 12.5 13.7989 12.2366 14.2678 11.7678C14.7366 11.2989 15 10.663 15 10V7.5C15 6.83696 14.7366 6.20107 14.2678 5.73223C13.7989 5.26339 13.163 5 12.5 5H7.5M35 25H25C24.337 25 23.7011 24.7366 23.2322 24.2678C22.7634 23.7989 22.5 23.163 22.5 22.5V15C22.5 14.337 22.7634 13.7011 23.2322 13.2322C23.7011 12.7634 24.337 12.5 25 12.5H30C30.663 12.5 31.2989 12.2366 31.7678 11.7678C32.2366 11.2989 32.5 10.663 32.5 10V7.5C32.5 6.83696 32.2366 6.20107 31.7678 5.73223C31.2989 5.26339 30.663 5 30 5H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Quote text */}
              <p className="text-gray-300 mb-6 flex-grow">{testimonial.quote}</p>

              {/* Author info */}
              <div className="flex items-center mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-ls-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
