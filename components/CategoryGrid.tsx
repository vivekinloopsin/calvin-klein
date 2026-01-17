"use client";
import Link from 'next/link';

const CategoryGrid = () => {
    return (
        <section className="category-grid">
            <Link href="/women" className="category-card">
                <div className="image-wrapper">
                    <img src="/category_women.png" alt="Women's Collection" />
                </div>
                <div className="overlay">
                    <h3>WOMEN</h3>
                    <span className="shop-link">SHOP NOW</span>
                </div>
            </Link>
            <Link href="/men" className="category-card">
                <div className="image-wrapper">
                    <img src="/category_men.png" alt="Men's Collection" />
                </div>
                <div className="overlay">
                    <h3>MEN</h3>
                    <span className="shop-link">SHOP NOW</span>
                </div>
            </Link>
            <style jsx>{`
                .category-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    width: 100%;
                }
                .category-card {
                    position: relative;
                    height: 900px;
                    max-height: 90vh;
                    overflow: hidden;
                    cursor: pointer;
                }
                .image-wrapper {
                    height: 100%;
                    width: 100%;
                }
                .image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .category-card:hover .image-wrapper img {
                    transform: scale(1.03);
                }
                .overlay {
                    position: absolute;
                    bottom: 60px;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    color: #fff; /* White text on images usually looks premium, assuming darkish images or adding shadow */
                    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                }
                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 16px;
                    letter-spacing: -1px;
                }
                .shop-link {
                    font-size: 13px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    border-bottom: 1px solid #fff;
                    padding-bottom: 4px;
                    transition: opacity 0.3s;
                }
                .category-card:hover .shop-link {
                    opacity: 0.8;
                }
                @media (max-width: 768px) {
                    .category-grid { grid-template-columns: 1fr; }
                    .category-card { height: 60vh; }
                }
             `}</style>
        </section>
    )
}
export default CategoryGrid;
