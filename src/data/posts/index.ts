import { marketingDigitalPost } from './marketing-digital';
import { seoPost } from './seo';
import { crmPost } from './crm';
import { websitePost } from './website';

export const blogPosts = [
  marketingDigitalPost,
  seoPost,
  crmPost,
  websitePost
];

// Function to generate a unique ID
const generateUniqueId = () => {
  return Date.now().toString() + Math.random().toString(36).substring(2);
};

// Initialize localStorage with blog posts
export const initializeBlogPosts = () => {
  const existingPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
  
  // Only add posts that don't already exist (based on slug)
  blogPosts.forEach(post => {
    if (!existingPosts.some((p: { slug: string }) => p.slug === post.slug)) {
      existingPosts.push({ 
        ...post, 
        id: generateUniqueId(),
        publishDate: new Date().toISOString(),
        modifiedDate: new Date().toISOString()
      });
    }
  });

  localStorage.setItem('blog_posts', JSON.stringify(existingPosts));
};

// Initialize posts when this module is imported
initializeBlogPosts();