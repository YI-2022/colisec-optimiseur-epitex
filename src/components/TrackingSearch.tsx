
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const TrackingSearch = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      toast.error("Veuillez entrer un numéro de suivi");
      return;
    }
    
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      toast.info(`Recherche en cours pour ${trackingNumber}...`);
      // In a real app, this would be an API call
      setIsSearching(false);
      setTrackingNumber('');
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl glassmorphism rounded-2xl p-1 sm:p-2">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
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
    </div>
  );
};

export default TrackingSearch;
