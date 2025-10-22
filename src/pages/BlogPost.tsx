import { memo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getBlogPostById, BlogPost as BlogPostType } from "@/utils/blogStorage";

const BlogPost = memo(() => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostType | undefined>(undefined);

  useEffect(() => {
    const loadPost = async () => {
      if (id) {
        const post = await getBlogPostById(id);
        setPost(post);
      }
    };
    loadPost();
  }, [id]);

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
    return new Date(dateString).toLocaleDateString('pt-BR');
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
