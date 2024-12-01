import React from 'react';
import { ArrowRight, BarChart2, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Financial Data Into Insights
            </h1>
            <p className="text-xl mb-8">
              Advanced analytics and reporting solutions for modern banking
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                <BarChart2 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">
                Get instant insights with our powerful real-time analytics engine
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">
                Bank-grade security to protect your sensitive financial data
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-gray-600">
                Process millions of transactions in seconds
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}