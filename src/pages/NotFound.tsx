
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-bg px-4">
      <div className="glassmorphism p-12 rounded-2xl max-w-md w-full text-center shadow-glow">
        <h1 className="text-8xl font-bold text-colisec-purple mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Oups ! Page introuvable</p>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button
          asChild
          className="bg-gradient-primary hover:opacity-90 shadow-button"
        >
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" /> Retour à l'accueil
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
