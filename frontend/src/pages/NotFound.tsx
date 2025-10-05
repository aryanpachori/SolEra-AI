import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="hero-gradient absolute inset-0" />
      
      <div className="text-center space-y-6 relative z-10">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-gradient">404</h1>
          <h2 className="text-3xl font-bold">Lost in the Blockchain</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            The page you're looking for doesn't exist in this dimension of the Solana network.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 rounded-full">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="border-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go to Dashboard
            </Button>
          </Link>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Error Code: SOLANA_404_NOT_FOUND
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
