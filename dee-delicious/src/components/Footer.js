import React from "react";
import LogoImage from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-dark-green border-t border-primary/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section with Logo */}
          <div className="flex flex-col items-start">
            <img
              src={LogoImage}
              alt="Dee Delicious Logo"
              className="w-20 h-20 mb-3"
            />
            <h3 className="text-xl font-extrabold text-white">Dee Delicious</h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Fresh meals, fast pickup, and a smooth dine-in experience.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-bold text-white mb-3">Opening Hours</h4>
            <ul className="space-y-2 text-white/70">
              <li>Monday: Online</li>
              <li>Tuesday: Online</li>
              <li>Wednesday: 12noon - 11pm</li>
              <li>Thursday: 12noon - 11pm</li>
              <li>Friday: 12noon - 11pm</li>
              <li>Saturday: 12noon - 11pm</li>
              <li>Sunday: 12noon - 11pm</li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h4 className="font-bold text-white mb-3">Get in touch</h4>
            <ul className="text-white/70 text-sm space-y-2">
              <li>112 Breck Road, Anfield, Liverpool L4 2RD </li>
              <li>07465 682308 </li>
              <li>deedelicious@gmail.com</li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6 text-white/70">
              <a
                href="https://www.facebook.com/"
                className="hover:text-white transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                className="hover:text-white transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/"
                className="hover:text-white transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>

              <a
                href="https://wa.me/2347000000000"
                className="hover:text-white transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary/10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-center gap-3">
          <p>
            © {new Date().getFullYear()} Dee Delicious. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
