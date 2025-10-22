import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string | number;
  title: string;
  excerpt?: string;
  description: string;
  content: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  tags: string[];
  link: string;
}

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "A importância dos espaços de cowork em Tel Aviv",
    excerpt: "Descubra como os espaços de coworking em Tel Aviv estão revolucionando a forma de trabalhar, criando um ecossistema inovador que conecta profissionais de todo o mundo em um ambiente colaborativo e inspirador.",
    description: "Descubra como os espaços de coworking em Tel Aviv estão revolucionando a forma de trabalhar, criando um ecossistema inovador.",
    content: "Tel Aviv se consolidou como um dos principais hubs de inovação mundial, e os espaços de coworking desempenham um papel fundamental nessa transformação. Esses ambientes não apenas oferecem infraestrutura de qualidade, mas também promovem o networking e a colaboração entre profissionais de diferentes áreas...",
    date: "2024-01-20",
    author: "Equipe Israel Coworking",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    readTime: "8 min",
    tags: ["Tel Aviv", "Inovação", "Networking"],
    link: "/blog/1"
  },
  {
    id: 2,
    title: "Como o Israel Cowork está transformando a produtividade",
    excerpt: "Conheça as estratégias e metodologias que implementamos no Israel Cowork para maximizar a produtividade dos nossos membros, criando um ambiente otimizado para o sucesso profissional.",
    description: "Conheça as estratégias e metodologias que implementamos para maximizar a produtividade dos nossos membros.",
    content: "No Israel Cowork, acreditamos que a produtividade vai além de simplesmente ter um local para trabalhar. Nossa abordagem holística inclui design de espaços pensado para o bem-estar, tecnologia de ponta e uma comunidade engajada...",
    date: "2024-01-15",
    author: "Equipe Israel Coworking", 
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=400&fit=crop",
    readTime: "6 min",
    tags: ["Produtividade", "Metodologia", "Bem-estar"],
    link: "/blog/2"
  },
  {
    id: 3,
    title: "Vantagens de trabalhar em um cowork em Jerusalém",
    excerpt: "Explore as vantagens únicas de trabalhar em Jerusalém, uma cidade que combina história milenar com inovação moderna, oferecendo oportunidades excepcionais para profissionais empreendedores.",
    description: "Explore as vantagens únicas de trabalhar em Jerusalém, uma cidade que combina história milenar com inovação moderna.",
    content: "Jerusalém oferece uma experiência única para profissionais que buscam um ambiente inspirador. A cidade combina a rica herança cultural com um ecossistema empresarial em crescimento, criando oportunidades únicas de networking e desenvolvimento...",
    date: "2024-01-10",
    author: "Equipe Israel Coworking",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=400&fit=crop",
    readTime: "7 min",
    tags: ["Jerusalém", "História", "Empreendedorismo"],
    link: "/blog/3"
  },
  {
    id: 4,
    title: "Tendências do futuro do trabalho em 2024",
    excerpt: "Analise as principais tendências que estão moldando o futuro do trabalho e como os espaços de coworking estão se adaptando para atender às novas demandas dos profissionais modernos.",
    description: "Analise as principais tendências que estão moldando o futuro do trabalho e como os espaços de coworking estão se adaptando.",
    content: "O mundo do trabalho está em constante evolução, e 2024 promete trazer mudanças significativas. Desde a consolidação do trabalho híbrido até o uso de inteligência artificial, explore como essas tendências impactam os espaços de coworking...",
    date: "2024-01-05",
    author: "Equipe Israel Coworking",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=400&fit=crop",
    readTime: "9 min",
    tags: ["Futuro", "Tendências", "Tecnologia"],
    link: "/blog/4"
  }
];

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const dbPosts: BlogPost[] = (data || []).map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt || undefined,
      description: post.description,
      content: post.content,
      date: post.date,
      author: post.author,
      image: post.image,
      readTime: post.read_time,
      tags: post.tags,
      link: `/blog/${post.id}`,
    }));

    return [...dbPosts, ...defaultPosts];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return defaultPosts;
  }
};

export const getBlogPostById = async (id: string): Promise<BlogPost | undefined> => {
  const allPosts = await getAllBlogPosts();
  return allPosts.find(post => post.id.toString() === id);
};

export const getRecentBlogPosts = async (limit: number = 3): Promise<BlogPost[]> => {
  const allPosts = await getAllBlogPosts();
  return allPosts.slice(0, limit);
};
