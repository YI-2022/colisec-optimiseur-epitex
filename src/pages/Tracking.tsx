
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Package, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import TrackingResult, { TrackingInfo } from '@/components/TrackingResult';
import { getTrackingInfo } from '@/utils/trackingService';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Tracking = () => {
  const [searchParams] = useSearchParams();
  const trackingNumber = searchParams.get('id');
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(false);
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null);
  const [error, setError] = useState<string | undefined>();
  
  useEffect(() => {
    if (!trackingNumber) {
      navigate('/');
      return;
    }
    
    setIsLoading(true);
    setError(undefined);
    
    getTrackingInfo(trackingNumber)
      .then(info => {
        setTrackingInfo(info);
        toast.success(`Suivi trouvé pour ${trackingNumber}`);
      })
      .catch(err => {
        setTrackingInfo(null);
        setError(err.message);
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [trackingNumber, navigate]);
  
  const handleBack = () => {
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-colisec-purple/5 blur-[120px] rounded-full" />
          <div className="absolute left-10 bottom-10 w-1/3 h-1/3 bg-colisec-purple-accent/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-container">
          <div className="glassmorphism rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="mb-6">
              <Button 
                variant="outline" 
                onClick={handleBack}
                className="mb-4 bg-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Retour à l'accueil
              </Button>
              
              <h1 className="text-2xl font-bold text-colisec-purple flex items-center gap-2">
                <Package className="h-6 w-6" /> Suivi de colis
              </h1>
              {trackingNumber && (
                <p className="text-gray-600 mt-1">
                  Numéro de suivi: <span className="font-medium">{trackingNumber}</span>
                </p>
              )}
            </div>
            
            <TrackingResult
              trackingInfo={trackingInfo}
              error={error}
              loading={isLoading}
              onBack={handleBack}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Tracking;
