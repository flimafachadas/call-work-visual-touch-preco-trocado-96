import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Pencil, Trash2, Plus, LogOut, Calendar, User, Clock } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  description: string;
  content: string;
  date: string;
  author: string;
  image: string;
  read_time: string;
  tags: string[];
  created_at: string;
}

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
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [deletePost, setDeletePost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const adminSession = localStorage.getItem("adminSession");
    if (adminSession === "true") {
      setIsLoggedIn(true);
      loadPosts();
    }
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error loading posts:", error);
      toast({
        title: "Erro ao carregar posts",
        description: "Não foi possível carregar os posts do blog",
        variant: "destructive",
      });
    }
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingPost) {
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title,
            excerpt: excerpt || null,
            description,
            content,
            author,
            image,
            read_time: readTime,
            tags: tags.split(",").map(tag => tag.trim()),
          })
          .eq('id', editingPost.id);

        if (error) throw error;

        toast({
          title: "Post atualizado com sucesso",
          description: "As alterações foram salvas",
        });
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            title,
            excerpt: excerpt || null,
            description,
            content,
            author,
            image,
            read_time: readTime,
            tags: tags.split(",").map(tag => tag.trim()),
          });

        if (error) throw error;

        toast({
          title: "Post publicado com sucesso",
          description: "O novo post já está disponível no blog",
        });
      }
      
      // Limpar formulário e recarregar posts
      clearForm();
      loadPosts();
      setShowForm(false);
      setEditingPost(null);
    } catch (error) {
      toast({
        title: editingPost ? "Erro ao atualizar post" : "Erro ao publicar post",
        description: "Ocorreu um erro ao salvar o post no banco de dados",
        variant: "destructive",
      });
      console.error("Error saving blog post:", error);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setExcerpt(post.excerpt || "");
    setDescription(post.description);
    setContent(post.content);
    setAuthor(post.author);
    setImage(post.image);
    setReadTime(post.read_time);
    setTags(post.tags.join(", "));
    setShowForm(true);
  };

  const handleDelete = async () => {
    if (!deletePost) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', deletePost.id);

      if (error) throw error;

      toast({
        title: "Post excluído com sucesso",
        description: "O post foi removido do blog",
      });

      loadPosts();
      setDeletePost(null);
    } catch (error) {
      toast({
        title: "Erro ao excluir post",
        description: "Não foi possível excluir o post",
        variant: "destructive",
      });
      console.error("Error deleting post:", error);
    }
  };

  const clearForm = () => {
    setTitle("");
    setExcerpt("");
    setDescription("");
    setContent("");
    setAuthor("");
    setImage("");
    setReadTime("");
    setTags("");
    setEditingPost(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center hero-gradient">
        <Card className="w-full max-w-md shadow-glow border-0">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-4">
              <img 
                src="/lovable-uploads/d94e1b20-0b59-4780-b234-09c04cff5b01.png" 
                alt="Israel Coworking" 
                className="h-16 mx-auto"
              />
            </div>
            <CardTitle className="text-3xl font-bold">
              <span className="text-brand-blue">Painel</span>{" "}
              <span className="text-brand-orange">Administrativo</span>
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Faça login para gerenciar o blog
            </p>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="israelcowork@admin.com"
                  className="border-brand-blue/20 focus:border-brand-blue"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Senha</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="border-brand-blue/20 focus:border-brand-blue"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
              >
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-brand-blue/5 to-brand-orange/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white rounded-lg p-6 shadow-md">
          <div>
            <h1 className="text-4xl font-bold">
              <span className="text-brand-blue">Painel</span>{" "}
              <span className="text-brand-orange">Administrativo</span>
            </h1>
            <p className="text-muted-foreground mt-1">Gerencie os posts do blog</p>
          </div>
          <Button 
            onClick={handleLogout} 
            variant="outline"
            className="border-destructive text-destructive hover:bg-destructive hover:text-white"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="mb-6">
          <Button 
            onClick={() => {
              clearForm();
              setShowForm(!showForm);
            }}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            {showForm ? "Cancelar" : "Novo Post"}
          </Button>
        </div>

        {/* Form */}
        {showForm && (
          <Card className="mb-8 shadow-lg border-brand-blue/20">
            <CardHeader className="bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
              <CardTitle className="text-2xl">
                {editingPost ? "Editar Post" : "Novo Post do Blog"}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Título</label>
                    <Input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Título do post"
                      className="border-brand-blue/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Autor</label>
                    <Input
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Nome do autor"
                      className="border-brand-blue/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Resumo</label>
                  <Textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Breve resumo do post"
                    rows={3}
                    className="border-brand-blue/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Descrição (para card)</label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrição curta para aparecer no card"
                    rows={2}
                    className="border-brand-blue/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Conteúdo</label>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Conteúdo completo do post"
                    rows={10}
                    className="border-brand-blue/20"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">URL da Imagem</label>
                    <Input
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="/lovable-uploads/..."
                      className="border-brand-blue/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Tempo de Leitura</label>
                    <Input
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                      placeholder="5 min"
                      className="border-brand-blue/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tags (separadas por vírgula)</label>
                  <Input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Coworking, Produtividade, Networking"
                    className="border-brand-blue/20"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-brand-blue hover:bg-brand-blue/90 text-white"
                  >
                    {editingPost ? "Atualizar Post" : "Publicar Post"}
                  </Button>
                  {editingPost && (
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => {
                        clearForm();
                        setShowForm(false);
                      }}
                    >
                      Cancelar
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Posts List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Posts Publicados ({posts.length})
          </h2>
          
          {posts.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Nenhum post encontrado. Crie seu primeiro post!</p>
            </Card>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-blue">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Post Image */}
                    <div className="md:w-48 h-32 flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Post Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-dark mb-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-3">
                        {post.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.read_time}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex md:flex-col gap-2">
                      <Button
                        onClick={() => handleEdit(post)}
                        variant="outline"
                        size="sm"
                        className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                      >
                        <Pencil className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:inline">Editar</span>
                      </Button>
                      <Button
                        onClick={() => setDeletePost(post)}
                        variant="outline"
                        size="sm"
                        className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                      >
                        <Trash2 className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:inline">Excluir</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={!!deletePost} onOpenChange={() => setDeletePost(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
              <AlertDialogDescription>
                Tem certeza que deseja excluir o post "{deletePost?.title}"? 
                Esta ação não pode ser desfeita.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                className="bg-destructive hover:bg-destructive/90"
              >
                Excluir
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Admin;
