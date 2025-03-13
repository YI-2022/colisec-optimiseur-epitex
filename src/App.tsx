
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import QuoteRequest from "./pages/QuoteRequest";
import DemoRequest from "./pages/DemoRequest";
import Contact from "./pages/Contact";
import Tracking from "./pages/Tracking";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner position="top-right" />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tarification" element={<Pricing />} />
            <Route path="/ressources" element={<Resources />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quote-request" element={<QuoteRequest />} />
            <Route path="/demo-request" element={<DemoRequest />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
