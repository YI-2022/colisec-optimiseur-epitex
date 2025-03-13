
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  HelpCircle, 
  Mail, 
  MessageSquare, 
  Phone,
  ArrowRight,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Resources = () => {
  const faqs = [
    {
      question: "Comment suivre mes colis en temps réel ?",
      answer: "Vous pouvez suivre vos colis en temps réel directement depuis votre espace client Colisec. Il vous suffit de vous connecter et d'accéder à la section 'Suivi des expéditions'. Vous pouvez également utiliser la barre de recherche sur notre page d'accueil en entrant votre numéro de suivi."
    },
    {
      question: "Comment ajouter de nouveaux utilisateurs à mon compte ?",
      answer: "Pour ajouter de nouveaux utilisateurs, accédez à la section 'Paramètres' puis 'Gestion des utilisateurs' dans votre espace client. Cliquez sur 'Ajouter un utilisateur' et renseignez les informations demandées. L'utilisateur recevra un email d'invitation avec les instructions pour se connecter."
    },
    {
      question: "Quelles sont les méthodes d'exportation disponibles ?",
      answer: "Colisec vous permet d'exporter vos données dans plusieurs formats : CSV, PDF, Excel et par Email. Pour exporter vos données, accédez à la section concernée, sélectionnez les données à exporter puis cliquez sur le bouton 'Exporter' et choisissez le format souhaité."
    },
    {
      question: "Comment configurer les notifications automatiques ?",
      answer: "Les notifications automatiques peuvent être configurées dans la section 'Paramètres' puis 'Notifications'. Vous pouvez choisir les événements qui déclencheront des notifications et leur mode d'envoi (email et/ou SMS selon votre forfait)."
    },
    {
      question: "Est-il possible d'intégrer Colisec à mon site e-commerce ?",
      answer: "Oui, Colisec propose une API complète permettant l'intégration avec la plupart des plateformes e-commerce et des systèmes de gestion. Cette fonctionnalité est disponible avec le forfait Premium. Contactez notre équipe technique pour obtenir de l'aide sur l'intégration."
    },
  ];
  
  const documents = [
    {
      title: "Conditions d'expédition",
      description: "Tout savoir sur l'acheminement des colis et les conditions générales d'expédition.",
      icon: <FileText className="h-10 w-10 text-colisec-purple" />,
      link: "#"
    },
    {
      title: "Politique de retour",
      description: "Comment gérer les retours simplement et efficacement avec Colisec.",
      icon: <FileText className="h-10 w-10 text-colisec-purple" />,
      link: "#"
    },
    {
      title: "Assurance colis",
      description: "Informations sur les options d'assurance pour sécuriser vos envois contre les imprévus.",
      icon: <FileText className="h-10 w-10 text-colisec-purple" />,
      link: "#"
    },
    {
      title: "Guide d'utilisation",
      description: "Guide complet pour tirer le meilleur parti de la plateforme Colisec.",
      icon: <FileText className="h-10 w-10 text-colisec-purple" />,
      link: "#"
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
            Ressources
          </div>
          <h1 className="heading-lg mb-6">
            Tout ce dont vous avez besoin
          </h1>
          <p className="subheading max-w-2xl mx-auto">
            Trouvez toutes les informations et le support nécessaires pour optimiser votre expérience avec Colisec.
          </p>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-6">🛠 Support Client</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Besoin d'aide ? Nous sommes là pour vous ! Notre équipe de support est disponible pour répondre à toutes vos questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glassmorphism">
              <CardHeader className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-primary mb-4 shadow-glow">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle>FAQ</CardTitle>
                <CardDescription className="text-center">
                  Trouvez des réponses aux questions fréquentes
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Consultez notre base de connaissances pour trouver rapidement des réponses à vos questions.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  variant="outline"
                  className="bg-white text-colisec-purple hover:bg-gray-50"
                >
                  Consulter la FAQ
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="glassmorphism">
              <CardHeader className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-primary mb-4 shadow-glow">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Assistance en ligne</CardTitle>
                <CardDescription className="text-center">
                  Contactez notre équipe directement
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Discutez en direct avec l'un de nos conseillers pour obtenir une assistance personnalisée.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="bg-gradient-primary hover:opacity-90 shadow-button">
                  Démarrer un chat
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="glassmorphism">
              <CardHeader className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-primary mb-4 shadow-glow">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Support technique</CardTitle>
                <CardDescription className="text-center">
                  Profitez d'un accompagnement rapide et efficace
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Notre équipe technique est disponible pour vous aider à résoudre tous vos problèmes.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  variant="outline"
                  className="bg-white text-colisec-purple hover:bg-gray-50"
                >
                  Contacter le support
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Vous avez une demande spécifique ?</p>
            <Button 
              asChild
              className="bg-white text-colisec-purple hover:bg-gray-50 border border-colisec-purple/20"
            >
              <Link to="#" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" /> Contactez-nous
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-6">Questions fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trouvez rapidement des réponses aux questions les plus courantes sur nos services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="glassmorphism p-6 rounded-2xl">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-colisec-purple">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              asChild
              className="bg-white text-colisec-purple hover:bg-gray-50 border border-colisec-purple/20"
            >
              <Link to="#" className="flex items-center">
                Voir toutes les questions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Documents Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-6">📄 Documents Utiles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Toutes les informations essentielles pour vos expéditions, accessibles en un clic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documents.map((doc, index) => (
              <div 
                key={index} 
                className="glassmorphism p-6 rounded-xl"
              >
                <div className="flex justify-center mb-4">
                  {doc.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">
                  {doc.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {doc.description}
                </p>
                <div className="flex justify-center">
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full bg-white text-colisec-purple hover:bg-gray-50"
                  >
                    <Link to={doc.link} className="flex items-center justify-center">
                      <Download className="mr-2 h-4 w-4" /> Télécharger
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 font-medium mb-6">
              🔍 Consultez nos documents officiels pour plus d'informations
            </p>
            <Button className="bg-gradient-primary hover:opacity-90 shadow-button">
              Accéder à tous les documents
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Resources;
