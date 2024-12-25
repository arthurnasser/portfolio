
// Using localStorage for demo purposes
const LOCAL_STORAGE_KEY = 'blog_posts';

interface LocalStoragePost {
  [key: string]: any;
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  keywords: string[];
  author: string;
  publishDate: string;
  modifiedDate: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
}

// Mock Supabase client with localStorage
export const supabase = {
  from: () => ({
    select: () => ({
      order: ({ ascending = true } = {}) => {
        try {
          const posts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
          return Promise.resolve({ 
            data: posts.sort((a: LocalStoragePost, b: LocalStoragePost) => {
              return ascending ? 
                new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime() :
                new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
            }), 
            error: null 
          });
        } catch (error) {
          console.error('Error reading from localStorage:', error);
          return Promise.resolve({ data: [], error: null });
        }
      }
    }),
    insert: (data: any) => ({
      select: () => {
        try {
          const posts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
          const newPost = { ...data[0], id: Date.now().toString() + Math.random().toString(36).substring(2) };
          posts.push(newPost);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
          return Promise.resolve({ data: [newPost], error: null });
        } catch (error) {
          console.error('Error inserting into localStorage:', error);
          return Promise.resolve({ data: null, error: 'Failed to save post' });
        }
      }
    }),
    update: (data: any) => ({
      eq: (field: string, value: string) => {
        try {
          const posts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
          const index = posts.findIndex((p: LocalStoragePost) => p[field] === value);
          if (index !== -1) {
            posts[index] = { ...posts[index], ...data, modifiedDate: new Date().toISOString() };
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
            return Promise.resolve({ data: [posts[index]], error: null });
          }
          return Promise.resolve({ data: null, error: 'Post not found' });
        } catch (error) {
          console.error('Error updating localStorage:', error);
          return Promise.resolve({ data: null, error: 'Failed to update post' });
        }
      }
    }),
    delete: () => ({
      eq: (field: string, value: string) => {
        try {
          const posts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
          const filteredPosts = posts.filter((p: LocalStoragePost) => p[field] !== value);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredPosts));
          return Promise.resolve({ error: null });
        } catch (error) {
          console.error('Error deleting from localStorage:', error);
          return Promise.resolve({ error: 'Failed to delete post' });
        }
      }
    })
  })
};