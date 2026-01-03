import React from "react";
import '../index.css';

interface FooterProps {
  appName?: string;
}

const Footer = ({ appName = "Budget App" }: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">© 2026 {appName}. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-xs">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
