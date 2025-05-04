import React from 'react';
import Link from 'next/link';
import ProductCard from '../product/ProductCard';

// Sample product data
const featuredProducts = [
  {
    id: 'velocity-pro-tee',
    name: 'Velocity Pro Tee',
    price: 65,
    category: 'Men\'s Training',
    imageSrc: '/images/products/velocity-pro-tee.svg',
    colors: 4,
    isNew: true,
    isFeatured: true,
  },
  {
    id: 'aero-flex-shorts',
    name: 'Aero Flex Shorts',
    price: 75,
    category: 'Men\'s Training',
    imageSrc: '/images/products/aero-flex-shorts.svg',
    colors: 3,
    isFeatured: true,
  },
  {
    id: 'sprint-compression-tights',
    name: 'Sprint Compression Tights',
    price: 95,
    category: 'Women\'s Running',
    imageSrc: '/images/products/sprint-compression-tights.svg',
    colors: 2,
    isNew: true,
    isFeatured: true,
  },
  {
    id: 'power-lift-tank',
    name: 'Power Lift Tank',
    price: 55,
    category: 'Women\'s Training',
    imageSrc: '/images/products/power-lift-tank.svg',
    colors: 3,
    isFeatured: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-ls-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ls-white mb-4">Featured Gear</h2>
            <p className="text-gray-400 max-w-2xl">
              Engineered with cutting-edge technology and premium materials for unmatched performance.
            </p>
          </div>
          <Link href="/products" className="hidden md:block text-ls-neon font-bold hover:underline">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/products" className="btn-primary inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
