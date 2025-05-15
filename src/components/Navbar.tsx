
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            RoomMate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/matches" className="text-gray-700 hover:text-primary transition-colors">
            Matches
          </Link>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link to="/create-profile">Sign Up</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary-dark transition-colors">
            <Link to="/dashboard">Login</Link>
          </Button>
        </div>

        {/* Mobile Navigation Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full z-50 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/matches" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Matches
            </Link>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
              <Link to="/create-profile" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary-dark transition-colors w-full">
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
