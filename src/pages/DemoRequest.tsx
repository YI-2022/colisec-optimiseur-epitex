
import React from 'react';
import { Calendar, Monitor, Send, Building, User, Mail, Phone, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DemoRequest = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande de démonstration a été enregistrée avec succès !");
  };

  const timeSlots = [
    { value: "9-11", label: "9h - 11h" },
    { value: "11-13", label: "11h - 13h" },
    { value: "14-16", label: "14h - 16h" },
    { value: "16-18", label: "16h - 18h" }
  ];

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
              <h1 className="heading-lg mb-6">Découvrez Colisec en Action !</h1>
              <p className="text-lg text-gray-600">
                Prenez rendez-vous pour une démonstration gratuite et personnalisée de notre plateforme. 
                Nous vous montrerons comment Colisec peut optimiser la gestion de vos expéditions et 
                améliorer la performance de votre entreprise de transport.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
            <div className="glassmorphism p-8 sm:p-10 rounded-3xl">
              <h2 className="text-2xl font-bold mb-8 text-colisec-purple flex items-center gap-2">
                <Monitor className="w-5 h-5" /> Demander une Démonstration
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
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Date préférée
                  </label>
                  <Input 
                    type="date" 
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Horaire préféré
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    {timeSlots.map((slot) => (
                      <div 
                        key={slot.value}
                        className="flex items-center space-x-2"
                      >
                        <input 
                          type="radio" 
                          id={slot.value} 
                          name="timeSlot" 
                          value={slot.value}
                          className="h-4 w-4 text-colisec-purple focus:ring-colisec-purple"
                          required
                        />
                        <label htmlFor={slot.value} className="text-sm text-gray-700">{slot.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Message (facultatif)
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Questions ou informations supplémentaires..." 
                    rows={3}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-gradient-primary hover:opacity-90 shadow-button flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Réserver une démo
                </Button>
                
                <p className="text-center text-gray-600 text-sm pt-2">
                  Nos experts vous guideront à travers toutes les fonctionnalités et répondront à vos questions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DemoRequest;
