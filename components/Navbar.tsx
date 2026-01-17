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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <>
      <header className="navbar-wrapper">
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

        <nav className="main-nav">
          <div className="nav-left">
            <button className="mobile-menu" aria-label="Menu" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <Link href="/" className="logo">CALVIN KLEIN</Link>
          </div>

          <div className="desktop-links">
            <Link href="/women" className="nav-link"
              onMouseEnter={() => handleMouseEnter('/women')}
              onMouseLeave={handleMouseLeave}
            >WOMEN</Link>
            <Link href="/men" className="nav-link"
              onMouseEnter={() => handleMouseEnter('/men')}
              onMouseLeave={handleMouseLeave}
            >MEN</Link>
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

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu-content">
              <div className="mobile-menu-header">
                <span className="logo">CALVIN KLEIN</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>✕</button>
              </div>
              <div className="mobile-links">
                <Link href="/women" onClick={() => setIsMobileMenuOpen(false)}>WOMEN</Link>
                <Link href="/men" onClick={() => setIsMobileMenuOpen(false)}>MEN</Link>
                <Link href="/underwear" onClick={() => setIsMobileMenuOpen(false)}>UNDERWEAR</Link>
                <Link href="/kids" onClick={() => setIsMobileMenuOpen(false)}>KIDS</Link>
                <Link href="/sale" className="sale" onClick={() => setIsMobileMenuOpen(false)}>SALE</Link>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
            .navbar-wrapper {
              position: sticky;
              top: 0;
              z-index: 1000;
              background: var(--primary-bg);
              border-bottom: 1px solid #f2f2f2;
            }

            .main-nav {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 40px;
              height: 72px;
              position: relative;
              background: white;
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
            
            .mobile-menu {
              display: none;
              background: none;
              border: none;
              cursor: pointer;
            }
            .desktop-links {
              display: flex;
              gap: 32px;
              height: 100%;
              align-items: center;
            }
            
            .nav-link::after {
              content: '';
              position: absolute;
              bottom: 24px;
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
              background: none;
              border: none;
              cursor: pointer;
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

            /* Mobile Menu Styles */
            .mobile-menu-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.5);
                z-index: 2000;
            }
            .mobile-menu-content {
                background: white;
                width: 80%;
                max-width: 320px;
                height: 100%;
                padding: 24px;
                animation: slideIn 0.3s ease-out;
            }
            @keyframes slideIn {
                from { transform: translateX(-100%); }
                to { transform: translateX(0); }
            }
            .mobile-menu-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 40px;
                font-weight: 700;
                font-size: 20px;
            }
            .mobile-menu-header button {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
            }
            .mobile-links {
                display: flex;
                flex-direction: column;
                gap: 24px;
                font-size: 16px;
                font-weight: 600;
                letter-spacing: 0.5px;
            }

            @media (max-width: 768px) {
              .main-nav { padding: 0 16px; height: 60px; }
              .logo { font-size: 20px; }
              .nav-right { gap: 16px; }
              
              /* Show mobile menu button, hide desktop links */
              .mobile-menu { display: block; }
              .desktop-links { display: none; }
            }
            
            @media (max-width: 480px) {
              .main-nav { padding: 0 12px; height: 56px; }
              .logo { 
                font-size: 18px; 
                margin-left: 0;
              }
              .nav-right { gap: 12px; }
              .icon-btn { padding: 2px; }
              .cart-badge {
                width: 14px;
                height: 14px;
                font-size: 9px;
              }
            }
            
            @media (max-width: 360px) {
              .main-nav { padding: 0 12px; height: 52px; }
              .logo { font-size: 16px; }
              .nav-right { gap: 8px; }
            }
        `}</style>
      </header>
    </>
  );
};

export default Navbar;
