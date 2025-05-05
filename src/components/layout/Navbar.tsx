
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">UniClubs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/clubs" className="text-foreground/80 hover:text-foreground transition-colors">
            Clubs
          </Link>
          <Link to="/calendar" className="text-foreground/80 hover:text-foreground transition-colors">
            Calendar
          </Link>
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{user?.email?.split('@')[0] || 'Account'}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/my-clubs" className="cursor-pointer">My Clubs</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="cursor-pointer text-red-500 flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link to="/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-border bg-background">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/clubs" 
              className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clubs
            </Link>
            <Link 
              to="/calendar" 
              className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calendar
            </Link>
            
            {isAuthenticated ? (
              <div className="flex flex-col gap-2 mt-2">
                <Link 
                  to="/profile" 
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link 
                  to="/my-clubs" 
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Clubs
                </Link>
                <Button 
                  variant="destructive" 
                  className="w-full mt-2"
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mt-2">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    Log In
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
