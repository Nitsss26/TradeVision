import React from 'react';
import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/featured" element={<FeaturedSelectionPage />} />
      <Route path="/trade-assurance" element={<TradeAssurancePage />} />
      <Route path="/manufacturers" element={<ManufacturersPage />} />
      <Route path="/manufacturers/:id" element={<ManufacturerProfilePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/my-rfqs" element={<MyRFQsPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/app" element={<AppDownloadPage />} />
    </Routes>
  )
}

export default App;

