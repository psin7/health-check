import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 heading-animation">HealthCheck</h3>
            <p className="text-gray-300">
              Online self-assessment tools to help you understand your health better before consulting a doctor.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/vision-tests" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Vision Tests
                </Link>
              </li>
              <li>
                <Link to="/neurological-tests" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Neurological Tests
                </Link>
              </li>
              <li>
                <Link to="/mental-health-tests" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Mental Health Tests
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-300 text-sm">
              The tests provided on this website are for informational purposes only and are not intended to replace 
              professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other 
              qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} HealthCheck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
