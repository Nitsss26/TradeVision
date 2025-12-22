import React from 'react';
import { ChevronRight, Shirt, Cpu, Car, Laptop, ShoppingBag, Hammer, Zap, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 'textiles',
        name: 'Apparel & Accessories',
        icon: Shirt,
        subs: ['Men\'s Clothing', 'Women\'s Clothing', 'Sportswear', 'Fabrics', 'Textile Accessories']
    },
    {
        id: 'consumer-electronics',
        name: 'Consumer Electronics',
        icon: Laptop,
        subs: ['Mobile Phones', 'Computer Hardware', 'Camera & Photo', 'Smart Electronics', 'Accessories']
    },
    {
        id: 'vehicle-parts',
        name: 'Vehicle Parts & Accessories',
        icon: Car,
        subs: ['Car Electronics', 'Interior Accessories', 'Exterior Accessories', 'Motorcycle Parts', 'Maintenance Tools']
    },
    {
        id: 'industrial',
        name: 'Industrial Machinery',
        icon: Hammer,
        subs: ['Manufacturing Machinery', 'Construction Machinery', 'Energy & Mineral', 'Industrial Tools', 'Components']
    },
    {
        id: 'home-garden',
        name: 'Home & Garden',
        icon: ShoppingBag,
        subs: ['Kitchen & Dining', 'Home Decor', 'Garden Supplies', 'Pet Products', 'Household Cleaning']
    },
    {
        id: 'electrical',
        name: 'Electrical Equipment',
        icon: Zap,
        subs: ['Power Supplies', 'Solar Energy', 'Batteries', 'Electrical Plugs', 'Generators']
    },
    {
        id: 'packaging',
        name: 'Packaging & Printing',
        icon: Package,
        subs: ['Paper Boxes', 'Plastic Bags', 'Bottles & Jars', 'Printing Services', 'Labels']
    }
];

const CategoryDropdown = () => {
    return (
        <div className="absolute top-full left-0 w-64 bg-zinc-900 border border-zinc-800 rounded-b-xl shadow-2xl z-50 py-2">
            {categories.map((cat) => (
                <div key={cat.id} className="group relative">
                    <Link
                        to={`/products?category=${cat.name}`}
                        className="flex items-center justify-between px-4 py-3 hover:bg-zinc-800 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <cat.icon className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                            <span className="text-zinc-300 group-hover:text-white font-medium text-sm">{cat.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white" />
                    </Link>

                    {/* Mega Menu Sub-category Flyout */}
                    <div className="hidden group-hover:block absolute top-0 left-full w-64 h-full min-h-[300px] bg-zinc-900 border border-zinc-800 border-l-0 rounded-r-xl shadow-xl -ml-1 p-4">
                        <h3 className="text-white font-bold mb-3 pb-2 border-b border-zinc-800">{cat.name}</h3>
                        <ul className="space-y-2">
                            {cat.subs.map((sub, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={`/products?search=${sub}`}
                                        className="text-zinc-400 hover:text-blue-400 text-sm block py-1"
                                    >
                                        {sub}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            <div className="px-4 py-3 border-t border-zinc-800 mt-2">
                <Link to="/categories" className="text-sm font-semibold text-blue-500 hover:text-blue-400 flex items-center gap-1">
                    All Categories <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

export default CategoryDropdown;
