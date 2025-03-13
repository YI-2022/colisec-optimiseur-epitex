
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  users: string;
  shipments: string;
  index?: number;
  billingPeriod: 'monthly' | 'annually';
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  highlighted = false,
  users,
  shipments,
  index = 0,
  billingPeriod
}: PricingCardProps) => {
  const currentPrice = billingPeriod === 'monthly' ? price.monthly : price.annually;
  
  return (
    <div
      className={cn(
        "rounded-2xl p-8 transition-all duration-500 flex flex-col h-full",
        highlighted 
          ? "bg-gradient-primary relative shadow-lg border-none text-white transform-gpu" 
          : "glassmorphism border-gray-100",
        highlighted && "hover:shadow-xl hover:-translate-y-1"
      )}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-colisec-purple text-sm font-semibold py-1 px-4 rounded-full shadow-md">
          Recommandé
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={cn(
          "text-2xl font-bold mb-2",
          highlighted ? "text-white" : "text-colisec-purple"
        )}>
          {title}
        </h3>
        <p className={highlighted ? "text-white/90" : "text-gray-600"}>
          {description}
        </p>
      </div>
      
      <div className="mb-6">
        <p className={cn(
          "text-5xl font-bold",
          highlighted ? "text-white" : "text-gray-900"
        )}>
          {currentPrice}
        </p>
        <p className={highlighted ? "text-white/90" : "text-gray-600"}>
          {billingPeriod === 'monthly' ? "par utilisateur / mois" : "par utilisateur / mois (annuel)"}
        </p>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className={cn(
          "py-2 px-4 rounded-lg flex items-center gap-2",
          highlighted ? "bg-white/10" : "bg-colisec-purple/5"
        )}>
          <span className={highlighted ? "text-white/90" : "text-gray-700"}>Utilisateurs:</span>
          <span className={cn(
            "font-medium",
            highlighted ? "text-white" : "text-colisec-purple"
          )}>
            {users}
          </span>
        </div>
        
        <div className={cn(
          "py-2 px-4 rounded-lg flex items-center gap-2",
          highlighted ? "bg-white/10" : "bg-colisec-purple/5"
        )}>
          <span className={highlighted ? "text-white/90" : "text-gray-700"}>Expéditions:</span>
          <span className={cn(
            "font-medium",
            highlighted ? "text-white" : "text-colisec-purple"
          )}>
            {shipments}
          </span>
        </div>
      </div>
      
      <div className="space-y-3 flex-grow">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center">
            {feature.included ? (
              <Check className={cn(
                "mr-2 h-5 w-5",
                highlighted ? "text-white" : "text-colisec-purple"
              )} />
            ) : (
              <X className="mr-2 h-5 w-5 text-gray-400" />
            )}
            <span className={cn(
              highlighted ? "text-white/90" : "text-gray-600"
            )}>
              {feature.name}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <Button 
          className={cn(
            "w-full",
            highlighted
              ? "bg-white text-colisec-purple hover:bg-gray-100 shadow-button"
              : "bg-gradient-primary text-white hover:opacity-90 shadow-button"
          )}
        >
          Sélectionner
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
