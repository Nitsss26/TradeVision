import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ShieldCheck, Star, MapPin, Clock, Phone, Mail, Globe,
    CircleCheck, Package, Users, Award, Factory, Calendar, ArrowLeft,
    MessageSquare, Heart, Share2, CheckCircle2, Truck, TrendingUp, BadgeCheck, Crown, Sparkles, Play
} from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { manufacturerService } from '../services/mock/manufacturerService';
import { productService } from '../services/mock/productService';
import ManufacturerProfileUI from '../components/manufacturer/ManufacturerProfileUI';

const ManufacturerProfilePage = () => {
    const { id } = useParams();
    const [manufacturer, setManufacturer] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('products');

    // Fallback images
    const productImages = [
        'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?w=400',
        'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?w=400',
        'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=400',
        'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?w=400',
        'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?w=400',
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=400',
    ];

    const galleryImages = [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=400',
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mfr = await manufacturerService.getManufacturerById(id);
                setManufacturer(mfr);
                const allProducts = await productService.getAllProducts();
                const mfrProducts = allProducts.filter(p => p.manufacturerId === id);
                setProducts(mfrProducts.length > 0 ? mfrProducts : allProducts.slice(0, 6));
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <MainLayout>
                <div className="min-h-screen bg-black flex items-center justify-center">
                    <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
                </div>
            </MainLayout>
        );
    }

    if (!manufacturer) {
        return (
            <MainLayout>
                <div className="min-h-screen bg-black flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Manufacturer not found</h2>
                    <Link to="/manufacturers" className="text-blue-500 hover:underline">
                        ← Back to Manufacturers
                    </Link>
                </div>
            </MainLayout>
        );
    }

    const yearsInBusiness = new Date().getFullYear() - (manufacturer.businessDetails?.yearEstablished || 2010);

    return (
        <MainLayout>
            <div className="min-h-screen bg-black">
                <ManufacturerProfileUI
                    manufacturer={manufacturer}
                    products={products}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
        </MainLayout>
    );
};

export default ManufacturerProfilePage;
