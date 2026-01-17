import { getProductsByCategory } from '@/lib/actions';
import ProductCard from '@/components/ProductCard';

// Since this is a server component, we can await data directly
export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
    const params = await props.params;
    const category = params.category;

    const filteredProducts = await getProductsByCategory(category);

    // Fallback images logic remains same (or moved to DB in future)
    const bannerImage = category === 'men' ? '/category_men.png' : category === 'women' ? '/category_women.png' : '/hero_banner.png';

    return (
        <div className="category-page">
            <div className="category-header" style={{ backgroundImage: `url('${bannerImage}')` }}>
                <h1>{category.toUpperCase()}</h1>
                <p>New Arrivals</p>
            </div>

            <div className="container">
                {filteredProducts.length > 0 ? (
                    <div className="product-grid">
                        {filteredProducts.map((product: any) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '100px 0' }}>
                        <h2>Coming Soon</h2>
                        <p>We are updating our catalog for {category}.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
