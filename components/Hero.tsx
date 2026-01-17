"use client";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>NEW ARRIVALS</h1>
        <p className="subtitle">Discover the latest collection.</p>
        <div className="cta-group">
          <Link href="/women" className="cta-btn">SHOP WOMEN</Link>
          <Link href="/men" className="cta-btn">SHOP MEN</Link>
        </div>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          height: calc(100vh - 100px);
          width: 100%;
          background-image: url('/hero_banner.png');
          background-size: cover;
          background-position: center top;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: white;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 10;
          padding-left: 80px;
          max-width: 600px;
        }
        h1 {
          font-size: 72px;
          font-weight: 700;
          margin-bottom: 16px;
          line-height: 1;
          letter-spacing: -2px;
          text-transform: uppercase;
        }
        .subtitle {
          font-size: 18px;
          margin-bottom: 40px;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        .cta-group {
          display: flex;
          gap: 16px;
        }
        .cta-btn {
          background: #FFFFFF;
          color: #000000;
          padding: 16px 32px;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          border: 1px solid #FFFFFF;
        }
        .cta-btn:hover {
          background: #000000;
          color: #FFFFFF;
          border-color: #000000;
        }
        @media (max-width: 768px) {
           .hero { 
             height: 80vh; 
             justify-content: center; 
             text-align: center; 
             align-items: flex-end;
             background-position: center;
           }
           .hero-content { 
             padding: 0 20px 60px 20px; 
             width: 100%;
           }
           h1 { font-size: 48px; }
           .cta-group { justify-content: center; }
        }
        @media (max-width: 480px) {
           .hero { 
             height: 70vh;
           }
           .hero-content { 
             padding: 0 16px 40px 16px; 
           }
           h1 { 
             font-size: 36px;
             letter-spacing: -1px;
             margin-bottom: 12px;
           }
           .subtitle { 
             font-size: 14px;
             margin-bottom: 24px;
           }
           .cta-group { 
             flex-direction: column;
             gap: 12px;
             width: 100%;
           }
           .cta-btn {
             width: 100%;
             padding: 14px 24px;
             font-size: 12px;
           }
        }
      `}</style>
    </section>
  );
};

export default Hero;
