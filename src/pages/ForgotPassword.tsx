
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Veuillez entrer votre adresse email");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simuler une requête API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Instructions envoyées ! Vérifiez votre boîte mail");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow flex items-center section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-colisec-purple/5 blur-[120px] rounded-full" />
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-colisec-purple-accent/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-container">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="glassmorphism p-8 sm:p-10 rounded-3xl">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold mb-6 text-colisec-purple">Mot de passe oublié ?</h2>
                    <p className="text-gray-600 mb-6">
                      Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <Mail className="w-4 h-4" /> Adresse email
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="votre@email.com" 
                          className="w-full"
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-primary hover:opacity-90 shadow-button"
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer les instructions'}
                      </Button>
                      
                      <div className="pt-4">
                        <Link to="/login" className="text-colisec-purple hover:underline text-sm flex items-center justify-center gap-1">
                          <ArrowLeft className="w-3.5 h-3.5" /> Retour à la connexion
                        </Link>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-colisec-purple">Email envoyé !</h2>
                    <p className="text-gray-600 mb-6">
                      Vérifiez votre boîte mail pour les instructions de réinitialisation de votre mot de passe.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline" 
                      className="mt-2"
                    >
                      Réessayer avec une autre adresse
                    </Button>
                    <div className="mt-6">
                      <Link to="/login" className="text-colisec-purple hover:underline text-sm flex items-center justify-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" /> Retour à la connexion
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;
