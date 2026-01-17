"use client";

export default function AccountOverview() {
    return (
        <div className="overview">
            <h2>Account Overview</h2>
            <p>Welcome to your account dashboard. Use the menu on the left to manage your orders, addresses, payment methods, and saved items.</p>

            <style jsx>{`
                .overview {
                    padding: 20px 0;
                }
                h2 {
                    font-size: 24px;
                    font-weight: 500;
                    margin-bottom: 16px;
                }
                p {
                    font-size: 14px;
                    color: #666;
                    line-height: 1.6;
                }
                
                @media (max-width: 480px) {
                    .overview { padding: 16px 0; }
                    h2 { font-size: 20px; margin-bottom: 12px; }
                    p { font-size: 13px; }
                }
                
                @media (max-width: 360px) {
                    h2 { font-size: 18px; }
                    p { font-size: 12px; }
                }
             `}</style>
        </div>
    );
}
