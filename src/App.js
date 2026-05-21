import { Routes, Route } from 'react-router-dom'; // Routing for the single-page app

// Import all page components used in the routes below
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BrowsePage from './pages/BrowsePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import CommissionViewPage from './pages/CommissionViewPage';
import InboxPage from './pages/InboxPage';
import SellerDashboardPage from './pages/SellerDashboardPage';
import CommissionWorkspacePage from './pages/CommissionWorkspacePage';
import HelpPage from './pages/HelpPage';

function App() {
  // Assign a route for each page component
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrderHistoryPage />} />
      <Route path="/orders/:id" element={<CommissionViewPage />} />
      <Route path="/inbox" element={<InboxPage />} />
      <Route path="/seller" element={<SellerDashboardPage />} />
      <Route path="/seller/commission/:id" element={<CommissionWorkspacePage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
}

export default App;