
import { memo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const BlogPost = memo(() => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "A importância dos espaços de cowork em Tel Aviv",
      excerpt: "Descubra como os espaços de coworking em Tel Aviv estão revolucionando a forma de trabalhar, criando um ecossistema inovador que conecta profissionais de todo o mundo em um ambiente colaborativo e inspirador.",
      content: `Tel Aviv se consolidou como um dos principais hubs de inovação mundial, e os espaços de coworking desempenham um papel fundamental nessa transformação. Esses ambientes não apenas oferecem infraestrutura de qualidade, mas também promovem o networking e a colaboração entre profissionais de diferentes áreas.

      A cidade conhecida como "Silicon Wadi" tornou-se um ímã para startups, freelancers e empresários de todo o mundo. Os espaços de coworking em Tel Aviv oferecem muito mais do que apenas uma mesa e conexão à internet - eles criam comunidades vibrantes onde ideias se transformam em negócios revolucionários.

      No Israel Cowork, oferecemos um ambiente que reflete essa energia inovadora de Tel Aviv. Nossos espaços são projetados para maximizar a produtividade e fomentar conexões significativas entre nossos membros. Com salas de reunião modernas, áreas de descanso confortáveis e tecnologia de ponta, criamos o ambiente perfeito para o sucesso profissional.

      A localização estratégica em Tel Aviv nos permite estar no coração do ecossistema de inovação israelense, oferecendo aos nossos membros acesso direto às oportunidades de negócios e networking que só esta cidade única pode proporcionar.`,
      date: "2024-01-20",
      author: "Equipe Israel Coworking",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      readTime: "8 min",
      tags: ["Tel Aviv", "Inovação", "Networking"]
    },
    {
      id: 2,
      title: "Como o Israel Cowork está transformando a produtividade",
      excerpt: "Conheça as estratégias e metodologias que implementamos no Israel Cowork para maximizar a produtividade dos nossos membros, criando um ambiente otimizado para o sucesso profissional.",
      content: `No Israel Cowork, acreditamos que a produtividade vai além de simplesmente ter um local para trabalhar. Nossa abordagem holística inclui design de espaços pensado para o bem-estar, tecnologia de ponta e uma comunidade engajada que inspira e motiva nossos membros todos os dias.

      Implementamos metodologias comprovadas de gestão de tempo e produtividade, oferecendo workshops regulares sobre técnicas como Pomodoro, Getting Things Done (GTD) e metodologias ágeis. Nossos membros têm acesso a ferramentas e recursos que os ajudam a otimizar seu fluxo de trabalho.

      O ambiente físico também desempenha um papel crucial. Nossas salas são projetadas com base em princípios de neurociência e psicologia ambiental, utilizando iluminação natural, plantas, cores que estimulam a criatividade e espaços que permitem tanto o trabalho focado quanto a colaboração.

      Além disso, nossa comunidade ativa oferece oportunidades de networking, mentoria e troca de conhecimentos que enriquecem a experiência profissional de todos os membros. O Israel Cowork não é apenas um local de trabalho - é um ecossistema completo para o crescimento profissional.`,
      date: "2024-01-15",
      author: "Equipe Israel Coworking", 
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=400&fit=crop",
      readTime: "6 min",
      tags: ["Produtividade", "Metodologia", "Bem-estar"]
    },
    {
      id: 3,
      title: "Vantagens de trabalhar em um cowork em Jerusalém",
      excerpt: "Explore as vantagens únicas de trabalhar em Jerusalém, uma cidade que combina história milenar com inovação moderna, oferecendo oportunidades excepcionais para profissionais empreendedores.",
      content: `Jerusalém oferece uma experiência única para profissionais que buscam um ambiente inspirador. A cidade combina a rica herança cultural com um ecossistema empresarial em crescimento, criando oportunidades únicas de networking e desenvolvimento profissional.

      Trabalhar em Jerusalém significa estar imerso em uma atmosfera de história e tradição que inspire criatividade e inovação. A cidade sagrada para três grandes religiões mundiais oferece uma perspectiva única sobre negócios, relacionamentos e propósito profissional.

      No Israel Cowork Jerusalém, aproveitamos essa energia especial da cidade para criar um ambiente de trabalho que combina o melhor da tradição com a inovação moderna. Nossos espaços refletem a beleza arquitetônica da cidade, incorporando elementos que honram sua rica história.

      Os profissionais que escolhem trabalhar em Jerusalém têm acesso a uma rede diversificada de contatos, desde empresários locais até visitantes internacionais que vêm à cidade por negócios ou turismo. Esta diversidade cultural e profissional cria oportunidades únicas de crescimento e expansão de negócios.

      Além disso, Jerusalém oferece um custo de vida mais acessível comparado a Tel Aviv, sem abrir mão da qualidade de vida e das oportunidades profissionais. É o local perfeito para profissionais que buscam equilíbrio entre crescimento profissional e qualidade de vida.`,
      date: "2024-01-10",
      author: "Equipe Israel Coworking",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=400&fit=crop",
      readTime: "7 min",
      tags: ["Jerusalém", "História", "Empreendedorismo"]
    },
    {
      id: 4,
      title: "Tendências do futuro do trabalho em 2024",
      excerpt: "Analise as principais tendências que estão moldando o futuro do trabalho e como os espaços de coworking estão se adaptando para atender às novas demandas dos profissionais modernos.",
      content: `O mundo do trabalho está em constante evolução, e 2024 promete trazer mudanças significativas. Desde a consolidação do trabalho híbrido até o uso de inteligência artificial, explore como essas tendências impactam os espaços de coworking e como o Israel Cowork está se preparando para o futuro.

      Uma das principais tendências é a flexibilidade total no trabalho. Os profissionais modernos buscam espaços que se adaptem às suas necessidades específicas, seja para trabalho individual, colaborativo ou híbrido. No Israel Cowork, oferecemos soluções flexíveis que atendem a todas essas demandas.

      A tecnologia também está revolucionando os espaços de trabalho. Inteligência artificial, realidade virtual e ferramentas de colaboração digital estão se tornando essenciais. Nossos espaços estão equipados com a mais moderna tecnologia para garantir que nossos membros tenham acesso às ferramentas necessárias para se manterem competitivos.

      Outra tendência importante é o foco no bem-estar e sustentabilidade. Os profissionais modernos valorizam espaços que promovem saúde mental, física e que tenham práticas sustentáveis. O Israel Cowork incorpora essas preocupações em todos os aspectos de nossos espaços.

      O futuro do trabalho também é mais global e conectado. Nossos espaços facilitam conexões internacionais, oferecendo aos membros oportunidades de colaborar com profissionais de todo o mundo, aproveitando a posição estratégica de Israel como ponte entre Europa, Ásia e África.`,
      date: "2024-01-05",
      author: "Equipe Israel Coworking",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=400&fit=crop",
      readTime: "9 min",
      tags: ["Futuro", "Tendências", "Tecnologia"]
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || ''));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
            <Link to="/blog">
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleContactClick = () => {
    window.open('https://wa.me/5585988338969?text=Olá! Gostaria de saber mais sobre o Israel Coworking.', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center text-brand-blue hover:text-brand-orange transition-colors mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-brand-dark leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center text-brand-dark/60 mb-8">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-4">{formatDate(post.date)}</span>
              <User className="h-5 w-5 mr-2" />
              <span className="mr-4">{post.author}</span>
              <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm">
                {post.readTime}
              </span>
            </div>

            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-brand-dark/80 leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-brand-blue">Interessado em</span>{" "}
                <span className="text-brand-orange">nossos serviços?</span>
              </h3>
              <p className="text-brand-dark/70 mb-6">
                Entre em contato conosco e descubra como o Israel Cowork pode transformar sua forma de trabalhar.
              </p>
              <Button 
                onClick={handleContactClick}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
});

BlogPost.displayName = "BlogPost";

export default BlogPost;
