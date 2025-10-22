-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  author TEXT NOT NULL,
  image TEXT NOT NULL,
  read_time TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Anyone can view blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (true);

-- Create policies for insert (temporarily public for testing)
CREATE POLICY "Anyone can create blog posts" 
ON public.blog_posts 
FOR INSERT 
WITH CHECK (true);

-- Create policies for update (temporarily public for testing)
CREATE POLICY "Anyone can update blog posts" 
ON public.blog_posts 
FOR UPDATE 
USING (true);

-- Create policies for delete (temporarily public for testing)
CREATE POLICY "Anyone can delete blog posts" 
ON public.blog_posts 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_timestamp
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_blog_posts_updated_at();

-- Create index for better query performance
CREATE INDEX idx_blog_posts_date ON public.blog_posts(date DESC);
CREATE INDEX idx_blog_posts_created_at ON public.blog_posts(created_at DESC);