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

    return dbPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
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
