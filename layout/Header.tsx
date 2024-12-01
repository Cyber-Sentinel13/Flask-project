import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BarChart2 className="h-8 w-8" />
              <span className="font-bold text-xl">FinanceAnalytics</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-200">
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}