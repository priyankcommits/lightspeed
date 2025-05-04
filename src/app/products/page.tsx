import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import Link from 'next/link';

// Sample product data
const products = [
  {
    id: 'velocity-pro-tee',
    name: 'Velocity Pro Tee',
    price: 65,
    category: 'Men\'s Training',
    imageSrc: '/images/products/velocity-pro-tee.svg',
    colors: 4,
    isNew: true,
  },
  {
    id: 'aero-flex-shorts',
    name: 'Aero Flex Shorts',
    price: 75,
    category: 'Men\'s Training',
    imageSrc: '/images/products/aero-flex-shorts.svg',
    colors: 3,
  },
  {
    id: 'sprint-compression-tights',
    name: 'Sprint Compression Tights',
    price: 95,
    category: 'Women\'s Running',
    imageSrc: '/images/products/sprint-compression-tights.svg',
    colors: 2,
    isNew: true,
  },
  {
    id: 'power-lift-tank',
    name: 'Power Lift Tank',
    price: 55,
    category: 'Women\'s Training',
    imageSrc: '/images/products/power-lift-tank.svg',
    colors: 3,
  },
  // Additional products would be added here
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-ls-dark min-h-screen">
        <div className="container mx-auto px-4">
          {/* Hero section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ls-white mb-4">Performance Gear</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Engineered for elite athletes. Premium performance apparel designed for speed, discipline, and domination.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <button className="bg-ls-light-gray text-ls-white px-4 py-2 rounded-full hover:bg-ls-neon hover:text-ls-dark transition-colors">
              All Products
            </button>
            <button className="bg-ls-light-gray text-ls-white px-4 py-2 rounded-full hover:bg-ls-neon hover:text-ls-dark transition-colors">
              Men's
            </button>
            <button className="bg-ls-light-gray text-ls-white px-4 py-2 rounded-full hover:bg-ls-neon hover:text-ls-dark transition-colors">
              Women's
            </button>
            <button className="bg-ls-light-gray text-ls-white px-4 py-2 rounded-full hover:bg-ls-neon hover:text-ls-dark transition-colors">
              Accessories
            </button>
            <button className="bg-ls-light-gray text-ls-white px-4 py-2 rounded-full hover:bg-ls-neon hover:text-ls-dark transition-colors">
              New Arrivals
            </button>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-ls-light-gray text-ls-white flex items-center justify-center hover:bg-ls-neon hover:text-ls-dark transition-colors">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-ls-light-gray text-ls-white flex items-center justify-center hover:bg-ls-neon hover:text-ls-dark transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-full bg-ls-light-gray text-ls-white flex items-center justify-center hover:bg-ls-neon hover:text-ls-dark transition-colors">
                3
              </button>
              <button className="w-10 h-10 rounded-full bg-ls-light-gray text-ls-white flex items-center justify-center hover:bg-ls-neon hover:text-ls-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
