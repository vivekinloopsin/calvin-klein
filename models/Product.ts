import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    id: string; // We'll manually set this to match the mock data, or rely on _id
    name: string;
    category: 'men' | 'women';
    price: number;
    image: string;
    description: string;
}

const ProductSchema = new Schema<IProduct>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true, enum: ['men', 'women'] },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
