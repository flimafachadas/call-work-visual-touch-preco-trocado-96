import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { memo } from "react";
import { HoverEffect } from "@/components/ui/hover-effect";

const BlogSection = memo(() => {
  const blogPosts = [
    {
      id: 1,
      title: "A importância dos espaços de cowork em Tel Aviv",
      description: "Descubra como os espaços de coworking em Tel Aviv estão revolucionando a forma de trabalhar, criando um ecossistema inovador.",
      date: "20 de janeiro de 2024",
      author: "Equipe Israel Coworking",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      readTime: "8 min",
      link: "/blog/1"
    },
    {
      id: 2,
      title: "Como o Israel Cowork está transformando a produtividade",
      description: "Conheça as estratégias e metodologias que implementamos para maximizar a produtividade dos nossos membros.",
      date: "15 de janeiro de 2024", 
      author: "Equipe Israel Coworking",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=250&fit=crop",
      readTime: "6 min",
      link: "/blog/2"
    },
    {
      id: 3,
      title: "Vantagens de trabalhar em um cowork em Jerusalém",
      description: "Explore as vantagens únicas de trabalhar em Jerusalém, uma cidade que combina história milenar com inovação moderna.",
      date: "10 de janeiro de 2024",
      author: "Equipe Israel Coworking", 
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop",
      readTime: "7 min",
      link: "/blog/3"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-brand-blue">Nosso</span>{" "}
            <span className="text-brand-orange">Blog</span>
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            Insights, dicas e tendências do mundo dos negócios e coworking
          </p>
        </div>

        <HoverEffect items={blogPosts} className="max-w-7xl mx-auto" />

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button 
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              Ver todos os artigos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
});

BlogSection.displayName = "BlogSection";

export default BlogSection;
