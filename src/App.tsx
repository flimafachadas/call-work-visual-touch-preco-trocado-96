
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCriticalImagePreloader } from "@/hooks/useImagePreloader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EnderecoFiscal from "./pages/EnderecoFiscal";
import EnderecoComercial from "./pages/EnderecoComercial";
import SalasComerciais from "./pages/SalasComerciais";
import EstacoesTrabalho from "./pages/EstacoesTrabalho";
import ReunioeseEventos from "./pages/ReunioeseEventos";
import BancoDeHoras from "./pages/BancoDeHoras";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

// Componente para inicializar preload de imagens críticas
const AppWithImagePreload = () => {
  useCriticalImagePreloader();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/endereco-fiscal" element={<EnderecoFiscal />} />
        <Route path="/endereco-comercial" element={<EnderecoComercial />} />
        <Route path="/salas-comerciais" element={<SalasComerciais />} />
        <Route path="/estacoes-trabalho" element={<EstacoesTrabalho />} />
        <Route path="/reunioes-eventos" element={<ReunioeseEventos />} />
        <Route path="/banco-de-horas" element={<BancoDeHoras />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppWithImagePreload />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
