"use client";

const savedItems = [
    { id: 1, name: "Modern Cotton Lightly Lined Bralette", color: "Black", price: "$30.00", image: "/placeholder-bra.jpg" },
    { id: 2, name: "Monogram Logo T-Shirt", color: "White", price: "$49.50", image: "/placeholder-shirt.jpg" },
];

export default function SavedItemsPage() {
    return (
        <div>
            <h3 className="section-title">Saved Items</h3>
            <div className="saved-grid">
                {savedItems.map(item => (
                    <div key={item.id} className="saved-item">
                        <div className="image-placeholder"></div>
                        <div className="item-details">
                            <h4>{item.name}</h4>
                            <p className="color">{item.color}</p>
                            <p className="price">{item.price}</p>
                            <button className="add-btn">ADD TO BAG</button>
                            <button className="remove-btn">Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .section-title { font-size: 20px; font-weight: 500; margin-bottom: 24px; padding-bottom: 10px; border-bottom: 1px solid #eee; }
                .saved-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 30px;
                }
                .saved-item {
                    display: flex;
                    flex-direction: column;
                }
                .image-placeholder {
                    background: #f4f4f4;
                    padding-bottom: 125%; /* 4:5 Aspect Ratio */
                    margin-bottom: 16px;
                }
                .item-details h4 {
                    font-size: 14px;
                    font-weight: 400;
                    margin-bottom: 4px;
                    line-height: 1.4;
                }
                .color { color: #666; font-size: 13px; margin-bottom: 8px; }
                .price { font-weight: 700; font-size: 14px; margin-bottom: 16px; }
                
                .add-btn {
                    width: 100%;
                    background: black;
                    color: white;
                    padding: 12px;
                    font-size: 12px;
                    font-weight: 700;
                    margin-bottom: 8px;
                }
                .remove-btn {
                    width: 100%;
                    font-size: 12px;
                    text-decoration: underline;
                    color: #666;
                }
            `}</style>
        </div>
    );
}
