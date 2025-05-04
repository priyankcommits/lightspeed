import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';

// Define product type for better type safety
type ProductColor = {
  name: string;
  hex: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: ProductColor[];
  imageSrc: string;
  additionalImages: string[];
  isNew?: boolean;
  rating: number;
  reviewCount: number;
};

// Sample product data
const products: Record<string, Product> = {
  'velocity-pro-tee': {
    id: 'velocity-pro-tee',
    name: 'Velocity Pro Tee',
    price: 65,
    category: 'Men\'s Training',
    description: 'Engineered for maximum performance, the Velocity Pro Tee features our proprietary SweatSeal Mesh™ technology that keeps you dry during the most intense workouts. The ergonomic seam design eliminates chafing while the lightweight 180 GSM fabric moves with your body for unrestricted motion.',
    features: [
      'SweatSeal Mesh™ technology for superior moisture management',
      'Ergonomic seam design to eliminate chafing',
      'Lightweight 180 GSM performance fabric',
      'Four-way stretch for unrestricted movement',
      'Anti-odor treatment for lasting freshness',
      'Reflective elements for visibility in low light',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Stealth Black', hex: '#121212' },
      { name: 'Slate Gray', hex: '#708090' },
      { name: 'Electric Blue', hex: '#0066FF' },
      { name: 'Neon Green', hex: '#00FF66' },
    ],
    imageSrc: '/images/products/velocity-pro-tee.svg',
    additionalImages: [
      '/images/products/velocity-pro-tee.svg',
      '/images/products/velocity-pro-tee.svg',
      '/images/products/velocity-pro-tee.svg',
    ],
    isNew: true,
    rating: 4.8,
    reviewCount: 124,
  },
  'aero-flex-shorts': {
    id: 'aero-flex-shorts',
    name: 'Aero Flex Shorts',
    price: 75,
    category: 'Men\'s Training',
    description: 'Designed for maximum mobility, the Aero Flex Shorts feature our revolutionary FlexWeave™ fabric that stretches in all directions while maintaining structure. The integrated compression liner provides support while the moisture-wicking technology keeps you dry during intense training sessions.',
    features: [
      'FlexWeave™ technology for multi-directional stretch',
      'Integrated compression liner for support',
      'Advanced moisture-wicking fabric',
      'Secure zip pocket for essentials',
      'Laser-cut ventilation for enhanced airflow',
      'Reflective elements for visibility in low light',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Stealth Black', hex: '#121212' },
      { name: 'Navy Blue', hex: '#000080' },
      { name: 'Graphite', hex: '#383838' },
    ],
    imageSrc: '/images/products/aero-flex-shorts.svg',
    additionalImages: [
      '/images/products/aero-flex-shorts.svg',
      '/images/products/aero-flex-shorts.svg',
      '/images/products/aero-flex-shorts.svg',
    ],
    rating: 4.7,
    reviewCount: 98,
  },
  // Additional products would be added here
};

// Define simplified product type for related products
type RelatedProduct = {
  id: string;
  name: string;
  price: number;
  category: string;
  imageSrc: string;
  colors: number | ProductColor[];
  isNew?: boolean;
};

// Generate metadata for the product page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // Await the params to ensure they're fully resolved
  const id = await params.id;

  // Find the product by id
  const product = Object.values(products).find(p => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found | Lightspeed',
      description: 'The product you are looking for could not be found.',
    };
  }

  return {
    title: `${product.name} | Lightspeed Performance Gear`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: `${product.name} | Lightspeed Performance Gear`,
      description: product.description.substring(0, 160),
      images: [
        {
          url: product.imageSrc,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

// Sample related products
const relatedProducts: RelatedProduct[] = [
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
  {
    id: 'velocity-pro-tee',
    name: 'Velocity Pro Tee',
    price: 65,
    category: 'Men\'s Training',
    imageSrc: '/images/products/velocity-pro-tee.svg',
    colors: 4,
    isNew: true,
  },
];

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // Await the params to ensure they're fully resolved
  const id = await params.id;

  // Find the product by id in a type-safe way
  const product = Object.values(products).find(p => p.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-20 bg-ls-dark min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-ls-white mb-4">Product Not Found</h1>
            <p className="text-gray-400 mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Link href="/products" className="btn-primary">
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-ls-dark min-h-screen">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-gray-400 hover:text-ls-neon">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <Link href="/products" className="text-gray-400 hover:text-ls-neon ml-1 md:ml-2">
                      Products
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="text-ls-white ml-1 md:ml-2">{product.name}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Product details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-ls-light-gray">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-ls-neon text-ls-dark text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </div>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.additionalImages.map((img, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-ls-light-gray cursor-pointer">
                    <Image
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-ls-white mb-2">{product.name}</h1>
                <p className="text-gray-400 mb-4">{product.category}</p>
                <div className="flex items-center mb-4">
                  <div className="flex text-ls-neon">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-ls-neon' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-400 ml-2">{product.rating} ({product.reviewCount} reviews)</span>
                </div>
                <p className="text-2xl font-bold text-ls-white">${product.price.toFixed(2)}</p>
              </div>

              <div className="mb-6">
                <p className="text-gray-300 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-ls-neon mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color selection */}
              <div className="mb-6">
                <h3 className="text-ls-white font-bold mb-3">Color: <span className="text-gray-400 font-normal">Select an option</span></h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 rounded-full border-2 border-transparent hover:border-ls-neon focus:border-ls-neon focus:outline-none transition-all"
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select ${color.name} color`}
                      title={color.name}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Size selection */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-ls-white font-bold">Size: <span className="text-gray-400 font-normal">Select an option</span></h3>
                  <button className="text-ls-neon text-sm hover:underline">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className="py-2 border border-gray-600 rounded-md text-ls-white hover:border-ls-neon focus:border-ls-neon focus:outline-none transition-all"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex border border-gray-600 rounded-md">
                  <button className="w-12 h-12 flex items-center justify-center text-ls-white hover:text-ls-neon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    min="1"
                    value="1"
                    className="w-12 h-12 bg-transparent text-center text-ls-white border-x border-gray-600 focus:outline-none"
                    readOnly
                  />
                  <button className="w-12 h-12 flex items-center justify-center text-ls-white hover:text-ls-neon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <button className="flex-1 bg-ls-neon text-ls-dark font-bold py-3 px-6 rounded-md hover:shadow-[0_0_15px_rgba(0,255,102,0.6)] transition-all duration-300">
                  Add to Cart
                </button>
                <button className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center text-ls-white hover:text-ls-neon hover:border-ls-neon transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Related products */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-ls-white mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
