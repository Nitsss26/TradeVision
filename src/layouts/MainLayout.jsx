import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-body)' }}>
            {/* Navbar */}
            <Navbar />

            {/* Main Content - Full Width */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
