import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useState, useEffect } from "react";
import { HoverEffect } from "@/components/ui/hover-effect";
import { getRecentBlogPosts, BlogPost } from "@/utils/blogStorage";

const BlogSection = memo(() => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await getRecentBlogPosts(3);
      setBlogPosts(posts);
    };
    loadPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formattedPosts = blogPosts.map(post => ({
    ...post,
    date: formatDate(post.date)
  }));

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

        <HoverEffect items={formattedPosts} className="max-w-7xl mx-auto" />

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
