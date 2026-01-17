"use client";

"use client";
import { useState } from 'react';
import { Plus, Trash2, Home, Briefcase, MapPin } from 'lucide-react';

interface Address {
    id: string;
    name: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    tag: string;
    isCustomTag?: boolean;
}

export default function AddressesPage() {
    const [addresses, setAddresses] = useState<Address[]>([
        { id: '1', name: 'John Doe', phone: '555-0123', street: '123 Fashion Ave', city: 'New York', state: 'NY', zip: '10001', tag: 'Home' }
    ]);
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState<Partial<Address>>({ tag: 'Home' });
    const [customTagInput, setCustomTagInput] = useState('');

    const handleSave = () => {
        if (!formData.name || !formData.street) return; // Basic validation

        const finalTag = formData.tag === 'Other' ? customTagInput : formData.tag;

        const newAddr: Address = {
            id: Date.now().toString(),
            name: formData.name || '',
            phone: formData.phone || '',
            street: formData.street || '',
            city: formData.city || '',
            state: formData.state || '',
            zip: formData.zip || '',
            tag: finalTag || 'Home',
        };

        setAddresses([...addresses, newAddr]);
        setIsAdding(false);
        setFormData({ tag: 'Home' });
        setCustomTagInput('');
    };

    const handleDelete = (id: string) => {
        setAddresses(addresses.filter(a => a.id !== id));
    };

    const getTagIcon = (tag: string) => {
        const lower = tag.toLowerCase();
        if (lower === 'home') return <Home size={16} />;
        if (lower === 'office') return <Briefcase size={16} />;
        return <MapPin size={16} />;
    };

    return (
        <div>
            <div className="header-row">
                <h3 className="section-title">Address Book</h3>
                {!isAdding && (
                    <button className="btn-add" onClick={() => setIsAdding(true)}>
                        <Plus size={16} /> ADD NEW ADDRESS
                    </button>
                )}
            </div>

            {isAdding ? (
                <div className="address-form">
                    <h4>Add New Address</h4>
                    <div className="form-grid">
                        <input
                            placeholder="Full Name"
                            value={formData.name || ''}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            placeholder="Phone Number"
                            value={formData.phone || ''}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                        <input
                            className="full-width"
                            placeholder="Street Address"
                            value={formData.street || ''}
                            onChange={e => setFormData({ ...formData, street: e.target.value })}
                        />
                        <input
                            placeholder="City"
                            value={formData.city || ''}
                            onChange={e => setFormData({ ...formData, city: e.target.value })}
                        />
                        <div className="row">
                            <input
                                placeholder="State"
                                value={formData.state || ''}
                                onChange={e => setFormData({ ...formData, state: e.target.value })}
                            />
                            <input
                                placeholder="ZIP Code"
                                value={formData.zip || ''}
                                onChange={e => setFormData({ ...formData, zip: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="tag-section">
                        <label>Address Type</label>
                        <div className="tags">
                            {['Home', 'Office', 'College', 'Other'].map(tag => (
                                <button
                                    key={tag}
                                    className={`tag-btn ${formData.tag === tag ? 'active' : ''}`}
                                    onClick={() => setFormData({ ...formData, tag })}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                        {formData.tag === 'Other' && (
                            <input
                                className="custom-tag-input"
                                placeholder="Enter custom name (e.g. Vacation Home)"
                                value={customTagInput}
                                onChange={e => setCustomTagInput(e.target.value)}
                            />
                        )}
                    </div>

                    <div className="form-actions">
                        <button className="btn-cancel" onClick={() => setIsAdding(false)}>CANCEL</button>
                        <button className="btn-save" onClick={handleSave}>SAVE ADDRESS</button>
                    </div>
                </div>
            ) : (
                <div className="address-list">
                    {addresses.length === 0 && <p>No addresses saved.</p>}
                    {addresses.map(addr => (
                        <div key={addr.id} className="address-card">
                            <div className="card-header">
                                <span className="tag-badge">
                                    {getTagIcon(addr.tag)} {addr.tag}
                                </span>
                                <button className="delete-btn" onClick={() => handleDelete(addr.id)}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            <p className="name">{addr.name}</p>
                            <p>{addr.street}</p>
                            <p>{addr.city}, {addr.state} {addr.zip}</p>
                            <p className="phone">Phone: {addr.phone}</p>

                            <div className="card-actions">
                                <button className="edit-link">Edit</button>
                                <button className="default-link">Set as Default</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style jsx>{`
                .header-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 15px;
                }
                .section-title { font-size: 20px; font-weight: 500; margin: 0; }
                .btn-add {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    background: black;
                    color: white;
                    padding: 10px 20px;
                    transition: opacity 0.2s;
                }
                .btn-add:hover { opacity: 0.8; }

                /* Form Styles */
                .address-form { background: #f9f9f9; padding: 24px; border: 1px solid #eee; }
                .address-form h4 { font-size: 16px; margin-bottom: 20px; }
                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 20px;
                }
                .full-width { grid-column: span 2; }
                .row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                
                input {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ccc;
                    background: white;
                    font-size: 14px;
                }
                input:focus { outline: none; border-color: black; }

                .tag-section { margin-bottom: 24px; }
                .tag-section label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 10px; }
                .tags { display: flex; gap: 10px; margin-bottom: 10px; flex-wrap: wrap; }
                .tag-btn {
                    padding: 8px 16px;
                    border: 1px solid #ccc;
                    background: white;
                    font-size: 13px;
                    transition: all 0.2s;
                }
                .tag-btn.active { background: black; color: white; border-color: black; }
                .custom-tag-input { margin-top: 10px; }

                .form-actions { display: flex; gap: 16px; }
                .btn-save { background: black; color: white; padding: 12px 24px; font-weight: 700; font-size: 13px; }
                .btn-cancel { background: transparent; color: black; padding: 12px 24px; font-weight: 700; font-size: 13px; text-decoration: underline; }

                /* Card Styles */
                .address-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
                .address-card {
                    border: 1px solid #e5e5e5;
                    padding: 24px;
                    position: relative;
                }
                .card-header { display: flex; justify-content: space-between; margin-bottom: 16px; }
                .tag-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: #f0f0f0;
                    padding: 4px 10px;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .delete-btn { color: #999; }
                .delete-btn:hover { color: #d32f2f; }
                
                .name { font-weight: 700; margin-bottom: 8px; font-size: 15px; }
                .phone { color: #666; margin-top: 8px; font-size: 13px; }
                
                .card-actions { margin-top: 20px; display: flex; gap: 16px; font-size: 12px; }
                .edit-link { text-decoration: underline; font-weight: 600; }
                .default-link { color: #666; text-decoration: underline; }
                
                @media (max-width: 768px) {
                    .address-list { grid-template-columns: 1fr; }
                    .form-grid { grid-template-columns: 1fr; }
                    .full-width { grid-column: span 1; }
                }
                
                @media (max-width: 480px) {
                    .header-row { flex-direction: column; align-items: flex-start; gap: 12px; }
                    .section-title { font-size: 18px; }
                    .btn-add { width: 100%; justify-content: center; font-size: 11px; padding: 10px 16px; }
                    .address-form { padding: 16px; }
                    .address-form h4 { font-size: 15px; margin-bottom: 16px; }
                    .form-grid { gap: 12px; margin-bottom: 16px; }
                    .row { grid-template-columns: 1fr; gap: 12px; }
                    input { padding: 10px; font-size: 13px; }
                    .tag-section { margin-bottom: 20px; }
                    .tag-section label { font-size: 12px; }
                    .tags { gap: 8px; }
                    .tag-btn { padding: 6px 12px; font-size: 12px; }
                    .form-actions { flex-direction: column-reverse; gap: 12px; }
                    .btn-save, .btn-cancel { width: 100%; text-align: center; padding: 12px; font-size: 12px; }
                    .address-card { padding: 16px; }
                    .name { font-size: 14px; }
                    .phone { font-size: 12px; }
                    .card-actions { flex-direction: column; gap: 12px; font-size: 11px; }
                }
                
                @media (max-width: 360px) {
                    .section-title { font-size: 16px; }
                    .btn-add { font-size: 10px; padding: 8px 12px; }
                    .address-form { padding: 12px; }
                    .address-form h4 { font-size: 14px; }
                    input { padding: 8px; font-size: 12px; }
                    .tag-btn { padding: 5px 10px; font-size: 11px; }
                    .address-card { padding: 12px; }
                }
            `}</style>
        </div>
    );
}
