"use server";
import dbConnect from '@/lib/db';
import Product, { IProduct } from '@/models/Product';

// We need to map the Mongoose document to a plain object to pass to client components
// serialization: _id and dates are objects, need explicit conversion if passing to client.
// However, our id is a string and matchin mock data.

interface ProductLean {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    _id: any;
}

export async function getProductsByCategory(category: string) {
    await dbConnect();
    const products = await Product.find({ category }).lean<ProductLean[]>();

    return products.map((p) => ({
        id: p.id,
        name: p.name,
        category: p.category,
        price: p.price,
        image: p.image,
        description: p.description,
        _id: p._id.toString()
    }));
}

export async function getProductById(id: string) {
    await dbConnect();
    const product = await Product.findOne({ id }).lean<ProductLean>();
    if (!product) return null;

    return {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
        description: product.description,
        _id: product._id.toString()
    };
}
