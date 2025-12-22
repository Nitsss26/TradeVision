import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const categories = [
    { id: 'consumer-electronics', name: "Electronics", image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=300", color: "from-blue-900/80 to-blue-900/10" },
    { id: 'apparel', name: "Apparel", image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300", color: "from-purple-900/80 to-purple-900/10" },
    { id: 'vehicle-parts', name: "Vehicles", image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=300", color: "from-orange-900/80 to-orange-900/10" },
    { id: 'sports', name: "Sports", image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=300", color: "from-green-900/80 to-green-900/10" },
    { id: 'machinery', name: "Machinery", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=300", color: "from-yellow-900/80 to-yellow-900/10" },
    { id: 'home-garden', name: "Home & Garden", image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=300", color: "from-pink-900/80 to-pink-900/10" },
    { id: 'beauty', name: "Beauty", image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=300", color: "from-red-900/80 to-red-900/10" },
    { id: 'packaging', name: "Packaging", image: "https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=300", color: "from-indigo-900/80 to-indigo-900/10" }
];

const PremiumCategoryGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-20">
            {categories.map((cat, i) => (
                <Link
                    to={`/products?category=${cat.name}`}
                    key={i}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-zinc-800 hover:border-blue-500 transition-all hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20"
                >
                    {/* Background Image */}
                    <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-90 group-hover:opacity-100 transition-opacity`}></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-4">
                        <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-1 group-hover:text-blue-200 transition-colors">
                            {cat.name}
                        </h3>
                        <div className="flex items-center gap-1 text-[10px] md:text-xs text-zinc-300 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                            Source Now <ChevronRight className="w-3 h-3" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PremiumCategoryGrid;
