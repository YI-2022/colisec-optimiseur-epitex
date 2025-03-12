
import React from 'react';
import { FileText, Send, Building, User, Mail, Phone, Users, Package, Globe, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const QuoteRequest = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande de devis a été envoyée avec succès !");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="section-padding pt-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-colisec-purple/5 blur-[120px] rounded-full" />
          <div className="absolute left-10 bottom-10 w-1/3 h-1/3 bg-colisec-purple-accent/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
              <h1 className="heading-lg mb-6">Obtenez un devis personnalisé pour vos besoins spécifiques</h1>
              <p className="text-lg text-gray-600">
                Vous avez des besoins particuliers en matière de transport ? Nous vous proposons une solution sur mesure. 
                Complétez le formulaire ci-dessous et notre équipe vous contactera dans les plus brefs délais.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
            <div className="glassmorphism p-8 sm:p-10 rounded-3xl">
              <h2 className="text-2xl font-bold mb-8 text-colisec-purple flex items-center gap-2">
                <FileText className="w-5 h-5" /> Formulaire de Demande de Devis
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Building className="w-4 h-4" /> Nom de l'entreprise
                    </label>
                    <Input 
                      id="company" 
                      type="text" 
                      placeholder="Votre entreprise" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="contact" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4" /> Nom du contact
                    </label>
                    <Input 
                      id="contact" 
                      type="text" 
                      placeholder="Prénom et nom" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre@email.com" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Téléphone
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+33 6 12 34 56 78" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="users" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Nombre d'utilisateurs
                    </label>
                    <Input 
                      id="users" 
                      type="number" 
                      placeholder="5" 
                      min="1" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="volume" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Package className="w-4 h-4" /> Volume d'envois par mois
                    </label>
                    <Input 
                      id="volume" 
                      type="number" 
                      placeholder="100" 
                      min="1" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Globe className="w-4 h-4" /> Type d'expédition
                    </label>
                    <select 
                      id="type" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      required
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="nationale">Nationale</option>
                      <option value="internationale">Internationale</option>
                      <option value="les-deux">Les deux</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="services" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Package className="w-4 h-4" /> Services supplémentaires
                    </label>
                    <select 
                      id="services" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="etiquettes">Étiquettes de retour</option>
                      <option value="suivi">Suivi personnalisé</option>
                      <option value="integration">Intégration API</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Message supplémentaire
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Précisez vos besoins spécifiques..." 
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-gradient-primary hover:opacity-90 shadow-button flex items-center gap-2"
                >
                  <Send className="w-4 h-4" /> Envoyer la demande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default QuoteRequest;
