import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); 

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Dee Delicious Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-extrabold tracking-tight text-primary">
                Dee Delicious
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`hover:text-primary transition-colors cursor-pointer ${
                    isActive
                      ? "text-primary"
                      : "text-stone-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Account + Order Now */}
          <div className="flex items-center gap-4">
            {/* Login/Signup Button */}
            <Link
              to="/login"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 border border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-all active:scale-95"
            >
              <span className="material-icons">account_circle</span>
              Login
            </Link>

            {/* Order Now */}
            <Link
              to="/menu"
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
            >
              Order Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-dark-green"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-icons">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-primary/10 py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-semibold hover:text-primary ${
                  isActive ? "text-primary" : "text-stone-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="flex flex-col gap-3 pt-4">
            {/* Mobile Login */}
            <Link
              to="/login"
              className="w-full py-3 flex items-center justify-center gap-2 border border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-all active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="material-icons">account_circle</span>
              Login
            </Link>

            {/* Mobile Order Now */}
            <button className="w-full py-3 bg-primary text-white font-bold rounded-xl">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
