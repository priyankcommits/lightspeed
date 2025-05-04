import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  imageSrc: string;
  colors: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  category,
  imageSrc,
  colors,
  isNew = false,
  isFeatured = false,
}) => {
  return (
    <div className="product-card group relative overflow-hidden rounded-lg bg-ls-light-gray">
      {/* Product image with hover effect */}
      <Link href={`/products/${id}`} className="block relative aspect-[3/4] overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={isFeatured}
        />
        
        {/* New badge */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-ls-neon text-ls-dark text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </div>
        )}
        
        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 bg-ls-dark/80 backdrop-blur-sm py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-ls-neon text-ls-dark font-bold py-2 rounded-full hover:shadow-[0_0_10px_rgba(0,255,102,0.6)] transition-all duration-300">
            Quick Add
          </button>
        </div>
      </Link>
      
      {/* Product info */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-ls-white font-medium mb-1 group-hover:text-ls-neon transition-colors">
              <Link href={`/products/${id}`}>{name}</Link>
            </h3>
            <p className="text-gray-400 text-sm mb-2">{category}</p>
          </div>
          <span className="text-ls-white font-bold">${price.toFixed(2)}</span>
        </div>
        
        {/* Color options indicator */}
        <div className="flex items-center mt-2">
          <span className="text-gray-400 text-xs">{colors} {colors === 1 ? 'color' : 'colors'}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
