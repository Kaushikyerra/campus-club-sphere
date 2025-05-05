
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold gradient-text">UniClubs</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Connect, discover, and engage with university clubs and activities all in one place.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/clubs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Discover Clubs
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Activity Calendar
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium">Account</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-100">
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} UniClubs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
