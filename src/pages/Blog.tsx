
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User, ArrowLeft } from "lucide-react";
import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getAllBlogPosts, BlogPost } from "@/utils/blogStorage";

const Blog = memo(() => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await getAllBlogPosts();
      setBlogPosts(posts);
    };
    loadPosts();
  }, []);

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
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center text-brand-blue hover:text-brand-orange transition-colors mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao início
              </Link>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="text-brand-blue">Blog</span>{" "}
                <span className="text-brand-orange">Israel Cowork</span>
              </h1>
              <p className="text-xl text-brand-dark/70 mb-8">
                Insights, tendências e conhecimentos sobre o mundo do coworking e inovação
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.readTime}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-sm text-brand-dark/60 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <h2 className="font-bold text-brand-dark mb-3 text-xl leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-brand-dark/70 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button 
                        variant="ghost" 
                        className="text-brand-blue hover:text-brand-blue hover:bg-blue-50 p-0 h-auto font-medium"
                      >
                        Ler artigo completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-brand-blue/5 to-brand-pink/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-brand-blue">Pronto para</span>{" "}
              <span className="text-brand-orange">começar?</span>
            </h2>
            <p className="text-brand-dark/70 mb-8 max-w-2xl mx-auto">
              Junte-se à nossa comunidade e descubra como o Israel Cowork pode transformar sua forma de trabalhar.
            </p>
            <Button 
              onClick={handleContactClick}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg"
            >
              Entre em contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
});

Blog.displayName = "Blog";

export default Blog;
