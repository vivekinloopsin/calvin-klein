export interface Product {
    id: string;
    name: string;
    category: 'men' | 'women';
    price: number;
    image: string;
    description: string;
}

export const products: Product[] = [
    {
        id: 'm1',
        name: 'Standard Straight Jeans',
        category: 'men',
        price: 98.00,
        image: '/category_men.png', // Reusing for demo
        description: 'Archive-inspired jeans with a straight fit and standard rise. Crafted from rigid cotton denim for an authentic feel.'
    },
    {
        id: 'm2',
        name: 'Monogram Logo T-Shirt',
        category: 'men',
        price: 45.00,
        image: '/category_men.png',
        description: 'A classic crewneck t-shirt featuring the iconic monogram logo. Soft cotton jersey for everyday comfort.'
    },
    {
        id: 'w1',
        name: 'Modern Cotton Bralette',
        category: 'women',
        price: 30.00,
        image: '/category_women.png', // Reusing for demo
        description: 'The icon. Defined by the bold reusable waistband. Soft cotton modal stretch for breathability and comfort.'
    },
    {
        id: 'w2',
        name: '90s Straight Jeans',
        category: 'women',
        price: 108.00,
        image: '/category_women.png',
        description: 'A definitive 90s fit. High rise with a relaxed straight leg. Rigid denim that breaks in over time.'
    },
    {
        id: 'm3',
        name: 'Denim Trucker Jacket',
        category: 'men',
        price: 128.00,
        image: '/hero_banner.png',
        description: 'The quintessential denim jacket. Point collar, button closures and chest flap pockets.'
    },
    {
        id: 'w3',
        name: 'Slip Dress',
        category: 'women',
        price: 89.00,
        image: '/hero_banner.png',
        description: 'Effortless minimalism. This slip dress features a fluid silhouette and delicate straps.'
    }
];
