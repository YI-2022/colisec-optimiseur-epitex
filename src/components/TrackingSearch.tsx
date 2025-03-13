
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const TrackingSearch = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      toast.error("Veuillez entrer un numéro de suivi");
      return;
    }
    
    setIsSearching(true);
    
    // Rediriger vers la page dédiée au suivi
    navigate(`/tracking?id=${encodeURIComponent(trackingNumber)}`);
    
    // Réinitialiser l'état après redirection
    setTimeout(() => {
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="w-full glassmorphism rounded-2xl p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-colisec-purple mb-2">
            Suivez votre colis en temps réel
          </h2>
          <p className="text-gray-600">
            Entrez votre numéro de suivi ci-dessous pour connaître l'état d'acheminement de votre envoi.
          </p>
        </div>
        
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="pl-10 h-12 bg-white/50 border-0 focus-visible:ring-1 focus-visible:ring-colisec-purple transition-all duration-300"
              placeholder="Entrez votre numéro de suivi..."
            />
          </div>
          <Button 
            type="submit"
            disabled={isSearching}
            className="h-12 bg-gradient-primary hover:opacity-90 shadow-button"
          >
            {isSearching ? 'Recherche...' : 'Suivre mon colis'}
          </Button>
        </form>
        
        <div className="mt-4 text-sm text-gray-500 text-center">
          <p>Exemple de numéros de suivi: COL123456, COL789012, COL345678</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingSearch;
