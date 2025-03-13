
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import PricingCard from '@/components/PricingCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('annually');
  
  const pricingPlans = [
    {
      title: 'Gratuit',
      price: {
        monthly: '0€',
        annually: '0€',
      },
      description: 'Gérez tout le travail de l\'équipe en un seul espace',
      features: [
        { name: 'Livraisons automatiques', included: true },
        { name: 'Exportation des données (CSV, PDF, Excel, Email)', included: true },
        { name: 'Support technique', included: true },
        { name: 'Sauvegarde & Sécurité', included: true },
        { name: 'Notifications Email', included: false },
        { name: 'Notifications SMS', included: false },
        { name: 'Personnalisation avancée', included: false },
        { name: 'Accès API & Intégrations', included: false },
      ],
      users: '2 Utilisateurs',
      shipments: '100 Envois',
    },
    {
      title: 'Standard',
      price: {
        monthly: '20€',
        annually: '15€',
      },
      description: 'Collaborez et optimisez votre gestion',
      features: [
        { name: 'Livraisons automatiques', included: true },
        { name: 'Exportation des données (CSV, PDF, Excel, Email)', included: true },
        { name: 'Support technique: Email & Chat', included: true },
        { name: 'Sauvegarde & Sécurité avancée', included: true },
        { name: 'Notifications Email', included: true },
        { name: 'Notifications SMS', included: false },
        { name: 'Personnalisation avancée', included: false },
        { name: 'Accès API & Intégrations', included: false },
      ],
      users: '50 Utilisateurs',
      shipments: '500 Envois',
      highlighted: true,
    },
    {
      title: 'Premium',
      price: {
        monthly: '30€',
        annually: '25€',
      },
      description: 'Optimisation et performance avancée',
      features: [
        { name: 'Livraisons automatiques', included: true },
        { name: 'Exportation des données (CSV, PDF, Excel, Email)', included: true },
        { name: 'Support technique prioritaire', included: true },
        { name: 'Sauvegarde & Sécurité en temps réel', included: true },
        { name: 'Notifications Email', included: true },
        { name: 'Notifications SMS', included: true },
        { name: 'Personnalisation avancée', included: true },
        { name: 'Accès API & Intégrations', included: true },
      ],
      users: 'Illimités',
      shipments: 'Illimités',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-colisec-purple/5 blur-[120px] rounded-full" />
          <div className="absolute left-10 bottom-10 w-1/3 h-1/3 bg-colisec-purple-accent/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-container text-center">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-colisec-purple/20 to-colisec-purple-accent/20 rounded-full text-colisec-purple font-medium text-sm mb-4">
            Tarification
          </div>
          <h1 className="heading-lg mb-6">
            Choisissez le Plan Adapté à Vos Besoins
          </h1>
          <p className="subheading max-w-2xl mx-auto">
            💼 Boostez votre Travail d'Équipe. Commencez gratuitement et accédez à une gestion optimisée de vos expéditions.
          </p>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-container">
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-1.5 border border-gray-100 shadow-sm">
              <Tabs
                value={billingPeriod}
                onValueChange={(value) => setBillingPeriod(value as 'monthly' | 'annually')}
                className="w-full"
              >
                <TabsList className="grid grid-cols-2 w-72">
                  <TabsTrigger value="monthly">Mensuel</TabsTrigger>
                  <TabsTrigger value="annually" className="relative">
                    Annuel
                    <span className="absolute -top-2 -right-2 bg-colisec-purple text-white text-[10px] px-1.5 py-0.5 rounded-full">
                      -20%
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
                users={plan.users}
                shipments={plan.shipments}
                index={index}
                billingPeriod={billingPeriod}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="glassmorphism max-w-3xl mx-auto p-8 rounded-2xl shadow-soft">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Besoin d'une solution sur mesure ?
              </h3>
              <p className="text-gray-600 mb-6">
                Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.
              </p>
              <Button 
                className="bg-gradient-primary hover:opacity-90 shadow-button"
                size="lg"
              >
                Demander un devis personnalisé
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Comparison */}
      <section className="bg-white/80 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-6">Comparaison Détaillée des Plans</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez toutes les fonctionnalités disponibles dans chaque plan et choisissez celui qui correspond le mieux à vos besoins.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 border-b-2 border-gray-100">Fonctionnalités</th>
                  <th className="text-center py-4 px-6 border-b-2 border-gray-100">Gratuit</th>
                  <th className="text-center py-4 px-6 border-b-2 border-gray-100 bg-colisec-purple/5">Standard</th>
                  <th className="text-center py-4 px-6 border-b-2 border-gray-100">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100 font-medium">Utilisateurs</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">2</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100 bg-colisec-purple/5">50</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">Illimité</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100 font-medium">Nombre d'envois</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">100</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100 bg-colisec-purple/5">500</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">Illimité</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100 font-medium">Livraisons automatiques</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                  <td className="text-center py-4 px-6 border-b border-gray-100 bg-colisec-purple/5"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                  <td className="text-center py-4 px-6 border-b border-gray-100"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100 font-medium">
                    <div className="flex items-center">
                      <span>Exportation (CSV, PDF, Excel, Email)</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-gray-400 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Exportez vos données dans différents formats pour les utiliser dans d'autres applications.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6 border-b border-gray-100"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                  <td className="text-center py-4 px-6 border-b border-gray-100 bg-colisec-purple/5"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                  <td className="text-center py-4 px-6 border-b border-gray-100"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100 font-medium">Notifications Email</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">-</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100 bg-colisec-purple/5"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                  <td className="text-center py-4 px-6 border-b border-gray-100"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100 font-medium">Notifications SMS</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">-</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100 bg-colisec-purple/5">-</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100 font-medium">Support technique</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">Standard</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100 bg-colisec-purple/5">Email & Chat</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">Prioritaire</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100 font-medium">Sauvegarde & Sécurité</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">Basique</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100 bg-colisec-purple/5">Avancée</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">Temps réel</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100 font-medium">Personnalisation avancée</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">-</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100 bg-colisec-purple/5">-</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100 font-medium">Accès API & Intégrations</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100">-</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100 bg-colisec-purple/5">-</td>
                  <td className="text-center py-4 px-6 border-b border-gray-100"><Check className="h-5 w-5 text-colisec-purple mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-20">
            <h3 className="heading-md mb-8 text-center">🎯 Quel Plan Choisir ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glassmorphism p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Débutants & Petites Équipes</h4>
                <p className="text-gray-600 mb-6">
                  Vous débutez et avez une petite équipe ? Le Plan Gratuit est fait pour vous.
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full bg-white text-colisec-purple hover:bg-gray-50"
                >
                  <Link to="#">Commencer gratuitement</Link>
                </Button>
              </div>
              
              <div className="glassmorphism p-6 rounded-xl border-2 border-colisec-purple/20 shadow-glow">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Entreprises en Croissance</h4>
                <p className="text-gray-600 mb-6">
                  Vous gérez une équipe de transport avec des besoins modérés ? Le Plan Standard est idéal.
                </p>
                <Button 
                  asChild
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-button"
                >
                  <Link to="#">Choisir Standard</Link>
                </Button>
              </div>
              
              <div className="glassmorphism p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Grandes Entreprises</h4>
                <p className="text-gray-600 mb-6">
                  Vous recherchez une solution complète avec une gestion avancée ? Le Plan Premium est fait pour vous.
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full bg-white text-colisec-purple hover:bg-gray-50"
                >
                  <Link to="#">Découvrir Premium</Link>
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

export default Pricing;
