import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { UserProvider } from '@/context/UserContext';
import CartDrawer from '@/components/CartDrawer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Calvin Klein | US | Official Online Site',
    description: 'Shop Calvin Klein for the latest collection.',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <UserProvider>
                    <CartProvider>
                        <Navbar />
                        <CartDrawer />
                        <main>
                            {children}
                        </main>
                        <Footer />
                    </CartProvider>
                </UserProvider>
            </body>
        </html>
    );
}
