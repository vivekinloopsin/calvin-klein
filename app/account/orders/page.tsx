"use client";

const orders = [
    { id: '12345678', date: 'January 15, 2024', status: 'Processing', total: '$148.00', items: ['Modern Cotton Bralette', 'Cotton Bikini'] },
    { id: '87654321', date: 'December 20, 2023', status: 'Delivered', total: '$89.50', items: ['Slim Fit Jeans'] },
];

export default function OrdersPage() {
    return (
        <div>
            <h3 className="section-title">Order History</h3>
            <div className="orders-list">
                {orders.map(order => (
                    <div key={order.id} className="order-card">
                        <div className="order-header">
                            <div>
                                <span className="label">ORDER #</span>
                                <span className="value">{order.id}</span>
                            </div>
                            <div>
                                <span className="label">DATE</span>
                                <span className="value">{order.date}</span>
                            </div>
                            <div>
                                <span className="label">STATUS</span>
                                <span className="value status">{order.status}</span>
                            </div>
                            <div>
                                <span className="label">TOTAL</span>
                                <span className="value">{order.total}</span>
                            </div>
                        </div>
                        <div className="order-items">
                            <p className="items-label">Items ordered:</p>
                            <p>{order.items.join(', ')}</p>
                        </div>
                        <button className="view-details">VIEW DETAILS</button>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .section-title {
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 24px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px;
                }
                .orders-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .order-card {
                    border: 1px solid #e5e5e5;
                    padding: 24px;
                    transition: border-color 0.2s;
                }
                .order-card:hover { border-color: black; }
                .order-header {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #f2f2f2;
                }
                .label {
                    display: block;
                    font-size: 11px;
                    color: #666;
                    margin-bottom: 4px;
                    font-weight: 600;
                }
                .value {
                    font-size: 14px;
                    font-weight: 500;
                }
                .status { color: #008000; }
                .order-items { margin-bottom: 20px; font-size: 14px; color: #444; }
                .items-label { font-weight: 600; margin-bottom: 4px; color: black; }
                
                .view-details {
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: underline;
                }
                @media (max-width: 768px) {
                    .order-header { grid-template-columns: 1fr 1fr; gap: 20px; }
                }
            `}</style>
        </div>
    );
}
