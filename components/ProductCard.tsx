"use client";
import Link from 'next/link';
import { Product } from '@/lib/data';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link href={`/product/${product.id}`} className="product-card">
            <div className="image-container">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="info">
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
            </div>
            <style jsx>{`
        .product-card {
           display: block;
           cursor: pointer;
        }
        .image-container {
            width: 100%;
            aspect-ratio: 3/4;
            overflow: hidden;
            background: #f4f4f4;
            margin-bottom: 12px;
        }
        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }
        .product-card:hover .image-container img {
            transform: scale(1.05);
        }
        .info {
            font-size: 14px;
        }
        h3 {
            font-weight: 400;
            color: #212529;
            margin-bottom: 4px;
            font-family: var(--font-main);
        }
        .price {
            font-weight: 600;
            color: #212529;
        }
      `}</style>
        </Link>
    );
};

export default ProductCard;
