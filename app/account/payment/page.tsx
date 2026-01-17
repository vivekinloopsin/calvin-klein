"use client";

"use client";
import { useState } from 'react';
import { CreditCard, Smartphone, Plus, Trash2 } from 'lucide-react';

export default function PaymentPage() {
    const [activeTab, setActiveTab] = useState<'card' | 'upi'>('card');
    const [cards, setCards] = useState([
        { id: '1', number: '•••• •••• •••• 1234', name: 'John Doe', expiry: '12/25', type: 'Visa' }
    ]);
    const [upis, setUpis] = useState([
        { id: '1', address: 'john.doe@okicici', provider: 'Google Pay' }
    ]);
    const [isAdding, setIsAdding] = useState(false);

    // Form States
    const [cardForm, setCardForm] = useState({ number: '', name: '', expiry: '', cvv: '' });
    const [upiForm, setUpiForm] = useState({ address: '' });

    const handleSaveCard = () => {
        if (!cardForm.number) return;
        const newCard = {
            id: Date.now().toString(),
            number: `•••• •••• •••• ${cardForm.number.slice(-4)}`,
            name: cardForm.name,
            expiry: cardForm.expiry,
            type: 'Visa' // Mock type
        };
        setCards([...cards, newCard]);
        setIsAdding(false);
        setCardForm({ number: '', name: '', expiry: '', cvv: '' });
    };

    const handleSaveUpi = () => {
        if (!upiForm.address) return;
        const newUpi = {
            id: Date.now().toString(),
            address: upiForm.address,
            provider: 'UPI'
        };
        setUpis([...upis, newUpi]);
        setIsAdding(false);
        setUpiForm({ address: '' });
    };

    const handleDelete = (id: string, type: 'card' | 'upi') => {
        if (type === 'card') {
            setCards(cards.filter(c => c.id !== id));
        } else {
            setUpis(upis.filter(u => u.id !== id));
        }
    };

    return (
        <div>
            <h3 className="section-title">Payment Methods</h3>

            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'card' ? 'active' : ''}`}
                    onClick={() => { setActiveTab('card'); setIsAdding(false); }}
                >
                    <CreditCard size={18} /> Credit / Debit Cards
                </button>
                <button
                    className={`tab ${activeTab === 'upi' ? 'active' : ''}`}
                    onClick={() => { setActiveTab('upi'); setIsAdding(false); }}
                >
                    <Smartphone size={18} /> UPI
                </button>
            </div>

            <div className="content-area">
                {!isAdding && (
                    <button className="btn-add" onClick={() => setIsAdding(true)}>
                        <Plus size={16} /> ADD NEW {activeTab === 'card' ? 'CARD' : 'UPI ID'}
                    </button>
                )}

                {isAdding ? (
                    <div className="form-container">
                        {activeTab === 'card' ? (
                            <div className="card-form">
                                <input
                                    placeholder="Card Number"
                                    maxLength={19}
                                    value={cardForm.number}
                                    onChange={e => setCardForm({ ...cardForm, number: e.target.value })}
                                />
                                <input
                                    placeholder="Name on Card"
                                    value={cardForm.name}
                                    onChange={e => setCardForm({ ...cardForm, name: e.target.value })}
                                />
                                <div className="row">
                                    <input
                                        placeholder="MM/YY"
                                        maxLength={5}
                                        value={cardForm.expiry}
                                        onChange={e => setCardForm({ ...cardForm, expiry: e.target.value })}
                                    />
                                    <input
                                        placeholder="CVV"
                                        maxLength={3}
                                        type="password"
                                        value={cardForm.cvv}
                                        onChange={e => setCardForm({ ...cardForm, cvv: e.target.value })}
                                    />
                                </div>
                                <div className="actions">
                                    <button className="btn-cancel" onClick={() => setIsAdding(false)}>CANCEL</button>
                                    <button className="btn-save" onClick={handleSaveCard}>SAVE CARD</button>
                                </div>
                            </div>
                        ) : (
                            <div className="upi-form">
                                <input
                                    placeholder="Enter UPI ID (e.g. user@upi)"
                                    value={upiForm.address}
                                    onChange={e => setUpiForm({ ...upiForm, address: e.target.value })}
                                />
                                <div className="actions">
                                    <button className="btn-cancel" onClick={() => setIsAdding(false)}>CANCEL</button>
                                    <button className="btn-save" onClick={handleSaveUpi}>VERIFY & SAVE</button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="list">
                        {activeTab === 'card' && cards.map(card => (
                            <div key={card.id} className="payment-card">
                                <div className="card-icon"><CreditCard size={24} /></div>
                                <div className="card-info">
                                    <p className="card-number">{card.number}</p>
                                    <p className="card-meta">Expires {card.expiry} | {card.name}</p>
                                </div>
                                <button className="delete-btn" onClick={() => handleDelete(card.id, 'card')}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}

                        {activeTab === 'upi' && upis.map(upi => (
                            <div key={upi.id} className="payment-card">
                                <div className="card-icon"><Smartphone size={24} /></div>
                                <div className="card-info">
                                    <p className="card-number">{upi.address}</p>
                                    <p className="card-meta">Verified ✅</p>
                                </div>
                                <button className="delete-btn" onClick={() => handleDelete(upi.id, 'upi')}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}

                        {activeTab === 'card' && cards.length === 0 && <p className="empty">No cards saved.</p>}
                        {activeTab === 'upi' && upis.length === 0 && <p className="empty">No UPI IDs saved.</p>}
                    </div>
                )}
            </div>

            <style jsx>{`
                .section-title { font-size: 20px; font-weight: 500; margin-bottom: 24px; }
                
                .tabs {
                    display: flex;
                    border-bottom: 1px solid #e5e5e5;
                    margin-bottom: 30px;
                }
                .tab {
                    flex: 1;
                    padding: 16px;
                    border: none;
                    background: none;
                    font-size: 14px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    cursor: pointer;
                    color: #666;
                    border-bottom: 2px solid transparent;
                    transition: all 0.2s;
                }
                .tab.active {
                    color: black;
                    border-bottom-color: black;
                    font-weight: 700;
                }
                .tab:hover { color: black; }

                .btn-add {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    background: black;
                    color: white;
                    padding: 12px 24px;
                    margin-bottom: 24px;
                }

                .form-container {
                    background: #f9f9f9;
                    padding: 24px;
                    border: 1px solid #eee;
                    max-width: 500px;
                }
                .card-form, .upi-form { display: flex; flex-direction: column; gap: 16px; }
                input {
                    padding: 12px;
                    border: 1px solid #ccc;
                    width: 100%;
                    font-size: 14px;
                }
                .row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                
                .actions { display: flex; gap: 16px; margin-top: 8px; }
                .btn-save { background: black; color: white; padding: 12px 24px; font-weight: 700; font-size: 13px; border: none; }
                .btn-cancel { background: transparent; color: black; padding: 12px 24px; font-weight: 700; font-size: 13px; text-decoration: underline; border: none; }

                .list { display: flex; flex-direction: column; gap: 16px; }
                .payment-card {
                    display: flex;
                    align-items: center;
                    border: 1px solid #e5e5e5;
                    padding: 20px;
                    gap: 20px;
                }
                .card-icon { color: #666; }
                .card-info { flex: 1; }
                .card-number { font-weight: 700; font-size: 16px; margin-bottom: 4px; }
                .card-meta { font-size: 13px; color: #666; }
                
                .delete-btn { color: #999; padding: 8px; }
                .delete-btn:hover { color: #d32f2f; }
                .empty { color: #666; font-style: italic; }
            `}</style>
        </div>
    );
}
