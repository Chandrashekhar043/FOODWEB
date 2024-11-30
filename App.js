import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import OrderCustomizationPage from "./components/OrderCustomizationPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import ContactPage from "./components/ContactPage";
import AboutUsPage from "./components/AboutUsPage";
import SignUpLoginPage from "./components/SignUpLoginPage";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/customize" element={<OrderCustomizationPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/signup" element={<SignUpLoginPage />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
