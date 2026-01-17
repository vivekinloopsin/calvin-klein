import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';

export default function Home() {
    return (
        <div>
            <Hero />
            <CategoryGrid />
            <section style={{ padding: '100px 20px', textAlign: 'center', background: '#FFFFFF' }}>
                <h2 style={{ fontSize: '28px', marginBottom: '24px', fontWeight: 700, letterSpacing: '-0.5px' }}>THE ESSENTIALS</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '16px', lineHeight: 1.6, color: '#444' }}>
                    Elevated staples. Designed for everyday comfort and style. Explore our latest collection of denim, underwear, and apparel featuring the iconic Calvin Klein logo.
                </p>
            </section>
        </div>
    );
}
