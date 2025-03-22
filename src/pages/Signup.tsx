
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft, Building, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const Signup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.email.trim() || !formData.password.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simuler une requête API
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Compte créé avec succès !");
      navigate('/login');
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
            <div className="w-full max-w-2xl">
              <div className="glassmorphism p-8 sm:p-10 rounded-3xl">
                <h2 className="text-2xl font-bold mb-6 text-colisec-purple">Créez votre compte Colisec</h2>
                <p className="text-gray-600 mb-6">
                  Rejoignez Colisec et bénéficiez de solutions logistiques personnalisées pour vos expéditions.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <User className="w-4 h-4" /> Prénom
                      </label>
                      <Input 
                        id="firstName" 
                        type="text" 
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Prénom" 
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <User className="w-4 h-4" /> Nom
                      </label>
                      <Input 
                        id="lastName" 
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Nom" 
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Building className="w-4 h-4" /> Nom de l'entreprise
                    </label>
                    <Input 
                      id="companyName" 
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Nom de votre entreprise" 
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Adresse email *
                    </label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com" 
                      className="w-full"
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
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 6 xx xx xx xx" 
                      className="w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Lock className="w-4 h-4" /> Mot de passe *
                      </label>
                      <Input 
                        id="password" 
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••" 
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Lock className="w-4 h-4" /> Confirmer le mot de passe *
                      </label>
                      <Input 
                        id="confirmPassword" 
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••" 
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-xs text-gray-500">
                      Les champs marqués d'un astérisque (*) sont obligatoires
                    </p>
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-button"
                  >
                    {isSubmitting ? 'Création en cours...' : 'Créer mon compte'}
                  </Button>
                  
                  <div className="pt-4 text-center">
                    <Link to="/login" className="text-colisec-purple hover:underline text-sm flex items-center justify-center gap-1">
                      <ArrowLeft className="w-3.5 h-3.5" /> Déjà inscrit ? Connectez-vous
                    </Link>
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

export default Signup;
