
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Key, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow flex items-center section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-colisec-purple/5 blur-[120px] rounded-full" />
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-colisec-purple-accent/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
              <h1 className="heading-lg mb-6">Bienvenue sur votre espace Colisec</h1>
              <p className="text-lg text-gray-600 mb-8">
                Accédez à votre compte et gérez vos expéditions en toute simplicité. 
                Connectez-vous pour suivre vos colis, gérer vos utilisateurs et optimiser 
                vos processus logistiques.
              </p>
            </div>
            
            <div className="animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="glassmorphism p-8 sm:p-10 rounded-3xl">
                <h2 className="text-2xl font-bold mb-6 text-colisec-purple">Connectez-vous à votre compte</h2>
                
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Adresse email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre@email.com" 
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Lock className="w-4 h-4" /> Mot de passe
                    </label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:opacity-90 shadow-button">
                    Se connecter
                  </Button>
                  
                  <div className="pt-4 space-y-4">
                    <div className="text-center">
                      <Link to="/forgot-password" className="text-colisec-purple hover:underline text-sm flex items-center justify-center gap-1">
                        <Key className="w-3.5 h-3.5" /> Mot de passe oublié ?
                      </Link>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-sm text-gray-600">Pas encore de compte ? </span>
                      <Link to="/signup" className="text-colisec-purple hover:underline text-sm font-medium flex items-center justify-center gap-1 mt-1">
                        <UserPlus className="w-3.5 h-3.5" /> Inscrivez-vous ici
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Login;
