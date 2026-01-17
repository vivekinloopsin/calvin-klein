"use client";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-columns">
                    <div className="column">
                        <h4>HELP & SUPPORT</h4>
                        <ul>
                            <li><Link href="#">FAQ</Link></li>
                            <li><Link href="#">Delivery</Link></li>
                            <li><Link href="#">Returns</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">Track Order</Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>COLLECTIONS</h4>
                        <ul>
                            <li><Link href="#">Online Exclusives</Link></li>
                            <li><Link href="#">#MYCALVINS</Link></li>
                            <li><Link href="#">Calvin Klein Underwear</Link></li>
                            <li><Link href="#">Calvin Klein Jeans</Link></li>
                            <li><Link href="#">Calvin Klein Sport</Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>ABOUT CALVIN KLEIN</h4>
                        <ul>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Privacy Commitment</Link></li>
                            <li><Link href="#">Sustainability</Link></li>
                            <li><Link href="#">Diversity & Inclusion</Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>SIGN UP</h4>
                        <p className="signup-text">Be the first to know about new arrivals, sales & promos. Get 10% off your first order.</p>
                        <form className="email-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" aria-label="Email Address" />
                            <button type="submit">JOIN</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Calvin Klein. All rights reserved.</p>
                    <div className="legal-links">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .footer {
                    background: #000000;
                    color: #FFFFFF;
                    padding: 80px 20px 40px;
                    font-size: 13px;
                }
                .container {
                    max-width: 1440px;
                    margin: 0 auto;
                }
                .footer-columns {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                    margin-bottom: 80px;
                }
                h4 {
                    font-size: 14px;
                    font-weight: 700;
                    margin-bottom: 24px;
                    letter-spacing: 1px;
                }
                ul li {
                    margin-bottom: 14px;
                }
                ul li a {
                    color: #999999;
                    transition: color 0.3s;
                }
                ul li a:hover {
                    color: #FFFFFF;
                }
                .signup-text {
                    margin-bottom: 24px;
                    color: #999999;
                    line-height: 1.5;
                }
                .email-form {
                    display: flex;
                    border-bottom: 1px solid #FFFFFF;
                    padding-bottom: 8px;
                }
                .email-form input {
                    background: transparent;
                    border: none;
                    color: white;
                    padding: 8px 0;
                    flex-grow: 1;
                    outline: none;
                    font-size: 14px;
                }
                .email-form button {
                    background: transparent;
                    color: white;
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-size: 12px;
                }
                .footer-bottom {
                    border-top: 1px solid #333;
                    padding-top: 30px;
                    display: flex;
                    justify-content: space-between;
                    color: #666;
                }
                .legal-links {
                    display: flex;
                    gap: 20px;
                }
                .legal-links a { color: #666; }
                
                @media (max-width: 768px) {
                    .footer { padding: 60px 20px 30px; }
                    .footer-columns { grid-template-columns: 1fr; gap: 40px; margin-bottom: 60px; }
                    .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
                    .legal-links { justify-content: center; }
                }
                
                @media (max-width: 480px) {
                    .footer { padding: 40px 16px 24px; font-size: 12px; }
                    .footer-columns { gap: 32px; margin-bottom: 40px; }
                    h4 { font-size: 13px; margin-bottom: 16px; }
                    ul li { margin-bottom: 12px; }
                    .signup-text { font-size: 12px; margin-bottom: 16px; }
                    .email-form input { font-size: 12px; }
                    .email-form button { font-size: 11px; }
                    .footer-bottom { padding-top: 20px; font-size: 11px; }
                    .legal-links { flex-direction: column; gap: 12px; }
                }
                
                @media (max-width: 360px) {
                    .footer { padding: 32px 12px 20px; font-size: 11px; }
                    h4 { font-size: 12px; }
                    .footer-columns { gap: 24px; }
                }
            `}</style>
        </footer>
    )
}
export default Footer;
