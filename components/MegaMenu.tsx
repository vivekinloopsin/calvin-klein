import Link from 'next/link';
import { NAVIGATION_DATA } from '@/data/navigation';

interface MegaMenuProps {
    activeCategory: string | null;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const MegaMenu = ({ activeCategory, onMouseEnter, onMouseLeave }: MegaMenuProps) => {
    if (!activeCategory || !NAVIGATION_DATA[activeCategory]) return null;

    const sections = NAVIGATION_DATA[activeCategory];

    return (
        <div
            className="mega-menu"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="menu-container">
                {sections.map((section, idx) => (
                    <div key={idx} className="menu-column">
                        <h3 className="column-title">{section.title}</h3>
                        <ul className="column-list">
                            {section.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                    <Link href={`${activeCategory}/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="menu-link">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <style jsx>{`
        .mega-menu {
          position: absolute;
          top: 100%; /* Directly below the navbar */
          left: 0;
          width: 100%;
          background: white;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #ddd;
          z-index: 999;
          padding: 40px 60px;
          animation: slideDown 0.2s ease-out forwards;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .menu-container {
          display: flex;
          justify-content: flex-start;
          gap: 60px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .menu-column {
          min-width: 160px;
        }

        .column-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        .column-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .column-list li {
          margin-bottom: 10px;
        }

        .menu-link {
          font-size: 14px;
          color: #333;
          text-decoration: none;
          transition: color 0.2s;
        }

        .menu-link:hover {
          color: black;
          text-decoration: underline;
        }
      `}</style>
        </div>
    );
};

export default MegaMenu;
