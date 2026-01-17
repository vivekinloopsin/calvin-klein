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
             `}</style>
        </div>
    );
}
