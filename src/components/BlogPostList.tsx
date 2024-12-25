import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Edit, Trash2, Eye } from 'lucide-react';
import type { BlogPost } from '../types/blog';

interface BlogPostListProps {
  posts: BlogPost[];
  onDelete: (id: string) => void;
  isAdmin?: boolean;
}

export default function BlogPostList({ posts, onDelete, isAdmin = false }: BlogPostListProps) {
  // Remove duplicates based on slug
  const uniquePosts = posts.reduce((acc, current) => {
    const x = acc.find(item => item.slug === current.slug);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, [] as BlogPost[]);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {uniquePosts.map((post) => (
        <article key={`${post.slug}-${post.id}`} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          {post.featuredImage && (
            <Link to={`/blog/${post.slug}`}>
              <img 
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
              />
            </Link>
          )}
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>{format(new Date(post.publishDate), 'dd MMM yyyy', { locale: ptBR })}</span>
              <span>{post.author}</span>
            </div>
            <Link to={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold mb-2 hover:text-orange-500 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {post.tags.map((tag, index) => (
                  <span key={`${post.slug}-${tag}-${index}`} className="text-sm text-purple-600">
                    #{tag}
                  </span>
                ))}
              </div>
              {isAdmin && (
                <div className="flex gap-2">
                  <Link 
                    to={`/admin/blog/edit/${post.id}`}
                    className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </Link>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => onDelete(post.id)}
                    className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}