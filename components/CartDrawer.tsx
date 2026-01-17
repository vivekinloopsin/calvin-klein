"use client";
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useEffect } from 'react';

const CartDrawer = () => {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isCartOpen]);

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay">
            <div className="backdrop" onClick={toggleCart}></div>
            <div className="cart-drawer">
                <div className="cart-header">
                    <h2>SHOPPING BAG</h2>
                    <button onClick={toggleCart}><X size={24} /></button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your bag is empty.</p>
                            <button onClick={toggleCart} className="continue-btn">CONTINUE SHOPPING</button>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={`${item.id}-${item.size}`} className="cart-item">
                                <div className="item-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <div className="item-top">
                                        <h3>{item.name}</h3>
                                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}><X size={16} /></button>
                                    </div>
                                    <p className="item-meta">Size: {item.size} | Color: Black</p>
                                    <div className="item-bottom">
                                        <div className="qty-control">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                                        </div>
                                        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="total-row">
                            <span>ESTIMATED TOTAL</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn">CHECKOUT</button>
                    </div>
                )}
            </div>

            <style jsx>{`
                .cart-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 2000;
                    display: flex;
                    justify-content: flex-end;
                }
                .backdrop {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.5);
                    animation: fadein 0.3s;
                }
                .cart-drawer {
                    position: relative;
                    width: 100%;
                    max-width: 450px;
                    background: white;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    animation: slidein 0.3s;
                }
                .cart-header {
                    padding: 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #eee;
                }
                h2 { font-size: 16px; font-weight: 700; letter-spacing: 1px; }
                
                .cart-items {
                    flex: 1;
                    overflow-y: auto;
                    padding: 24px;
                }
                
                .cart-item {
                    display: flex;
                    gap: 16px;
                    margin-bottom: 24px;
                }
                .item-img {
                    width: 90px;
                    height: 120px;
                    background: #f4f4f4;
                }
                .item-img img { width: 100%; height: 100%; object-fit: cover; }
                
                .item-details { flex: 1; display: flex; flex-direction: column; }
                .item-top { display: flex; justify-content: space-between; margin-bottom: 4px; }
                .item-top h3 { font-size: 14px; font-weight: 600; }
                .item-meta { font-size: 12px; color: #666; margin-bottom: auto; }
                
                .item-bottom { display: flex; justify-content: space-between; align-items: flex-end; }
                .qty-control {
                    display: flex;
                    align-items: center;
                    border: 1px solid #ccc;
                    height: 32px;
                }
                .qty-control button { width: 32px; height: 100%; display: flex; justify-content: center; align-items: center; }
                .qty-control span { width: 32px; text-align: center; font-size: 13px; }
                .item-price { font-weight: 600; font-size: 14px; }
                
                .cart-footer {
                    padding: 24px;
                    border-top: 1px solid #eee;
                    background: white;
                }
                .total-row {
                    display: flex;
                    justify-content: space-between;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-size: 14px;
                }
                .checkout-btn {
                    width: 100%;
                    background: black;
                    color: white;
                    padding: 16px;
                    font-weight: 700;
                    font-size: 13px;
                    letter-spacing: 1px;
                }
                
                .empty-cart { text-align: center; padding-top: 40px; }
                .continue-btn { margin-top: 20px; text-decoration: underline; font-weight: 600; font-size: 13px; }

                @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slidein { from { transform: translateX(100%); } to { transform: translateX(0); } }
            `}</style>
        </div>
    );
};

export default CartDrawer;
