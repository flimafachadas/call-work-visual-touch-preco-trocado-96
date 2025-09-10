
import { Building, Users, Presentation, BookOpen, Building2 } from "lucide-react";
import { Navbar1 } from "@/components/ui/navbar1";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Se estamos na página inicial, apenas faz o scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Se estamos em outra página, navega para home e depois faz o scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleContactClick = () => {
    scrollToSection('contato');
  };

  const menuData = [
    {
      title: "Serviços",
      url: "#",
      items: [
        {
          title: "Endereço Fiscal | Escritório Virtual",
          description: "Tenha um endereço comercial prestigioso para sua empresa",
          icon: <Building className="size-5 shrink-0" />,
          url: "/endereco-fiscal",
        },
        {
          title: "Endereço Comercial",
          description: "Praticidade com imagem profissional sem custos de sala física",
          icon: <Building2 className="size-5 shrink-0" />,
          url: "/endereco-comercial",
        },
        {
          title: "Salas Privativas",
          description: "Escritórios privados totalmente equipados",
          icon: <Building className="size-5 shrink-0" />,
          url: "/salas-comerciais",
        },
        {
          title: "Estações de Trabalho",
          description: "Ambiente colaborativo para profissionais",
          icon: <Users className="size-5 shrink-0" />,
          url: "/estacoes-trabalho",
        },
        {
          title: "Sala de Reuniões",
          description: "Salas para reuniões corporativas",
          icon: <Presentation className="size-5 shrink-0" />,
          url: "/reunioes-eventos",
        },
      ],
    },
    {
      title: "Quem Somos",
      url: "#",
      items: [
        {
          title: "Missão, Visão e Valores",
          description: "Conheça nossos princípios e objetivos",
          icon: <BookOpen className="size-5 shrink-0" />,
          action: () => scrollToSection('quem-somos'),
        },
        {
          title: "Nossa História",
          description: "A trajetória do Israel Coworking",
          icon: <Building className="size-5 shrink-0" />,
          action: () => scrollToSection('quem-somos'),
        },
        {
          title: "Equipe",
          description: "Conheça nossa equipe especializada",
          icon: <Users className="size-5 shrink-0" />,
          action: () => scrollToSection('quem-somos'),
        },
      ],
    },
    {
      title: "Blog",
      url: "/blog"
    },
    {
      title: "Contato",
      url: "#",
      action: () => scrollToSection('contato')
    },
  ];

  const logo = {
    url: "/",
    src: "/lovable-uploads/d94e1b20-0b59-4780-b234-09c04cff5b01.png",
    alt: "Israel Coworking",
    title: "Israel Coworking",
  };

  const auth = {
    login: { text: "Login", url: "#" },
    signup: { 
      text: "CONTRATE AGORA!", 
      url: "#",
      action: handleContactClick
    },
  };

  return (
    <Navbar1 
      logo={logo}
      menu={menuData}
      auth={auth}
    />
  );
};

export default Header;
