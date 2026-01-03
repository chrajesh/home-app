import React from "react";
import "../index.css";

interface HeaderProps {
  appName?: string;
}

const Header = ({ appName = "Budget App" }: HeaderProps) => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">{appName} Header</h1>
        <nav className="mt-2">
          <ul className="flex gap-4">
            <li className="hover:text-blue-200 cursor-pointer">Home</li>
            <li className="hover:text-blue-200 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-200 cursor-pointer">Reports</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
