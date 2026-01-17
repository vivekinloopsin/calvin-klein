import { getProductById } from '@/lib/actions';
import AddToCartButton from '@/components/AddToCartButton';
import { notFound } from 'next/navigation';

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const product = await getProductById(id);

    if (!product) {
        return notFound();
    }

    return (
        <div className="product-page container">
            <div className="product-layout">
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    {/* Placeholder for more images */}
                </div>

                <div className="product-info">
                    <span className="breadcrumb">Home / {product.category} / {product.name}</span>
                    <h1>{product.name}</h1>
                    <p className="price">${product.price.toFixed(2)}</p>

                    <AddToCartButton product={product} />

                    <div className="description">
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
