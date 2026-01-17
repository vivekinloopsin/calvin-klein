import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';
import { products as mockProducts } from '@/lib/data';

export async function GET() {
    try {
        await dbConnect();

        // Check if seeded
        const count = await Product.countDocuments();
        if (count === 0) {
            console.log("Seeding database...");
            await Product.insertMany(mockProducts);
            return NextResponse.json({ message: 'Seeded successfully', products: mockProducts });
        }

        return NextResponse.json({ message: 'Already seeded' });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
