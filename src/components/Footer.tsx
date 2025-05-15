
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                RoomMate
              </span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Finding the perfect roommate shouldn't be challenging. Our AI-powered matching system helps you connect with compatible roommates based on your lifestyle, preferences, and budget.
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link to="/matches" className="text-gray-600 hover:text-primary transition-colors">Matches</Link></li>
              <li><Link to="/create-profile" className="text-gray-600 hover:text-primary transition-colors">Sign Up</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-600 text-center">
            © {new Date().getFullYear()} RoomMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
