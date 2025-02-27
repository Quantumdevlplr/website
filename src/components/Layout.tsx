import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="bg-black text-gray-200 py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Galgotias University</p>
              <p>Plot No.2, Sector 17-A</p>
              <p>Greater Noida, UP, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                <li><a href="/events" className="hover:text-blue-400">Events</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/entrepreneurship-cell-galgotias-university" className="hover:text-blue-400">LinkedIn</a>
                <a href="#" className="hover:text-blue-400">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Galgotias University E-Cell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;