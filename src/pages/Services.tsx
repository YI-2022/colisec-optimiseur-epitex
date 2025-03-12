
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Zap, 
  BarChart3, 
  Cloud, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

interface ServiceFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  index: number;
  isReversed?: boolean;
}

const ServiceFeature = ({ icon, title, description, benefits, index, isReversed = false }: ServiceFeatureProps) => {
  return (
    <div className="py-16 md:py-24">
      <div className={cn(
        "flex flex-col gap-10",
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      )}>
        <div className="flex-1 flex flex-col justify-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary shadow-glow mb-6">
            {icon}
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">{title}</h3>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-colisec-purple mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="glassmorphism p-8 rounded-2xl w-full max-w-md aspect-[4/3] flex items-center justify-center">
            <div className="text-7xl">{icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "Suivi en Temps Réel",
      description: "Gardez un œil sur chaque étape du voyage de vos colis et assurez une transparence totale.",
      benefits: [
        "Visualisez chaque étape du transport",
        "Informez vos clients en cas d'aléas",
        "Offrez un suivi sécurisé et transparent"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Travail d'Équipe Simplifié",
      description: "Collaborez efficacement avec tous les membres de votre équipe pour un service client impeccable.",
      benefits: [
        "Gérez plusieurs agences et collaborateurs depuis un seul espace",
        "Optimisez la coordination entre les équipes",
        "Assurez un service client fluide et efficace"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Automatisation des Processus",
      description: "Dites adieu aux tâches répétitives et concentrez-vous sur la valeur ajoutée pour vos clients.",
      benefits: [
        "Notifications automatiques par SMS et e-mail",
        "Génération d'étiquettes de retour simplifiée",
        "Gestion optimisée du carnet d'adresses de vos clients"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Un Dashboard Complet et Intuitif",
      description: "Analysez vos performances et prenez des décisions éclairées grâce à des données précises.",
      benefits: [
        "Visualisez vos performances en un coup d'œil",
        "Analysez vos flux d'expéditions",
        "Prenez des décisions basées sur des données précises"
      ]
    },
    {
      icon: <Cloud className="h-8 w-8 text-white" />,
      title: "Hébergement Cloud Sécurisé",
      description: "Accédez à vos données en toute sécurité, où que vous soyez et quand vous en avez besoin.",
      benefits: [
        "Accès depuis n'importe quel appareil, où que vous soyez",
        "Sauvegarde quotidienne de vos données",
        "Solution évolutive selon vos besoins"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-colisec-purple/5 blur-[120px] rounded-full" />
          <div className="absolute left-10 bottom-10 w-1/3 h-1/3 bg-colisec-purple-accent/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-container text-center">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-colisec-purple/20 to-colisec-purple-accent/20 rounded-full text-colisec-purple font-medium text-sm mb-4">
            🚛 Nos Services
          </div>
          <h1 className="heading-lg mb-6">
            Les Fonctionnalités Clés de Colisec
          </h1>
          <p className="subheading max-w-2xl mx-auto">
            Découvrez comment Colisec révolutionne la gestion de vos expéditions avec des outils puissants et intuitifs.
          </p>
        </div>
      </section>
      
      {/* Services List */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-container">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <ServiceFeature
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                index={index}
                isReversed={index % 2 !== 0}
              />
              {index < services.length - 1 && (
                <div className="border-t border-gray-100 max-w-4xl mx-auto" />
              )}
            </React.Fragment>
          ))}
          
          <div className="py-12 text-center">
            <p className="text-xl font-semibold text-colisec-purple mb-8">
              🚀 Avec Colisec, libérez-vous des contraintes logistiques et concentrez-vous sur la croissance de votre entreprise !
            </p>
            <Button 
              asChild
              className="bg-gradient-primary hover:opacity-90 shadow-button"
              size="lg"
            >
              <Link to="/pricing" className="flex items-center">
                Voir nos offres <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
