"use client";
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import LoginModal from '@/components/LoginModal';
import MegaMenu from '@/components/MegaMenu';

const Navbar = () => {
  const { cartCount, toggleCart } = useCart();
  const { user, logout } = useUser();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleAccountClick = () => {
    if (user) {
      router.push('/account');
    } else {
      setIsLoginOpen(true);
    }
  };

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleMenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
    <header className="navbar-wrapper">
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <div className="promo-banner">
        <p>EXTRA 40% OFF SALE | <Link href="/women" className="underline">SHOP WOMEN</Link> <Link href="/men" className="underline">SHOP MEN</Link></p>
      </div>
      <nav className="main-nav">
        <div className="nav-left">
          <button className="mobile-menu md:hidden"><Menu size={24} /></button>
          <Link href="/" className="logo">CALVIN KLEIN</Link>
        </div>

        <div className="nav-center hidden md:flex">
          <Link href="/new" className="nav-link"
            onMouseEnter={() => handleMouseEnter('/new')}
            onMouseLeave={handleMouseLeave}
          >New</Link>
          <Link href="/women" className="nav-link"
            onMouseEnter={() => handleMouseEnter('/women')}
            onMouseLeave={handleMouseLeave}
          >Women</Link>
          <Link href="/men" className="nav-link"
            onMouseEnter={() => handleMouseEnter('/men')}
            onMouseLeave={handleMouseLeave}
          >Men</Link>
          <Link href="/underwear" className="nav-link"
            onMouseEnter={() => handleMouseEnter('/underwear')}
            onMouseLeave={handleMouseLeave}
          >Underwear</Link>
          <Link href="/kids" className="nav-link"
            onMouseEnter={() => handleMouseEnter('/kids')}
            onMouseLeave={handleMouseLeave}
          >Kids</Link>
          <Link href="/home" className="nav-link"
            onMouseEnter={() => handleMouseEnter('/home')}
            onMouseLeave={handleMouseLeave}
          >Home</Link>
          <Link href="/sale" className="nav-link sale"
            onMouseEnter={() => handleMouseEnter('/sale')}
            onMouseLeave={handleMouseLeave}
          >Sale</Link>
        </div>

        <div className="nav-right">
          <button className="icon-btn" aria-label="Search"><Search size={22} strokeWidth={1.5} /></button>
          <button className="icon-btn" aria-label="Account" onClick={handleAccountClick}><User size={22} strokeWidth={1.5} /></button>
          <button className="icon-btn relative" aria-label="Shopping Bag" onClick={toggleCart}>
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </nav>

      <MegaMenu
        activeCategory={activeMenu}
        onMouseEnter={handleMenuEnter}
        onMouseLeave={handleMouseLeave}
      />

      <style jsx>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--primary-bg);
          border-bottom: 1px solid #f2f2f2;
        }
        .promo-banner {
          background: #333333;
          color: #ffffff;
          text-align: center;
          padding: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .promo-banner .underline { text-decoration: underline; margin: 0 5px; }
        
        .main-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px;
          height: 72px;
          position: relative;
          background: white; /* Ensure nav sits on top of content background */
          z-index: 1001; 
        }
        
        .logo {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.5px;
          font-family: var(--font-main);
          margin-left: 10px;
        }

        .nav-left {
          display: flex;
          align-items: center;
        }

        .nav-center {
          gap: 32px;
          height: 100%; /* Important for hover targets */
          align-items: center;
          display: flex;
        }
        
        .nav-link {
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 4px;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 24px; /* Adjust based on height */
          left: 0;
          width: 0%;
          height: 1px;
          background: black;
          transition: width 0.3s;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link.sale { color: #D32F2F; }
        
        .nav-right {
          display: flex;
          gap: 20px;
        }
        
        .icon-btn {
          padding: 4px;
          transition: transform 0.2s;
        }
        .icon-btn:hover {
          transform: scale(1.1);
        }
        
        .relative { position: relative; }
        .cart-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: black;
            color: white;
            font-size: 10px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
        }

        @media (max-width: 768px) {
           .main-nav { padding: 0 20px; height: 60px; }
           .logo { font-size: 20px; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
