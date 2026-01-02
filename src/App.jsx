import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProductListingPage from './pages/ProductListingPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ManufacturerProfilePage from './pages/ManufacturerProfilePage'
import ManufacturersPage from './pages/ManufacturersPage'
import DashboardPage from './pages/DashboardPage'
import MyRFQsPage from './pages/MyRFQsPage'
import OrdersPage from './pages/OrdersPage'
import HelpPage from './pages/HelpPage'
import AppDownloadPage from './pages/AppDownloadPage'
import FeaturedSelectionPage from './pages/FeaturedSelectionPage'
import TradeAssurancePage from './pages/TradeAssurancePage'
import ManufacturerDashboardPage from './pages/manufacturer/ManufacturerDashboardPage'
import ProductListPage from './pages/manufacturer/ProductListPage'
import ProductEditorPage from './pages/manufacturer/ProductEditorPage'
import AnalyticsPage from './pages/manufacturer/AnalyticsPage'
import CompanySettingsPage from './pages/manufacturer/CompanySettingsPage'
import ManufacturerChatPage from './pages/manufacturer/ManufacturerChatPage';
import ClearancePage from './pages/ClearancePage';

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#18181b',
            color: '#fff',
            border: '1px solid #3f3f46'
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff'
            }
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff'
            }
          }
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/featured" element={<FeaturedSelectionPage />} />
        <Route path="/trade-assurance" element={<TradeAssurancePage />} />
        <Route path="/manufacturers" element={<ManufacturersPage />} />
        <Route path="/clearance" element={<ClearancePage />} />
        <Route path="/dead-stock" element={<ClearancePage />} />
        <Route path="/manufacturers/:id" element={<ManufacturerProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/my-rfqs" element={<MyRFQsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/app" element={<AppDownloadPage />} />

        {/* Manufacturer Portal Routes */}
        <Route path="/manufacturer/dashboard" element={<ManufacturerDashboardPage />} />
        <Route path="/manufacturer/products" element={<ProductListPage />} />
        <Route path="/manufacturer/products/new" element={<ProductEditorPage />} />
        <Route path="/manufacturer/products/edit/:id" element={<ProductEditorPage />} />
        <Route path="/manufacturer/analytics" element={<AnalyticsPage />} />
        <Route path="/manufacturer/settings" element={<CompanySettingsPage />} />
        <Route path="/manufacturer/messages" element={<ManufacturerChatPage />} />
      </Routes>
    </>
  )
}

export default App;
