import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { BlogPost } from "@/utils/blogStorage";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [readTime, setReadTime] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const adminSession = localStorage.getItem("adminSession");
    if (adminSession === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "israelcowork@admin.com" && password === "Admincowork2025") {
      localStorage.setItem("adminSession", "true");
      setIsLoggedIn(true);
      toast({
        title: "Login realizado com sucesso",
        description: "Bem-vindo ao painel administrativo",
      });
    } else {
      toast({
        title: "Erro no login",
        description: "Email ou senha incorretos",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminSession");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const existingPosts = localStorage.getItem("blogPosts");
    const posts: BlogPost[] = existingPosts ? JSON.parse(existingPosts) : [];
    
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title,
      excerpt,
      description,
      content,
      date: new Date().toISOString().split('T')[0],
      author,
      image,
      readTime,
      tags: tags.split(",").map(tag => tag.trim()),
      link: `/blog/${Date.now()}`,
    };
    
    posts.unshift(newPost);
    localStorage.setItem("blogPosts", JSON.stringify(posts));
    
    toast({
      title: "Post publicado com sucesso",
      description: "O novo post já está disponível no blog",
    });
    
    // Limpar formulário
    setTitle("");
    setExcerpt("");
    setDescription("");
    setContent("");
    setAuthor("");
    setImage("");
    setReadTime("");
    setTags("");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="israelcowork@admin.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Senha</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Painel Administrativo</h1>
          <Button onClick={handleLogout} variant="outline">
            Sair
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Novo Post do Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium">Título</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título do post"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Resumo</label>
                <Textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Breve resumo do post"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Descrição (para card)</label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descrição curta para aparecer no card"
                  rows={2}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Conteúdo</label>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Conteúdo completo do post"
                  rows={10}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Autor</label>
                <Input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Nome do autor"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">URL da Imagem</label>
                <Input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/lovable-uploads/..."
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Tempo de Leitura</label>
                <Input
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="5 min"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Tags (separadas por vírgula)</label>
                <Input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Coworking, Produtividade, Networking"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Publicar Post
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
