"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@/context/UserContext';

const menuItems = [
    { label: 'Overview', href: '/account' },
    { label: 'Orders', href: '/account/orders' },
    { label: 'Personal Information', href: '/account/profile' },
    { label: 'Addresses', href: '/account/addresses' },
    { label: 'Payment', href: '/account/payment' },
    { label: 'Saved Items', href: '/account/saved' },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { user, logout } = useUser();

    if (!user) {
        return <div className="p-20 text-center">Please log in.</div>;
    }

    return (
        <div className="account-container container">
            <aside className="sidebar">
                <div className="greeting">
                    <h2>Hi, {user.name}</h2>
                </div>
                <nav className="account-nav">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={pathname === item.href ? 'active' : ''}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button onClick={logout} className="logout-btn">Sign Out</button>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="account-content">
                {children}
            </main>
            <style jsx>{`
                .account-container {
                    display: flex;
                    padding: 60px 20px;
                    min-height: 600px;
                }
                .sidebar {
                    width: 250px;
                    margin-right: 60px;
                    flex-shrink: 0;
                }
                .greeting h2 {
                    font-size: 32px;
                    font-weight: 500;
                    margin-bottom: 30px;
                    letter-spacing: -1px;
                }
                .account-nav ul li {
                    margin-bottom: 16px;
                }
                .account-nav a, .logout-btn {
                    font-size: 14px;
                    color: #444;
                    transition: color 0.2s;
                    text-align: left;
                    display: block;
                    width: 100%;
                }
                .account-nav a:hover, .logout-btn:hover {
                    color: black;
                }
                .account-nav a.active {
                    font-weight: 700;
                    color: black;
                }
                .account-content {
                    flex: 1;
                }
                @media (max-width: 768px) {
                    .account-container { 
                        flex-direction: column;
                        padding: 40px 20px;
                    }
                    .sidebar { 
                        width: 100%; 
                        margin-right: 0;
                        margin-bottom: 40px; 
                    }
                    .greeting h2 {
                        font-size: 28px;
                        margin-bottom: 24px;
                    }
                }
                
                @media (max-width: 480px) {
                    .account-container {
                        padding: 32px 16px;
                    }
                    .sidebar {
                        margin-bottom: 32px;
                    }
                    .greeting h2 {
                        font-size: 24px;
                        margin-bottom: 20px;
                    }
                    .account-nav ul li {
                        margin-bottom: 14px;
                    }
                    .account-nav a, .logout-btn {
                        font-size: 13px;
                        padding: 8px 0;
                    }
                }
                
                @media (max-width: 360px) {
                    .account-container {
                        padding: 24px 12px;
                    }
                    .greeting h2 {
                        font-size: 22px;
                    }
                    .account-nav a, .logout-btn {
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    );
}
