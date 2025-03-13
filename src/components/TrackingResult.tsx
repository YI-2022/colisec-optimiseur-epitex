
import React from 'react';
import { 
  CheckCircle2, 
  Truck, 
  Package, 
  Home, 
  AlertTriangle, 
  Clock,
  Download,
  Mail,
  Phone,
  FileDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export interface TrackingStep {
  title: string;
  date: string;
  time: string;
  location?: string;
  completed: boolean;
  current: boolean;
}

export interface TrackingInfo {
  trackingNumber: string;
  shipper: string;
  recipient: string;
  destinationAddress: string;
  weight: string;
  shipmentType: 'Standard' | 'Express';
  status: 'En transit' | 'Livré' | 'En attente' | 'En retard';
  estimatedDelivery: string;
  reason?: string;
  steps: TrackingStep[];
}

interface TrackingResultProps {
  trackingInfo: TrackingInfo | null;
  error?: string;
  loading?: boolean;
  onBack: () => void;
}

const TrackingResult: React.FC<TrackingResultProps> = ({ 
  trackingInfo, 
  error, 
  loading,
  onBack 
}) => {
  if (loading) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8 p-6 glassmorphism rounded-2xl text-center">
        <Clock className="h-12 w-12 animate-spin text-colisec-purple mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Recherche en cours...</h3>
        <p className="text-gray-600">Nous récupérons les informations de votre colis</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8">
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Erreur de suivi</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        
        <div className="flex justify-center mt-4">
          <Button onClick={onBack} variant="outline">
            Retour à la recherche
          </Button>
        </div>
      </div>
    );
  }

  if (!trackingInfo) return null;

  const isDelivered = trackingInfo.status === 'Livré';
  const isDelayed = trackingInfo.status === 'En retard';
  const isPending = trackingInfo.status === 'En attente';

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 space-y-6">
      {/* Status Summary Card */}
      <Card className="glassmorphism border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2">
            {isDelivered ? (
              <CheckCircle2 className="text-green-500" />
            ) : isDelayed ? (
              <AlertTriangle className="text-amber-500" />
            ) : (
              <Truck className="text-colisec-purple" />
            )}
            Colis {trackingInfo.status}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Numéro de suivi</p>
                <p className="font-medium">{trackingInfo.trackingNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Expéditeur</p>
                <p className="font-medium">{trackingInfo.shipper}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Destinataire</p>
                <p className="font-medium">{trackingInfo.recipient}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Adresse de destination</p>
                <p className="font-medium">{trackingInfo.destinationAddress}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Poids</p>
                <p className="font-medium">{trackingInfo.weight}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Type d'expédition</p>
                <p className="font-medium">{trackingInfo.shipmentType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estimation de livraison</p>
                <p className="font-medium">{trackingInfo.estimatedDelivery}</p>
              </div>
            </div>
          </div>
          
          {/* Pending or delayed alert */}
          {(isPending || isDelayed) && (
            <Alert className="mt-4 bg-amber-50 border-amber-200">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <AlertTitle>Attention</AlertTitle>
              <AlertDescription>
                Votre colis est actuellement {isPending ? 'en attente' : 'en retard'} 
                {trackingInfo.reason ? ` pour raison: ${trackingInfo.reason}` : ''}.
                Contactez notre support pour plus d'informations.
              </AlertDescription>
              <Button variant="outline" size="sm" className="mt-2">
                <Phone className="mr-2 h-4 w-4" /> Contacter le support
              </Button>
            </Alert>
          )}
          
          {/* Delivered confirmation */}
          {isDelivered && (
            <Alert className="mt-4 bg-green-50 border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <AlertTitle>Livraison confirmée</AlertTitle>
              <AlertDescription>
                Votre colis a été livré avec succès le {trackingInfo.steps[trackingInfo.steps.length - 1]?.date} 
                à {trackingInfo.steps[trackingInfo.steps.length - 1]?.time}.
              </AlertDescription>
              <Button variant="outline" size="sm" className="mt-2">
                <FileDown className="mr-2 h-4 w-4" /> Télécharger la preuve de livraison
              </Button>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="glassmorphism border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Suivi en temps réel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 relative">
            {trackingInfo.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Vertical line connecting steps */}
                {index < trackingInfo.steps.length - 1 && (
                  <div className={cn(
                    "absolute top-7 left-4 w-0.5 h-full -ml-0.5",
                    step.completed ? "bg-colisec-purple" : "bg-gray-200"
                  )} />
                )}
                
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    step.completed ? "bg-colisec-purple text-white" : "bg-gray-200",
                    step.current && "ring-2 ring-colisec-purple ring-offset-2"
                  )}>
                    {index === 0 ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : index === trackingInfo.steps.length - 1 ? (
                      <Home className="h-4 w-4" />
                    ) : (
                      <Package className="h-4 w-4" />
                    )}
                  </div>
                  
                  {/* Step Details */}
                  <div className="flex-1">
                    <p className={cn(
                      "font-medium",
                      step.current && "text-colisec-purple font-semibold"
                    )}>
                      {step.title}
                    </p>
                    <div className="flex flex-wrap gap-x-4 text-sm text-gray-500 mt-1">
                      <span>{step.date} • {step.time}</span>
                      {step.location && <span>{step.location}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button variant="outline" className="shadow-sm" onClick={onBack}>
          <Home className="mr-2 h-4 w-4" /> Retour à l'accueil
        </Button>
        <Button variant="outline" className="shadow-sm">
          <FileDown className="mr-2 h-4 w-4" /> Télécharger en PDF
        </Button>
        <Button variant="outline" className="shadow-sm">
          <Mail className="mr-2 h-4 w-4" /> Recevoir les mises à jour
        </Button>
      </div>
    </div>
  );
};

export default TrackingResult;
