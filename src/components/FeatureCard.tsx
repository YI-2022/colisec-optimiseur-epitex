
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  index?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className,
  index = 0
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "feature-card flex flex-col items-start",
        className
      )}
      style={{ 
        animationDelay: `${index * 150}ms`,
        opacity: 0,
        animation: 'fade-up 0.8s ease-out forwards'
      }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-primary mb-6 shadow-glow">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
