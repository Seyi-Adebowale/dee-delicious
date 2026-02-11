// src/App.js
import React from "react";
import "flag-icon-css/css/flag-icons.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Reservations from "./pages/Reservations";
// import OrderPage from "./pages/OrderPage";
import ContactPage from "./pages/ContactPage";
import ThankYouPage from "./pages/ThankYouPage";
import AuthPage from "./pages/AuthPage";
import OrderTracking from "./pages/OrderTracking";
// import ScrollToTop from "./components/ScrollToTop";
import MenuPage from "./pages/MenuPage";
// import { CartProvider } from "./context/CartContext";
// import { UserProvider } from "./context/UserContext";
// import { CheckoutProvider } from "./context/CheckoutContext";
// import CheckoutModalWrapper from "./components/CheckoutModalWrapper";
// import { ProfileProvider } from "./context/ProfileContext";
// import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        {/* <Route path="/payment-success" element={<PaymentSuccess />} /> */}
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
