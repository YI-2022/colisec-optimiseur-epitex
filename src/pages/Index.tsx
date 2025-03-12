
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Clock, 
  Users, 
  BarChart, 
  Settings, 
  RefreshCw, 
  ChevronRight,
  Monitor,
  MessageSquare
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import TrackingSearch from '@/components/TrackingSearch';
import FeatureCard from '@/components/FeatureCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      toast.success("Bienvenue sur Colisec !");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-container relative">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-colisec-purple/5 blur-[120px] rounded-full" />
            <div className="absolute left-10 bottom-10 w-1/3 h-1/3 bg-colisec-purple-accent/10 blur-[120px] rounded-full" />
          </div>
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div 
              className="animate-fade-up opacity-0"
              style={{ animationDelay: '100ms' }}
            >
              <h1 className="heading-xl bg-gradient-to-r from-colisec-purple to-colisec-purple-accent bg-clip-text text-transparent">
                La Révolution Digitale de la Gestion de Vos Expéditions
              </h1>
            </div>
            
            <div 
              className="animate-fade-up opacity-0"
              style={{ animationDelay: '300ms' }}
            >
              <p className="subheading">
                Simplifiez et optimisez la gestion de vos expéditions en toute sérénité
              </p>
            </div>
            
            <div 
              className="pt-6 flex justify-center animate-fade-up opacity-0"
              style={{ animationDelay: '500ms' }}
            >
              <TrackingSearch />
            </div>
            
            <div 
              className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0"
              style={{ animationDelay: '700ms' }}
            >
              <Button 
                asChild
                className="bg-gradient-primary hover:opacity-90 shadow-button w-full sm:w-auto"
                size="lg"
              >
                <Link to="/services">
                  Découvrir nos services
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="bg-white text-colisec-purple hover:bg-gray-50 w-full sm:w-auto"
                size="lg"
              >
                <Link to="/pricing">
                  Voir nos tarifs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-white/50">
        <div className="max-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up opacity-0">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-colisec-purple/20 to-colisec-purple-accent/20 rounded-full text-colisec-purple font-medium text-sm mb-4">
              🌍 Pourquoi Choisir Colisec ?
            </div>
            <h2 className="heading-lg mb-4">
              Gérez Votre Entreprise en Toute Sérénité
            </h2>
            <p className="text-gray-600 text-lg">
              Colisec est une plateforme innovante dédiée aux professionnels du transport, 
              simplifiant la gestion des expéditions et des clients grâce à la dématérialisation des démarches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Traçabilité en temps réel" 
              description="Suivez chaque colis depuis son envoi jusqu'à sa livraison, directement depuis votre smartphone."
              icon={Clock}
              index={0}
            />
            <FeatureCard 
              title="Automatisation des tâches" 
              description="Gagnez du temps avec des alertes SMS et e-mails automatisées."
              icon={RefreshCw}
              index={1}
            />
            <FeatureCard 
              title="Collaboration efficace" 
              description="Travaillez en équipe pour assurer un acheminement rapide et fluide des colis."
              icon={Users}
              index={2}
            />
            <FeatureCard 
              title="Gestion optimisée" 
              description="Réduisez les tâches administratives à faible valeur et concentrez-vous sur l'essentiel."
              icon={Settings}
              index={3}
            />
            <FeatureCard 
              title="Analyse de données" 
              description="Prenez des décisions basées sur des statistiques précises et des rapports détaillés."
              icon={BarChart}
              index={4}
            />
            <FeatureCard 
              title="Interface intuitive" 
              description="Profitez d'une expérience utilisateur fluide, accessible sur tous vos appareils."
              icon={Package}
              index={5}
            />
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 font-medium mb-6">
              Une solution complète pour améliorer votre efficacité et la satisfaction de vos clients !
            </p>
            <Button 
              asChild
              className="bg-white text-colisec-purple hover:bg-gray-50 border border-colisec-purple/20"
            >
              <Link to="/services" className="flex items-center">
                En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-colisec-purple/5 blur-[120px] rounded-full" />
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-colisec-purple-accent/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-container">
          <div className="glassmorphism p-8 sm:p-12 rounded-3xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-md mb-6">
                Prêt à révolutionner la gestion de vos expéditions ?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Rejoignez des milliers d'entreprises qui font confiance à Colisec pour optimiser 
                leur processus d'expédition et améliorer la satisfaction de leurs clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-primary hover:opacity-90 shadow-button"
                  size="lg"
                  asChild
                >
                  <Link to="/demo-request">
                    <Monitor className="mr-2 h-4 w-4" /> Demande de démonstration
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-colisec-purple hover:bg-gray-50"
                  size="lg"
                  asChild
                >
                  <Link to="/contact">
                    <MessageSquare className="mr-2 h-4 w-4" /> Contactez-nous
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
