export const NAVIGATION_DATA: Record<string, { title: string; items: string[] }[]> = {
    "/new": [
        { title: "Sub-categories", items: ["Women", "Men", "Underwear", "Collection"] },
        { title: "Featured", items: ["Best Sellers", "Denim Fit Guide", "Get Cozy", "Winter Apparel", "The Fleece Shop", "Icon Cotton Collection", "Valentine's Day", "Lunar New Year", "Re-Calvin", "Kate Moss by David Sims"] },
        { title: "Campaigns", items: ["Jung Kook", "Rosalía", "Jalen Green", "Trent Alexander-Arnold"] }
    ],
    "/women": [
        { title: "Apparel", items: ["Outerwear + Vests", "Tops", "Denim", "Bottoms", "Dresses", "Activewear", "Swim"] },
        { title: "Underwear", items: ["Panties", "Bras + Bralettes", "Loungewear", "Shapewear", "Multipacks", "Socks"] },
        { title: "Accessories", items: ["Bags", "Wallets + Small Goods", "Hats + Beanies", "Scarves", "Jewelry", "Watches", "Belts", "Sunglasses"] },
        { title: "Shoes", items: ["Sneakers", "Boots", "Heels", "Flats", "Sandals + Slides"] },
        { title: "Fragrance", items: ["Shop All Women’s Fragrance"] }
    ],
    "/men": [
        { title: "Apparel", items: ["Tops", "Outerwear + Vests", "Bottoms", "Denim", "Activewear", "Suiting"] },
        { title: "Underwear", items: ["Boxer Briefs", "Trunks", "Briefs", "Jock Straps + Thongs", "Boxers", "Multipacks", "Loungewear", "Undershirts", "Socks"] },
        { title: "Accessories", items: ["Bags", "Wallets + Small Goods", "Hats + Beanies", "Watches", "Jewelry", "Belts", "Scarves", "Sunglasses"] },
        { title: "Shoes", items: ["Sneakers", "Dress Shoes"] },
        { title: "Fragrance", items: ["Shop All Men’s Fragrance"] }
    ],
    "/underwear": [
        { title: "New Arrivals", items: ["Best Sellers", "Valentine's Day", "Icon Cotton", "Perfectly Fit", "CK Black", "Rosalía"] },
        { title: "Women", items: ["Panties", "Bras + Bralettes", "Loungewear", "Shapewear", "Multipacks", "Socks"] },
        { title: "Men", items: ["Boxer Briefs", "Trunks", "Briefs", "Jock Straps + Thongs", "Boxers", "Multipacks", "Loungewear", "Undershirts", "Socks"] },
        { title: "Kids", items: ["Girls", "Boys"] }
    ],
    "/kids": [
        { title: "Featured", items: ["New Arrivals", "Logo Collection"] },
        { title: "Girls", items: ["Apparel", "Underwear"] },
        { title: "Boys", items: ["Apparel", "Underwear", "Suiting"] }
    ],
    "/home": [
        { title: "Featured", items: ["Modern Cotton Bedding", "Organic Earth Bedding", "Washed Percale Bedding"] },
        { title: "Bedding", items: ["Duvet Covers", "Comforters", "Blankets", "Shams", "Sheets", "Bedding Sets"] },
        { title: "Bath", items: ["Bath Rugs", "Towels"] }
    ],
    "/sale": [
        { title: "Featured", items: ["New to Sale", "Final Sale", "Sale Tees", "Sale Outerwear", "Sale Sweaters", "Sale Multipacks", "Sale Swim"] },
        { title: "Women's Sale", items: ["Underwear", "Dresses", "Activewear", "Tops", "Bottoms", "Outerwear", "Denim", "Loungewear", "Swim", "Accessories"] },
        { title: "Men's Sale", items: ["Underwear", "Tops", "Bottoms", "Outerwear", "Loungewear", "Accessories"] },
        { title: "Underwear Sale", items: ["Women", "Men"] },
        { title: "Kids' Sale", items: ["Shop All Kids’ Sale"] }
    ]
};
