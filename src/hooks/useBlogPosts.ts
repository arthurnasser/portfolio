import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { BlogPost } from '../types/blog';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchPosts() {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('blog_posts')
        .select()
        .order('publishDate', { ascending: false });

      if (fetchError) throw fetchError;
      setPosts(data || []);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err instanceof Error ? err.message : 'Error fetching posts');
    } finally {
      setLoading(false);
    }
  }

  async function createPost(post: Omit<BlogPost, 'id'>) {
    try {
      const postData = {
        ...post,
        publishDate: new Date().toISOString(),
        modifiedDate: new Date().toISOString(),
        author: 'Admin', // Default author
        status: post.status || 'draft'
      };

      const { data, error } = await supabase
        .from('blog_posts')
        .insert([postData])
        .select();

      if (error) throw error;
      setPosts(prev => [data[0], ...prev]);
      return data[0];
    } catch (err) {
      console.error('Error creating post:', err);
      throw err instanceof Error ? err : new Error('Error creating post');
    }
  }

  async function updatePost(id: string, post: Partial<BlogPost>) {
    try {
      const postData = {
        ...post,
        modifiedDate: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', id)
        .select();

      if (error) throw error;
      setPosts(prev => prev.map(p => p.id === id ? { ...p, ...postData } : p));
      return data[0];
    } catch (err) {
      console.error('Error updating post:', err);
      throw err instanceof Error ? err : new Error('Error updating post');
    }
  }

  async function deletePost(id: string) {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error deleting post:', err);
      throw err instanceof Error ? err : new Error('Error deleting post');
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
    refreshPosts: fetchPosts
  };
}