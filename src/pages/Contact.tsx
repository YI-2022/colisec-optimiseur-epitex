
import React from 'react';
import { MessageSquare, Send, User, Building, Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre message a été envoyé avec succès !");
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
              <h1 className="heading-lg mb-6">Nous sommes à votre écoute</h1>
              <p className="text-lg text-gray-600">
                Vous avez des questions ou besoin d'assistance ? Notre équipe est là pour vous accompagner à chaque étape.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="glassmorphism p-8 sm:p-10 rounded-3xl h-full">
                <h2 className="text-2xl font-bold mb-8 text-colisec-purple flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" /> Formulaire de Contact
                </h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <User className="w-4 h-4" /> Nom
                      </label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Votre nom" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Building className="w-4 h-4" /> Entreprise
                      </label>
                      <Input 
                        id="company" 
                        type="text" 
                        placeholder="Votre entreprise" 
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
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" /> Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Votre message..." 
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-gradient-primary hover:opacity-90 shadow-button flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Envoyer votre message
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="animate-fade-up opacity-0" style={{ animationDelay: '500ms' }}>
              <div className="glassmorphism p-8 sm:p-10 rounded-3xl h-full">
                <h2 className="text-2xl font-bold mb-6 text-colisec-purple">Informations de contact</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Nos horaires</h3>
                    <div className="flex items-start gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-colisec-purple mt-0.5" />
                      <div>
                        <p>Lundi à vendredi</p>
                        <p>9h à 18h</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a 
                      href="mailto:contact@colisec.fr" 
                      className="flex items-center gap-2 text-gray-600 hover:text-colisec-purple transition-colors"
                    >
                      <Mail className="w-5 h-5 text-colisec-purple" />
                      contact@colisec.fr
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                    <a 
                      href="tel:+33123456789" 
                      className="flex items-center gap-2 text-gray-600 hover:text-colisec-purple transition-colors"
                    >
                      <Phone className="w-5 h-5 text-colisec-purple" />
                      +33 1 23 45 67 89
                    </a>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      asChild
                      className="w-full bg-white text-colisec-purple hover:bg-gray-50 border border-colisec-purple/20"
                    >
                      <a href="/faq">
                        Consultez notre FAQ
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
