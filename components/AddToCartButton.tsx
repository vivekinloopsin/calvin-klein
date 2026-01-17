"use client";
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function AddToCartButton({ product }: { product: any }) {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState<string>('');

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        addToCart(product, selectedSize);
    };

    return (
        <div className="add-to-cart-wrapper">
            <div className="selector-group">
                <label>Size</label>
                <div className="size-options">
                    {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                        <button
                            key={size}
                            className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <button className="add-btn" onClick={handleAddToCart}>
                ADD TO BAG
            </button>
            <style jsx>{`
                .selector-group {
                    margin-bottom: 32px;
                }
                .selector-group label {
                    display: block;
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 12px;
                }
                .size-options {
                    display: flex;
                    gap: 10px;
                }
                .size-btn {
                    width: 48px;
                    height: 48px;
                    border: 1px solid #ddd;
                    font-size: 13px;
                    transition: all 0.2s;
                }
                .size-btn:hover { border-color: black; }
                .size-btn.active {
                    background: black;
                    color: white;
                    border-color: black;
                }
                
                .add-btn {
                    width: 100%;
                    background: black;
                    color: white;
                    padding: 18px;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    margin-bottom: 40px;
                    transition: background 0.3s;
                }
                .add-btn:hover {
                    opacity: 0.9;
                }
            `}</style>
        </div>
    );
}
